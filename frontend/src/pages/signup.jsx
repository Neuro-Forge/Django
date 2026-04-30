import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import axios from 'axios';

// Define styled component FIRST (before using it)
const StyledWrapper = styled.div`
  min-height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  padding: 20px;
  box-sizing: border-box;

  .form-container {
    width: 100%;
    display: flex;
    justify-content: center;
  }

  .login {
    max-width: 400px;
    width: 100%;
    background-color: #ffffff;
    border-radius: 20px;
    padding: 30px;
    display: flex;
    flex-direction: column;
    gap: 15px;
  }

  .hader {
    text-align: center;
    font-size: 28px;
    font-weight: 700;
  }

  .hader p {
    text-align: center;
    font-size: 16px;
    font-weight: 400;
    color: #706b6b;
    margin: 5px 0 0 0;
  }

  .join {
    color: #151717;
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 15px;
    margin-top: 10px;
  }

  form input {
    height: 50px;
    outline: none;
    border: 1px solid #cccccc;
    padding: 10px 15px;
    font-size: 15px;
    border-radius: 10px;
    box-sizing: border-box;
  }

  form input:focus {
    border: 1.5px solid #2d79f3;
  }

  form input[type="submit"] {
    background-color: rgba(17, 17, 226, 0.8);
    color: #ffffff;
    font-size: 18px;
    font-weight: 600;
    cursor: pointer;
    border: none;
    transition: background-color 0.2s ease;
  }

  form input[type="submit"]:hover {
    background-color: rgba(17, 17, 226, 1);
  }

  .account-span {
    text-align: center;
    font-size: 16px;
    padding-top: 10px;
    color: #706b6b;
  }

  .link {
    text-decoration: none;
    color: #2d79f3;
    font-weight: 500;
    margin-left: 5px;
  }

  .link:hover {
    text-decoration: underline;
  }
`;

export const Register = () => {

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    try {
      const res = await axios.post(
        "http://127.0.0.1:8000",
        {
          username: formData.username,
          email: formData.email,
          password: formData.password
        }
      );

      alert("User registered successfully");
      console.log(res.data);

    } catch (error) {
      console.log(error.response?.data);
      alert("Registration failed");
    }
  };

  return (
    <StyledWrapper>
      <div className="form-container">
        <div className="login">
          <div className="hader">
            <span className="join">Join us today!</span>
            <p>Sign up now to become a member.</p>
          </div>

          <form onSubmit={handleSubmit}>
            <input 
              type="text" 
              name="username"
              placeholder="Enter Name" 
              required 
              onChange={handleChange}
            />

            <input 
              type="email" 
              name="email"
              placeholder="Enter Email" 
              required 
              onChange={handleChange}
            />

            <input 
              type="password" 
              name="password"
              placeholder="Choose A Password" 
              required 
              onChange={handleChange}
            />

            <input 
              type="password" 
              name="confirmPassword"
              placeholder="Re-Enter Password" 
              required 
              onChange={handleChange}
            />

            <input type="submit" value="Signup" />

            <span className="account-span">
              Already a member? 
              <Link to="/login" className="link">Login Here</Link>
            </span>

          </form>
        </div>
      </div>
    </StyledWrapper>
  );
};

export default Register;
