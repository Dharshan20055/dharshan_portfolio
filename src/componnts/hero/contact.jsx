import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;

const ContactPage = () => {
  return (
    <>
      <GlobalStyle />
      <ContactSection id="contact">
        <ContactForm>
          <h2>Contact</h2>
          <FormContainer>
            <InputField>
              <label>Name</label>
              <input type="text" placeholder="Your Name" required />
            </InputField>
            <InputField>
              <label>Email</label>
              <input type="email" placeholder="Your Email" required />
            </InputField>
            <InputField>
              <label>Message</label>
              <textarea placeholder="Your Message" required></textarea>
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
          <li><strong>Phone:</strong> +918072181033</li>
          <li><strong>Address:</strong> Samudhirayar Street Ammapet Salem</li>
          <li><strong>Nationality:</strong> Indian</li>
        </PersonalInfoList>
      </PersonalInfoSection>

      {/* Copyright Section */}
      <Footer>
        <p>&copy; 2025 Dharshan M. All rights reserved.</p>
      </Footer>
    </>
  );
};

export default ContactPage;

const ContactSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: rgb(2, 2, 43);
  color: white;
  padding: 20px;
`;

const ContactForm = styled.div`
  width: 100%;
  max-width: 600px;
  text-align: center;
  background-color: #222;
  padding: 30px;
  border-radius: 12px;
  box-shadow: 0 12px 35px rgba(0, 0, 0, 0.5);
  animation: fadeIn 2s ease-in-out;
  transition: all 0.3s ease-in-out;

  h2 {
    font-size: 32px;
    color: yellowgreen;
    font-weight: bold;
    margin-bottom: 20px;
  }

  &:hover {
    transform: scale(1.05);
  }

  @media (max-width: 768px) {
    width: 90%;
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
    color: white;
  }

  input,
  textarea {
    padding: 12px;
    border-radius: 8px;
    border: none;
    background-color: #333;
    color: white;
    font-size: 16px;
    outline: none;
    transition: 0.3s;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.4);
  }

  input:focus,
  textarea:focus {
    background-color: #444;
    box-shadow: 0 0 12px rgba(0, 255, 255, 0.7);
  }

  textarea {
    height: 150px;
  }
`;

const SubmitButton = styled.button`
  padding: 12px 20px;
  background-color: yellowgreen;
  border: none;
  border-radius: 8px;
  color: white;
  font-size: 18px;
  cursor: pointer;
  transition: 0.3s ease-in-out;
  margin-top: 20px;

  &:hover {
    background-color: green;
    transform: scale(1.05);
  }
`;

const PersonalInfoSection = styled.section`
  background-color: rgb(2, 2, 43);
  padding: 60px 20px;
  color: white;
  text-align: center;

  h2 {
    font-size: 36px;
    color: yellowgreen;
    font-weight: bold;
    margin-bottom: 40px;
    animation: fadeIn 2s ease-in-out;
  }

  @media (max-width: 768px) {
    padding: 40px 20px;
  }
`;

const PersonalInfoList = styled.ul`
  list-style-type: none;
  padding: 0;
  color: white;
  font-size: 18px;

  li {
    margin-bottom: 12px;
  }

  strong {
    color: yellowgreen;
  }

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const Footer = styled.footer`
  text-align: center;
  margin-top: 40px;
  color: gray;
  padding: 20px;
  background-color: #111;
`;