// import 'firebase/compat/auth'
import { createContext, useState, useEffect } from 'react'
import firebaseConfig from "../../keys/firebase_key.json"
import firebase from 'firebase/compat'

const AuthContext = createContext()
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

    // all the following functions return promises, not objects or functions. 
    // there may be an issue with calls being made before auth is initialsed.
    const authSignIn = (email, password) =>
        firebase.auth().signInWithEmailAndPassword(email, password)

    const authSignUp = (email, password) =>
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then((credentials) => {
                firebase.firestore().collection('Users') // this should be served by the database? 
                    .doc(credentials.user.uid)
                    .set({
                        email: credentials.user.email,
                        uid: credentials.user.uid,
                        friends: []
                    })
            })

    const signOut = () =>
        firebase.auth().signOut().then(() => setUser(null))

    const searchUsers = (query) =>
        firebase.firestore().collection('Users').get()    // .where('email', '>=', query).where('email', '<=', query + '\uf8ff'): this query sometimes crashes firebase, probably due to rate limit. Maybe local cacheing will help, esp for the event screen. 
            .then(userMatches => userMatches.docs.map(doc => ({ uid: doc.id, email: doc.data().email })))

    //returns an authcontext provider with the user and login function
    return (<AuthContext.Provider value={{ user, searchUsers, authSignIn, authSignUp, signOut }} >
        {children}
    </AuthContext.Provider>)
}

export { AuthContext, AuthProvider }
