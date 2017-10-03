import * as types from './mutation-types'
import axios from 'axios'

const API_BASE = 'http://localhost:3000/admin'

export const toggleSidebar = ({ commit }, config) => {
  if (config instanceof Object) {
    commit(types.TOGGLE_SIDEBAR, config)
  }
}

export const toggleDevice = ({ commit }, device) => commit(types.TOGGLE_DEVICE, device)

export const expandMenu = ({ commit }, menuItem) => {
  if (menuItem) {
    menuItem.expanded = menuItem.expanded || false
    commit(types.EXPAND_MENU, menuItem)
  }
}

export const switchEffect = ({ commit }, effectItem) => {
  if (effectItem) {
    commit(types.SWITCH_EFFECT, effectItem)
  }
}

// EDIT BY HAI XUAN VO
export const courseDetail = ({ commit }) => {
  axios.get(`${API_BASE}/courses`).then(response => {
    commit(types.COURSE_DETAIL, response.data)
  })
}
export const eventDetail = ({commit}) => {
  axios.get(`${API_BASE}/event`).then(response => {
    commit(types.EVENT_DETAIL, response.data.eventAdmin)
  })
}
export const editEvent = ({commit}, title) => {
  axios.get(`${API_BASE}/edit/${title}`).then(response => {
    commit(types.EDIT_EVENT, response.data.editEventAdmin)
  })
}
export const scheduleDetail = ({commit}) => {
  axios.get(`${API_BASE}/schedule`).then(response => {
    commit(types.SCHEDULE_DETAIL, response.data)
  })
}

export const ticketDetail = ({commit}) => {
  axios.get(`${API_BASE}/ticket`).then(response => {
    commit(types.TICKET_DETAIL, response.data)
  })
}
export const general = ({commit}) => {
  axios.get(`${API_BASE}/general`).then(response => {
    commit(types.GENERAL, response.data)
  })
}
export const user = ({commit}) => {
  axios.get(`${API_BASE}/users`).then(response => {
    commit(types.USERS, response.data)
  })
}
