"use client"
import { useState } from 'react';
import axios from '../../../../utils/axios';
import { useRouter } from 'next/navigation'
const AdminLogin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await axios.post('/auth/login', { username, password });
      localStorage.setItem('token', res.data.token);
      router.push('/admin');
    } catch (err: any) {
      setError(err.response?.data?.message || 'Something went wrong');
    }
  };

return (
  <div className="flex items-center justify-center h-screen">
    <form
      onSubmit={handleSubmit}
      className="bg-white p-6 rounded shadow-md w-full max-w-md overflow-hidden"
    >
 
      {error && <p className="text-red-500">{error}</p>}
      <div className="mb-4">
        <label className="block mb-1">Username</label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full border px-3 py-2"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block mb-1">Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full border px-3 py-2"
          required
        />
      </div>
      <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded">
        Login
      </button>
    </form>
  </div>
);

};

export default AdminLogin;
