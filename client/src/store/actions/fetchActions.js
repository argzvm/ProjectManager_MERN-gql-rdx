import axios from 'axios';
import { fetchSOutDataQuery, fetchSInDataQuery } from '../../graphql/queries.js';
import { print } from 'graphql';

// fetch public projects
export function fetchSOutStoreData() {
    return function (dispatch) {
        axios.post('/graphql/', {
            query: print(fetchSOutDataQuery)
        })
        .then( (res) => dispatch({ type: 'FETCH_PUBLIC_DATA', payload: res.data.data }))
        .catch( (err) => dispatch({ type: 'FETCH_PUBLIC_DATA_ERROR', payload: err.response }) );
    }
}

// fetch users private projects
export function fetchSInStoreData() {
    return function (dispatch) {
        axios.post('/graphql/', {
            query: print(fetchSInDataQuery)
        })
        .then( (res) => dispatch({ type: 'FETCH_PRIVATE_DATA', payload: res.data.data }))
        .catch( (err) => dispatch({ type: 'FETCH_PRIVATE_DATA_ERROR', payload: err.response }) );
    }
}



// // fetch public projects
// export function fetchSOutStoreData() {
//     return function (dispatch) {
//         axios({
//             url: 'http://localhost:4000/graphql', // url: '/graphql', // CHECK PROXY //
//             method: 'post',
//             data: fetchSOutDataQuery
//         })
//         .then( (res) => dispatch({ type: 'FETCH_PUBLIC_DATA', payload: res.data.data }))
//         .catch( (err) => dispatch({ type: 'FETCH_PUBLIC_DATA_ERROR', payload: err.response }) );
//     }
// }

// // fetch users private projects
// export function fetchSInStoreData() {
//     return function (dispatch) {
//         axios({
//             url: 'http://localhost:4000/graphql', // url: '/graphql', // CHECK PROXY //
//             method: 'post',
//             data: fetchSInDataQuery
//         })
//         .then( (res) => dispatch({ type: 'FETCH_PRIVATE_DATA', payload: res.data.data }))
//         .catch( (err) => dispatch({ type: 'FETCH_PRIVATE_DATA_ERROR', payload: err.response }) );
//     }
// }
