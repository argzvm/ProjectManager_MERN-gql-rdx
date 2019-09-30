
export function emptyFields () {
    return (dispatch, getState) => {
        dispatch( { type: 'EMPTY_FIELDS' } )
    }
};

export function usernameTaken () {
    return (dispatch, getState) => {
        dispatch( { type: 'USERNAME_TAKEN' } )
    }
};

export function passwordsDontMatch () {
    return (dispatch, getState) => {
        dispatch( { type: 'PASSWORDS_DONT_MATCH' } )
    }
};

export function clearErrors () {
    return (dispatch, getState) => {
        dispatch( { type: 'CLEAR_ERRORS' } )
    }
};
