import { db } from './config';

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
    try {
      const querySnapshot = await db.collection('OtherEvents').get();
      querySnapshot.forEach((doc) => {
        console.log(doc.id, "=>", doc.data());
      });
    } catch (error) {
      console.log('Error reading events:', error);
    }
  }
}

export default FirebaseAPI;