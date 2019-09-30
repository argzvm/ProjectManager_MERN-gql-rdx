import React, { Component } from 'react'
import { connect } from 'react-redux';
import { deleteUser } from '../../store/actions/userActions.js';
import { Button, Form } from 'reactstrap';

class UserDelete extends Component {
    state = {
        id: this.props.user.id
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.deleteUser(this.state);
        this.props.history.push('/');
    }
    render() {
        return (
            (this.props.token) ? (
            <div>
                <div className="container">
                <Form onSubmit={this.handleSubmit} className="mt-3 mb-5">
                    <h2>Are you sure you want to delete your account?</h2>
                    <h4 className="display-4 mb-3">Please Confirm</h4>
                    <Button color="danger" size="lg">Delete</Button>
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
        token: state.auth.token
    };
}

function mapDispatchToProps (dispatch) {
    return {
        deleteUser: (user) => dispatch( deleteUser(user) )
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(UserDelete);
