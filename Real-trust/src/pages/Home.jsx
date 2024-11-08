// Home.jsx
import React from 'react';
import GlobalStyles from '../styles/GlobalStyles';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import Footer from '../components/Footer';
import ValuePropositions from '../components/ValuePropositions';
// import CompanyProfileSection from '../components/CompanyProfileSection';
import OurProjectsSection from '../components/OurProjects';
import ClientSection from '../components/ClientsSection';
import AboutSection from'../components/AboutSection'
import CompanyProfileSection from '../components/CompanyProfileSection ';

export default function Home() {
  return (
    <>
      <GlobalStyles />
      <Header />
      
      <div id="hero">
        <HeroSection />
      </div>
      
      <div id="value-propositions">
        <ValuePropositions />
      </div>
      
      <div id="company-profile">
        <CompanyProfileSection/>
      </div>
      
      <div id="our-projects">
        <OurProjectsSection />
      </div>
      
      <div id="clients">
        <ClientSection />
      </div>
      
      <Footer />
    </>
  );
}
