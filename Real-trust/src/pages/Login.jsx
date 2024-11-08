import React, { useState } from 'react';
import styled from '@emotion/styled';
import { useAuth } from '../firebase/AuthProvider';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const { signIn, error } = useAuth(); // Access signIn function and error message from AuthProvider
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [localError, setLocalError] = useState(''); // Local state for handling additional error messages
  const navigate = useNavigate(); // React Router's navigate function

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLocalError(''); // Clear local error on each submit attempt

    try {
      const user = await signIn(formData.email, formData.password); // Attempt to sign in with Firebase
      if (user) {
        alert('Login Successful!');
        navigate('/admin'); // Redirect to AdminPanel if login is successful
      } else {
        setLocalError(error || 'Login failed. Please try again.');
      }
    } catch (err) {
      setLocalError(error || 'Login failed. Please try again.'); // Set error from Firebase or default message
    }
  };

  return (
    <Container>
      <LoginForm> 
        <Heading>Admin Login</Heading>
        <Subtitle>Please login to your account</Subtitle>
        {localError && <ErrorMessage>{localError}</ErrorMessage>}
        <Form onSubmit={handleSubmit}>
          <Input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <Input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
          />
          <Button type="submit">Login</Button>
        </Form>
      </LoginForm>
    </Container>
  );
};





// Styled components using @emotion/styled
const Container = styled.div`
  
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: linear-gradient(160deg, #ff6600, #f5ddce);
  border-radius: 10px;
`;

const LoginForm = styled.div`
  width: 400px;
  padding: 40px;
  background: white;
  border-radius: 10px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  text-align: center;
  animation: fadeIn 1s ease-in-out;

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(-20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

const Heading = styled.h1`
  font-size: 24px;
  color: #333;
  margin-bottom: 10px;
`;

const Subtitle = styled.p`
  font-size: 16px;
  color: #666;
  margin-bottom: 30px;
`;

const ErrorMessage = styled.p`
  color: red;
  font-size: 14px;
  margin-bottom: 20px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  padding: 15px;
  margin-bottom: 20px;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 16px;
  transition: border 0.3s;

  &:focus {
    outline: none;
    border: 1px solid #50c9c3;
  }
`;

const Button = styled.button`
  padding: 15px;
  border: none;
  border-radius: 5px;
  background-color: #ff6600;
  color: white;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
      background-color: #d15502;


  }
`;

export default Login;
