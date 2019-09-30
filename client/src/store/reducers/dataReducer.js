const initState = {
    users: [],
    projects: [],
    notifications: [],
    loading: false
};

function dataReducer (state = initState, action) {
    let tproject = null, tprojects = null, tnotification = null, tnotifications = null,
        tuser = null, tusers = null;
    switch (action.type) {
        
        case 'FETCH_PUBLIC_DATA':
            console.log('fetching public data', action.payload);
            tprojects = state.projects.concat(action.payload.projects);
            tprojects.sort( (a, b) => {
                if (a.modified < b.modified) return 1
                if (a.modified > b.modified) return -1
                return 0;
            });
            return {
                ...state,
                users: action.payload.users,
                projects: tprojects,
                notifications: action.payload.notifications,
                loading: false
            }

        case 'FETCH_PRIVATE_DATA':
            console.log('fetching private data', action.payload);
            tprojects = state.projects.concat(action.payload.projects);
            tprojects.sort( (a, b) => {
                if (a.modified < b.modified) return 1
                if (a.modified > b.modified) return -1
                return 0;
            });
            return {
                ...state,
                users: action.payload.users,
                projects: tprojects,
                notifications: action.payload.notifications,
                loading: false
            }

        case 'SIGNUP_USER':
            console.log('user signup', action.payload);
            tuser = action.payload.user;
            tusers = state.users;
            tnotification = action.payload.notification;
            tnotifications = state.notifications;
            tnotifications.pop();
            return {
                ...state,
                users: [...tusers, tuser],
                notifications: [tnotification, ...tnotifications]
            };

        case 'UPDATE_USER':
            //console.log('UPDATE_USER');
            localStorage.removeItem('token');
            window.location.reload();
            return state;

        case 'DELETE_USER':
            //console.log('DELETE_USER');
            localStorage.removeItem('token');    
            window.location.reload();
            return state;        

        case 'CREATE_PROJECT':
            console.log('project created', action.payload);
            tproject = action.payload.project;
            tprojects = state.projects;
            tnotification = action.payload.notification;
            tnotifications = state.notifications;
            tnotifications.pop();
            return {
                ...state,
                projects: [tproject, ...tprojects],
                notifications: [tnotification, ...tnotifications]
            };

        case 'UPDATE_PROJECT':
            console.log('project updated', action.payload);
            tproject = state.projects.find( (project) => ( project._id === action.payload.project._id ) );
            tprojects = state.projects.filter( (project) => ( project._id !== action.payload.project._id ) );
            tproject.content = action.payload.project.content;
            tproject.modified = action.payload.project.modified;
            tnotification = action.payload.notification;
            tnotifications = state.notifications;
            tnotifications.pop();
            return {
                ...state,
                projects: [tproject, ...tprojects],
                notifications: [tnotification, ...tnotifications]
            };

        case 'DELETE_PROJECT':
            console.log('project deleted', action.payload);
            tprojects = state.projects.filter( (project) => ( project._id !== action.payload.project._id ) );
            tnotification = action.payload.notification;
            tnotifications = state.notifications;
            tnotifications.pop();
            return {
                ...state,
                projects: tprojects,
                notifications: [tnotification, ...tnotifications]
            };

        default:
            return state;
    }
}

export default dataReducer;
