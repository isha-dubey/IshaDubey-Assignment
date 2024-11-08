import React from 'react';
import styled from '@emotion/styled';

// Sample client data
const clientData = [
  {
    id: 1,
    name: 'John Doe',
    designation: 'CEO',
    description: 'John is an experienced CEO with a strong background in finance.',
    image: 'https://via.placeholder.com/150',
  },
  {
    id: 2,
    name: 'Jane Smith',
    designation: 'CTO',
    description: 'Jane is a tech enthusiast leading the tech team with a vision for innovation.',
    image: 'https://via.placeholder.com/150',
  },
  {
    id: 3,
    name: 'Samuel Green',
    designation: 'Marketing Head',
    description: 'Samuel is a marketing expert focused on brand growth and customer engagement.',
    image: 'https://via.placeholder.com/150',
  },
];

export default function ClientDetails() {
  return (
    <Container>
      <Heading>Clients</Heading>
      <ClientList>
        {clientData.map(client => (
          <ClientCard key={client.id}>
            <Image src={client.image} alt={client.name} />
            <ClientInfo>
              <ClientName>{client.name}</ClientName>
              <ClientDesignation>{client.designation}</ClientDesignation>
              <ClientDescription>{client.description}</ClientDescription>
            </ClientInfo>
          </ClientCard>
        ))}
      </ClientList>
    </Container>
  );
}

// Styled Components
const Container = styled.div`
  padding: 20px;
`;

const Heading = styled.h2`
  font-size: 28px;
  color: #333;
  margin-bottom: 20px;
`;

const ClientList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
`;

const ClientCard = styled.div`
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: transform 0.2s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

const Image = styled.img`
  width: 100%;
  height: 150px;
  object-fit: cover;
`;

const ClientInfo = styled.div`
  padding: 15px;
`;

const ClientName = styled.h3`
  font-size: 20px;
  color: #ff6600;
  margin: 0;
`;

const ClientDesignation = styled.h4`
  font-size: 16px;
  color: #d15502;
  margin: 5px 0;
`;

const ClientDescription = styled.p`
  font-size: 14px;
  color: #666;
  margin-top: 10px;
`;
