import axios from 'axios';
import { authUserMutation, userLoginMutation } from '../../graphql/mutations.js';
import { print } from 'graphql';


export function authUser (token) {
    return (dispatch) => {
        axios.post('http://localhost:4000/graphql/', {
        // axios.post('/graphql/', {
            query: print(authUserMutation),
            variables: {
                token: token
            }
        })
        .then ( (res) => {
            let tdata = {};   tdata.user = res.data.data.userAuth;   tdata.token = token;
            dispatch({ type: 'AUTH_USER', payload: tdata }) 
        })
        .catch( (err) => dispatch({ type: 'AUTH_USER_ERROR', payload: err.response }) );
    }
};

export function loginUser (user) {
    console.log(user);
    return (dispatch) => {
        axios.post('http://localhost:4000/graphql/', {
        // axios.post('/graphql/', {
            query: print(userLoginMutation),
            variables: {
                username: user.username,
                password: user.password
            }
        })
        .then( (res) => dispatch({ type: 'LOGIN_USER', payload: res.data.data }) )
        .catch( (err) => dispatch({ type: 'LOGIN_USER_ERROR', payload: err.response }) );
    }
};

export function logoutUser () {
    return (dispatch) => {
        dispatch({ type: 'LOGOUT_USER'})
    }
};
