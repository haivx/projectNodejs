const db = require('../pgp');

const insert_ticket = require('./json-data/insert-ticket.json');

// const data = [insert_ticket]
console.log(insert_ticket.length);

insert_ticket.forEach(cat => {
  db.one('INSERT INTO ticket VALUES (${id},${fullname},${phone_number},${email},${count_ticket},${deadline},${event_id}) RETURNING *', cat)
    .then( result =>{
      // console.log('OK');
  })
    .then( err => {
    console.log(err);
  })
})
