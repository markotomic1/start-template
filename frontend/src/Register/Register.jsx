import React, { useContext, useState } from "react";
import "./register.scss";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/authContext";

const Register = () => {
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const [userInfo, setUserInfo] = useState({
    username: "",
    email: "",
    password: "",
  });
  const { register } = useContext(AuthContext);

  const handleChange = (e) => {
    e.preventDefault();
    setUserInfo((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await register(userInfo);
      navigate("/");
    } catch (error) {
      setError(error.response.data);
    }
  };
  return (
    <div className='container'>
      <div>
        <h1>Register</h1>
        <form>
          <input
            type='text'
            placeholder='Username'
            name='username'
            onChange={handleChange}
          />
          <input
            type='email'
            placeholder='Email'
            name='email'
            onChange={handleChange}
          />
          <input
            type='password'
            placeholder='Password'
            name='password'
            onChange={handleChange}
          />
          <button onClick={handleSubmit} type='submit'>
            Register
          </button>
        </form>
        <span>
          Already have an an account. Please&nbsp;
          <Link
            to='/login'
            style={{ textDecoration: "none", color: "lightblue" }}
          >
            login
          </Link>
        </span>
        {error && <span style={{ color: "red" }}>{error}</span>}
      </div>
    </div>
  );
};

export default Register;
