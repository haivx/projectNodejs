const db = require('../pgp');

const insert_event = require('./json-data/insert-event.json');

console.log(insert_event.length);

insert_event.forEach(cat => {
  db.one('INSERT INTO event VALUES (${id},${avatar},${background_image}, ${title}, ${description},${contents},${speaker},${starttime},${finishtime},${address},${date_post},${user_id}) RETURNING *', cat)
    .then( result =>{
      // console.log('OK');
  })
    .then( err => {
    console.log(err);
  })
})
