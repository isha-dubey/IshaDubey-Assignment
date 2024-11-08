import styled from '@emotion/styled';
import BackDrop from '../assets/images/HeroPageBackground.svg'
import Dummy1 from '../assets/images/Man1.svg'
import Dummy2 from '../assets/images/Couple.svg'
import Dummy3 from '../assets/images/Man2.svg'
import { useState } from 'react';
import { createContact } from '../apis/Contact.api';

import 'react-toastify/dist/ReactToastify.css';


const HeroSection = () => {
const [formData, setFormData] = useState({
  fullname: '',
  email: '',
  mobile: '',
  city: '',
});

const handleChange = (e) => {
  const { name, value } = e.target;
  setFormData({ ...formData, [name]: value });
};

const handleSubmit = async (e) => {
  e.preventDefault();
  if (!formData.fullname || !formData.email || !formData.mobile || !formData.city) {
    alert('Empty or Incomplete form can not be submitted');
    return;
  }
  const response = await createContact(formData);
  console.log('API response:', response);

  if (response && response.success) {
    alert('Your request was submitted successfully!');
  } else {
    alert('There was an issue submitting the form.');
  }   
};

return(
<>
  <HeroSectionWrapper>
    <div className="hero-content">
      <h2>Consultation, Design, & Marketing</h2>
    </div>
    <div className="get-consultation-form">
        <h3 className="form-title">Get a Free Consultation</h3>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="fullname"
            className="form-input"
            placeholder="Full Name"
            value={formData.fullname}
            onChange={handleChange}
            />
          <input
            type="email"
            name="email"
            className="form-input"
            placeholder="Enter Email Address"
            value={formData.email}
            onChange={handleChange}
            />
          <input
            type="tel"
            name="mobile"
            className="form-input"
            placeholder="Mobile Number"
            value={formData.mobile}
            onChange={handleChange}
          />
          <input
            type="text"
            name="city"
            className="form-input"
            placeholder="Area, City"
            value={formData.city}
            onChange={handleChange}
            />
          <button type="submit" className="form-button">Get Quick Quote</button>
        </form>
      </div>
  </HeroSectionWrapper>


  <NotYourAverageRealtorWrapper>
    <div className="not-your-average-realtor">
      <div className="realtor-info">
        <h3 >Not Your Average Realtor</h3>
        <p>
          Real Trust is a unique real estate agency that goes beyond the typical
          realtor experience. Our team of dedicated professionals are
          committed to providing personalized service and innovative solutions
          to meet your real estate needs.
        </p>
      </div>
      <div className="realtor-profiles">
        <div className="realtor-profile">
          <img src={Dummy1} alt="Realtor 1" />
        </div>
        <div className="realtor-profile">
          <img src={Dummy2} alt="Realtor 2" />
        </div>
        <div className="realtor-profile">
          <img src={Dummy3} alt="Realtor 3" />
        </div>
      </div>
    </div>
  </NotYourAverageRealtorWrapper>

  
  </>
);
}


export default  HeroSection;


const HeroSectionWrapper = styled.section`
  display: flex;
  align-items: center;
  // justify-content: space-between;
  gap:490px;
  padding: 2rem;
  background-image: url(${BackDrop});
  background-size: cover;
  background-position: center;
  color: #fff;
  padding:20px;
  height: 80vh;
  padding-top:180px;

  .hero-content {
    max-width: 30%;

    h2 {
      font-size: 3rem;
      margin-bottom: 1rem;
    }

    p {
      font-size: 1.5rem;
      margin-bottom: 2rem;
    }
  }

  .get-consultation-form {
    background-color: #5D6A8E;
    color: #333;
    padding: 16px;
    border-radius: 5px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  
    .form-title {
      font-size: 1rem;
      color :#ffffff;
      margin-bottom: 1rem;
      padding-left :16px;
    }
  
    form {
      display: flex;
      flex-direction: column;
      gap: 1rem;
  
      .form-input {
        padding: 0.75rem 1rem;
        border: 1px solid #ccc;
        border-radius: 5px;
        font-size: 1rem;
        color:#ffffff;
      background-color : #5D6A8E;
      &::placeholder {
        color: #fff; 
      }

      }
  
      .form-button {
        background-color: #ff6600;
        color: #fff;
        border: none;
        font-weight: 600;
        cursor: pointer;
        padding: 0.75rem 1rem;
        font-size: 1rem;
        border-radius: 5px;
        transition: background-color 0.3s ease;
  
        &:hover {
          background-color: #e05500;
          border:none;
        }
      }
    }
  }
`;

const NotYourAverageRealtorWrapper = styled.section`

.not-your-average-realtor {
  display: flex;
  align-items: center;
  // justify-content: center;
  background-color: #f5f5f5;
  height:600px;
  padding-left:200px;

}

.not-your-average-realtor-content {
  display: flex;
  // align-items: center;
  max-width: 1200px;
  height:700px;
  width: 100%;
}

.realtor-info p {
  font-size: 1.2rem;
  line-height: 1.6;
  color: #333;
  width:600px;
}
.realtor-info h3 {
 color:#4d92f8;
 font-size:30px;
 font-weight:900;
}
.realtor-profiles {
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 300px;
  height: 300px;
  // padding-right:200px;
}

/* Styling individual profile images */
.realtor-profile {
  position: absolute;
 
  border-radius: 50%;
  overflow: hidden;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}

/* First profile positioned on the left */
.realtor-profile:nth-child(1) {
  top: 80%;
  width: 350px;
  height: 350px;
  left:90%;
  transform: translate(-50%, -50%);
}

/* Second profile positioned at the top right */
.realtor-profile:nth-child(2) {
  width: 250px;
  height: 250px;
  // top: 30%;
 left:100%;
  transform: translate(50%, -50%);
}

/* Third profile positioned at the bottom right */
.realtor-profile:nth-child(3) {
  width: 250px;
  height: 250px;
 top:20%;
 left:115%;
 
  transform: translate(50%, 50%);
}

/* Ensuring images fit perfectly inside circular divs */
.realtor-profile img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
}

/* Adding decorative colored dots around the layout */
.realtor-profiles::before,
.realtor-profiles::after {
  content: "";
  position: absolute;
  border-radius: 50%;
}

/* Blue dot on the top left */
.realtor-profiles::before {
  width: 12px;
  height: 12px;
  background-color: #4d92f8;
  top: 5%;
  left: 5%;
}

/* Orange dot on the bottom right */
.realtor-profiles::after {
  width: 12px;
  height: 12px;
  background-color: #e94f32;
  bottom: 5%;
  right: 5%;
}

`