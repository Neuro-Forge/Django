import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const register = () => {
  return (
    <StyledWrapper>
      <div className="form-container">
        <div className="login">
          <div className="hader">
            <span className='join'>Join us today!</span>
            <p>Sign up now to become a member.</p>
          </div>
          <form action="#">
            <input type="text" placeholder="Enter Name" required />
            <input type="email" placeholder="Enter Email" required />
            <input type="password" placeholder="Choose A Password" required />
            <input type="password" placeholder="Re-Enter Password" required />
            <input type="submit" defaultValue="Signup" />
            <span className="account-span"> Already a member? <Link to="/login" className="link">Login Here</Link></span>
          </form>
        </div>
      </div>
    </StyledWrapper>
  );
}

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
    color: #151717;
  }

  .hader p {
    text-align: center;
    font-size: 16px;
    font-weight: 400;
    color: #706b6b;
    margin: 5px 0 0 0;
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

export default register;
