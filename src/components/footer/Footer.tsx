// src/components/footer/Footer.tsx
import React from "react";
import {
  FooterWrapper,
  FooterContainer,
  FooterContent,
  SocialMedia,
} from "./Footer.styled";

const Footer: React.FC = () => {
  return (
    <FooterWrapper>
      <FooterContainer>
        <a href="#" className="nav-logo">
          TechSpace.
        </a>
        <FooterContent>
          <p>დაგვიკავშირდით: +995 232 122 231</p>
        </FooterContent>
        <SocialMedia>
          <a href="https://facebook.com">
            <img src="/images/facebook.png" alt="Facebook" />
          </a>
          <a href="https://instagram.com">
            <img src="/images/instagram.png" alt="Instagram" />
          </a>
          <a href="https://tiktok.com">
            <img src="/images/tik-tok.png" alt="TikTok" />
          </a>
        </SocialMedia>
      </FooterContainer>
    </FooterWrapper>
  );
};

export default Footer;
