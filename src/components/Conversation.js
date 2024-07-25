import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
//importing the already present message in the conversation
import MessageInput from './MessageInput';

const Conversation = () => {
  const { id } = useParams();
  const conversations = useSelector(state => state.conversations.conversations);
  //to find the convo
  const conversation = conversations.find(convo => convo.id === parseInt(id));

  if (!conversation) {
    //if no conversation is selected
    return <div className="conversation">Conversation not found.</div>;
  }
 //to find the new contact from contact list 
  const contact = dummyData.contacts.find(contact => contact.id === conversation.contactId);

  return (
    <div className="conversation">
      <h2>Chat with {contact.name}</h2>
      <div className="messages">
        {conversation.messages.map((msg, index) => (
          <div key={index} className="message">
            <p>{msg.text}</p>
            <span>{new Date(msg.timestamp).toLocaleString()}</span>
          </div>
        ))}
      </div>
      <MessageInput conversationId={conversation.id} />
    </div>
  );
};

export default Conversation;
