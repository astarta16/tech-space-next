// src/components/about/AboutStyled.tsx (adding toggle functionality for FAQ)
import React, { useState } from "react";
import styled from "styled-components";

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

// FAQ Component with toggle functionality
const FaqItemComponent: React.FC<{ question: string; answer: string }> = ({
  question,
  answer,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleFaq = () => setIsOpen(!isOpen);

  return (
    <FaqItem>
      <FaqQuestion onClick={toggleFaq}>
        {question} <span className="faq-icon">{isOpen ? "-" : "+"}</span>
      </FaqQuestion>
      {isOpen && <FaqAnswer>{answer}</FaqAnswer>}
    </FaqItem>
  );
};

export default FaqItemComponent;
