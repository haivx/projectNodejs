import Vue from 'vue'
import Vuex from 'vuex'
import pkg from 'package'
import * as actions from './actions'
import * as getters from './getters'
import {CourseMutations, EventMutations, scheduleMutations, newspaperMutations, generalMutations} from './mutations'
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
    schedule: [],
    newspaper: [],
    user: []
  },
  mutations: Object.assign({}, CourseMutations, EventMutations, scheduleMutations, newspaperMutations, generalMutations)
})

export default store
