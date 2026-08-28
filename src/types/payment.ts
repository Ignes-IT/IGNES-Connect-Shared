/**
 * Payment-related types
 */

export enum PaymentProvider {
  YOOKASSA = 'yookassa',
  STRIPE = 'stripe',
  CRYPTO = 'crypto',
}

export enum PaymentStatus {
  PENDING = 'pending',
  PROCESSING = 'processing',
  SUCCESS = 'success',
  FAILED = 'failed',
  CANCELLED = 'cancelled',
  REFUNDED = 'refunded',
}

export interface ITransaction {
  id: string;
  userId: string;
  subscriptionId: string;
  amount: number;
  currency: string;
  provider: PaymentProvider;
  providerTransactionId: string;
  status: PaymentStatus;
  createdAt: Date;
  completedAt?: Date;
}

export interface IPaymentResult {
  success: boolean;
  transactionId: string;
  status: PaymentStatus;
  message: string;
  paymentUrl?: string;
}