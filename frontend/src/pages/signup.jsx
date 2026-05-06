import React, { useState } from 'react';
import styled from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';
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

  .error-message {
    color: #dc3545;
    font-size: 14px;
    text-align: center;
    padding: 10px;
    background-color: #f8d7da;
    border-radius: 5px;
  }

  .success-message {
    color: #155724;
    font-size: 14px;
    text-align: center;
    padding: 10px;
    background-color: #d4edda;
    border-radius: 5px;
  }
`;

export const Register = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    password2: ""
  });

  const [message, setMessage] = useState({ type: "", text: "" });
  const [loading, setLoading] = useState(false);

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
    setMessage({ type: "", text: "" });

    if (formData.password !== formData.password2) {
      setMessage({ type: "error", text: "Passwords do not match" });
      return;
    }

    if (!formData.username || !formData.email || !formData.password) {
      setMessage({ type: "error", text: "Please fill in all fields" });
      return;
    }

    setLoading(true);

    try {
const response = await axios.post(
        "http://127.0.0.1:8000/api/register/",
        {
          username: formData.username,
          email: formData.email,
          password: formData.password,
          password2: formData.password2
        },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );

      console.log("Response:", response.data);
      setMessage({ type: "success", text: "Registration successful! Please login." });
      
      // Clear form
      setFormData({
        username: "",
        email: "",
        password: "",
        password2: ""
      });
      navigate('/login');

    } catch (error) {
      console.error("Error:", error);
      
      if (error.response) {
        const errorMsg = error.response.data?.message || 
                     error.response.data?.password?.[0] || 
                     error.response.data?.username?.[0] || 
                     "Registration failed";
        setMessage({ type: "error", text: errorMsg });
      } else if (error.request) {
        setMessage({ type: "error", text: "Cannot connect to server. Make sure Django is running on port 8000." });
      } else {
        setMessage({ type: "error", text: "An error occurred. Please try again." });
      }
    } finally {
      setLoading(false);
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

          {message.text && (
            <div className={message.type === "error" ? "error-message" : "success-message"}>
              {message.text}
            </div>
          )}

          <form onSubmit={handleSubmit}>
            <input 
              type="text" 
              name="username"
              placeholder="Enter Name" 
              value={formData.username}
              required 
              onChange={handleChange}
            />

            <input 
              type="email" 
              name="email"
              placeholder="Enter Email" 
              value={formData.email}
              required 
              onChange={handleChange}
            />

            <input 
              type="password" 
              name="password"
              placeholder="Choose A Password" 
              value={formData.password}
              required 
              onChange={handleChange}
            />

            <input 
              type="password" 
              name="password2"
              placeholder="Confirm Password" 
              value={formData.password2}
              required 
              onChange={handleChange}
            />

            <input type="submit" value={loading ? "Registering..." : "Signup"} disabled={loading} />

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
