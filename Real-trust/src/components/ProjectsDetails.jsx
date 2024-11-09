import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import { createProject, getProjects } from '../apis/Projects.api';

export default function ProjectsDetails() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [projects, setProjects] = useState([]);
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    image: null,
  });

  // Fetch the projects from the API
  const fetchProjects = async () => {
    try {
      const data = await getProjects();
      setProjects(data?.data); 
    } catch (error) {
      console.error('Failed to fetch projects:', error);
    }
  };

  
  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const formDataToSend = new FormData();
    formDataToSend.append('name', formData.name);
    formDataToSend.append('description', formData.description);
    formDataToSend.append('image', formData.image);
  
    try {
      const response = await createProject(formDataToSend);
  
      if (response) {
        setProjects((prevProjects) => [...prevProjects, response]);
      } else {
        await fetchProjects();
      }
  
      setIsModalOpen(false); // Close the modal
      setFormData({ name: '', description: '', image: null }); // Reset form
    } catch (error) {
      console.error('Error creating project:', error.response || error.message);
    }
  };
  

  // Fetch projects initially when the component mounts
  useEffect(() => {
    fetchProjects();
  }, []);

  const handleInputChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: files ? files[0] : value,
    }));
  };

  return (
    <Container>
      <Header>
        <Heading>Projects</Heading>
        <AddButton onClick={() => setIsModalOpen(true)}>Add Project</AddButton>
      </Header>
      <ProjectList>
        {projects.map((project) => (
          <ProjectCard key={project.id}>
            <Image src={project.imageUrl || 'https://via.placeholder.com/150'} alt={project.name} />
            <ProjectInfo>
              <ProjectName>{project.name}</ProjectName>
              <ProjectDescription>{project.description}</ProjectDescription>
            </ProjectInfo>
          </ProjectCard>
        ))}
      </ProjectList>
      {isModalOpen && (
        <ModalOverlay>
          <Modal>
            <ModalHeader>
              <ModalTitle>Add New Project</ModalTitle>
              <CloseButton onClick={() => setIsModalOpen(false)}>&times;</CloseButton>
            </ModalHeader>
            <ModalContent >
              <Label>Project Image</Label>
              <Input type="file" name="image" onChange={handleInputChange} />

              <Label>Project Name</Label>
              <Input type="text" name="name" value={formData.name} onChange={handleInputChange} placeholder="Enter project name" />

              <Label>Project Description</Label>
              <TextArea name="description" value={formData.description} onChange={handleInputChange} placeholder="Enter project description"></TextArea>

              <SubmitButton type="submit" onClick={handleSubmit}>Submit</SubmitButton>
            </ModalContent>
          </Modal>
        </ModalOverlay>
      )}
    </Container>
  );
}


// Styled Components
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
`;

const AddButton = styled.button`
  padding: 8px 16px;
  background-color: #ff6600;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #e65500;
  }
`;

const ProjectList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
`;

const ProjectCard = styled.div`
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

const ProjectInfo = styled.div`
  padding: 15px;
`;

const ProjectName = styled.h3`
  font-size: 20px;
  color: #ff6600;
  margin: 0 0 10px;
`;

const ProjectDescription = styled.p`
  font-size: 14px;
  color: #666;
`;

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Modal = styled.div`
  background: #fff;
  padding: 20px;
  border-radius: 8px;
  width: 400px;
  max-width: 90%;
`;

const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #eee;
  padding-bottom: 10px;
`;

const ModalTitle = styled.h3`
  font-size: 20px;
  color: #333;
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
`;

const ModalContent = styled.div`
  margin-top: 20px;
`;

const Label = styled.label`
  display: block;
  font-size: 14px;
  margin-bottom: 5px;
  color: #333;
`;

const Input = styled.input`
  width: 100%;
  padding: 8px;
  margin-bottom: 15px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  resize: vertical;
  min-height: 80px;
  margin-bottom: 15px;
`;

const SubmitButton = styled.button`
  width: 100%;
  padding: 10px;
  background-color: #ff6600;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #e65500;
  }
`;
