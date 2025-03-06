// src/services/authService.ts
import axios from 'axios';
import { RegisterDto, LoginDto, TokenDto } from '../types/auth';

const API_URL = 'http://localhost:5000/api/auth'; // Match your Kestrel HTTP endpoint

export const register = async (data: RegisterDto): Promise<any> => {
  const response = await axios.post(`${API_URL}/register`, data);
  return response.data;
};

export const login = async (data: LoginDto): Promise<TokenDto> => {
  const response = await axios.post(`${API_URL}/login`, data);
  return response.data;
};

export const refreshToken = async (refreshToken: string): Promise<TokenDto> => {
  const response = await axios.post(`${API_URL}/refresh-token`, { refreshToken });
  return response.data;
};

export const revokeToken = async (refreshToken: string, accessToken: string): Promise<void> => {
  await axios.post(
    `${API_URL}/revoke-token`,
    { refreshToken },
    {
      headers: { Authorization: `Bearer ${accessToken}` },
    }
  );
};