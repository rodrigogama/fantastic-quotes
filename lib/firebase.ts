import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyBH0joGMkw1rtW1un2o5WwonuFL1aJlVnA',
  authDomain: 'fantastic-quotes-64b9b.firebaseapp.com',
  projectId: 'fantastic-quotes-64b9b',
  storageBucket: 'fantastic-quotes-64b9b.appspot.com',
  messagingSenderId: '284007093132',
  appId: '1:284007093132:web:581c2b13ef1f77f5487ca9',
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export const firestore = firebase.firestore();
export const storage = firebase.storage();
