const { db, } = require('../pgp');
const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcrypt');
const User = require('../models/users');

module.exports = (passport) => {
  passport.use(new LocalStrategy(
    function (username, password, done) {
      db.one('SELECT * FROM users WHERE username = $1', username)
        .then(data => {
          console.log('data.password', data.password);
          if (data) {
            console.log('password', password);

          //Check if the password is correct 
          let isValid = User.comparePasswords(password, data.password);
          if(isValid) { 
            console.log(data.username);
            return done(null, data.username)
          } else {
            return done(null, false,{message: 'Unknown password'})
          }


          } else {
            return done(null, false, {message: 'Incorrect username.'})
          }
        })
        .catch(error => {
          console.log('error', error);
          return done(null, false, {message: 'Incorrect username.'})
        })
    }
  ))
}