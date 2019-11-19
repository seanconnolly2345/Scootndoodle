const functions = require('firebase-functions');

const app = require('express')();

const FBAuth = require('./util/fbAuth');

const { signup, login } = require('./handlers/users');

// Scream routes


// users routes
app.post('/signup', signup);
app.post('/login', login);

exports.api = functions.https.onRequest(app);