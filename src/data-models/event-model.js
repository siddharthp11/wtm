
class Event{
    constructor(id, name, location, date, tag, isMove){
        this.id = id;
        this.name = name;
        this.location = location;
        this.date = date;
        this.tag = tag;
        this.isMove = isMove;
        this.popupVisible = false;
    }
}

export default Event; 