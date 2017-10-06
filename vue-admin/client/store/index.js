import Vue from 'vue'
import Vuex from 'vuex'
import pkg from 'package'
import * as actions from './actions'
import * as getters from './getters'
import {CourseMutations, EventMutations, editEventMutations, scheduleMutations, ticketMutations, generalMutations, updateEventContent, removeEventMutations} from './mutations'
import app from './modules/app'
import menu from './modules/menu'

Vue.use(Vuex)

const store = new Vuex.Store({
  strict: true,  // process.env.NODE_ENV !== 'production',
  actions,
  getters,
  modules: {
    app,
    menu
  },
  state: {
    pkg,
    course: [],
    events: [],
    editEvent: [],
    schedule: [],
    ticket: [],
    user: [],
    general: []
  },
  mutations: Object.assign({}, CourseMutations, EventMutations, editEventMutations, scheduleMutations, ticketMutations, generalMutations, updateEventContent, removeEventMutations)
})

export default store
