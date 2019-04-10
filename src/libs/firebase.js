import firebase from 'firebase';

// Initialize Firebase
var config = {
    apiKey: "AIzaSyDbdsGrRftunnc5eKtwG69wCgQ3TylfWWw",
    authDomain: "steamlab-a8ccf.firebaseapp.com",
    databaseURL: "https://steamlab-a8ccf.firebaseio.com",
    projectId: "steamlab-a8ccf",
    storageBucket: "steamlab-a8ccf.appspot.com",
    messagingSenderId: "769268300509"
};

export function initFirebase()
{
    firebase.initializeApp(config);
}
