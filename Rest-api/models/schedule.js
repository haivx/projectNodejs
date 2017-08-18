const {db, } = require('../pgp');

class schedule {
  constructor (db) {
    this.db = db;
  }
  class_schedule (name1,name2){
    return this.db.any(`SELECT * FROM schedule INNER JOIN course on schedule.course_id = course.course_id
      WHERE course.course_id = $1 OR course.course_id = $2
      ORDER BY schedule.open_date ASC`,[name1,name2])
  }
}
module.exports = new schedule(db);
