  import { css } from '@emotion/react';

  const aboutSectionStyle = css`
    padding: 2rem;
    text-align: center;
    background-color: #f9f9f9;
  `;

  const AboutSection = () => (
    <section css={aboutSectionStyle}>
      <h2>Not Your Average Realtor</h2>
      <p>We are committed to providing exceptional service and results.</p>
    </section>
  );

  export default AboutSection;
