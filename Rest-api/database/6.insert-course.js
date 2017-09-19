const db = require('../pgp');

const insert_course = require('./json-data/insert-course.json');

console.log(insert_course.length);

insert_course.forEach(cat => {
  db.one('INSERT INTO course VALUES (${course_id},${title},${description},${picture},${portfolio},${parent_id},${note_id},${image}) RETURNING *', cat)
    .then( result =>{
      // console.log('OK');
  })
    .then( err => {
    console.log(err);
  })
})
