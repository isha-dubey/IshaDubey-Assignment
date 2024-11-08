import styled from '@emotion/styled';

const HeaderWrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 40px;
  background-color: #ffffff;
  height:90px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  .logo {
    font-size: 24px;
    font-weight: bold;
    color: #0044cc;
    text-decoration: none;
  }

  nav {
    display: flex;
    gap: 20px;

    a {
      text-decoration: none;
      color: #333;
      font-weight: 500;
      transition: color 0.3s ease;

      &:hover {
        color: #0044cc;
      }
    }
  }

  button {
    padding: 10px 20px;
    background-color: #ff6600;
    color: #ffffff;
    border: none;
    border-radius: 5px;
    font-weight: 600;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: #e05500;
    }
  }
`;

const HeaderSection = () => {
  return (
    <HeaderWrapper>
      <a href="/" className="logo">Real Trust</a>
      <nav>
        <a href="#home">Home</a>
        <a href="#services">Services</a>
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#reviews">Reviews</a>
      </nav>
      <button>Contact</button>
    </HeaderWrapper>
  );
};

export default HeaderSection;