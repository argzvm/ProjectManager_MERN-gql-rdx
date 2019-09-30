import React, { Component } from 'react'
import { connect } from 'react-redux';
import { createProject } from '../../store/actions/projectActions.js';
import { emptyFields, clearErrors } from '../../store/actions/errorActions.js';
import { Button, Form, FormGroup, Label, Input, Alert } from 'reactstrap';

class ProjectCreate extends Component {
    state = {
        title: "",
        content: "",
        private: false,
        username: this.props.user.username
    }
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    handlePrivate = () => {
        this.setState({
            private: !this.state.private
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        if (this.state.title === "" || this.state.content === "") {
            this.props.emptyFields();
        } else {
            this.props.createProject(this.state);
            this.props.history.push('/');
        }
    }
    componentDidMount() {
        this.props.clearErrors();
    }
    render() {
        let emptyError = (this.props.error && this.props.error.type === 'EMPTY_FIELDS') ? (
            <Alert color="danger">{ this.props.error.content }</Alert>
        ) : null;
        //if (this.props.token) { this.setState({ username: this.props.user.username }) }
        return (
            (this.props.token) ? (
            <div>
                <div className="container">
                    <Form onSubmit={this.handleSubmit} className="mt-3 mb-5">
                        <h5 className="display-4 mb-5">Create New Project</h5>
                        <FormGroup>
                            <Label for="title">Project Title</Label>
                            <Input type="text" name="title" id="title" placeholder="enter the title" 
                                onChange={this.handleChange} value={this.state.title} />
                        </FormGroup>
                        <FormGroup>
                            <Label for="content">Content</Label>
                            <Input type="textarea" rows="10" name="content" id="content" 
                                onChange={this.handleChange} value={this.state.content} />
                        </FormGroup>
                        <FormGroup check className="mb-3">
                            <Label check>
                                <Input 
                                    type="checkbox" onChange={this.handlePrivate} />{' '}
                                make it private
                            </Label>
                        </FormGroup>
                        { emptyError }
                        <Button className="mt-3" color="primary" size="lg" block>Create</Button>
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
        createProject: (project) => dispatch( createProject(project) ),
        emptyFields: () => dispatch( emptyFields() ),
        clearErrors: () => dispatch( clearErrors() )
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ProjectCreate);
