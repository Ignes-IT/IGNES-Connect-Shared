import { z } from 'zod';

// Payment create schema

export const paymentCreateSchema = z.object ({
    amount: z.number().positive({ message: 'Amount must be a positive number'}),
    currency: z.enum(['USD', 'EUR', 'GBP']),
    provider: z.enum([ 'Yookassa', 'Stripe', 'Crypto']),
    subscriptionId: z.string().optional(),
    providerData: z.record(z.any()).optional(),
});

// Webhook schema 

export const paymentWebhookSchema = z.object({
    provider: z.enum(['Yookassa', 'Stripe', 'Crypto']),
    event: z.string(),
    data: z.record(z.any()),
});