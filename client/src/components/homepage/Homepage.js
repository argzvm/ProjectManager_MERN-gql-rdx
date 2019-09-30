import React from 'react';
import { connect } from 'react-redux';
import SignedOutNavbar from '../navbar/SignedOutNavbar.js';

function Homepage (props) {
    // let { projects, notifications } = props;
    // projects = projects.slice(0,5);
    // const lastprojects = (projects) ? (
    //     <div className="lastprojects section">
    //         { projects.map( (project) => (
    //             <div className="card z-depth-0 project-summary bg-secondary" key={project.id}>
    //                 <div className="card-content grey-text text-darken-3">
    //                     <span className="card-title">{project.title}</span>
    //                     <p>posted by: {project.username}</p>
    //                     <p className="red-text">created at: {project.created}</p>
    //                 </div>
    //             </div>
    //         ))}
    //     </div>
    // ) : null;
    // const lastnotifications = (notifications) ? (
    //     <div className="lastprojects section">
    //         { notifications.map( (notification) => (
    //             <div className="card z-depth-0 project-summary bg-secondary" key={notification.id}>
    //                 <div className="card-content grey-text text-darken-3">
    //                     <p>{ notification.username }</p>
    //                     <p>{ notification.message }</p>
    //                     <p>{ notification.title || null }</p>
    //                     <p>{ notification.created || notification.modified }</p>
    //                 </div>
    //             </div>
    //         ))}
    //     </div>
    // ) : null;
    return (
        <div>
            <SignedOutNavbar/>
            <div className="container mb-5">
                <h1>Homepage</h1>
                <h3>Please log in...</h3>
                {/* <div className="row">
                    <div className="col-xs-12 col-md-6">
                        <h3 className="text-monospace text-center mt-3 mb-3">Last projects</h3>
                        {lastprojects}
                    </div>
                    <div className="col-xs-12 col-md-5 col-md-offset-1">
                        <h3 className="text-monospace text-center mt-3 mb-3">Notifications</h3>
                        {lastnotifications}
                    </div>
                </div> */}
            </div>
        </div>
        
    )
}

function mapStateToProps (state) {
    return {
        projects: state.data.projects,
        notifications: state.data.notifications
    };
}

export default connect(mapStateToProps)(Homepage);
