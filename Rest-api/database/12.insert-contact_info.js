const db = require('../pgp');

const contact_info = require('./json-data/insert-contact_info.json');

const data = [contact_info]
console.log(data.length);

data.forEach(cat => {
  db.one('INSERT INTO contact_info VALUES (${id},${intro},${phone_number},${email},${face_link},${twitter_link},${google_link},${insta_link},${google_map_link}) RETURNING *', cat)
    .then( result =>{
      // console.log('OK');
  })
    .then( err => {
    console.log(err);
  })
})
