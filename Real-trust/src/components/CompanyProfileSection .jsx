import React from 'react';
import styled from '@emotion/styled';

import BackDrop2 from '../assets/images/BackDrop2.svg';
import BackDrop3 from '../assets/images/BackDrop3.svg';
import BackDrop4 from '../assets/images/BackDrop4.svg';


const CompanyProfileSection = () => {
  return (
    <ProfileWrapper>
    <div className="images">
        <div className="image-item image1"><img src={BackDrop2} alt="Image 1" /></div>
        <div className="image-item image2"><img src={BackDrop3} alt="Image 2" /></div>
        <div className="image-item image3"><img src={BackDrop4} alt="Image 3" /></div>
      </div>

      <div className="content">
        <h2>About Us</h2>
        <p>
          Fifteen years of experience in real estate, excellent customer service, and a commitment to work hard,
          listen, and follow through. We provide quality services to build relationships with clients and, more
          importantly, maintain those relationships by communicating effectively.
        </p>
        <button className="learn-more-button">Learn More</button>
      </div>

    </ProfileWrapper>
  );
};

export default CompanyProfileSection;

const ProfileWrapper = styled.section`


display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px 20px;
  background-color: #f9f9f9;
  position: relative;

  .content{
    padding-top:80px;
    border-bottom :14px solid  #f9f9f9;
  }

  .images {
    position: relative;
    width: 100%;
    height: 400px;
    margin-bottom: 20px;
  }

  .image-item {
    position: absolute;
    
    overflow: hidden;
  
  }

  .image1 {
    width: 250px;
    height: 250px;
    top: 10%;
    left: 20%;
    transform: translate(-20%, -10%);
  }

  .image2 {
    top: 70%;
    left: 50%;
    transform: translate(-50%, -50%);
    width:  420px;
    height: 300px;
    z-index: 1;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }

  .image3 {
    top: 45%;
    left: 65%;
    width: 250px;
    height: 250px;
   
    transform: translate(20%, -10%);
  }

  .image-item img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .content {
    text-align: center;
    max-width: 600px;
  }

  h2 {
    font-size: 28px;
    color: #1a1a1a;
    margin-bottom: 15px;
  }

  p {
    font-size: 16px;
    color: #666666;
    line-height: 1.6;
    margin-bottom: 20px;
  }

  .learn-more-button {
    font-size: 16px;
    color: #007bff;
    background-color: transparent;
    border: 2px solid #007bff;
    padding: 10px 20px;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s, color 0.3s;
  }

  .learn-more-button:hover {
    background-color: #007bff;
    color: white;
  }

 
`;