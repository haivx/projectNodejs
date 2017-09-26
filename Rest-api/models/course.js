const {db, } = require('../pgp');

class course {
  constructor (db) {
    this.db = db;
  }
  course_detail (detail) {
    return this.db.any('SELECT * FROM course',detail)
  }
  main_course (detail) {
    return this.db.any('SELECT * FROM course WHERE course.parent_id IS NULL ',detail)
  }
}

module.exports = new course(db);
