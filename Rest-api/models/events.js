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
}
module.exports = new events(db);
