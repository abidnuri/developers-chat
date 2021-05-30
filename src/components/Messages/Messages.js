import { Avatar } from '@material-ui/core';
import React from 'react';
import './Messages.css';

const Messages = () => {
    return (
        <div className="message">
            <Avatar/>
            <p>Messages</p>
            <small>Timestamp</small>
        </div>
    );
};

export default Messages;