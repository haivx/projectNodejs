const db = require('../pgp');

const topcat = require('./json-data/topcat.json');
const subcat1 = require('./json-data/subcat1.json');

const data = [
 ...topcat,
 ...subcat1
]
console.log(data.length);

data.forEach(cat => {
  db.one('INSERT INTO users VALUES (${id},${username},${password},${firstname},${lastname},${email},${role_id}) RETURNING *', cat)
    .then( result =>{
      // console.log('OK');
  })
    .then( err => {
    console.log(err);
  })
})
