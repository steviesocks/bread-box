import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import { stripClassFromRecipes } from '../utils/utils';
import { selectCookbookRecipes } from '../redux/cookbook/cookbook.selectors';

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

export const getCookbookRef = async (userAuth, recipesArray) => {
    if (!userAuth) return;

    const cookbookRef = firestore.doc(`cookbooks/${userAuth.uid}`);

    const snapShot = await cookbookRef.get()

    if (!snapShot.exists) {
        const recipes = stripClassFromRecipes(recipesArray)
        console.log("firebase utils recipes", recipes)

        try {
            await cookbookRef.set({
                recipes
            })
        } catch(error) {
            console.log("error creating cookbook", error)
        }
    }

    return cookbookRef;
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