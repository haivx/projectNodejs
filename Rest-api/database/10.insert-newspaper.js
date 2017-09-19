const db = require('../pgp');

const newspaper = require('./json-data/insert-newspaper.json');

// const data = [newspaper]
console.log(newspaper.length);

newspaper.forEach(cat => {
  db.one('INSERT INTO newspaper VALUES (${id},${cover_link},${title},${content},${description}) RETURNING *', cat)
    .then( result =>{
      // console.log('OK');
  })
    .then( err => {
    console.log(err);
  })
})
