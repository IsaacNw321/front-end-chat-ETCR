import axios from "axios";
export const postUser = async (data) => {
  try {
    const response = await axios.post('http://localhost:4000/api/users', data, {
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
    const response = await axios.get('http://localhost:4000/api/users', {
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
    const response = await axios.get(`http://localhost:4000/api/users/${id}` , {
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

export const checkRegisteredUser = async ({email, alias}) => {
  try {
    const response = await axios.get('http://localhost:4000/api/users', {email, alias} , {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    if (response.status === 200) {
      return "This user us already registered"
    } else {
      return "This user is not registered"
    }
  } catch (error) {
    console.error(error);
    alert('There was an error creating the user.');
  }
}