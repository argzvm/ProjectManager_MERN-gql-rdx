import React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { fetchSInStoreData } from '../store/actions/fetchActions.js'
import SignedInNavbar from './navbar/SignedInNavbar.js';
import Dashboard from './dashboard/Dashboard.js';
import ProjectCreate from './projects/ProjectCreate.js';
import ProjectList from './projects/ProjectList.js';
import ProjectDetails from './projects/ProjectDetails.js';
import ProjectUpdate from './projects/ProjectUpdate.js';
import ProjectDelete from './projects/ProjectDelete.js';
import UserLogout from './users/UserLogout.js';
import UserDetails from './users/UserDetails.js';
import UserUpdate from './users/UserUpdate.js';
import UserDelete from './users/UserDelete.js';

class SignedInApp extends React.Component {
    componentDidMount() {
        console.log("signedInApp");
        this.props.fetchSInStoreData(this.state);
    }
    render() {
        return (
            <BrowserRouter>
                <div className="SignedInApp">
                    <SignedInNavbar/>
                    <Switch>
                        <Route exact path="/app" component={Dashboard}/>
                        <Route path="/app/projects/create" component={ProjectCreate}/>
                        <Route path="/app/projects/list" component={ProjectList}/>
                        <Route path="/app/projects/project/:id" component={ProjectDetails}/>
                        <Route path="/app/projects/update/:id" component={ProjectUpdate}/>
                        <Route path="/app/projects/delete/:id" component={ProjectDelete}/>
                        <Route path="/app/users/user" component={UserDetails}/>
                        <Route path="/app/users/update" component={UserUpdate}/>
                        <Route path="/app/users/delete" component={UserDelete}/>
                        <Route path="/app/logout" component={UserLogout}/>
                    </Switch>
                </div>
            </BrowserRouter>
        );
    }
}

function mapDispatchToProps (dispatch) {
    return {
        fetchSInStoreData: (data) => dispatch( fetchSInStoreData(data) )
    };
}

export default connect(null, mapDispatchToProps)(SignedInApp);
