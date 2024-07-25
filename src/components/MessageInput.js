import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addMessage } from '../redux/chatReducers';

const MessageInput = ({ conversationId }) => {
  const [message, setMessage] = useState('');
  const dispatch = useDispatch();
  //function to handle the input messages
  const handleSendMessage = () => {
    if (message.trim()) {
      dispatch(addMessage({
        conversationId,
        message: {
          text: message,
          timestamp: Date.now(),
        },
      }));
      setMessage('');
    } else {
      alert('Message cannot be empty');
    }
  };
 // to return all the inputed message 
  return (
    <div className="message-input">
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Type a message..."
      />
      <button onClick={handleSendMessage}>Send</button>
    </div>
  );
};

export default MessageInput;
