const initState = {
    error: null
};

function errorReducer (state = initState, action) {
    let terror = null
    switch (action.type) {

        case 'AUTH_USER_ERROR':
            console.log("AUTH_USER_ERROR", action.payload);
            // terror = { type: "AUTH_USER_ERROR", content: action.payload.status };
            // return { ...state, error: terror };
            localStorage.removeItem('token');
            window.location.reload();
            return state;

        case 'LOGIN_USER_ERROR':
            console.log("LOGIN_USER_ERROR", action.payload);
            terror = { type: "LOGIN_USER_ERROR", content: action.payload };
            return { ...state, error: terror };

        case 'LOGOUT_USER_ERROR':
            //console.log("LOGOUT_USER_ERROR", action.payload);
            terror = { type: "LOGOUT_USER_ERROR", content: action.payload };
            return { ...state, error: terror };

        case 'FETCH_PUBLIC_DATA_ERROR':
            //console.log("FETCH_DATA_ERROR", action.payload);
            terror = { type: "FETCH_PUBLIC_DATA_ERROR", content: action.payload };
            return { ...state, error: terror };

        case 'FETCH_PRIVATE_DATA_ERROR':
            console.log("FETCH_DATA_ERROR", action.payload);
            terror = { type: "FETCH_PRIVATE_DATA_ERROR", content: action.payload };
            return { ...state, error: terror };

        case 'SIGNUP_USER_ERROR':
            //console.log("SIGNUP_USER_ERROR", action.payload);
            terror = { type: "SIGNUP_USER_ERROR", content: action.payload };
            return { ...state, error: terror };

        case 'UPDATE_USER_ERROR':
            //console.log("UPDATE_USER_ERROR", action.payload);
            terror = { type: "UPDATE_USER_ERROR", content: action.payload };
            return { ...state, error: terror };

        case 'DELETE_USER_ERROR':
            //console.log("DELETE_USER_ERROR", action.payload);
            terror = { type: "DELETE_USER_ERROR", content: action.payload };
            return { ...state, error: terror };

        case 'CREATE_PROJECT_ERROR':
            //console.log("CREATE_PROJECT_ERROR", action.payload);
            terror = { type: "CREATE_PROJECT_ERROR", content: action.payload };
            return { ...state, error: terror };

        case 'UPDATE_PROJECT_ERROR':
            //console.log("UPDATE_PROJECT_ERROR", action.payload);
            terror = { type: "UPDATE_PROJECT_ERROR", content: action.payload };
            return { ...state, error: terror };

        case 'DELETE_PROJECT_ERROR':
            //console.log("DELETE_PROJECT_ERROR", action.payload);
            terror = { type: "DELETE_PROJECT_ERROR", content: action.payload };
            return { ...state, error: terror };

        
        case 'EMPTY_FIELDS':
            //console.log("EMPTY_FIELDS");
            terror = { type: "EMPTY_FIELDS", content: "Please enter all fields" };
            return { ...state, error: terror };

        case 'USERNAME_TAKEN':
            //console.log("EMPTY_FIELDS");
            terror = { type: "USERNAME_TAKEN", content: "Username already taken" };
            return { ...state, error: terror };

        case 'PASSWORDS_DONT_MATCH':
            //console.log("PASSWORDS_DONT_MATCH");
            terror = { type: "PASSWORDS_DONT_MATCH", content: "Passwords do not match" };
            return { ...state, error: terror };

        case 'CLEAR_ERRORS':
            //console.log("CLEAR_ERRORS");
            return { ...state, error: null };

            
        default:
            return state;
    }
}

export default errorReducer;
