import React from 'react';
import { Link } from 'react-router-dom';

function LastProjects (props) {
    let { lastprojects } = props;
    return (
        (lastprojects) ? (
            <div className="lastprojects section">
                { lastprojects.map( (project) => (
                    <div className="card text-dark bg-light mb-3" key={project.id}>
                        <div className="card-header">posted by: { project.username }</div>
                        <div className="card-body">
                            <Link to={'/projects/project/' + project.id}>
                                <h5 className="card-title">{ project.title }</h5>
                            </Link>
                            <p className="card-text">date: { project.modified }</p>
                        </div>
                    </div>    
                ))}
            </div>
        ) : null      
    )
}

export default LastProjects;
