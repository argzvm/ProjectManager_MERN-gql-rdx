import React, { Component } from 'react'
import { connect } from 'react-redux';
import { signupUser } from '../../store/actions/userActions.js';
import { emptyFields, usernameTaken, passwordsDontMatch, clearErrors } from '../../store/actions/errorActions.js';
import { Button, Form, FormGroup, Label, Input, FormFeedback, Alert } from 'reactstrap';
import SignedOutNavbar from '../navbar/SignedOutNavbar.js';

class UserSignup extends Component {
    state = {
        fullname: "",
        username: "",
        profile: "",
        email: "",
        password: "",
        confirm: ""
    }
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        const { users } = this.props;
        if (this.state.fullname === "" || this.state.username === "" || this.state.profile === "" ||
        this.state.email === "" || this.state.password === "" || this.state.confirm === "") {

            this.props.emptyFields();
            this.setState( {password: "", confirm: ""} );
        } else {
            let taken = users.find( (user) => user.username === this.state.username );
            if (taken) {
                this.props.usernameTaken();
                this.setState( {username: "", password: "", confirm: ""} );
            } else {
                if (this.state.password !== this.state.confirm) {
                    this.props.passwordsDontMatch();
                    this.setState( {password: "", confirm: ""} );
                } else {
                    this.props.signupUser(this.state);
                    this.props.history.push('/login');
                }
            }
        }
    }
    componentDidMount() {
        this.props.clearErrors();
    }
    render() {
        const emptyError = (this.props.error && this.props.error.type === 'EMPTY_FIELDS') ? (
            <Alert color="danger">{ this.props.error.content }</Alert>
        ) : null;
        const usernameError = (this.props.error && this.props.error.type === 'USERNAME_TAKEN') ? true : false;
        const passwordError = (this.props.error && this.props.error.type === 'PASSWORDS_DONT_MATCH') ? true : false;
        return (
            <div>
                <SignedOutNavbar/>
                <div className="container">
                    <Form onSubmit={this.handleSubmit} className="mt-3 mb-5">
                        <h5 className="display-4 mb-5">Sign Up</h5>
                        <FormGroup>
                            <Label for="fullname">Full Name</Label>
                            <Input type="text" name="fullname" id="fullname" placeholder="enter your full name" 
                                onChange={this.handleChange} value={this.state.fullname} />
                        </FormGroup>
                        <FormGroup>
                            <Label for="username">Username</Label>
                            <Input type="text" name="username" id="username" placeholder="enter your username" 
                                onChange={this.handleChange} value={this.state.username} invalid={usernameError} />
                            <FormFeedback>this username is already taken</FormFeedback>
                        </FormGroup>
                        <FormGroup>
                            <Label for="profile">Profile</Label>
                            <Input type="textarea" name="profile" id="profile" 
                                onChange={this.handleChange} value={this.state.profile} />
                        </FormGroup>
                        <FormGroup>
                            <Label for="email">Email</Label>
                            <Input type="email" name="email" id="email" placeholder="enter your email" 
                                onChange={this.handleChange} value={this.state.email} />
                        </FormGroup>
                        <FormGroup>
                            <Label for="password">Password</Label>
                            <Input type="password" name="password" id="password" placeholder="enter your password" 
                                onChange={this.handleChange} value={this.state.password} invalid={passwordError} />
                            <FormFeedback>passwords do not match</FormFeedback>
                        </FormGroup>
                        <FormGroup>
                            <Label for="confirm">Confirm</Label>
                            <Input type="password" name="confirm" id="confirm" placeholder="confirm your password" 
                                onChange={this.handleChange} value={this.state.confirm} invalid={passwordError} />
                            <FormFeedback>passwords do not match</FormFeedback>
                        </FormGroup>
                        { emptyError }
                        <Button color="primary" size="lg" block>Sign Up</Button>
                    </Form>
                </div>
            </div>
        )
    }
}

function mapStateToProps (state) {
    return {
        users: state.data.users,
        error: state.error.error
    };
}

function mapDispatchToProps (dispatch) {
    return {
        signupUser: (user) => dispatch( signupUser(user) ),
        emptyFields: () => dispatch( emptyFields() ),
        usernameTaken: () => dispatch( usernameTaken() ),
        passwordsDontMatch: () => dispatch( passwordsDontMatch() ),
        clearErrors: () => dispatch( clearErrors() )
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(UserSignup);
