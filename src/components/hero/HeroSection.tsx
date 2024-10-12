// src/components/hero/HeroSection.tsx
import React from "react";
import styled from "styled-components";

const HeroWrapper = styled.section`
  background-image: url("/images/daniele-levis-pelusi--aEpe2N916c-unsplash.jpg");
  background-size: cover;
  background-position: center;
  height: 75vh;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  text-shadow: 0px 4px 6px rgba(0, 0, 0, 0.5);

  @media (max-width: 768px) {
    height: 60vh;
  }
`;

const HeroContent = styled.div`
  text-align: center;
  padding: 20px;

  h1 {
    font-size: 48px;
    font-weight: 700;
    margin-bottom: 0.5em;
    letter-spacing: 5px;

    @media (max-width: 768px) {
      font-size: 2em;
    }

    @media (max-width: 480px) {
      font-size: 1.5em;
    }
  }

  p {
    font-size: 1.2em;
    font-weight: 600;
    margin-bottom: 2em;

    @media (max-width: 768px) {
      font-size: 1.2em;
    }

    @media (max-width: 480px) {
      font-size: 1em;
    }
  }

  a {
    font-size: 1em;
    padding: 20px 20px;
    background-color: #0056b3;
    color: white;
    border: none;
    border-radius: 8px;
    text-decoration: none;
    font-weight: 700;
    transition: background-color 0.3s ease-in-out;

    &:hover {
      background-color: navy;
    }

    @media (max-width: 480px) {
      padding: 8px 16px;
    }
  }
`;

const HeroSection: React.FC = () => {
  return (
    <HeroWrapper>
      <HeroContent>
        <h1>მოგესალმებით TechSpace-ის სამყაროში!</h1>
        <p>დაისახე დიდი მიზნები, მიაღწიე მეტს: ჩვენ ვქმნით მომავალს ერთად!</p>
        <a href="/static/pages/course.html" className="cta-button">
          კურსები
        </a>
      </HeroContent>
    </HeroWrapper>
  );
};

export default HeroSection;
