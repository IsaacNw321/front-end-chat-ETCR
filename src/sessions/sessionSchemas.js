import { z } from 'zod';

export const loginSchema = z.object({
  email: z.string().email("Dirección de correo electrónico no válida"),
  password: z.string().min(6, "La contraseña debe tener al menos 6 caracteres"),
});

export const registerSchema = z.object({
  email: z.string().email("Dirección de correo electrónico no válida"),
  password: z.string().min(6, "La contraseña debe tener al menos 6 caracteres"),
  confirmPassword: z.string().min(6, "La contraseña debe tener al menos 6 caracteres"),
  alias: z.string().min(3, "El alias debe tener al menos 3 caracteres"),
  age: z.number().min(13, "Debes tener al menos 13 años"),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Las contraseñas no coinciden",
  path: ["confirmPassword"],
});