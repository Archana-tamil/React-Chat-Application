import alice from "../profileImages/alice.jpg";
import bob from "../profileImages/bob.jpg";
import charlie from "../profileImages/charlie.jpg";

const dummyData = {
  conversations: [
    {
      id: 1,
      contactId: 1,
      messages: [
        {
          text: 'Hey there!',
          timestamp: Date.now(),
        },
      ],
    },
    {
      id: 2,
      contactId: 2,
      messages: [
        {
          text: 'Hello!',
          timestamp: Date.now(),
        },
      ],
    },
    {
      id: 3,
      contactId: 3,
      messages: [
        {
          text: 'Hello! Archana',
          timestamp: Date.now(),
        },
      ],
    },
  ],
  contacts: [
    { id: 1, name: 'Alice', profilePicture: alice },
    { id: 2, name: 'Bob', profilePicture: bob },
    { id: 3, name: 'Charlie', profilePicture: charlie },
    { id: 4, name: 'Jack', profilePicture: alice},
    { id: 5, name: 'Nick', profilePicture: charlie },
    { id: 6, name: 'Taylor', profilePicture: bob},
    
  ],
};

export default dummyData;
