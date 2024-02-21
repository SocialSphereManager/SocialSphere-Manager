// Import the functions you need from the SDKs you need
import {initializeApp} from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyCkAX8Ptf60XAZ73h589vPBucw90sgJ2F8',
  authDomain: 'socialsphere-manager.firebaseapp.com',
  projectId: 'socialsphere-manager',
  storageBucket: 'socialsphere-manager.appspot.com',
  messagingSenderId: '636959778028',
  appId: '1:636959778028:web:b5aa6a05dab2e916d771c9',
  measurementId: 'G-L1R3HC2M3H',
};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);
export default firebase;
