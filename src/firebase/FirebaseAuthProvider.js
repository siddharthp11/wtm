// import 'firebase/compat/auth'
import { createContext, useState, useEffect } from 'react'
import firebaseConfig from "../../keys/firebase_key.json"
import firebase from 'firebase/compat'

const AuthContext = createContext()

// defines and returns AuthContext  
const AuthProvider = ({ children }) => {
    const [authExists, setAuthExists] = useState(false)
    const [user, setUser] = useState(null)

    useEffect(() => {
        if (!firebase.apps.length) {
            firebase.initializeApp(firebaseConfig)
        }
        //firebase auth returns an unsubscribe or cleanup function 
        const unsubscribeFromAuth = firebase.auth().onAuthStateChanged((user) => {
            setUser(user)
        });

        setAuthExists(true)

        //return the cleanup function, which is called when the component is unmounted
        return () => unsubscribeFromAuth()
    })

    const authSignIn = (email, password) => new Promise((resolve, reject) => {
        if (!authExists) {
            reject('Auth not intitialised.');
            return;
        }
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then((credentials) => resolve(true))
            .catch((error) => reject(error.message));
    });

    const authSignUp = (email, password) => new Promise((resolve, reject) => {
        if (!authExists) {
            reject('Auth not intitialised.');
            return;
        }
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then((credentials) => resolve(true))
            .catch((error) => reject(error.message));
    });

    return (

        //returns an authcontext provider with the user and login function
        <AuthContext.Provider value={{ user, authSignIn, authSignUp }} >
            {children}
        </AuthContext.Provider>
    )
}

export { AuthContext, AuthProvider }
