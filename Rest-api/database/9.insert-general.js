const db = require('../pgp');

const insert_general = require('./json-data/insert-general.json');

// const data = [insert_general]
console.log(insert_general.length);

insert_general.forEach(cat => {
  db.one('INSERT INTO general VALUES (${id},${cover_id},${logo},${newspaper_id},${video_intro}) RETURNING *', cat)
    .then( result =>{
      // console.log('OK');
  })
    .then( err => {
    console.log(err);
  })
})
