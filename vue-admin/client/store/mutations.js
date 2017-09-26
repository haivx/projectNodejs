import {
  COURSE_DETAIL,
  EVENT_DETAIL,
  SCHEDULE_DETAIL,
  NEWSPAPER_DETAIL,
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
    state.events.push(payload)
  }
}
export const scheduleMutations = {
  [SCHEDULE_DETAIL] (state, payload) {
    state.schedule.push(payload)
  }
}
export const newspaperMutations = {
  [NEWSPAPER_DETAIL] (state, payload) {
    state.schedule.push(payload)
  }
}
export const generalMutations = {
  [GENERAL] (state, payload) {
    state.schedule.push(payload)
  }
}
export const usersMutations = {
  [USERS] (state, payload) {
    state.user.push(payload)
  }
}
