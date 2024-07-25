import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import MessageInput from '../components/MessageInput';
import dummyData from '../data/dummyData';

const Chat = () => {
  const { id } = useParams();
  const conversations = useSelector(state => state.conversations.conversations);
  const conversation = conversations.find(convo => convo.id === parseInt(id));
 

  //If no Conversation is selected then this will be shown
  if (!conversation) {
    return (
      <div className="chat-not-found">
        <h2>Conversation not found.</h2>
      </div>
    );
  }
 //to find the new conversation
  const contact = dummyData.contacts.find(contact => contact.id === conversation.contactId);

  return (
    <div className="chat">
      <h2>Chat with {contact.name}</h2>
      <div className="messages">
        {conversation.messages.map((msg, index) => (
          <div key={index} className={`message ${msg.sender === 'me' ? 'message-me' : ''}`}>
            <p>{msg.text}</p>
            <span>{new Date(msg.timestamp).toLocaleString()}</span>
          </div>
        ))}
      </div>
      <MessageInput conversationId={conversation.id} />
    </div>
  );
};

export default Chat;
