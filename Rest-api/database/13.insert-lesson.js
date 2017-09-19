const db = require('../pgp');

const lesson = require('./json-data/insert-lesson.json');

// const data = [lesson]
console.log(lesson.length);

lesson.forEach(cat => {
  db.one('INSERT INTO lesson VALUES (${id},${video},${title},${homework},${documents},${course_id}) RETURNING *', cat)
    .then( result =>{
      // console.log('OK');
  })
    .then( err => {
    console.log(err);
  })
})
