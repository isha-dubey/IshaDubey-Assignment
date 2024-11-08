import React from 'react';
import styled from '@emotion/styled';

// Sample project data
const projectData = [
  {
    id: 1,
    name: 'Project Alpha',
    description: 'This is a description for Project Alpha.',
    image: 'https://via.placeholder.com/150',
  },
  {
    id: 2,
    name: 'Project Beta',
    description: 'This is a description for Project Beta.',
    image: 'https://via.placeholder.com/150',
  },
  {
    id: 3,
    name: 'Project Gamma',
    description: 'This is a description for Project Gamma.',
    image: 'https://via.placeholder.com/150',
  },
];

export default function ProjectsDetails() {
  return (
    <Container>
      <Heading>Projects</Heading>
      <ProjectList>
        {projectData.map(project => (
          <ProjectCard key={project.id}>
            <Image src={project.image} alt={project.name} />
            <ProjectInfo>
              <ProjectName>{project.name}</ProjectName>
              <ProjectDescription>{project.description}</ProjectDescription>
            </ProjectInfo>
          </ProjectCard>
        ))}
      </ProjectList>
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

