import { z } from 'zod';

// Register schema
export const userRegisterSchema = z.object({
    email: z.string().email({ message: 'Invalid email'}),
    password: z.string().min(8, {message: 'Password must be at least 8 characters long'}),
    firstName: z.string().max(50, { message: 'First name must be at most 50 characters long'}),
    lastName: z.string().max(50, { message: 'Last name must be at most 50 characters long'})
})

// Login schema
export const userLoginSchema = z.object({
    email: z.string().email({ message: 'Invalid email'}),
    password: z.string().min(8, {message: 'Password must be at least 8 characters long'})
})

// Profile update schema
export const userUpdateSchema = z.object({
    email: z.string().email({ message: 'Invalid email'}),
    firstName: z.string().max(50, { message: 'First name must be at most 50 characters long'}), 
    lastName: z.string().max(50, { message: 'Last name must be at most 50 characters long'}),   
})

// Password update schema
export const userPasswordUpdateSchema = z.object({
    currentPassword: z.string().min(8, {message: 'Current password must be at least 8 characheters long'}),
    newPassword: z.string().min(8, {message: 'New password must be at least 8 characters long'})
})