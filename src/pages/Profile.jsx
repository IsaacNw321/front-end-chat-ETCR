import { useEffect, useState } from 'react';
import UserCard from '../components/UserCard';
import './Profile.css';
import { getUsers } from '../utils/users';
import { Link, useNavigate } from 'react-router-dom';
import { useUser } from '../context/UserContext';
import { getChats } from '../utils/chat';

const Profile = () => {
  const [users, setUsers] = useState([]);
  const [chats, setChats] = useState([]);
  const { user, setUser } = useUser();
  const navigate = useNavigate();
  const userId = user.id
  console.log(userId)
  useEffect(() => {
    const fetchUsers = async () => {
      const response = await getUsers();
      setUsers(response);
    };
    fetchUsers();
    const fetchChats = async () => {
      if (user && user.id) {
        const response = await getChats(user.id);
        setChats(response);
      }
    };
    fetchChats();
  }, []);
  console.log(chats)
  let filterUsers;
  user.role === "SUPERUSER"
    ? filterUsers = users.filter(useR => useR.id !== user.id)
    : filterUsers = users.filter(useR => useR.role === "SUPERUSER");

  const startChat = (selectedUser) => {
    navigate('/chat', { state: { userId1: user.id, userId2: selectedUser.id } });
  };

  const handleLogout = () => {
    setUser(null);
    navigate('/');
  };

  return (
    <div className="profile-container">
      <header className="profile-header">
        <h1>Bienvenido, {user.userName}!</h1>
      </header>
      <main className="profile-main">
        <section className="user-list">
          {user.role === "SUPERUSER" ? <strong>Estudiantes</strong> : <strong>Psicologa</strong>}
          <div className="user-grid">
            {filterUsers.map((user) => (
              <UserCard key={user.id} user={user} onStartChat={() => startChat(user)} />
            ))}
          </div>
        </section>
      </main>
      {user.role === "SUPERUSER" ? 
        <Link to={'/dashboard'}>Panel de control</Link>
         : null}
      <button onClick={handleLogout}>
        Cerrar Sesion
      </button>
    </div>
  );
};

export default Profile;