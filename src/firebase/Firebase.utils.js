import firebase from 'firebase/app'

import 'firebase/auth'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: 'AIzaSyDQ_IAj_1eP2r38CPSHjlUR5vN0KGsVK14',
    authDomain: 'crown-e-commerce-45cfe.firebaseapp.com',
    projectId: 'crown-e-commerce-45cfe',
    storageBucket: 'crown-e-commerce-45cfe.appspot.com',
    messagingSenderId: '29655447216',
    appId: '1:29655447216:web:f2636dc8e319f8bb53ed75',
    measurementId: 'G-VYDGQHTJEX',
}

firebase.initializeApp(firebaseConfig)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

// Sign in with google
const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ 'prompt': 'select_account', 'login_hint': 'user@example.com' })
export const signInWithGoogle = () => auth.signInWithPopup(provider)

// Store in firrstore
export const  getUserDataFromDB = async (userData, additionalInfo) => {
    if(!userData) return

    const userRef = firestore.doc(`user/${userData.uid}`)

    const snapShot = await userRef.get()

    if(!snapShot.exists) {
        const { displayName, email, photoURL } = userData
        const createdAt = new Date()
        await
         userRef.set({
            displayName,
            email,
            photoURL,
            createdAt,
            ...additionalInfo
        })
    }
    return userRef
}

export default firebase