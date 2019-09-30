import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Jumbotron, Button, Popover, PopoverHeader, PopoverBody } from 'reactstrap';

class ProjectDetails extends React.Component {
    state = {
        popoverOpen: false
    }
    toggle = () => {
        this.setState({
            popoverOpen: !this.state.popoverOpen
        });
    }
    render() {
        // let project = this.props.projects.find(
        //     (project) => project._id === this.props.match.params.id
        // );
        // let user = this.props.users.find( (user) => project.username === user.username );
        // let ownProject = (project.username === this.props.username) ? true : false;
        let project = null, user = null, ownProject = null;
        if (this.props.token) {
            project = this.props.projects.find(
                (project) => project._id === this.props.match.params.id
            );
            // user = this.props.users.find( (user) => project.username === user.username );
            // ownProject = (project.username === this.props.username) ? true : false;
        }
        return (
            (this.props.token) ? (
            (project) ? (
                (ownProject) ? (
                    <div>
                        <Jumbotron>
                            <h1 className="display-5 mb-5">{ project.title }</h1>
                            <pre>{ project.content }</pre>
                            <hr className="my-2" />
                            <p>posted by: <span style={{textDecoration: "underline", color:"blue"}} href="#" id="TooltipExample">{ project.username }</span>.</p>
                            <Popover placement="right"  isOpen={this.state.popoverOpen} target="TooltipExample" toggle={this.toggle}>
                                <PopoverHeader className="bg-info text-white">{ user.username }</PopoverHeader>
                                <PopoverBody className="bg-dark text-white">{ user.profile }</PopoverBody>
                                <PopoverBody className="bg-dark text-white">Created at: { user.created }</PopoverBody>
                                <PopoverBody className="bg-dark text-white">Last login: { user.login }</PopoverBody>
                            </Popover>
                            <p>created at: { project.created }</p>
                            <p>modified at: { project.modified }</p>
                            <Link to={'/app/projects/update/' + project.id}>
                                <Button color="primary" size="lg">Update</Button>
                            </Link>{' '}
                            <Link to={'/app/projects/delete/' + project.id}>
                                <Button color="danger" size="lg">Delete</Button>
                            </Link>
                        </Jumbotron>
                    </div>
                ) : (
                    <div>
                        <Jumbotron>
                            <h1 className="display-5 mb-5">{ project.title }</h1>
                            <pre>{ project.content }</pre>
                            <hr className="my-2" />
                            <p>posted by: <span style={{textDecoration: "underline", color:"blue"}} href="#" id="TooltipExample">{ project.username }</span>.</p>
                            <Popover placement="right"  isOpen={this.state.popoverOpen} target="TooltipExample" toggle={this.toggle}>
                                <PopoverHeader className="bg-info text-white">{ user.username }</PopoverHeader>
                                <PopoverBody className="bg-dark text-white">{ user.profile }</PopoverBody>
                                <PopoverBody className="bg-dark text-white">Created at: { user.created }</PopoverBody>
                                <PopoverBody className="bg-dark text-white">Last login: { user.login }</PopoverBody>
                            </Popover>
                            <p>created at: { project.created }</p>
                            <p>modified at: { project.modified }</p>
                        </Jumbotron>
                    </div>
                )
            ) : null
            ) : null
        )
    }
};

function mapStateToProps (state) {
    return {
        projects: state.data.projects,
        users: state.data.users,
        // username: state.auth.user.username,
        token: state.auth.token
    };
}

export default connect(mapStateToProps)(ProjectDetails);
