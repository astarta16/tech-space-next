// src/components/about/AboutStyled.ts
import styled from "styled-components";

export const AboutHero = styled.section`
  background-image: url("/images/premium_photo-1670271544153-dd9933f0f119.avif");
  background-size: cover;
  background-position: center;
  height: 50vh;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  text-shadow: 0px 4px 6px rgba(0, 0, 0, 0.5);
`;

export const HeroContainer = styled.div`
  text-align: center;
  padding: 20px;

  h2 {
    font-size: 48px;
    font-weight: 700;
    margin-bottom: 0.5em;

    @media (max-width: 480px) {
      font-size: 36px;
    }
  }

  p {
    font-size: 1.2em;
    font-weight: 600;

    @media (max-width: 480px) {
      font-size: 1em;
    }
  }
`;

export const AboutSection = styled.section`
  padding: 50px 0;
`;

export const AboutContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

export const AboutContent = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 50px;

  &.reverse {
    flex-direction: row-reverse;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;

    &.reverse {
      flex-direction: column;
    }
  }
`;

export const AboutImage = styled.img`
  flex: 1 1 50%;
  max-width: 600px;
  border-radius: 10px;
  margin: 0 20px;
`;

export const AboutText = styled.div`
  flex: 1 1 50%;
  max-width: 600px;
  padding: 20px;

  h2 {
    font-size: 32px;
    color: #34588a;
    margin-bottom: 15px;

    @media (max-width: 480px) {
      font-size: 28px;
    }
  }

  p {
    font-size: 18px;
    line-height: 1.6;
    color: #333;

    @media (max-width: 480px) {
      font-size: 16px;
    }
  }
`;

export const GallerySection = styled.section`
  text-align: center;
  padding: 50px 0;

  .gallery-title {
    font-size: 32px;
    font-weight: 700;
    margin-bottom: 40px;
  }
`;

export const GalleryContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 20px;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

export const GalleryItem = styled.div`
  img {
    width: 100%;
    height: auto;
    border-radius: 10px;
  }
`;

export const FaqSection = styled.section`
  text-align: center;
  padding: 50px 0;
`;

export const FaqContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

export const FaqItem = styled.div`
  margin-bottom: 20px;
`;

export const FaqQuestion = styled.button`
  background: none;
  border: none;
  width: 100%;
  text-align: left;
  font-size: 18px;
  font-weight: 700;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  padding: 10px 0;
  border-bottom: 1px solid #ccc;
`;

export const FaqAnswer = styled.div`
  padding: 10px 0;
  font-size: 16px;
  color: #666;
  line-height: 1.6;
`;
