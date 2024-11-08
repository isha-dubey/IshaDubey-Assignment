import React from 'react';
import styled from '@emotion/styled';

import BackDrop4 from '../assets/images/BackDrop4.svg';

// Sample data for dynamic content
const projectData = [
  { title: "Consultation", category: "Project view", location: "Near home" },
  { title: "Design", category: "Project view", location: "Near home" },
  { title: "Marketing & Design", category: "Project view", location: "Near home" },
  { title: "Consultation & Marketing", category: "Project view", location: "Near home" },
  { title: "Consultation", category: "Project view", location: "Near home" },
  { title: "Consultation", category: "Project view", location: "Near home" },
  { title: "Consultation", category: "Project view", location: "Near home" },
  { title: "Consultation", category: "Project view", location: "Near home" }
];

const OurProjectsSection = () => {
  return (
    <ProjectsWrapper>
      <h2>Our Projects</h2>
      <p>We know what buyers are looking for and suggest projects that will bring clients top dollar for the sale of their homes.</p>
      <div className="projects-container">
        {projectData.map((project, index) => (
          <ProjectCard key={index}>
            <img src={BackDrop4} alt={project.title} />
            <div className="project-info">
              <h3>{project.title}</h3>
              <p>{project.category} • {project.location}</p>
              <button>See More</button>
            </div>
          </ProjectCard>
        ))}
      </div>
    </ProjectsWrapper>
  );
};

export default OurProjectsSection;

const ProjectsWrapper = styled.section`
  text-align: center;
  padding: 50px 20px;
  background-color: #f3f9ff;

  h2 {
    font-size: 28px;
    color: #007bff;
    margin-bottom: 10px;
  }

  p {
    font-size: 16px;
    color: #666666;
    margin-bottom: 40px;
  }

  .projects-container {
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

const ProjectCard = styled.div`
  background-color: #ffffff;
  min-width: 200px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: transform 0.3s;
  text-align: left;

  &:hover {
    transform: translateY(-5px);
  }

  img {
    width: 100%;
    height: 130px;
    object-fit: cover;
  }

  .project-info {
    padding: 15px;
  }

  h3 {
    font-size: 18px;
    color: #333333;
    margin-bottom: 5px;
  }

  p {
    font-size: 14px;
    color: #777777;
    margin-bottom: 15px;
  }

  button {
    font-size: 14px;
    color: white;
    background-color: #ff6600;
    border: none;
    padding: 8px 12px;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s;

    &:hover {
      background-color: #ff4500;
    }
  }
`;
