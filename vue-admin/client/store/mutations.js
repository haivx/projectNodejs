import {
  COURSE_DETAIL,
  EVENT_DETAIL,
  EDIT_EVENT,
  SCHEDULE_DETAIL,
  TICKET_DETAIL,
  GENERAL,
  USERS
} from './mutation-types'

export const CourseMutations = {
  [COURSE_DETAIL] (state, payload) {
    // state.course = payload
    state.course.push(payload)
  }
}
export const EventMutations = {
  [EVENT_DETAIL] (state, payload) {
    state.events = payload
  }
}
export const editEventMutations = {
  [EDIT_EVENT] (state, payload) {
    state.editEvent = payload
  }
}
export const scheduleMutations = {
  [SCHEDULE_DETAIL] (state, payload) {
    state.schedule.push(payload)
  }
}
export const ticketMutations = {
  [TICKET_DETAIL] (state, payload) {
    state.ticket.push(payload)
  }
}
export const generalMutations = {
  [GENERAL] (state, payload) {
    state.general.push(payload)
  }
}
export const usersMutations = {
  [USERS] (state, payload) {
    state.user.push(payload)
  }
}
