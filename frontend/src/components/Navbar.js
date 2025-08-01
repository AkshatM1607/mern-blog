import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  const logout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <nav className="navbar navbar-dark bg-dark px-3">
      <Link className="navbar-brand" to="/">📝 MERN-Blog</Link>
      <div>
        {localStorage.getItem("token") ? (
          <>
            <Link className="btn btn-outline-light mx-2" to="/dashboard">Dashboard</Link>
            <button className="btn btn-danger" onClick={logout}>Logout</button>
          </>
        ) : (
          <>
            <Link className="btn btn-outline-light mx-2" to="/login">Login</Link>
            <Link className="btn btn-outline-light" to="/register">Register</Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
