import axios from "axios";

export const createChat = async ({user1, user2}) =>{
  try {
    const response = await axios.post('http://localhost:4000/api/chats', {user1, user2}, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    if (response.status === 200) {
      return response.data
    } else {
      throw new Error('Error creating user');
    }
  } catch (error) {
    console.error(error);
  }
}

export const getChats = async (userId) => {
  try {
    const response = await axios.get(`http://localhost:4000/api/chats/user/${userId}`, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    if (response.status === 200) {
      return response.data;
    } else {
      throw new Error('Error retrieving chats');
    }
  } catch (error) {
    console.error(error);
    return [];
  }
};