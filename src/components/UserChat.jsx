import { useState, useEffect } from 'react';
// import io from 'socket.io-client';

// const socket = io('http://localhost:4000');

export const UserChat = () => {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([
    {
      body: "message",
      from: "user"
    }
  ]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // socket.emit('message', message);
    const newMessage = {
      body: message,
      from: "Me"
    };
    setMessages((prevMessages) => [newMessage, ...prevMessages]);
    setMessage('');
  };

  useEffect(() => {
    // const recivedMessage = (message) => {
    //   setMessages((prevMessages) => [message, ...prevMessages]);
    //   console.log(messages);
    // };

    // socket.on('message', recivedMessage);
    // return () => {
    //   socket.off('message', recivedMessage);
    // };
  }, [messages]);

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        onChange={(e) => setMessage(e.target.value)}
        value={message}
      />
      <button>
        Enviar
      </button>
      <ul>
        {messages.map((msg, index) => (
          <li key={index}>
            <p>{msg.from}: {msg.body}</p>
          </li>
        ))}
      </ul>
    </form>
  );
};