const functions = require('firebase-functions');

const app = require('express')();

const FBAuth = require('./util/fbAuth');

const { signup, login } = require('./handlers/users');
const { getAllProducts, postOneProduct } = require('./handlers/products');


app.get('/products', getAllProducts);
app.post('/product', FBAuth, postOneProduct);
// users routes
app.post('/signup', signup);
app.post('/login', login);


exports.api = functions.https.onRequest(app);