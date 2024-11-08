import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import { getAllSubscribers } from '../apis/Subscriber.api'; // Assuming you have this API function

export default function SubscribersDetails() {
  const [subscribers, setSubscribers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  
  useEffect(() => {
    const fetchSubscribers = async () => {
      try {
        const data = await getAllSubscribers(); 
        setSubscribers(data?.data);
        setLoading(false);
      } catch (err) {
        setError('Error fetching subscribers'); 
        setLoading(false);
      }
    };

    fetchSubscribers();
  }, []); 

  if (loading) {
    return <div>Loading subscribers...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <Container>
      <Heading>Subscriber Details</Heading>
      <Table>
        <TableHeader>
          <TableCell>Serial Number</TableCell>
          <TableCell>Email Address</TableCell>
        </TableHeader>
        {
        subscribers.map((subscriber, index) => (
          <TableRow key={subscriber.id}>
            <TableCell>{index + 1}</TableCell> {/* Serial number */}
            <TableCell>{subscriber.email}</TableCell>
          </TableRow>
        ))
        }
      </Table>
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

const Table = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr; /* Two columns */
  gap: 10px;
  width: 100%;
  background-color: #fff;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const TableHeader = styled.div`
  display: contents;
  background-color: #ff6600;
  color: white;
  font-weight: bold;
`;

const TableRow = styled.div`
  display: contents;
  background-color: #f8f8f8;

  &:nth-of-type(even) {
    background-color: #fafafa;
  }
`;

const TableCell = styled.div`
  padding: 15px;
  border: 1px solid #ddd;
  text-align: center;
  font-size: 16px;
  color: #333;
`;
