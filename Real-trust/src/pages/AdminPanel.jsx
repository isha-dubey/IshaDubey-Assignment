import React, { useState } from 'react';
import styled from '@emotion/styled';
import ProjectsDetails from '../components/ProjectsDetails';
import ClientDetails from '../components/ClientDetails';
import ContactDetails from '../components/ContactDetails';
import SubscribersDetails from '../components/SubscribersDetails';
import { useAuth } from '../firebase/AuthProvider';
import { useNavigate } from 'react-router-dom';


const NAV_OPTIONS = ['Projects', 'Clients', 'Subscribers', 'Consultations'];

const AdminPanel = () => {
  const [activeSection, setActiveSection] = useState(NAV_OPTIONS[0]);
  const { signOut, user } = useAuth();
  const navigate = useNavigate(); 

  const renderContent = () => {
    switch (activeSection) {
      case 'Projects':
        return <Projects />;
      case 'Clients':
        return <Clients />;
      case 'Subscribers':
        return <Subscribers />;
      case 'Consultations':
        return <Consultations />;
      default:
        return <Projects />;
    }
  };

  const handleLogout = 
    async () => {
      await signOut();  // Sign the user out
      navigate('/');
    console.log('Logging out...');
  };

  return (
    <Container>
      <Sidebar>
        <CompanyName>Real Trust</CompanyName>
        <Nav>
          {NAV_OPTIONS.map(option => (
            <NavButton
              key={option}
              isActive={option === activeSection}
              onClick={() => setActiveSection(option)}
            >
              {option}
            </NavButton>
          ))}
        </Nav>
        <LogoutButton onClick={handleLogout}>Logout</LogoutButton>
      </Sidebar>
      <Content>
        {renderContent()}
      </Content>
    </Container>
  );
};


const Projects = () => <SectionContent> <ProjectsDetails /> </SectionContent>;
const Clients = () => <SectionContent><ClientDetails /> </SectionContent>;
const Subscribers = () => <SectionContent> <SubscribersDetails />   </SectionContent>;
const Consultations = () => <SectionContent><ContactDetails /></SectionContent>;


const Container = styled.div`
  display: grid;
  grid-template-columns: 30% 70%;
  height: 100vh;
`;

const Sidebar = styled.div`
  background-color: #ff6600;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  justify-content: space-between;  /* To make space between nav and logout button */
`;

const CompanyName = styled.h1`
  font-size: 40px;
  margin-bottom: 20px;
  font-weight: 900;
`;

const Nav = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const NavButton = styled.button`
  background-color: ${({ isActive }) => (isActive ? '#ff7f33' : 'transparent')};
  color: white;
  padding: 15px 20px;
  border: none;
  text-align: left;
  font-size: 18px;
  cursor: pointer;
  width: 100%;
  font-weight: 700;
  transition: background-color 0.3s;

  &:hover {
    background-color: #ff7f33;
  }
`;

const LogoutButton = styled.button`
  background-color: #ff3333;  /* Red background for logout */
  color: white;
  padding: 15px 20px;
  border: none;
  text-align: center;
  font-size: 18px;
  cursor: pointer;
  width: 100%;
  font-weight: 700;
  transition: background-color 0.3s;
  margin-top: auto;  /* Pushes the button to the bottom */

  &:hover {
    background-color: #cc2929;  /* Darker red on hover */
  }
`;

const Content = styled.div`
  padding: 20px;
`;

const SectionContent = styled.div`
  font-size: 24px;
  color: #333;
`;

export default AdminPanel;
