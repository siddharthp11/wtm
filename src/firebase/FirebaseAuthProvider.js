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
            .catch((error) => reject(error));
    });

    const authSignUp = (email, password) => new Promise((resolve, reject) => {
        if (!authExists) {
            reject('Auth not intitialised.');
            return;
        }
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then((credentials) => {

                // this should be served by the database? 
                firebase.firestore().collection('Users')
                    .doc(credentials.user.uid)
                    .set({
                        email: credentials.user.email,
                        uid: credentials.user.uid,
                        friends: []
                    })
                    .then(resolve(true))
                    .catch(error => reject(error))
            })
            .catch((error) => reject(error));
    });


    const signOut = () => new Promise((resolve, reject) => {
        firebase.auth().signOut()
            .then(() => {
                setUser(null)
                resolve(true)
            })
            .catch((error) => reject(error))
    })

    //this query sometimes crashes firebase, probably due to rate limit. Maybe local cacheing will help, esp for the event screen. 
    const searchUsers = (query) => new Promise((resolve, reject) => {
        const queryRef = firebase.firestore().collection('Users')
            .where('email', '>=', query)
            .where('email', '<=', query + '\uf8ff')

        queryRef.get()
            .then((userMatches) => {
                userMatches = userMatches.docs.map((doc) => ({ uid: doc.id, email: doc.data().email }))
                resolve(userMatches)
            })
            .catch((error) => reject(error))
            .finally(() => console.log('attempted search query.'))
    })

    return (
        //returns an authcontext provider with the user and login function
        <AuthContext.Provider value={{ user, searchUsers, authSignIn, authSignUp, signOut }} >
            {children}
        </AuthContext.Provider>
    )
}

export { AuthContext, AuthProvider }
