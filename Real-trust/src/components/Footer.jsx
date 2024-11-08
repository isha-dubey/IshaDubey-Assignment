import React from 'react';
import styled from '@emotion/styled';

import backgroundImage from '../assets/images/BackDrop3.svg'; // Replace with the actual background image path
import FooterNav from './FooterNav';

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
        <FooterText>© Your Brand 2023</FooterText>
        <SocialIcons>
          <SocialIcon href="#"><i className="fab fa-facebook-f"></i></SocialIcon>
          <SocialIcon href="#"><i className="fab fa-twitter"></i></SocialIcon>
          <SocialIcon href="#"><i className="fab fa-linkedin-in"></i></SocialIcon>
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
`;

const FooterText = styled.span`
  color: #ffffff;
  font-size: 14px;
`;

const SocialIcons = styled.div`
  display: flex;
  gap: 15px;
`;

const SocialIcon = styled.a`
  color: #ffffff;
  font-size: 18px;
  text-decoration: none;

  &:hover {
    color: #007bff;
  }
`;
