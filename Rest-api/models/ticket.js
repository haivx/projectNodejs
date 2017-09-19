const {db, } = require('../pgp');

class ticket {
  constructor (db) {
    this.db = db;
  }
  ticket_detail (detail) {
    return this.db.any('SELECT * FROM ticket ORDER BY ID',detail)
  }
  insertPerson (id, fullname, phone_number,email, count_Ticket, event_id){
    return this.db.none('INSERT INTO ticket (fullname, phone_number,email, count_Ticket, event_id) VALUES($1,$2,$3,$4,$5)',[id, fullname, phone_number,email, count_Ticket, event_id])
  }
  check_ticket_by_phonenumber (phonenumber) {
    return this.db.any('SELECT * FROM ticket WHERE phone_number = $1', phonenumber)
  }
}

module.exports = new ticket(db);
