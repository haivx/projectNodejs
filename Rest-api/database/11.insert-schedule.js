const db = require('../pgp');

const insert_schedule = require('./json-data/insert-schedule.json');


console.log(insert_schedule.length);

insert_schedule.forEach(cat => {
  db.one('INSERT INTO schedule VALUES (${id},${course_id},${class_level},${class_id},${schedule_class},${open_date}) RETURNING *', cat)
    .then( result =>{
      // console.log('OK');
  })
    .then( err => {
    console.log(err);
  })
})
