class Event {
  constructor(id, name, location, date, tag, moves) {
    this.id = id;
    this.name = name;
    this.location = location;
    this.date = date;
    this.tag = tag;
    this.moves = moves;
  }
  toFirestore() {
    return {
      name: this.name,
      location: this.location,
      date: this.date,
      tag: this.tag,
      moves: this.moves,
    };
  }

  static fromFirestore(doc, options) {
    const data = doc.data(options);
    return new Event(
      doc.id,
      data.name,
      data.location,
      data.date,
      data.tag,
      data.moves
    );
  }
}

export default Event;
