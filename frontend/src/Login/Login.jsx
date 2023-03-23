import React, { useContext, useState } from "react";
import "./login.scss";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { AuthContext } from "../context/authContext";

const Login = () => {
  const [error, setError] = useState("");
  const [userInfo, setUserInfo] = useState({
    username: "",
    password: "",
  });
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);

  const handleChange = (e) => {
    e.preventDefault();
    setUserInfo((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await login(userInfo);
      navigate("/");
    } catch (error) {
      setError(error.response.data);
    }
  };
  return (
    <div className='container'>
      <div>
        <h1>Login</h1>
        <form>
          <input
            type='text'
            placeholder='Username'
            name='username'
            onChange={handleChange}
          />
          <input
            type='password'
            placeholder='Password'
            name='password'
            onChange={handleChange}
          />
          <button onClick={handleSubmit} type='submit'>
            Login
          </button>
        </form>

        <span>
          Already have an an account. Please&nbsp;
          <Link
            style={{ textDecoration: "none", color: "lightblue" }}
            to='/register'
          >
            register
          </Link>
        </span>
        {error && <span style={{ color: "red" }}>{error}</span>}
      </div>
    </div>
  );
};

export default Login;
