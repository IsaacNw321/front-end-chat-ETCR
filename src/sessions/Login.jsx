import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { loginSchema } from './sessionSchemas'; 
import { getUsers } from '../utils/users';
import './sessions.css'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUser } from '../context/UserContext';
export const Login = () => {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(loginSchema),
  });
  const [error, setError] = useState(null)
  const navigate = useNavigate();
  const { setUser } = useUser();
  const onSubmit = async (data) => {
    try {
      if (data) {
        const { email, password } = data;
        console.log(data);
        const users = await getUsers();
        console.log(users);
        const user = users.find(user => user.email === email && user.password === password);
        if (user) {
          setUser(user);
          navigate('/profile', { state: { user } }); 
        } else {
          console.log("El correo o contraseña son incorrectos, intente nuevamente");
          setTimeout(() => {
            setError("El correo o contraseña son incorrectos, intente nuevamente");
          }, 3000);
        }
      }
    } catch (error) {
      console.error(error);
    }
  };


  return (
    <div className="auth-container">
      <h2>Iniciar Sesion</h2>
    <form onSubmit={handleSubmit(onSubmit)} className='auth-form'>
      {error ? <p>{error}</p> : null}
      <div className='form-field'>
        <label htmlFor="email">Email</label>
        <input id="email" type="email" {...register('email')} />
        {errors.email && <p>{errors.email.message}</p>}
      </div>
      <div className='form-field'>
        <label htmlFor="password">Password</label>
        <input id="password" type="password" {...register('password')} />
        {errors.password && <p>{errors.password.message}</p>}
      </div>
      <button className='auth-button' type="submit">Iniciar Sesion</button>
    </form>
    </div>
  );
};