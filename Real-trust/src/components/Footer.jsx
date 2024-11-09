import React from 'react';
import styled from '@emotion/styled';

import backgroundImage from '../assets/images/BackDrop3.svg'; 
import FooterNav from './FooterNav';
import logo from '../assets/images/logo.svg'

const Footer = () => {
  return (
    <>
    <FooterWrapper>
      <ContentWrapper>
        <HeaderText>Learn more about our listing process, as well as our additional staging and design work.</HeaderText>
        <LearnMoreButton>Learn More</LearnMoreButton>
      </ContentWrapper>
    </FooterWrapper>

    <FooterNav/>

    
    <FooterBottom>
      <FooterText>©Real Trust 2023</FooterText>
      
      <LogoContainer>
        <Logo src={logo} alt="Logo" />
      </LogoContainer>
      
      <SocialIcons>
        <SocialIcon href="#"><i className="fab fa-facebook-f"></i> Facebook</SocialIcon>
        <SocialIcon href="#"><i className="fab fa-twitter"></i> Twitter</SocialIcon>
        <SocialIcon href="#"><i className="fab fa-linkedin-in"></i>Linkedin</SocialIcon>
      </SocialIcons>
    </FooterBottom>
    </>
  );
};

export default Footer;

const FooterWrapper = styled.section`
  background-image: url(${backgroundImage});
  background-size: cover;
  background-position: center;
  padding: 60px 20px;
  height:500px;
  color: #ffffff;
`;

const ContentWrapper = styled.div`
  text-align: center;
  margin-bottom: 40px;
`;

const HeaderText = styled.h2`
  font-size: 24px;
  margin-bottom: 20px;
  font-weight: bold;
`;

const LearnMoreButton = styled.button`
  background-color: #ffffff;
  color: #007bff;
  padding: 10px 30px;
  border: none;
  border-radius: 5px;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #007bff;
    color: #ffffff;
  }
`;

const FooterBottom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #333333;
  padding: 10px 20px;
  color: white;
  height:50px;
`;

const FooterText = styled.div`
  font-size: 14px;
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1; /* Centers the logo */
`;

const Logo = styled.img`
  height: 24px;
  color:white;
`;

const SocialIcons = styled.div`
  display: flex;
  gap: 10px;
`;

const SocialIcon = styled.a`
  color: white;
  font-size: 18px;
`;
