import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyC4lkcCEyMi52jdsBDpZKbiINHAMtFwQMY",
    authDomain: "tinder-clone-fa9be.firebaseapp.com",
    projectId: "tinder-clone-fa9be",
    storageBucket: "tinder-clone-fa9be.appspot.com",
    messagingSenderId: "128309607385",
    appId: "1:128309607385:web:e66f543b60edf1fd1337c8",
    measurementId: "G-ZVC0QV2E5H"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const database = firebaseApp.firestore();

export default database;