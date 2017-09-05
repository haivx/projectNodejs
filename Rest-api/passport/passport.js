const { db, } = require('../pgp');
module.exports = function (passport) {
  //SerializeUser 
  passport.serializeUser(function(user, done) {
    console.log('serializeer',user);
    done(null,user);
  });
  //DeserializeUser
  passport.deserializeUser(function (user,done) {
    console.log('deserializeUser',user) ;
    db.one('SELECT * FROM users WHERE username = $1', user)
    .then(data => {
        done(null, data.username);
    })
    .catch(err => {
        done(err, user);
    })
  })
}