import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [form, setForm] = useState({ username: '', password: '' });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/api/auth/login', form);
      localStorage.setItem("token", res.data.token);
      toast.success("Login successful!");
      navigate("/dashboard");
    } catch (err) {
      toast.error("Login failed!");
    }
  };

  return (
    <div className="col-md-6 mx-auto">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Username" className="form-control mb-2"
          onChange={e => setForm({ ...form, username: e.target.value })} />
        <input type="password" placeholder="Password" className="form-control mb-2"
          onChange={e => setForm({ ...form, password: e.target.value })} />
        <button className="btn btn-success w-100">Login</button>
      </form>
    </div>
  );
};

export default Login;
