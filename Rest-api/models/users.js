const {db, } = require('../pgp');

class User {
  constructor (db) {
    this.db = db
  }
  checkUser (username) {
    return this.db.any('SELECT * FROM users WHERE username = $1',username)
  }
  checkId () {
    return this.db.one('SELECT * FROM users ORDER BY ID DESC limit 1')
  }

  insertUser(id,username, password, telephone_number, fullname, email,role_id) {
    return this.db.none('INSERT INTO users(id,username, password, telephone_number, fullname, email,role_id) VALUES($1,$2,$3,$4,$5,$6,$7)',[id,username, password, telephone_number, fullname, email,role_id])
  }
}
module.exports = new User(db);