import { Avatar, IconButton } from '@material-ui/core';
import { RateReviewOutlined, Search } from '@material-ui/icons';
import React from 'react';
import SidebarChat from '../SidebarChat/SidebarChat';
import './Sidebar.css';

const Sidebar = () => {
    return (
        <div className='sidebar'>
            <h2>I am sidebar</h2>
            <div className="sidebar_header">
              <Avatar className="sidebar_avatar"/>
              <div className="sidebar_input">
                 <Search/>
                 <input placeholder='Search'></input>
              </div>
              <IconButton varient='outlined' className='sidebar_inputButton'>
              <RateReviewOutlined/>
              </IconButton>
              
            </div>
            <div className="sidebar_chats">
              <SidebarChat/>
              <SidebarChat/>
              <SidebarChat/>
              <SidebarChat/>
              <SidebarChat/>
              <SidebarChat/>
              <SidebarChat/>
              <SidebarChat/>
              <SidebarChat/>
              <SidebarChat/>
              <SidebarChat/>
              <SidebarChat/>
              <SidebarChat/>
              <SidebarChat/>
              <SidebarChat/>
              <SidebarChat/>
              <SidebarChat/>
              <SidebarChat/>
              <SidebarChat/>
              <SidebarChat/>
              <SidebarChat/>
              <SidebarChat/>
              <SidebarChat/>
              <SidebarChat/>
              <SidebarChat/>
              <SidebarChat/>
              <SidebarChat/>
              <SidebarChat/>
              <SidebarChat/>
              <SidebarChat/>
            </div>
        </div>
    );
};

export default Sidebar;