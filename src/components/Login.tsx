// src/components/Login.tsx
import React, { useState } from 'react';
import { login } from '../services/authService';
import { LoginDto } from '../types/auth';

const Login: React.FC = () => {
  const [formData, setFormData] = useState<LoginDto>({ email: '', password: '' });
  const [error, setError] = useState<string | null>(null);
  const [token, setToken] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

 

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      debugger; // <-- This will pause execution in DevTools
      const response = await login(formData);
      setToken(response.accessToken);
      localStorage.setItem('accessToken', response.accessToken);
      localStorage.setItem('refreshToken', response.refreshToken);
      setError(null);
      alert('Login successful!');
    } catch (err: any) {
      setError(err.response?.data || 'Login failed');
    }
  };
  console.log(formData)

  return (
    <div>
      <h2>Login</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {token && <p>Token: {token}</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;