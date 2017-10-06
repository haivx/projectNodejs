const {db, } = require('../pgp');

class events {
  constructor (db) {
    this.db = db;
  }
  event_detail (detail) {
    return this.db.any("SELECT * FROM event LIMIT 4 ",detail)
  }
  event_list() {
    return this.db.any("SELECT * FROM event ")
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
  upcoming_event_one (upcomingOne) {
    return this.db.one("SELECT * FROM event WHERE event.starttime > CURRENT_DATE ORDER BY event.starttime DESC LIMIT 1")
  }

  expired_event (expired) {
    return this.db.any("SELECT * From event WHERE event.starttime < CURRENT_DATE ORDER BY event.starttime DESC")
  }
  findEventByTitle (title) {
    return this.db.one("SELECT * FROM event WHERE event.title = $1",title)
  }
  countTotalTicket (event_title) {
    return this.db.one(`select sum(count_ticket) from 
    (select * from ticket inner join event on (event.id = ticket.event_id) 
    where event.title = $1) AS count_ticke`, event_title)
  }
  delete_event_id (item) {
    return this.db.one("DELETE FROM event WHERE event.id = $1 RETURNING id", item)
  }
}
module.exports = new events(db);
