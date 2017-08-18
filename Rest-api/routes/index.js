const schedule = require('../models/schedule');
const events = require('../models/events');
const course = require('../models/course');
const general = require('../models/general');
const newspaper = require('../models/newspaper');
const note = require('../models/note')
const {db, } = require('../pgp');
module.exports = (express) => {
  router = express.Router();

  router.get('/',(req,res) =>{
    db.task(t => {
      return t.batch([
        //Event
          events.event_detail(),
        // //General
          general.gereral_info(),
        // //Classes
          course.course_detail(),
        // //newspaper
        newspaper.newspaper_new(),
        // //Schedule english classes
       schedule.class_schedule('ENG_BASIC','ENG_ADVANCED'),

        // //Schedule chinese classes
        schedule.class_schedule('CHINESE_BASIC','CHINESE_ADVANCED'),

        // //Schedule japanse classes
        schedule.class_schedule('JAPANESE_BASIC','JAPANESE_ADVANCED'),

        // //Schedule korean classes
        schedule.class_schedule('KOREAN_BASIC','KOREAN_ADVANCED'),

        note.note_detail(),
        // Event sidebar
        events.event_sidebar()
        ]);
      })
      .then(data => {
            // console.log(data[5])
           res.json({
             event: data[0],
             general: data[1],
             course: data[2],
             newspaper:data[3],
             eng_schedule: data[4],
             chinese_schedule: data[5],
             japanse_schedule: data[6],
             korean_schedule: data[7],
             note: data[8],
             event_sidebar: data[9]
           })
          // console.log(res.json.eng_schedule)
      })
      .catch(error => {
          console.log('error')
      });
  })
  return router;
}
