import firebase from 'firebase/app';

import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyDQ_IAj_1eP2r38CPSHjlUR5vN0KGsVK14',
  authDomain: 'crown-e-commerce-45cfe.firebaseapp.com',
  projectId: 'crown-e-commerce-45cfe',
  storageBucket: 'crown-e-commerce-45cfe.appspot.com',
  messagingSenderId: '29655447216',
  appId: '1:29655447216:web:f2636dc8e319f8bb53ed75',
  measurementId: 'G-VYDGQHTJEX',
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
