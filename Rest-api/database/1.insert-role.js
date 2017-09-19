const db = require('../pgp');

const role = require('./json-data/role.json');

// console.log(role.length);

role.forEach(cat => {
  db.one('INSERT INTO role VALUES (${id},${role_name}) RETURNING *', cat)
    .then( result =>{
      // console.log('OK');
  })
    .then( err => {
    console.log(err);
  })
})
