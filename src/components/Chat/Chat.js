import { IconButton } from '@material-ui/core';
import MicNoneIcon from '@material-ui/icons/MicNone';
import React, { useState } from 'react';
import Messages from '../Messages/Messages';
import './Chat.css'

const Chat = () => {

    const [input, setInput] = useState("");

    const sendMessage = (e) =>{
        e.preventDefault();

        // firebase

        setInput("");
    }

    return (
        <div className="chat">
            <div className="chat_header">
                <h4>To: <span className="chat_name">Channel Name</span></h4>
                <strong>Details</strong>
            </div>
            {/*chat message*/}
            <div className="chat_messages">
                <Messages/>
            </div>

            {/*chat input*/}
            <div className="chat_input">
                <form>
                    <input 
                        value={input} 
                        onChange={(e) => setInput(e.target.value)} 
                        placeholder="Developers chat" 
                        type="text"
                    />
                    <button onClick={sendMessage}>Send Message</button>
                </form>

                <IconButton>
                    <MicNoneIcon className="chat_mic"/>
                </IconButton>
            </div>
        </div>
    );
};

export default Chat;