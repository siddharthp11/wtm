import 'firebase/compat/auth'
import { createContext, useState, useEffect } from 'react'
import firebaseConfig from './config'
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

    const login = async (email, password) => {
        if (!authExists) {
            return false;
        }
        try {
            const credentials = await firebase.auth().signInWithEmailAndPassword(email, password);
            return true;
        } catch (error) {
            return false
        }
    };

    return (

        //returns an authcontext provider with the user and login function
        <AuthContext.Provider value={{ user, login }} >
            {children}
        </AuthContext.Provider>
    )
}

export { AuthContext, AuthProvider }
