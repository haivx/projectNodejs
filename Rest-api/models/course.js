const {db, } = require('../pgp');

class course {
  constructor (db) {
    this.db = db;
  }
  course_detail (detail) {
    return this.db.any('SELECT * FROM course',detail)
  }
}

module.exports = new course(db);
