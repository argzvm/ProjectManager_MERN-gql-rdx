import React from 'react';
import { connect } from 'react-redux';
import Notifications from './Notifications.js';
import LastProjects from './LastProjects.js';

function Dashboard (props) {
    let { projects, notifications } = props;
    return (
        <div className="container mb-5">
            <div className="row">
                <div className="col-xs-12 col-md-6">
                    <h4 className="text-monospace text-center mt-3 mb-3">Last Projects</h4>
                    <LastProjects lastprojects={ projects.slice(0,4) }/> 
                </div>
                <div className="col-xs-12 col-md-5 col-md-offset-1">
                    <h4 className="text-monospace text-center mt-3 mb-3">Notifications</h4>
                    <Notifications notifications={ notifications }/>
                </div>
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

export default connect(mapStateToProps)(Dashboard);
