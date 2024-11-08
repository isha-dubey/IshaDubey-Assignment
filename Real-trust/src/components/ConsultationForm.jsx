import { css } from '@emotion/react';

const formStyle = css`
  display: flex;
  flex-direction: column;
  padding: 2rem;
  background-color: #fff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
`;

const ConsultationForm = () => (
  <section css={formStyle}>
    <h3>Get a Free Consultation</h3>
    <input type="text" placeholder="Full Name" />
    <input type="email" placeholder="Your Email Address" />
    <input type="text" placeholder="Phone Number" />
    <button>Send Free Quote</button>
  </section>
);

export default ConsultationForm;
