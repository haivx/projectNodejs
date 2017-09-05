const { db, } = require('../pgp');
const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcrypt');


module.exports = (passport) => {
  passport.use(new LocalStrategy(
    function (username, password, done) {
      db.one('SELECT * FROM users WHERE username = $1', username)
        .then(data => {
          console.log('data.password', data.password);
          if (data) {
            bcrypt.compare(password, data.password, function(err, res) {
              // res == false
              if (err) return done(err);
              if (res) return done(null, data.username);
              return done(null, false);              
           });
          } else {
            console.log('Failed');
            return done(null, false)
          }
        })
        .catch(error => {
          console.log('error', error);
          return done(null, false)
        })
    }
  ))
}