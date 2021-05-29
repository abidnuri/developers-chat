import { Avatar, IconButton } from '@material-ui/core';
import { RateReviewOutlined, Search } from '@material-ui/icons';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { selectUser } from '../../features/user/userSlice';
import db, { auth } from '../Login/firebase.config';
import SidebarChat from '../SidebarChat/SidebarChat';
import './Sidebar.css';

const Sidebar = () => {

    const user = useSelector(selectUser);
    const [chats, setChats] = useState([]);

    useEffect(() => {
        db.collection('chats').onSnapshot(snapShot =>
            setChats(
                snapShot.docs.map((doc) => ({
                    id: doc.id,
                    data: doc.data(),
                }))
            ));
    }, []);

    const addChat = () => {

        const chatName = prompt('Please enter a chat name');

        if (chatName) {
            db.collection("chats").add({
                chatName: chatName,
            });
        }
    };

    return (
        <div className='sidebar'>
            <h2>I am sidebar</h2>
            <div className="sidebar_header">
                <Avatar onClick={() => auth.signOut()} src={user.photo} className="sidebar_avatar" />
                <div className="sidebar_input">
                    <Search />
                    <input placeholder='Search'></input>
                </div>
                <IconButton varient='outlined' className='sidebar_inputButton'>
                    <RateReviewOutlined onClick={addChat} />
                </IconButton>

            </div>
            <div className="sidebar_chats">
                {chats.map(({ id, data: { chatName } }) => (
                    <SidebarChat key={id} id={id} chatName={chatName} />
                ))}
            </div>
        </div>
    );
};

export default Sidebar;