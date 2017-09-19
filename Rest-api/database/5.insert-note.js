const db = require('../pgp');

const note = require('./json-data/insert-note.json');

// const data = [note]
console.log(note.length);

note.forEach(cat => {
  db.one('INSERT INTO note VALUES (${id},${note_title},${note_content}) RETURNING *', cat)
    .then( result =>{
      // console.log('OK');
  })
    .then( err => {
    console.log(err);
  })
})
