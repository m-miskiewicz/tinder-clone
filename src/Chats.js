import React from 'react';
import './Chats.css';
import Chat from './Chat';

function Chats() {
    return (
        <div className="chats">
            <Chat
                name="Mark"
                message="Yo whats up!"
                timestamp="40 seconds ago"
                profilePic="https://upload.wikimedia.org/wikipedia/commons/7/7e/Circle-icons-profile.svg"
            />
            <Chat
                name="Peter"
                message="Whats going on?"
                timestamp="20 seconds ago"
                profilePic="https://upload.wikimedia.org/wikipedia/commons/7/7e/Circle-icons-profile.svg"
            />
            <Chat
                name="Sandra"
                message="Take care ;)"
                timestamp="1 min ago"
                profilePic="https://upload.wikimedia.org/wikipedia/commons/7/7e/Circle-icons-profile.svg"
            />
            <Chat
                name="Donna"
                message="Nice to see you."
                timestamp="15 min ago"
                profilePic="https://upload.wikimedia.org/wikipedia/commons/7/7e/Circle-icons-profile.svg"
            />
        </div>
    )
}

export default Chats
