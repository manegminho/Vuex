import Vue from 'vue'
import Vuex from 'vuex'

import mutations from './mutation.js';
import actions from './action.js';

Vue.use(Vuex);
export const store = new Vuex.Store({
    state: {
        msg: 'hi',
        result: '',
        news: [],
        ask: [],
        jobs: [],
    },
    getters: {
        exclaimMessage(state) {
            return "GETTER";
        },
        fetchedAsk(state) {
            return state.ask;
        },
        fetchedJobs(state) {
            return state.jobs;
        },
        fetchedNews(state) {
            return state.news;
        }
    },
    mutations,
    actions,
})