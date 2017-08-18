const {db, } = require('../pgp');

class newspaper {
  constructor(db) {
    this.db = db;
  }

  newspaper_new(news) {
    return this.db.any("SELECT * FROM newspaper",news);
  }

}
module.exports = new newspaper(db);
