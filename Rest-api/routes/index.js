
const schedule = require('../models/schedule');
const events = require('../models/events');
const course = require('../models/course');
const general = require('../models/general');
const newspaper = require('../models/newspaper');
const note = require('../models/note');
const ticket = require('../models/ticket');
const {db, } = require('../pgp');
const User = require('../models/users');
const flash = require('connect-flash');
const session = require('express-session');
const passport = require('passport');
require('../passport/local')(passport);
require('../passport/passport')(passport);
module.exports = (express) => {
  router = express.Router();
  router.use(flash());
  
  router.use(session({
    cookie: { maxAge: 60000 },
    secret: 'keysecret',
    saveUninitialized: false,
    resave: false
  }));

  router.use(passport.initialize());
  router.use(passport.session());

  router.get('/',(req,res) =>{
    db.task(t => {
      return t.batch([
        //Event
          events.event_detail(),
        ////General
          general.gereral_info(),
        // //Classes
          course.course_detail(),
        // //newspaper
        newspaper.newspaper_new()
        ]);
      })
      .then(data => {
            // console.log(data[5])
           res.json({
             event: data[0],
             general: data[1],
             course: data[2],
             newspaper:data[3]
           })
      })
      .catch(error => {
          console.log('error')
      });
  })

  //Đăng ký đăng nhập
  router.post('/register', (req,res) => {
    console.log('req.body', req.body);
    let username = req.body.data.username;
    let email = req.body.data.email
    let fullname = req.body.data.fullName
    let password = req.body.data.password
    let telephone_number = req.body.data.tel
      User.checkUser(username)
        .then( (data) => {
          // console.log(data);
          if(data.length > 0) {
            res.json({msg: 'Username đã tồn tại, vui lòng dùng username khác'})
          } else {
            User.checkId()
            .then((data) => {
              console.log(data.id);
              let newId = data.id + 1;
             //Mặc định giá trị role_id là 3
              // const role_id = 3;
              console.log('newId', newId);
                //Hash the password
              const hash =  User.hashPassword(data.password)
                .then(function(hash) {
                  console.log('hash',hash);
                  User.insertUser(newId,username, hash, telephone_number, fullname, email,role_id = 3)
                  .then((data) => {
                    res.json({msg:'Đăng ký thành công, bạn có thể đăng nhập'})
                  })
                  .catch( error => {
                    res.json({msg:'Đăng ký không thành công'})
                  })
               });
            })
            .catch (error => {
              console.log(error)
            })
          }
        })
        .catch( error => {
          console.log(error);
        })
  });
  //Authentication
  router.post('/login',
  passport.authenticate('local',{
    failureRedirect: '/loginfailed',
    failureFlash: true
  }),
  function(req, res) {
    // If this function gets called, authentication was successful.
    res.json({msg:'Login successful'});
  });
  //Login fail, return fail message
  router.get('/loginfailed', (req,res) => {
    res.json({msg:'Login failed'})
  });

//Page Event
  router.get('/sukien', (req,res) => {
      db.task( t => {
        return t.batch([
          events.happening_event(),
          events.upcoming_event(),
          events.expired_event()
        ])
      })
      .then( data => {

        res.json({
          happening: data[0],
          upcoming:data[1],
          expired: data[2]
        })
      })
  })

//Page Event detail
  router.get('/event/:eventDetail', (req,res) => {
    let eventDetail = req.params.eventDetail
    db.task( t => {
      return t.batch([
        //Get data Event
        events.findEventByTitle(eventDetail),

        // Get data ticket
        events.countTotalTicket(eventDetail),

        // Get data upcoming event
        events.upcoming_event_one()
      ])
    })
       .then( data => {
         res.json({
           events: data[0],
           ticket: data[1],
           upcomingOne: data[2]
         })
       })
       .catch (error => {
         console.log(error);
       })
   })

//Page lịch khai giảng
  router.get('/lich-khai-giang', (req,res) => {
    db.task( t => {
      return t.batch([
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
        events.event_sidebar()]
      )
      .then(data => {
          res.json({
            eng_schedule: data[0],
            chinese_schedule: data[1],
            japanse_schedule: data[2],
            korean_schedule: data[3],
            note: data[4],
            event_sidebar: data[5]
          })
      })
      .catch( error => {
        console.log('error')
      })
    })
  })
  //Đăng ký Event
router.post('/event/registerEvent', (req,res) =>{
  let nameEvent = req.body.data.nameEvent
  let telEvent = req.body.data.telEvent
  let emailEvent =  req.body.data.emailEvent
  let ticketCount =  req.body.data.ticketCount
  let eventId =  req.body.data.eventId
  ticket.check_ticket_by_phonenumber(telEvent)
    .then( data => {
      console.log('check_ticket_by_phonenumber', data);
      if(data.length > 0) {
        res.json({msg: "Số điện thoại đã được đăng ký"})
      } else {
        ticket.insertPerson(nameEvent, telEvent, emailEvent, ticketCount, eventId)
        .then( (data) => {
          console.log(res)
          res.json({msg: "Đăng ký thành công"})
        })
        .catch (error => {
          console.log(error);
          res.json({msg: "Đăng ký không thành công"});
        })
      }
    })
    .catch ( error => {
      console.log(error)
    })
})


  return router;
}
