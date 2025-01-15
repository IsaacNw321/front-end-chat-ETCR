
const UserCard = ({ user, onStartChat }) => {
  return (
    <div className="user-card" onClick={() => onStartChat(user)}>
      <h3>{user.userName}</h3>
    </div>
  );
};

export default UserCard;
