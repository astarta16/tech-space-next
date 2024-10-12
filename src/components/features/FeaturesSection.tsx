// src/components/features/FeaturesSection.tsx
import React from "react";
import styled from "styled-components";

const FeaturesWrapper = styled.section`
  text-align: center;
  padding: 50px 20px;

  h2 {
    font-size: 40px;
    font-family: "Inter", sans-serif;
    font-weight: 600;
    color: navy;
    margin-bottom: 1.5rem;

    @media (max-width: 768px) {
      padding: 20px 10px;
    }
  }
`;

const FeaturesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 10px;
  }
`;

const Feature = styled.div`
  flex: 1 1 30%;
  padding: 20px;
  background-color: #f8f9fa;
  border-radius: 10px;
  min-width: 280px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);

  h3 {
    color: navy;
    font-size: 1.8em;
    padding: 1rem;
  }

  p {
    font-size: 1.2em;
  }

  @media (max-width: 768px) {
    flex-basis: 100%;
    padding: 20px 10px;
  }

  @media (max-width: 480px) {
    h3 {
      font-size: 1.5em;
    }
  }
`;

const FeaturesSection: React.FC = () => {
  return (
    <FeaturesWrapper>
      <h2>რატომ ჩვენ?</h2>
      <FeaturesContainer>
        <Feature>
          <h3>პროფესიონალიზმი და გამოცდილება</h3>
          <p>
            ჩვენ ვართ გუნდი, რომელიც აერთიანებს პროფესიონალებს სხვადასხვა
            ტექნოლოგიური სფეროდან.
          </p>
        </Feature>
        <Feature>
          <h3>ინოვაცია და პროგრესი</h3>
          <p>ვენ მუდმივად ვნერგავთ უახლეს ტექნოლოგიებს და მეთოდებს.</p>
        </Feature>
        <Feature>
          <h3>პარტნიორობა და ნდობა</h3>
          <p>
            ჩვენ ვამყარებთ პარტნიორულ ურთიერთობას, რომელიც დაფუძნებულია ნდობაზე
            და გამჭვირვალობაზე.
          </p>
        </Feature>
      </FeaturesContainer>
    </FeaturesWrapper>
  );
};

export default FeaturesSection;
