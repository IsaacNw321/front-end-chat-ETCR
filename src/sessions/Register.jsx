import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { registerSchema } from './sessionSchemas'; 
import { postUser, getUsers } from '../utils/users';
import './sessions.css'
import { useState } from 'react';
export const Register = () => {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(registerSchema),
  });
  const [error, setError] = useState('');
  const onSubmit = async (info) => {
    try {
      if (info) {
        const { email, alias } = info;
        console.log(info)
        const users =  await getUsers()
        console.log(users);
        if (users.some(user => user.email === email) || users.some(user => user.userName === alias)) {
          console.log("This user is already registered")
          setError("El usuario o correo ya existen, intente con otros")
        } else {
          const response = await postUser(info)
          if (response) {
            console.log('User created successfully:', response);
            setError("La informacion ha sido guardada")
            window.location.href = '/login';
          } else {
            throw new Error('Error creating user');
          }
        }
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="form-container">
    <form onSubmit={handleSubmit(onSubmit)} className="auth-form">
      {error && <p className="error-message">{error}</p>}
      <div className="form-field">
        <label htmlFor="alias">Alias</label>
        <input id="alias" type="text" {...register('alias')} />
        {errors.alias && <p className="error-message">{errors.alias.message}</p>}
      </div>
      <div className="form-field">
        <label htmlFor="email">Correo</label>
        <input id="email" type="email" {...register('email')} />
        {errors.email && <p className="error-message">{errors.email.message}</p>}
      </div>
      <div className="form-field">
        <label htmlFor="password">Contraseña</label>
        <input id="password" type="password" {...register('password')} />
        {errors.password && <p className="error-message">{errors.password.message}</p>}
      </div>
      <div className="form-field">
        <label htmlFor="confirmPassword">Confirmar Contraseña</label>
        <input id="confirmPassword" type="password" {...register('confirmPassword')} />
        {errors.confirmPassword && <p className="error-message">{errors.confirmPassword.message}</p>}
      </div>
      <div className="form-field">
        <label htmlFor="age">Edad</label>
        <input id="age" type="number" {...register('age', { valueAsNumber: true })} />
        {errors.age && <p className="error-message">{errors.age.message}</p>}
      </div>
      <button className="auth-button" type="submit">Registrarme</button>
    </form>
  </div>
  );
};