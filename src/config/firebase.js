/* eslint-disable no-restricted-globals */
import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: 'AIzaSyCLTFKZT0D2t8UuejotDrARyowQ7DAP6oU',
    authDomain: 'guidepro-1816f.firebaseapp.com',
    projectId: 'guidepro-1816f',
    storageBucket: 'guidepro-1816f.appspot.com',
    messagingSenderId: '51910174014',
    appId: '1:51910174014:web:24c91898e4f38bf353786f',
    measurementId: 'G-P1DYSS49KV',
};

const env = 'prod'; //dev/ prod
let firebaseApp;
let db;

if (env === 'prod') {
    firebaseApp = firebase.initializeApp(firebaseConfig);
    db = firebaseApp.firestore();
} else if (env === 'dev') {
    firebase.initializeApp(firebaseConfig);
    db = firebase.firestore();
    if (location.hostname === 'localhost') {
        db.useEmulator('localhost', 8080);
    }
}

export { db };
