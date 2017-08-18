const {db, } = require('../pgp');

class general {
  constructor (db) {
    this.db = db;
  }
  gereral_info (info) {
    return this.db.any(`SELECT *,cover_image.image_link FROM general
      INNER JOIN cover_image on cover_image.id = general.cover_id LIMIT 1 OFFSET 0`)
  }
}
module.exports = new general(db);
