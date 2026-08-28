/**
 * Subscription-related types
 */

export enum SubscriptionPlan {
  BASIC = 'basic',
  PRO = 'pro',
  PREMIUM = 'premium',
}

export enum BillingCycle {
  MONTHLY = 'monthly',
  YEARLY = 'yearly',
}

export interface IPlanFeatures {
  maxDevices: number;
  bandwidth: number;
  serverLocations: number;
  supportLevel: 'basic' | 'standard' | 'premium';
  autoRenewal: boolean;
}

export interface ISubscription {
  id: string;
  userId: string;
  plan: SubscriptionPlan;
  status: 'active' | 'cancelled' | 'expired' | 'suspended';
  currentPeriodStart: Date;
  currentPeriodEnd: Date;
  billingCycle: BillingCycle;
  autoRenewal: boolean;
  createdAt: Date;
  updatedAt: Date;
}