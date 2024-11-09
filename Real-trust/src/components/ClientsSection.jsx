import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';

import { getClients } from '../apis/Clients.api';
import fallbackImage from '../assets/images/images.png'



const ClientSection = () => {
  const [clients, setClients] = useState([]); 
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchClients = async () => {
      try {
        const clientData = await getClients(); 
        console.log(clientData.data) 
        setClients(clientData.data);
      } catch (error) {
        console.error('Failed to fetch clients', error);
      } finally {
        setLoading(false);
      }
    };

    fetchClients();
  }, []);

  if (loading) {
    return <div>Loading clients...</div>;
  }

  return (
    <ClientsWrapper>
      <h2>Happy Clients</h2>
      <div className="clients-container">
        {
        clients.map((client, index) => (
          <ClientCard key={index}>
            <img src={client.imageUrl || fallbackImage} alt={client.name} />
            <p>{client.description}</p>
            <h3>{client.name}</h3>
            <span>{client.position}</span>
          </ClientCard>
        ))
        }
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