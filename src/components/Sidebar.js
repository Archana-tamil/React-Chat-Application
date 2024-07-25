import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
// react-icons to plus button usage
import { FaPlus } from 'react-icons/fa';

import ContactList from './ContactList';
import dummyData from '../data/dummyData';
//importing all the profile images
import alice from "../profileImages/alice.jpg";
import bob from "../profileImages/bob.jpg";
import charlie from "../profileImages/charlie.jpg";
import { addConversation } from '../redux/chatReducers';

const profilePictures = {
  1: alice,
  2: bob,
  3: charlie,
  4:alice,
  5:bob,
  6:charlie,
};

const Sidebar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const conversations = useSelector(state => state.conversations.conversations);
  const [searchTerm, setSearchTerm] = useState('');
  const [showContactList, setShowContactList] = useState(false);
  //to filter the conversation and setting the new contact in sidebar
  const filteredConversations = conversations.filter(convo => {
    const contact = dummyData.contacts.find(contact => contact.id === convo.contactId);
    return contact && contact.name.toLowerCase().includes(searchTerm.toLowerCase());
  });
  //function to handle the create conversation functionality
  const handleCreateConversation = (contactId) => {
    const existingConversation = conversations.find(convo => convo.contactId === contactId);
    if (!existingConversation) {
      const newConversationId = conversations.length + 1;
      dispatch(addConversation({ contactId }));
      navigate(`/chat/${newConversationId}`);
    } else {
      navigate(`/chat/${existingConversation.id}`);
    }
    setShowContactList(false);
  };

  return (
    <div className="sidebar">
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <ul>
        {filteredConversations.map(convo => {
          const contact = dummyData.contacts.find(contact => contact.id === convo.contactId);
          const lastMessage = convo.messages.length > 0 ? convo.messages[convo.messages.length - 1].text : "No messages yet";
          return (
            <li key={convo.id}>
              <Link to={`/chat/${convo.id}`}>
                <div className="conversation-item">
                  <img src={profilePictures[contact.id]} alt={contact.name} className="profile-picture" />
                  <div className="conversation-info">
                    <h3>{contact.name}</h3>
                    <p>{lastMessage}</p>
                  </div>
                </div>
              </Link>
            </li>
          );
        })}
      </ul>
      <button onClick={() => setShowContactList(true)}>
        <FaPlus className="plus-icon" /> Create Conversation
      </button>
      {showContactList && <ContactList onSelectContact={handleCreateConversation} />}
    </div>
  );
};

export default Sidebar;
