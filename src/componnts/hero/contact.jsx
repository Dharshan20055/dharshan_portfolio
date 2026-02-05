import React, { useState } from 'react';
import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @keyframes fadeIn {
    0% { opacity: 0; }
    100% { opacity: 1; }
  }
`;

const ContactPage = () => {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await fetch("https://script.google.com/macros/s/AKfycbyYJAXBGOUsQnPrEdu8nluxWXC3A_YVcw_EJAZgZpGmixFdVc-WAWLaWnSRyNg0JrpW/exec", {
        method: "POST",
        body: JSON.stringify(formData),
        mode: "no-cors"
      });

      alert("Message sent successfully!");
      setFormData({ name: '', email: '', message: '' });

    } catch (error) {
      alert("Something went wrong. Please try again.");
      console.error(error);
    }
  };

  return (
    <>
      <GlobalStyle />

      {/* Contact Section */}
      <ContactSection id="contact">
        <ContactForm>
          <h2>Contact</h2>

          <FormContainer onSubmit={handleSubmit}>
            <InputField>
              <label>Name</label>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </InputField>
            <InputField>
              <label>Email</label>
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </InputField>
            <InputField>
              <label>Message</label>
              <textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </InputField>
            <SubmitButton type="submit">Send Message</SubmitButton>
          </FormContainer>
        </ContactForm>
      </ContactSection>

      {/* Personal Info Section */}
      <PersonalInfoSection>
        <h2>Personal Info</h2>
        <PersonalInfoList>
          <li><strong>Name:</strong> Dharshan M</li>
          <li><strong>Email:</strong> dharshanmurali05@gmail.com</li>
          <li><strong>Phone:</strong> +91 8072181033</li>
          <li><strong>Address:</strong> Samudhirayar Street, Ammapet, Salem</li>
          <li><strong>Nationality:</strong> Indian</li>
        </PersonalInfoList>
      </PersonalInfoSection>

      {/* Footer */}
      <Footer>
        <p>&copy; 2025 Dharshan M. All rights reserved.</p>
      </Footer>
    </>
  );
};

export default ContactPage;

/* ===================== STYLES ===================== */

const ContactSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: var(--bg-color);
  color: var(--text-color);
  padding: 20px;
`;

const ContactForm = styled.div`
  width: 100%;
  max-width: 600px;
  text-align: center;
  background-color: var(--card-bg);
  padding: 30px;
  border-radius: 12px;
  box-shadow: 0 12px 35px rgba(0, 0, 0, 0.5);
  animation: fadeIn 2s ease-in-out;
  transition: all 0.3s ease-in-out;

  h2 {
    font-size: 32px;
    color: var(--accent-color);
    font-weight: bold;
    margin-bottom: 20px;
  }

  &:hover {
    transform: scale(1.05);
  }
`;

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const InputField = styled.div`
  display: flex;
  flex-direction: column;

  label {
    font-size: 18px;
    margin-bottom: 10px;
    color: var(--text-color);
  }

  input,
  textarea {
    padding: 12px;
    border-radius: 8px;
    border: none;
    background-color: var(--input-bg);
    color: var(--input-color);
    font-size: 16px;
    outline: none;
    transition: 0.3s;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.4);
  }

  input:focus,
  textarea:focus {
    background-color: var(--card-bg);
    box-shadow: 0 0 12px rgba(16, 185, 129, 0.5);
  }

  textarea {
    height: 150px;
  }
`;

const SubmitButton = styled.button`
  padding: 12px 20px;
  background-color: var(--accent-color);
  border: none;
  border-radius: 8px;
  color: white;
  font-size: 18px;
  cursor: pointer;
  transition: 0.3s ease-in-out;
  margin-top: 20px;

  &:hover {
    background-color: #059669;
    transform: scale(1.05);
  }
`;

const PersonalInfoSection = styled.section`
  background-color: var(--bg-color);
  padding: 60px 20px;
  color: var(--text-color);
  text-align: center;

  h2 {
    font-size: 36px;
    color: var(--accent-color);
    font-weight: bold;
    margin-bottom: 40px;
    animation: fadeIn 2s ease-in-out;
  }
`;

const PersonalInfoList = styled.ul`
  list-style: none;
  padding: 0;
  font-size: 18px;

  li {
    margin-bottom: 12px;
  }

  strong {
    color: var(--accent-color);
  }
`;

const Footer = styled.footer`
  text-align: center;
  margin-top: 40px;
  color: var(--secondary-text);
  padding: 20px;
  background-color: var(--footer-bg);
`;
