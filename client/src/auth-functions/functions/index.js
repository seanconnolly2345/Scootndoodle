const functions = require('firebase-functions');
const app = require('express')();
const admin = require("firebase-admin");

const serviceAccount = require("./serviceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://scribble-test-ac135.firebaseio.com"
});

const config = {
    
    apiKey: "AIzaSyDOYYgK8A5dyNvoRPTr1zDJVlX9YDp0N5U",
    authDomain: "scribble-test-ac135.firebaseapp.com",
    databaseURL: "https://scribble-test-ac135.firebaseio.com",
    projectId: "scribble-test-ac135",
    storageBucket: "scribble-test-ac135.appspot.com",
    messagingSenderId: "580091600511",
    appId: "1:580091600511:web:e339c34ed57bc49a13294a",
    measurementId: "G-9Z0VCQF8RK"
      
};
const firebase = require('firebase');
firebase.initializeApp(config);

const db = admin.firestore();



const isEmpty = (string) => {
    if(string.trim() === '') return true;
    else return false;
}


const fireAuth = (req, res, next) => {
    let idToken;
    if(req.headers.authorization && req.headers.authorization.startsWith('Bearer ')){
        idToken = req.headers.authorization.split('Bearer ')[1];
    } else {
        console.error('No token found');
        return res.status(403).json({ error: 'Unauthorized'});
    }
    admin.auth().verifyIdToken(idToken)
    .then(decodedToken => {
        req.user = decodedToken;
        return db.collection('users')
        .where('userId', '==', req.user.uid)
        .limit(1)
        .get();
    })
    .then(data => {
        req.user.handle = data.docs[0].data().handle;
        return next();
    })
    .catch(err => {
        console.error('Error while verifying token');
        return res.status(403).json(err);
    })
}



app.post('/product', fireAuth , (req, res) => {
    const newProduct = {
        description: req.body.description,
        price: req.body.price,
        createdAt: new Date().toISOString(),
        userHandle: req.user.handle
    };
    admin.firestore()
    .collection('products')
    .add(newProduct)
    // eslint-disable-next-line promise/always-return
    .then(doc => {
        res.json({message: `document ${doc.id} created successfully`});
    })
    .catch((err) => {
        res.status(500).json({ error:' Something went wrong'});
        console.error(err);
    });

});



app.get('/products' , fireAuth ,(req,res) => {
    admin.firestore()
    .collection('products')
    .get()
    .then((data) => {
        let products = [];
        data.forEach((doc) => {
            products.push({
                productId: doc.id,
                description: doc.data().description,
                price: doc.data().price,
                createdAt: doc.data().createdAt,
                userHandle: doc.data().userHandle
                
            });
        });
        return res.json(products);
    })
    .catch((err) => console.error(err));
});




app.post('/signup', (req, res) => {
    const newUser = {
        email: req.body.email,
        password: req.body.password,
        confirmPassword: req.body.confirmPassword,
        handle: req.body.handle
    };
let errors = {};

if(isEmpty(newUser.email)){
    errors.email = 'Must not be empty'
}

if(isEmpty(newUser.password)) errors.password = 'Must not be empty'

if(newUser.password !== newUser.confirmPassword) errors.confirmPassword = 'Passwords must match'

if(isEmpty(newUser.handle)) errors.handle = 'Must not be empty'

if(Object.keys(errors).length > 0) return res.status(400).json(errors);



let token, userId; 
db.doc(`/users/${newUser.handle}`).get()
.then(doc => {
    if(doc.exists){
        return res.status(400).json({handle: 'this handle is already taken'});

    } else {
        return firebase
        .auth()
        .createUserWithEmailAndPassword(newUser.email, newUser.password);
    }
})
.then((data)=> {
    userId = data.user.uid;
    return data.user.getIdToken();

})
.then((idToken) => {
    token = idToken;
    const userCredentials = {
        handle: newUser.handle,
        email: newUser.email,
        createdAt: new Date().toISOString(),
        userId
    };
    return db.doc(`/users/${newUser.handle}`).set(userCredentials);
})
.then(() =>{
    return res.status(201).json({token});
})

.catch(err =>{
    console.error(err);
    if(err.code === 'auth/email-already-in-use'){
        return res.status(400).json({emial: 'Email is already in use'});
    } else {
    return res.status(500).json({error: err.code});
    }
    }); 
});

app.post('/login', (req, res) => {
    const user = {
        email: req.body.email,
        password: req.body.password
    };

    let errors = {};

    if(isEmpty(user.email)) errors.email = 'Must not be empty';

    if(isEmpty(user.password)) errors.password = 'Must not be empty';

    if(Object.keys(errors).length > 0) return res.status(400).json(errors);


firebase
.auth()
.signInWithEmailAndPassword(user.email, user.password)
.then((data) => {
    return data.user.getIdToken();
})
.then((token) =>{
    return res.json({token});
})
.catch((err) => {
    console.error(err);
    if(err.code === 'auth/wrong-password'){
        return res.status(403).json({general: 'Wrong password'});
    } else return res.status(500).json({error: err.code});
    });
});

 exports.api = functions.https.onRequest(app);
