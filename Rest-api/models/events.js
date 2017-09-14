const {db, } = require('../pgp');

class events {
  constructor (db) {
    this.db = db;
  }
  event_detail (detail) {
    return this.db.any("SELECT * FROM event LIMIT 4 ",detail)
  }
  event_sidebar (detail) {
    return this.db.any("SELECT * FROM event LIMIT 2 OFFSET 0 ",detail)
  }
  happening_event (happening) {
    return this.db.any("SELECT * FROM event WHERE event.starttime = CURRENT_DATE ORDER BY event.starttime DESC")
  }
  upcoming_event (upcoming) {
    return this.db.any("SELECT * FROM event WHERE event.starttime > CURRENT_DATE ORDER BY event.starttime DESC")
  }
  expired_event (expired) {
    return this.db.any("SELECT * From event WHERE event.starttime < CURRENT_DATE ORDER BY event.starttime DESC")
  }
  findEventById (id) {
    return this.db.one("SELECT * FROM event WHERE event.id = $1",id)
  }
}
module.exports = new events(db);
