import React from 'react';
import { Toast, ToastBody, ToastHeader } from 'reactstrap';

function Notifications (props) {
    let { notifications } = props;
    return (
        (notifications) ? (
            <div className="lastprojects section" >
                { notifications.map( (notification) => (
                    <div className="p-3 my-2 rounded bg-docs-transparent-grid" key={notification.id}>
                        <Toast>
                        <ToastHeader>
                            { notification.username }
                        </ToastHeader>
                        <ToastBody>
                            { notification.message }
                            { notification.title || null }
                            { notification.created || notification.modified }
                        </ToastBody>
                        </Toast>
                    </div>
                ))}
            </div>
        ) : null
    )
};

export default Notifications;
