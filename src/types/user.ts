/**
 * User-related types
 */

export interface IUser {
  id: string;
  email: string;
  passwordHash: string;
  firstName?: string;
  lastName?: string;
  createdAt: Date;
  updatedAt: Date;
  isActive: boolean;
  isVerified: boolean;
  lastLogin?: Date;
}

export interface IUserCreate {
  email: string;
  password: string;
  firstName?: string;
  lastName?: string;
}

export interface IUserUpdate {
  firstName?: string;
  lastName?: string;
  email?: string;
}

export interface IUserResponse {
  id: string;
  email: string;
  firstName?: string;
  lastName?: string;
  createdAt: Date;
  isVerified: boolean;
}