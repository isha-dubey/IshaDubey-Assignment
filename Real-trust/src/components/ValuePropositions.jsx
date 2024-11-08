import React from 'react';
import styled from '@emotion/styled';
import { FaChartLine, FaPaintBrush, FaBullhorn } from 'react-icons/fa';

const ValuePropositions = () => {
  return (
    <ValuePropositionsWrapper>
      <h2 className="section-title">Why Choose Us?</h2>
      <div className="cards">
        <div className="card">
          <FaChartLine className="icon" />
          <h3>Potential ROI</h3>
          <p>
            Whether you are looking to buy, design, or renovate your commercial or residential space, we will lead you through potential returns on investment.
          </p>
        </div>
        <div className="card">
          <FaPaintBrush className="icon" />
          <h3>Design</h3>
          <p>
            Our thorough, art-driven design ensures that we help you realize your design options and create lasting solutions that are adaptable for home buyers.
          </p>
        </div>
        <div className="card">
          <FaBullhorn className="icon" />
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
  text-align: center;
  padding: 4rem 2rem;
  background-color: #f9f9f9;

  .section-title {
    font-size: 24px;
    font-weight: bold;
    color: #1f5af6;
    margin-bottom: 2rem;
    position: relative;
  }

  .section-title::after {
    content: '';
    display: block;
    width: 50px;
    height: 3px;
    background-color: #1f5af6;
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
    width: 250px;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    text-align: center;
  }

  .icon {
    font-size: 40px;
    color: #1f5af6;
    margin-bottom: 1rem;
  }

  h3 {
    font-size: 18px;
    color: #1f5af6;
    margin-bottom: 1rem;
  }

  p {
    font-size: 14px;
    color: #666;
  }
`;

export default ValuePropositions;
