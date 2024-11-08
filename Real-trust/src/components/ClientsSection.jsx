import React from 'react';
import styled from '@emotion/styled';

import BackDrop4 from '../assets/images/BackDrop4.svg';

// Sample data for dynamic content
const clientData = [
  { name: "Hannah Smith", position: "CEO, Some Co.", testimonial: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vel leo sit amet augue facilisis.", image: BackDrop4 },
  { name: "Shreya Kapok", position: "Product Manager", testimonial: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vel leo sit amet augue facilisis.", image: BackDrop4 },
  { name: "John Lopez", position: "CTO, Techno Solutions", testimonial: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vel leo sit amet augue facilisis.", image: BackDrop4 },
  { name: "Marty Freeman", position: "General Manager", testimonial: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vel leo sit amet augue facilisis.", image: BackDrop4 },
  { name: "Lucy", position: "Sales Rep", testimonial: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vel leo sit amet augue facilisis.", image: BackDrop4 }
];

const ClientSection = () => {
  return (
    <ClientsWrapper>
      <h2>Happy Clients</h2>
      <div className="clients-container">
        {clientData.map((client, index) => (
          <ClientCard key={index}>
            <img src={client.image} alt={client.name} />
            <p>{client.testimonial}</p>
            <h3>{client.name}</h3>
            <span>{client.position}</span>
          </ClientCard>
        ))}
      </div>
    </ClientsWrapper>
  );
};

export default ClientSection;

const ClientsWrapper = styled.section`
  text-align: center;
  padding: 50px 20px;
  background-color: #f3f9ff;

  h2 {
    font-size: 34px;
    color: #007bff;
    margin-bottom: 40px;
  }

  .clients-container {
    display: flex;
    gap: 20px;
    overflow-x: auto;
    padding-bottom: 10px;
    scrollbar-width: none; /* Firefox */
    -ms-overflow-style: none; /* IE and Edge */

    /* Hide scrollbar in WebKit browsers (Chrome, Safari) */
    &::-webkit-scrollbar {
      display: none;
    }
  }
`;

const ClientCard = styled.div`
  background-color: #ffffff;
  min-width: 300px;
  max-width: 300px;
  height:350px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 20px;
  text-align: center;
  transition: transform 0.3s;

  &:hover {
    transform: translateY(-5px);
  }

  img {
    margin-top:10px;
    width: 70px;
    height: 70px;
    border-radius: 50%;
    margin-bottom: 15px;
  }

  p {
    font-size: 18px;
    color: #666666;
    margin-bottom: 15px;
  }

  h3 {
    font-size: 16px;
    color: #333333;
    margin-bottom: 10px;
}

span {
  font-size: 14px;
  color: #777777;
}
`;