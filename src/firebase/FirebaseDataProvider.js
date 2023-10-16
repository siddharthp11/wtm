import { createContext, useEffect, useState } from "react";
import firebase from 'firebase/compat'
import firebaseConfig from "../../keys/firebase_key.json"
import { ActivityIndicator } from "react-native";
import Event from "../data-models/event";

const DataContext = createContext()
const DataProvider = ({ children }) => {
    const [firestoreExists, setFirestoreExists] = useState(false)
    useEffect(() => {

        if (!firebase.apps.length) {
            firebase.initializeApp(firebaseConfig)
        }
        setFirestoreExists(true)
    })

    const getEvents = () => new Promise((resolve, reject) => {
        if (!firestoreExists) {
            reject('Firestore not initialised')
        }
        firebase.firestore().collection('GoodEvents').get()
            .then((snapshot) => {
                snapshot.forEach((doc) => {
                    console.log(Event.fromFirestore(doc))
                })
                resolve(true)
            })
            .catch((error) => {
                reject(error)
            })
    })

    if (!firestoreExists) {
        return (<ActivityIndicator></ActivityIndicator>)
    }

    return (
        <DataContext.Provider value={{ getEvents }}>
            {children}
        </DataContext.Provider>
    )
}

export { DataContext, DataProvider }