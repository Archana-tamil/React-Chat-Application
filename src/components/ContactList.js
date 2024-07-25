import React from 'react';
//importing the dummy Data from the file
import dummyData from '../data/dummyData';
//function to select the contact
const ContactList = ({ onSelectContact }) => {
  return (
    <div className="contact-list">
      <h2>Select a contact</h2>
      <ul>
        {dummyData.contacts.map(contact => (
          <li key={contact.id} onClick={() => onSelectContact(contact.id)}>
            {contact.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContactList;
