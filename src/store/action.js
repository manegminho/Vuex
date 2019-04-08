import {
    fetchNewList,
    fetchAskList,
    fetchJobsList,
} from "../api/index.js";
export default {
    FETCH_USER(context) {
        fetch("https://jsonplaceholder.typicode.com/users/1")
            .then(response => response.json())
            .then(json => {
                //(this.result = json
                context.commit('setResult', json);
            });
    },
    FETCH_NEWS(context) {
        fetchNewList()
            .then(response => {
                console.log(response.data);
                context.commit('SET_NEWS', response.data);
            })
            .catch(error => {
                console.log(error);
            })
    },
    FETCH_ASK(context) {
        fetchAskList()
            .then(response => {
                context.commit("SET_ASK", response.data);

            })
    },
    FETCH_JOBS(context) {
        fetchJobsList()
            .then(response => {
                context.commit("SET_JOBS", response.data);
            })
    }
}