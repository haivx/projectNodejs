const { db, } = require('../pgp');
const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcrypt');


module.exports = (passport) => {
  passport.use(new LocalStrategy(
    function (username, password, done) {
      db.one('SELECT * FROM users WHERE username = $1', username)
        .then(data => {
          // console.log('data.password', data.password);
          if (data) {
            // console.log(data.password);
            bcrypt.compare(password, data.password, function(err, res) {
              if (err) return done(err);
              if (res) return done(null, data.username);
              return done(null, false, {message: 'Incorrect password.'});              
           });
          } else {
            // console.log('Failed');
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