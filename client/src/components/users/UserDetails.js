import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Jumbotron, Button } from 'reactstrap';

const UserDetails = (props) => {
    let { user } = props;
    return (
        (props.token) ? (
        <div>
            <Jumbotron>
                <h1 className="display-5">{ user.username }</h1>
                <p className="lead">{ user.profile }</p>
                <hr className="my-2" />
                <p>Name: { user.fullname }</p>
                <p>Email: { user.email }</p>
                <p>Created at: { user.created }</p>
                <Link to={'/app/users/update/' + user.id}>
                    <Button color="primary" size="lg">Update</Button>
                </Link>{' '}
                <Link to={'/app/users/delete/' + user.id}>
                    <Button color="danger" size="lg">Delete</Button>
                </Link>
            </Jumbotron>
        </div>
        ) : null
    )
}

function mapStateToProps (state) {
    return {
        user: state.auth.user,
        token: state.auth.token
    };
}

export default connect(mapStateToProps)(UserDetails);
