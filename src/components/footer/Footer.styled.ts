// src/components/footer/Footer.styled.ts
import styled from "styled-components";

export const FooterWrapper = styled.footer`
  color: navy;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 -4px 8px rgba(0, 0, 0, 0.1);
  padding: 20px 0;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    margin-top: 20px;
  }
`;

export const FooterContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  margin: auto;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    margin-top: 20px;
  }
`;

export const FooterContent = styled.div`
  display: flex;
  align-items: center;

  p {
    font-weight: 700;
    font-size: 20px;
    color: #34588a;
    margin: 0;
    line-height: 1.5;
  }

  @media (max-width: 768px) {
    text-align: center;
    margin-top: 10px;
  }
`;

export const SocialMedia = styled.div`
  a {
    transition: transform 0.3s ease;

    &:hover {
      transform: scale(1.1);
    }

    img {
      width: 25px;
      margin-left: 10px;
    }
  }

  @media (max-width: 768px) {
    flex: 1 100%;
    text-align: center;
    margin-top: 10px;
  }
`;
