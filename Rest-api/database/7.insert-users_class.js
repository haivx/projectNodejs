const db = require('../pgp');

const users_class = require('./json-data/insert-users_class.json');

console.log(users_class.length);

users_class.forEach(cat => {
  db.one('INSERT INTO users_class VALUES (${id},${student_id},${course_id}) RETURNING *', cat)
    .then( result =>{
      // console.log('OK');
  })
    .then( err => {
    console.log(err);
  })
})
