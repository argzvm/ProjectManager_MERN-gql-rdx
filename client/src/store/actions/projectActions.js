
import axios from 'axios';

export function createProject (project) {
    return (dispatch, getState) => {
        let data = {};  data.project = project;  data.token = getState().auth.token;
        axios.post('/projects/create/', data)
        .then( (res) => dispatch({ type: 'CREATE_PROJECT', payload: res.data }) )
        .catch( (err) => dispatch({ type: 'CREATE_PROJECT_ERROR', payload: err }) );
    }
};

export function updateProject (project) {
    return (dispatch, getState) => {
        let data = {};  data.project = project;  data.token = getState().auth.token;
        axios.post('/projects/update/', data)
        .then( (res) => dispatch({ type: 'UPDATE_PROJECT', payload: res.data }) )
        .catch( (err) => dispatch({ type: 'UPDATE_PROJECT_ERROR', payload: err }) );
    }
};

export function deleteProject (project) {
    return (dispatch, getState) => {
        let data = {};  data.project = project;  data.token = getState().auth.token;
        axios.post('/projects/delete/', data)
        .then( (res) => dispatch({ type: 'DELETE_PROJECT', payload: res.data }) )
        .catch( (err) => dispatch({ type: 'DELETE_PROJECT_ERROR', payload: err }) );
    }
};
