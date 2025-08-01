import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

const Register = () => {
  const [form, setForm] = useState({ username: '', password: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('https://mern-blog-backend-m0x4.onrender.com/api/auth/register', form);
      toast.success("Registered successfully!");
    } catch (err) {
      toast.error("Registration failed!");
    }
  };

  return (
    <div className="col-md-6 mx-auto">
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Username" className="form-control mb-2"
          onChange={e => setForm({ ...form, username: e.target.value })} />
        <input type="password" placeholder="Password" className="form-control mb-2"
          onChange={e => setForm({ ...form, password: e.target.value })} />
        <button className="btn btn-primary w-100">Register</button>
      </form>
    </div>
  );
};

export default Register;
