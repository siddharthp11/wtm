class Event {
  constructor(id, name, location, date, tag, isMove) {
    this.id = id;
    this.name = name;
    this.location = location;
    this.date = date;
    this.tag = tag;
    this.isMove = isMove;
  }
  toFirestore() {
    return {
      name: this.name,
      location: this.location,
      date: this.date,
      tag: this.tag,
    };
  }

  static fromFirestore(doc, options) {
    const data = doc.data(options);
    return new Event(doc.id, data.name, data.location, data.date, data.tag);
  }
}

export default Event;
