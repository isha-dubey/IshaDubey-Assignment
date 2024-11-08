import React from 'react';
import styled from '@emotion/styled';

// Sample contact data
const contactData = [
  {
    id: 1,
    name: 'Alice Johnson',
    email: 'alice@example.com',
    mobile: '123-456-7890',
    city: 'New York',
  },
  {
    id: 2,
    name: 'Bob Williams',
    email: 'bob@example.com',
    mobile: '987-654-3210',
    city: 'Los Angeles',
  },
  {
    id: 3,
    name: 'Carol Brown',
    email: 'carol@example.com',
    mobile: '555-666-7777',
    city: 'Chicago',
  },
];

export default function ContactDetails() {
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
        {contactData.map(contact => (
          <TableRow key={contact.id}>
            <TableCell>{contact.name}</TableCell>
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
`;
