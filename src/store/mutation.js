export default {
    changeMessage(state) {
        state.msg = 'hello';
    },
    setResult(state, result) {
        state.result = result;
    },
    SET_NEWS(state, news) {
        state.news = news;
    },
    SET_ASK(state, ask) {
        state.ask = ask;
    },
    SET_JOBS(state, jobs) {
        state.jobs = jobs;
    },
}