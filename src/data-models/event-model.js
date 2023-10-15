
class Event{
    constructor(id, name, location, date, tag, isMove){
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
            tag: this.tag
        };
    }

    fromFirestore(snapshot, options){
        const data = snapshot.data(options);
        return new Event(data.id, data.name, data.location, data.date, data.tag);
    }
}

export default Event;