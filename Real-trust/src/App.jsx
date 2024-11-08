import GlobalStyles from './styles/GlobalStyles';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <GlobalStyles />
      <Header />
      <HeroSection />
      {/* <AboutSection /> */}
      {/* <ConsultationForm /> */}
      <Footer />
    </>
  );
}

export default App;
