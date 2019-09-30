import React, { Component } from 'react'
import { connect } from 'react-redux';
import { deleteProject } from '../../store/actions/projectActions.js';
import { Button, Form } from 'reactstrap';

class ProjectDelete extends Component {
    state = {
        id: this.props.match.params.id
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.deleteProject(this.state);
        this.props.history.push('/app');
    }
    render() {
        return (
            (this.props.token) ? (
            <div>
                <div className="container">
                    <Form onSubmit={this.handleSubmit} className="mt-3 mb-5">
                        <h2>Are you sure you want to delete the project?</h2>
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
        token: state.auth.token
    };
}

function mapDispatchToProps (dispatch) {
    return {
        deleteProject: (project) => dispatch( deleteProject(project) )
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ProjectDelete);
