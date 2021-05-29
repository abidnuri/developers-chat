import React from 'react';
import Chat from '../Chat/Chat';
import Sidebar from '../Sidebar/Sidebar';
import './DevelopersChat.css'

const DevelopersChat = () => {
    return (
        <div className="developersChat">
        <Sidebar/>
        <Chat />
        </div>
    );
};

export default DevelopersChat;