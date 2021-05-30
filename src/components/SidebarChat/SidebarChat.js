import { Avatar } from '@material-ui/core';
import React from 'react';
import { useDispatch } from 'react-redux';
import './SidebarChat.css'
import { setChat } from "../../features/user/chatSlice";

const SidebarChat = ({ id, chatName }) => {

    const dispatch = useDispatch();
    return (
        <div
            onClick={() =>
                dispatch(
                    setChat({
                        chatId: id,
                        chatName: chatName
                    })
                )
            }

            className="sidebarChat"
        >
            <Avatar />
            <div className="sidebarChat_info">
                <h3>{chatName}</h3>
                <p>Last Message sent..</p>
                <small>timestamp</small>
            </div>
        </div>
    );
};

export default SidebarChat;