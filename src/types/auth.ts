// src/types/auth.ts
export interface RegisterDto {
    username: string;
    email: string;
    password: string;
    phoneNumber?: string;
    country?: string;
    city?: string;
    state?: string;
    address?: string;
    role: string; // "User" or "Admin"
  }
  
  export interface LoginDto {
    email: string;
    password: string;
  }
  
  export interface TokenDto {
    accessToken: string;
    refreshToken: string;
    expiration: string;
  }