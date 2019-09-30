import React, { Component } from 'react'
import { connect } from 'react-redux';
import { loginUser } from '../../store/actions/authActions.js';
import { clearErrors } from '../../store/actions/errorActions.js';
import { Button, Form, FormGroup, Label, Input, FormFeedback } from 'reactstrap';
import SignedOutNavbar from '../navbar/SignedOutNavbar.js';

class UserLogin extends Component {
    state = {
        username: "",
        password: ""
    }
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.loginUser(this.state);
        this.setState({ password: "" });
    }
    checkAuth = () => {
        setTimeout(() => {
            if (this.props.token) this.props.history.push('/app');
        }, 500)
    }
    componentDidMount() {
        this.props.clearErrors();
        this.checkAuth();
    }
    render() {
        let usernameError = (this.props.error && this.props.error.content === 400) ? true : false;
        let passwordError = (this.props.error && this.props.error.content === 401) ? true : false;
        return (
            <div>
                <SignedOutNavbar/>
                <div className="container">
                    <Form onSubmit={this.handleSubmit} className="mt-3 mb-5">
                        <h5 className="display-4 mb-5">Log In</h5>
                        <FormGroup>
                            <Label for="username">Username</Label>
                            <Input type="text" name="username" id="username" placeholder="enter your username"
                                onChange={this.handleChange} value={this.state.username} invalid={usernameError} />
                            <FormFeedback>invalid username</FormFeedback>
                        </FormGroup>
                        <FormGroup>
                            <Label for="password">Password</Label>
                            <Input type="password" name="password" id="password" placeholder="enter your password"
                                onChange={this.handleChange} value={this.state.password} invalid={passwordError} />
                            <FormFeedback>wrong password</FormFeedback>
                        </FormGroup>
                        <Button color="primary" size="sm" block>Log In</Button>
                    </Form>
                </div>
            </div>
        )
    }
}

function mapStateToProps (state) {
    return {
        user: state.auth.user,
        error: state.error.error,
        token: state.auth.token
    };
}

function mapDispatchToProps (dispatch) {
    return {
        loginUser: (user) => dispatch( loginUser(user) ),
        clearErrors: () => dispatch( clearErrors() )
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(UserLogin);
