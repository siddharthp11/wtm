import { db } from './config';
import Event from '../data-models/event-model';

class FirebaseAPI {
  // Method to add an event
  static async addEvent(eventName) {
    try {
      await db.collection('Events').add({ name: eventName });
      console.log('Event added successfully');
    } catch (error) {
      console.log('Error adding event:', error);
    }
  }

  // Method to read all events
  static async readEvents() {
    let eventList = [];
    try {
      const querySnapshot = await db.collection('OtherEvents').get();
      querySnapshot.forEach((doc) => {
        const event = new Event(doc.id, doc.data()['name'])
        eventList.push(event)
      });
      return eventList 
    } catch (error) {
      console.log('Error reading events:', error);
      return [];
    }
  }
}
export default FirebaseAPI;