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
const isEmail= (email) => {
    const regEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(email.match(regEx)) return true;
    else return false;
}

const isEmpty = (string) => {
    if(string.trim() === '') return true;
    else return false;
}


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
else if(!isEmail(newUser.email)){
    errors.email = 'Must be a valid email address'
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
        passsword: req.body.password
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
    return res.status(500).json({error: err.code});
    });
});

 exports.api = functions.https.onRequest(app);
