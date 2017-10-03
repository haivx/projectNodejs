const {db, } = require('../pgp');
var bcrypt = require('bcrypt');

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

  checkLogin (username, password) {
    return this.db.one('SELECT * FROM users WHERE username = $1 AND password = $2', [username, password])
  }
}
module.exports = new User(db);

module.exports.hashPassword = async(password) => {
  try {
    const salt =  await bcrypt.genSalt(5);
    return await bcrypt.hash(password,salt)
  }
  catch(error) {
    throw new Error('Hashing failed',error)
  }
}

module.exports.comparePasswords = async (inputPassword, hashedPassword) => {
  try {
       return  await bcrypt.compare(inputPassword,hashedPassword);
  }
  catch(error) {
      console.log(error);
      throw new Error('Comparing failed', error)
  }
}