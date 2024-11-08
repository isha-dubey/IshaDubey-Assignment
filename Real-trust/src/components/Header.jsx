import React from 'react';
import styled from '@emotion/styled';
import logo from '../assets/images/logo.svg'
import { useNavigate } from 'react-router-dom';
const HeaderWrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 40px;
  background-color: #ffffff;
  height: 90px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  .logo {
    font-size: 24px;
    font-weight: bold;
    color: #0044cc;
    text-decoration: none;
  }

  nav {
    display: flex;
    gap: 20px;

    a {
      text-decoration: none;
      color: #333;
      font-weight: 500;
      transition: color 0.3s ease;

      &:hover {
        color: #0044cc;
      }
    }
  }
  div {
    display:flex;
    gap:10px;
  }
  button {
    padding: 10px 20px;
    background-color: #ff6600;
    color: #ffffff;
    border: none;
    border-radius: 5px;
    font-weight: 600;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: #e05500;
    }
  }
`;

export default function Header() {
  const navigate = useNavigate();
  // Function to handle scrolling to specific section by id
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <HeaderWrapper>
      <img src={logo} alt="YourLogo" style={{ height: '40px' }} />
      <nav>
        <a href="#!" onClick={() => scrollToSection('hero')}>Home</a>
        <a href="#!" onClick={() => scrollToSection('value-propositions')}>Servies</a>
        <a href="#!" onClick={() => scrollToSection('company-profile')}>About</a>
        <a href="#!" onClick={() => scrollToSection('our-projects')}>Projects</a>
        <a href="#!" onClick={() => scrollToSection('clients')}>Clients</a>
      </nav>
      <div>

      <button>Contact Us</button>
      <button onClick={() => navigate('/login')}>Admin Login</button>
      </div>
    </HeaderWrapper>
  );
}
