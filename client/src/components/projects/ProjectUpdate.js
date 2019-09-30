import React, { Component } from 'react'
import { connect } from 'react-redux';
import { updateProject } from '../../store/actions/projectActions.js';
import { clearErrors } from '../../store/actions/errorActions.js';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';


class ProjectUpdate extends Component {
    state = {
        title: "",
        content: "",
        private: false,
        id: this.props.match.params.id
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
        this.props.updateProject(this.state);
        this.props.history.push('/app');
    }
    componentDidMount() {
        let project = this.props.projects.find( (project) => project._id === this.props.match.params.id );
        this.setState({
            title: project.title,
            content: project.content,
            private: project.private
        });
        this.props.clearErrors();
    }
    render() {
        let privacy = (this.state.private) ? "private project" : "public project";
        return (
            (this.props.token) ? (
            <div>
                <div className="container">
                    <Form onSubmit={this.handleSubmit} className="mt-3 mb-5">
                        <h5 className="display-4 mb-5">Update Project</h5>
                        <FormGroup>
                            <h4>{ this.state.title }</h4>
                        </FormGroup>
                        <FormGroup>
                            <Label for="content">Content</Label>
                            <Input type="textarea" rows="10" name="content" id="content" 
                                onChange={this.handleChange} value={this.state.content} />
                        </FormGroup>
                        <FormGroup>
                            <Label for="title">{ privacy }</Label>
                        </FormGroup>
                        <Button className="mt-3" color="primary" size="lg" block>Update</Button>
                    </Form>
                </div>
            </div>
            ) : null
        )
    }
}

function mapStateToProps (state) {
    return {
        projects: state.data.projects,
        error: state.error.error,
        token: state.auth.token
    };
}

function mapDispatchToProps (dispatch) {
    return {
        updateProject: (project) => dispatch( updateProject(project) ),
        clearErrors: () => dispatch( clearErrors() )
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ProjectUpdate);
