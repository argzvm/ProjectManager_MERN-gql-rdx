import React from 'react';
import { connect } from 'react-redux';
import { authUser } from './store/actions/authActions.js';
import SignedOutApp from './components/SignedOutApp.js';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component {
    componentDidMount() {
        let token = (localStorage) ? (localStorage.getItem('token')) : null;
        if (token) this.props.authUser(token);
    }
    render() {
        return (
            <div className="App">
                <SignedOutApp/>
            </div>
        );
    }
}

function mapDispatchToProps (dispatch) {
    return {
        authUser: (token) => dispatch( authUser(token) )
    };
}

export default connect(null, mapDispatchToProps)(App);
