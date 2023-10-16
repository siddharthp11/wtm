import { db } from "./config";
import Event from "../data-models/event";

class FirebaseAPI {
  // Method to add an event
  static async addEvent(event) {
    try {
      await db.collection("GoodEvents").add(event.toFirestore());
      console.log("Event added successfully");
    } catch (error) {
      console.log("Error adding event:", error);
    }
  }

  // Method to read all events
  static async readEvents() {
    let eventList = [];
    try {
      const querySnapshot = await db.collection("GoodEvents").get();
      querySnapshot.forEach((doc) => {
        // const event = new Event(doc.id, doc.data()["name"]);
        const event = Event.fromFirestore(doc);
        eventList.push(event);
      });

      const sortedEventList = eventList.sort((a, b) => {
        if (a.name < b.name) {
          return -1; // a comes before b
        }
        if (a.name > b.name) {
          return 1; // a comes after b
        }
        return 0; // a and b are equal
      });
      return sortedEventList;
    } catch (error) {
      console.log("Error reading events:", error);
      return [];
    }
  }
}
export default FirebaseAPI;
