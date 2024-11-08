import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import { getClients } from '../apis/Clients.api';
import { createClient } from '../apis/Clients.api';

export default function ClientDetails() {
  const [clientData, setClientData] = useState([]);
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [newClient, setNewClient] = useState({
    name: '',
    designation: '',
    description: '',
    image: '',
  });
  const [imagePreview, setImagePreview] = useState(null);

  useEffect(() => {
    const fetchClients = async () => {
      try {
        const clients = await getClients();
        setClientData(clients.data);
      } catch (error) {
        console.error('Error fetching clients:', error);
      }
    };
    fetchClients();
  }, []);

  const handleAddClientClick = () => {
    setIsFormVisible(true);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewClient((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const fileURL = URL.createObjectURL(file);
      setImagePreview(fileURL);
      setNewClient((prevState) => ({
        ...prevState,
        image: file,
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const formData = new FormData();
    formData.append('name', newClient.name);
    formData.append('designation', newClient.designation);
    formData.append('description', newClient.description);
    formData.append('image', newClient.image);

    try {
     const response= await createClient(newClient);
console.log(response)

    
      setNewClient({ name: '', designation: '', description: '', image: '' });
      setImagePreview(null);
      setIsFormVisible(false);

      const clients = await getClients();
      setClientData(clients.data);
    } catch (error) {
      console.error('Error creating client:', error);
    }
  };

  return (
    <Container>
      <Header>
        <Heading>Clients</Heading>
        <AddButton onClick={handleAddClientClick}>Add Client</AddButton>
      </Header>

      {/* Popup Form */}
      {isFormVisible && (
        <PopupOverlay onClick={() => setIsFormVisible(false)}>
          <PopupContent onClick={(e) => e.stopPropagation()}>
            <Form onSubmit={handleSubmit}>
              <FormTitle>Add New Client</FormTitle>
              <Input
                type="text"
                name="name"
                value={newClient.name}
                onChange={handleInputChange}
                placeholder="Name"
              />
              <Input
                type="text"
                name="designation"
                value={newClient.designation}
                onChange={handleInputChange}
                placeholder="Designation"
              />
              <Input
                type="text"
                name="description"
                value={newClient.description}
                onChange={handleInputChange}
                placeholder="Description"
              />
              <FileInput
                type="file"
                accept="image/*"
                onChange={handleFileChange}
              />
              {imagePreview && <ImagePreview src={imagePreview} alt="Image Preview" />}
              <SubmitButton type="submit">Submit</SubmitButton>
            </Form>
          </PopupContent>
        </PopupOverlay>
      )}

      {/* Client List */}
      <ClientList>
        {clientData.map((client) => (
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


const Container = styled.div`
  padding: 20px;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

const Heading = styled.h2`
  font-size: 28px;
  color: #333;
  margin: 0;
`;

const AddButton = styled.button`
  background-color: #ff6600;
  color: white;
  border: none;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  border-radius: 5px;

  &:hover {
    background-color: #d15502;
  }
`;

const PopupOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const PopupContent = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 300px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const FormTitle = styled.h3`
  font-size: 20px;
  color: #333;
`;

const Input = styled.input`
  padding: 10px;
  font-size: 16px;
  border-radius: 5px;
  border: 1px solid #ddd;
  outline: none;
`;

const FileInput = styled.input`
  padding: 10px;
  font-size: 16px;
  border-radius: 5px;
  border: 1px solid #ddd;
`;

const ImagePreview = styled.img`
  max-width: 100%;
  height: auto;
  margin-top: 10px;
  border-radius: 5px;
`;

const SubmitButton = styled.button`
  background-color: #ff6600;
  color: white;
  border: none;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  border-radius: 5px;

  &:hover {
    background-color: #d15502;
  }
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
