import { z }  from "zod";


// Subscription creation schema

export const subscriptionCreateSchema = z.object({
    plan: z.enum(['basic', 'pro', 'premium'], {
        errorMap: () => ({ message: 'Invalid subscription plan' })
    }),
    paymentMethod: z.enum(['card', 'crypto', 'mobile'], {
        errorMap: () => ({ message: 'Invalid payment method' })
    }),
    autoRenew: z.boolean().optional().default(true)
});


// Subscription cancel schema
export const subscriptionCancelSchema = z.object({
    reason: z.string().max(500, { message: 'Reason must be at most 500 characters long'})
})