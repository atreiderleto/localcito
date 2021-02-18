import firebase from 'firebase/app';

const  firebaseConfig = {
    apiKey: "AIzaSyAFnK8_fLkKWiXaOmAK_ej82_b60rSXO1M",
    authDomain: "localcito-98fdc.firebaseapp.com",
    projectId: "localcito-98fdc",
    storageBucket: "localcito-98fdc.appspot.com",
    messagingSenderId: "988658357623",
    appId: "1:988658357623:web:371a504c62332edcabfd72",
    measurementId: "G-HV4LKKGC7X"
  };


const fire = firebase.initializeApp(firebaseConfig);
export default fire;