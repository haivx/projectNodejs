const {db, } = require('../pgp');

class note {
  constructor (db) {
    this.db = db;
  }
  note_detail (detail) {
    return this.db.any('SELECT * FROM note ORDER BY ID',detail)
  }
}

module.exports = new note(db);
