import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import { getContacts } from '../apis/Contact.api';  // Assuming the getContacts function is in Contact.api.js

export default function ContactDetails() {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);


  useEffect(() => {
    const fetchContacts = async () => {
      const response = await getContacts();
      console.log(response)
      if (response.success) {
        setContacts(response.data?.data); // Assuming response.data is the array of contacts
      } else {
        setError(response.message);
      }
   
      setLoading(false);
    };

    fetchContacts();
  }, []);


  // if (loading) return <div>Loading...</div>;
  // if (error) return <div>Error: {error}</div>;


  return (
    <Container>
      <Heading>Contact Details</Heading>
      <Table>
        <TableHeader>
          <TableCell>Name</TableCell>
          <TableCell>Email Address</TableCell>
          <TableCell>Mobile Number</TableCell>
          <TableCell>City</TableCell>
        </TableHeader>
        {contacts.map(contact => (
          <TableRow key={contact.id}>
            <TableCell>{contact.fullname}</TableCell>
            <TableCell>{contact.email}</TableCell>
            <TableCell>{contact.mobile}</TableCell>
            <TableCell>{contact.city}</TableCell> 
           </TableRow>
        ))}
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
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
  width: 100%;
  background-color: #fff;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
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
`
