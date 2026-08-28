import { z } from 'zod'

// Login schema
export const authLoginSchema = z.object({ 
    email: z.string().email({ message: 'Invalid email' }),
    password: z.string().min(8, {message: 'Invalid password'})
})

// Reset password schema
export const authResetPasswordSchema = z.object({
    email: z.string().email({ message: 'Invalid email' })   
})

// password recover schema
export const authRecoverPasswordSchema = z.object({
    token: z.string().min(1, { message: 'Invalid token' }),
    newPassword: z.string().min(8, { message: 'New password must be at least 8 characters long' })
})

// token refresh schema
export const authRefreshTokenSchema = z.object({
    refreshToken: z.string().min(1, {message: 'Invalid token min length 1'})
})