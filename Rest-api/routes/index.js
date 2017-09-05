const schedule = require('../models/schedule');
const events = require('../models/events');
const course = require('../models/course');
const general = require('../models/general');
const newspaper = require('../models/newspaper');
const note = require('../models/note');
const {db, } = require('../pgp');
const User = require('../models/users');
const session = require('express-session');
const passport = require('passport');
require('../passport/local')(passport);
require('../passport/passport')(passport);
module.exports = (express) => {
  router = express.Router();

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
  router.post('/register', (req,res) => {
    let username = req.body.data.username;
    let email = req.body.data.email
    let fullname = req.body.data.fullName
    let password = req.body.data.password
    let telephone_number = req.body.data.tel
    // console.log(telephone_number);
      User.checkUser(username)
        .then( (data) => {
          // console.log(data);
          if(data.length > 0) {
            res.json({msg: 'Username đã tồn tại, vui lòng dùng username khác'})
          } else {
            User.checkId()
            .then((data) => {
              // console.log(data.id);
              let newId = data.id + 1;
             //Mặc định giá trị role_id là 3
              const role_id = 3;
              // console.log(newId);
              // console.log(data.password);
                //Hash the password
              const hash =  User.hashPassword(data.password)
                .then(function(hash) {
                  // console.log('hash',hash);
                  User.insertUser(newId,username, hash, telephone_number, fullname, email,role_id)
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
  router.post('/login',
    passport.authenticate('local', { 
      successFlash: 'Welcome!',
      failureFlash: 'Invalid username or password.'
    })
  );
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
  return router;
}
