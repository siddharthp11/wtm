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

    // all the following functions return promises, not objects or functions. 
    // there may be an issue with calls being made before firestore is initialsed.

    const getEvents = () =>
        firebase.firestore().collection('GoodEvents').get()
            .then((snapshot) => snapshot.docs.map(doc => Event.fromFirestore(doc)))  //this function can be passed in by the caller, along with the path to collection. 


    const addEvent = (data) =>
        firebase.firestore().collection('GoodEvents').add(data.toFirestore())


    if (!firestoreExists) {
        return (<ActivityIndicator></ActivityIndicator>)
    }

    return (
        <DataContext.Provider value={{ addEvent, getEvents }}>
            {children}
        </DataContext.Provider>
    )
}

export { DataContext, DataProvider }