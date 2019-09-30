import React, { Component } from 'react'
import { connect } from 'react-redux';
import { updateUser } from '../../store/actions/userActions.js';
import { passwordsDontMatch, clearErrors } from '../../store/actions/errorActions.js';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

class UserUpdate extends Component {
    state = {
        fullname: "",
        profile: "",
        email: "",
        id: this.props.user.id
    }
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.updateUser(this.state);
        this.props.history.push('/users/login');
    }
    componentDidMount() {
        this.setState({
            fullname: this.props.user.fullname,
            profile: this.props.user.profile,
            email: this.props.user.email
        });
        this.props.clearErrors();
    }
    render() {
        const content = (this.props.error) ? this.props.error.content : null;
        return (
            (this.props.token) ? (
            <div>
                <div className="container errors">
                    <h5>{ content }</h5>
                </div>
                <div className="container">
                    <Form onSubmit={this.handleSubmit} className="mt-3 mb-5">
                        <h5 className="display-4 mb-5">Update User</h5>
                        <FormGroup>
                            <Label for="fullname">Full Name</Label>
                            <Input type="text" name="fullname" id="fullname" placeholder="enter your full name"
                                onChange={this.handleChange} value={this.state.fullname} />
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
                        <Button color="primary" size="lg" block>Update</Button>
                    </Form>
                </div>
            </div>
            ) : null
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
        updateUser: (user) => dispatch( updateUser(user) ),
        passwordsDontMatch: () => dispatch( passwordsDontMatch() ),
        clearErrors: () => dispatch( clearErrors() )
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(UserUpdate);
