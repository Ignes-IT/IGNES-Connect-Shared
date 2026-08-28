import { z } from 'zod';

// Device creation schema
export const deviceCreateSchema = z.object({
    name: z.string().min(1, { message: 'Enter device name' }),
    type: z.enum(['mobile', 'desktop']),
    platform: z.enum(['ios', 'android', 'windows', 'macos', 'linux'])
})

// Device update schema
export const deviceUpdateSchema = z.object({
    name: z.string().min(1).max(100).optional(),
    isActive: z.boolean().optional(),
});

// Config generation schema
export const configGenerateSchema = z.object({
    deviceId: z.string().min(1, { message: 'Device ID is required'}),
    serverId: z.string().optional(),
});