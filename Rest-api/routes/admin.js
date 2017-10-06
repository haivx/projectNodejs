
const schedule = require('../models/schedule');
const events = require('../models/events');
const course = require('../models/course');
const general = require('../models/general');
const newspaper = require('../models/newspaper');
const note = require('../models/note');
const ticket = require('../models/ticket');
const {db, } = require('../pgp');
const User = require('../models/users');
const session = require('express-session');
const express = require('express');
module.exports = (express) => {
  router = express.Router();

  router.route('/general')
    .get( async(req,res,next) => {
        const generalAdmin = await general.gereral_info()
        res.json({generalAdmin})
    }) 
  router.route('/event')
    .get( async (req,res,next) => {
      const eventAdmin = await events.event_list()
      res.json({eventAdmin})
    })
  router.route('/event/delete/:item')
    .delete( async (req,res,next) => {
      let item = req.params.item
      console.log('delete item so', item)
      const removeEventAdmin = await events.delete_event_id(item)
      res.json(removeEventAdmin)
    })


  router.route('/edit/:id')
  .get( async (req,res,next) => {
    let title = req.params.id
    // console.log('title', title)
    const editEventAdmin = await events.findEventByTitle(title)
    res.json({editEventAdmin})
  })
  router.route('/courses')
    .get( async (req,res,next) => {
      const courseAdmin = await course.course_detail()
      const noteAdmin = await note.note_detail()
      res.json({courseAdmin, noteAdmin})
    })
  router.route('/schedule')
    .get( async (req,res,next) => {
      const scheduleAdmin = await schedule.fullSchedule()
      res.json({scheduleAdmin})
    })
  router.route('/ticket')
    .get( async(req,res,next) => {
      const ticketAdmin = await ticket.ticket_detail()
      res.json({ticketAdmin})
    })
  return router;
}