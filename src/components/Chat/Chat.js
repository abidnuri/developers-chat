import { IconButton } from '@material-ui/core';
import MicNoneIcon from '@material-ui/icons/MicNone';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Messages from '../Messages/Messages';
import './Chat.css'
import { selectChatId, selectChatName } from '../../features/user/chatSlice'
import db from '../Login/firebase.config';
import firebase from "firebase";
import { selectUser } from '../../features/user/userSlice';
import FlipMove from 'react-flip-move';

const Chat = () => {
    const user = useSelector(selectUser);
    const [input, setInput] = useState("");
    const chatName = useSelector(selectChatName);
    const chatId = useSelector(selectChatId);
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        if (chatId) {
            db.collection("chats")
                .doc(chatId)
                .collection("messages")
                .orderBy("timestamp", "desc")
                .onSnapshot((snapshot) =>
                    setMessages(
                        snapshot.docs.map((doc) => ({
                            id: doc.id,
                            data: doc.data()
                        }))
                    )
                );
        }
    }, [chatId])


    const sendMessage = (e) => {
        e.preventDefault();

        db.collection("chats").doc(chatId).collection("messages").add({
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            message: input,
            uid: user.uid,
            photo: user.photo,
            email: user.email,
            displayName: user.displayName,

        });

        setInput("");
    }

    return (
        <div className="chat">
            <div className="chat_header">
                <h4>To: <span className="chat_name">{chatName}</span></h4>
                <strong>Details</strong>
            </div>
            {/*chat message*/}
            <div className="chat_messages">
                <FlipMove>
                    {messages.map(({ id, data }) => (
                        <Messages key={id} contents={data} />
                    ))}
                </FlipMove>
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
                    <MicNoneIcon className="chat_mic" />
                </IconButton>
            </div>
        </div>
    );
};

export default Chat;