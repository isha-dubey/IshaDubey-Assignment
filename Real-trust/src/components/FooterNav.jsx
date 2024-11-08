import React from 'react'
import styled from '@emotion/styled';

const FooterNavWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  background-color: #007bff;
  padding: 20px 0;
  align-items: center;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 20px;
`;

const NavItem = styled.a`
  color: #ffffff;
  text-decoration: none;
  font-weight: bold;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

const Subscription = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const SubscribeText = styled.span`
  color: #ffffff;
  font-weight: bold;
`;

const EmailInput = styled.input`
  padding: 8px;
  border-radius: 5px;
  border: none;
  outline: none;
`;

const SubscribeButton = styled.button`
  background-color: #ffffff;
  color: #007bff;
  padding: 8px 16px;
  border: none;
  border-radius: 5px;
  font-weight: bold;
  cursor: pointer;

  &:hover {
    background-color: #0066cc;
  }
`;

export default function FooterNav() {

 
  return (
    
        <FooterNavWrapper>
    <NavLinks>
      <NavItem>Home</NavItem>
      <NavItem>Services</NavItem>
      <NavItem>Projects</NavItem>
      <NavItem>Testimonials</NavItem>
      <NavItem>Contact</NavItem>
    </NavLinks>
    <Subscription>
      <SubscribeText>Subscribe to</SubscribeText>
      <EmailInput type="email" placeholder="Enter Your Email Address" />
      <SubscribeButton>Subscribe</SubscribeButton>
    </Subscription>
      </FooterNavWrapper>
  
  )
}


