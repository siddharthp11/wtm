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

                //this function can be passed in by the caller, along with the path to collection. 
                let eventList = [];
                snapshot.forEach((doc) => {
                    eventList.push(Event.fromFirestore(doc))
                })
                resolve(eventList)
            })
            .catch((error) => {
                reject(error)
            })
    })

    const addEvent = (data) => new Promise((resolve, reject) => {
        if (!firestoreExists) {
            reject('Firestore not initialised')
        }
        firebase.firestore().collection('GoodEvents')
            .add(data.toFirestore())
            .then(() => resolve(true))
            .catch(error => reject(error))
    })

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