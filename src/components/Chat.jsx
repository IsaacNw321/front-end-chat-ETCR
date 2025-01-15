import { useState, useEffect } from 'react';
import { UserChat } from './UserChat';
import { getUserById } from '../utils/users';
import { createChat } from '../utils/chat';
import { useLocation } from 'react-router-dom';

const Chat = () => {
  const location = useLocation();
  const { userId1, userId2 } = location.state || {};
  const [user1, setUser1] = useState(null);
  const [user2, setUser2] = useState(null);
  const [chatId, setChatId] = useState(null);

  useEffect(() => {
    const fetchUsersAndCreateChat = async () => {
      try {
        const user1Data = await getUserById(userId1);
        const user2Data = await getUserById(userId2);
        setUser1(user1Data);
        setUser2(user2Data);

        const chatData = await createChat(userId1, userId2);
        setChatId(chatData.id);
      } catch (error) {
        console.error('Error fetching users or creating chat:', error);
      }
    };

    if (userId1 && userId2) {
      fetchUsersAndCreateChat();
    }
  }, [userId1, userId2]);

  if (!user1 || !user2 || !chatId) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>Chat between {user1.userName} and {user2.userName}</h2>
      <UserChat />
    </div>
  );
};

export default Chat;