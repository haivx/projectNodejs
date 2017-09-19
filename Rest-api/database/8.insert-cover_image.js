const db = require('../pgp');

const cover_image = require('./json-data/insert-cover_image.json');

// const data = [cover_image]
console.log(cover_image.length);

cover_image.forEach(cat => {
  db.one('INSERT INTO cover_image VALUES (${id},${image_link}) RETURNING *', cat)
    .then( result =>{
      // console.log('OK');
  })
    .then( err => {
    console.log(err);
  })
})
