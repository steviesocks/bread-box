import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import { stripClassFromRecipes } from '../utils/utils';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDAoAEZHEs4kT6LJCh0sFxtPYVfnRISPwo",
    authDomain: "bread-box-db.firebaseapp.com",
    databaseURL: "https://bread-box-db.firebaseio.com",
    projectId: "bread-box-db",
    storageBucket: "bread-box-db.appspot.com",
    messagingSenderId: "244484615951",
    appId: "1:244484615951:web:02e18c67b4369c0e08187a"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


export const getUserRef = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get()

    if (!snapShot.exists) {
        const { displayName, email } = userAuth;

        try {
            await userRef.set({
                displayName,
                email,
                createdAt: new Date(),
                ...additionalData
            })
        } catch(error) {
            console.log("error creating user", error)
        }
    }

    return userRef;
}

export const getCookbookRef = async (userId, recipesArray) => {
    if (!userId) return;

    const cookbookRef = firestore.collection("cookbooks").where("userId","==", userId);

    const snapShot = await cookbookRef.get()

    if (snapShot.empty) {
        const recipes = stripClassFromRecipes(recipesArray)
        const cookbookDocRef = firestore.collection("cookbooks").doc()
        try {
            await cookbookDocRef.set({
                userId,
                recipes
            })
            return cookbookDocRef
        } catch(error) {
            console.log("error creating cookbook", error)
        }
    } else {
        return snapShot.docs[0].ref;
    }
}

export const getCurrentUser = () => {
    return new Promise((resolve, reject) => {
      const unsubscribe = auth.onAuthStateChanged(userAuth => {
        unsubscribe();
        resolve(userAuth);
      }, reject)
    });
}

// export const addCookbookToFirebase = (cookbook) => {
//     const { recipes } = store.getState().cookbook
//     firestore.collection("cookbooks").doc("YFeCeRaEZ2fuuNaYrHouPrnNvJV2").set({recipes})
// }

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export default firebase;