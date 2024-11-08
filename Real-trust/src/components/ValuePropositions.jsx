import React from 'react';
import styled from '@emotion/styled';
import { FaChartLine, FaPaintBrush, FaBullhorn } from 'react-icons/fa';
import Dollar from '../assets/icons/circle-dollar-sign.svg'
import Home from '../assets/icons/home.svg'

import Brush from '../assets/icons/paintbrush-2.svg'


const ValuePropositions = () => {
  return (
    <ValuePropositionsWrapper>
      <h2 className="section-title">Why Choose Us?</h2>
      <div className="cards">
        <div className="card">
          <img className="icon"  src={Home} alt="dollar"/>
          <h3>Potential ROI</h3>
          <p>
            Whether you are looking to buy, design, or renovate your commercial or residential space, we will lead you through potential returns on investment.
          </p>
        </div>
        <div className="card">
          <img className="icon" src={Brush} alt="dollar" />
          <h3>Design</h3>
          <p>
            Our thorough, art-driven design ensures that we help you realize your design options and create lasting solutions that are adaptable for home buyers.
          </p>
        </div>
        <div className="card">
          <img className="icon"  src={Dollar} alt="dollar" />
          <h3>Marketing</h3>
          <p>
            Leveraging our market strategy, we create and execute powerful marketing plans for a consistently strong return to result-driven business.
          </p>
        </div>
      </div>
    </ValuePropositionsWrapper>
  );
};

const ValuePropositionsWrapper = styled.section`
height:500px;
  text-align: center;
  padding: 4rem 2rem;
  background-color: #f9f9f9;

  .section-title {
    font-size: 24px;
    font-weight: bold;
    color: #4d92f8;
    margin-bottom: 2rem;
    position: relative;
  }

  .section-title::after {
    content: '';
    display: block;
    width: 50px;
    height: 3px;
    background-color: #4d92f8;
    margin: 0.5rem auto 2rem;
  }

  .cards {
    display: flex;
    justify-content: center;
    gap: 2rem;
  }

  .card {
    background-color: #ffffff;
    padding: 2rem;
    width: 450px;
    height: 300px;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    text-align: center;
  }

  .icon {
    font-size: 40px;
    color: #4d92f8;
    margin-bottom: 2rem;
  }

  h3 {
    font-size: 18px;
    color: #4d92f8;
    margin-bottom: 2rem;
  }

  p {
    font-size: 14px;
    color: #666;
  }
`;

export default ValuePropositions;
