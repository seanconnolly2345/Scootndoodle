import firebase from 'firebase'
const firebaseConfig = {
    apiKey: "AIzaSyDOYYgK8A5dyNvoRPTr1zDJVlX9YDp0N5U",
    authDomain: "scribble-test-ac135.firebaseapp.com",
    databaseURL: "https://scribble-test-ac135.firebaseio.com",
    projectId: "scribble-test-ac135",
    storageBucket: "scribble-test-ac135.appspot.com",
    messagingSenderId: "580091600511",
    appId: "1:580091600511:web:e339c34ed57bc49a13294a",
    measurementId: "G-9Z0VCQF8RK"
  };
  firebase.initializeApp(firebaseConfig);
  export default firebase;