import React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
// import { fetchSOutStoreData } from '../store/actions/fetchActions.js'
import Homepage from './homepage/Homepage.js';
import UserSignup from './users/UserSignup.js';
import UserLogin from './users/UserLogin.js';
import SignedInApp from './SignedInApp.js';

class SignedOutApp extends React.Component {
    // componentDidMount() {
    //     console.log("signedOutApp");
    //     this.props.fetchSOutStoreData(this.state);
    // }
    render() {
        return (
            <BrowserRouter>
                <div className="SignedOutApp">
                    <Switch>
                        <Route exact path="/" component={Homepage}/>
                        <Route path="/signup" component={UserSignup}/>
                        <Route path="/login" component={UserLogin}/>
                        <Route path="/app" component={SignedInApp}/>
                    </Switch>
                </div>
            </BrowserRouter>
        );
    }
}

function mapDispatchToProps (dispatch) {
    return {
        // fetchSOutStoreData: (data) => dispatch( fetchSOutStoreData(data) )
    };
}

export default connect(null, mapDispatchToProps)(SignedOutApp);
