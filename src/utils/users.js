import axios from "axios";
export const postUser = async (data) => {
  try {
    const response = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/users`, data, {
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
    alert('There was an error creating the user.');
  }
}

export const getUsers = async () => {
  try {
    const response = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/users`, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    if (response.status === 200) {
      return response.data;
    } else {
      throw new Error('Error fetching users');
    }
  } catch (error) {
    console.error(error);
    alert('There was an error fetching the users.');
  }
};

export const getUserById = async ({id}) => {
  try {
    const response = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/users/${id}` , {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    if (response.status === 200) {
      return response.data
    } else {
      return "Error fetching User"
    }
  } catch (error) {
    console.error(error);
    alert('There was an error creating the user.');
  }
}

