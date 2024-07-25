import { createSlice } from '@reduxjs/toolkit';
import dummyData from '../data/dummyData';

const initialState = {
  conversations: dummyData.conversations
};

const conversationsSlice = createSlice({
  name: 'conversations',
  initialState,
  reducers: {
    //to handle the addMessage 
    addMessage: (state, action) => {
      const { conversationId, message } = action.payload;
      const conversation = state.conversations.find((convo) => convo.id === conversationId);
      if (conversation) {
        conversation.messages.push({
          ...message,
          isSentByUser: true // Mark the message as sent by the user
        });
      }
    },
    //to handle the add conversation
    addConversation: (state, action) => {
      const { contactId } = action.payload;
      const newConversation = {
        id: state.conversations.length + 1,
        contactId,
        messages: []
      };
      state.conversations.push(newConversation);
    }
  }
});

export const { addMessage, addConversation } = conversationsSlice.actions;
export default conversationsSlice.reducer;
