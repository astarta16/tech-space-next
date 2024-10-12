// src/components/courses/CoursesStyled.ts
import styled from "styled-components";

export const CoursesWrapper = styled.div`
  padding-top: 20px;
`;

export const ImageContainer = styled.div`
  position: relative;
  width: 100%;
`;

export const CoverImage = styled.img`
  width: 100%;
  height: auto;
  max-height: 400px;
  object-fit: cover;
`;

export const CenteredText = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  text-align: center;
  padding: 15px;
  font-size: 30px;
  font-weight: 800;
`;

export const RegisterButton = styled.button`
  margin-top: 20px;
  padding: 12px 30px;
  background-color: #4baf0d;
  border: none;
  border-radius: 50px;
  cursor: pointer;
  transition: background-color 0.3s, transform 0.2s;

  a {
    color: white;
    font-size: 16px;
    font-weight: bold;
    text-decoration: none;
  }

  &:hover {
    background-color: navy;
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }

  &:active {
    transform: translateY(1px);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  }
`;

export const CoursesSection = styled.section`
  text-align: center;
  margin: 20px 0;

  .courses-title {
    margin-bottom: 40px;
    font-weight: 700;
    font-size: 40px;
    color: #061586;
  }
`;

export const CoursesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  justify-content: center;
  padding: 0 20px;

  @media (min-width: 992px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }

  @media (max-width: 400px) {
    display: flex;
    flex-direction: column;
    gap: 15px;
  }
`;

export const CourseCard = styled.div`
  background: navy;
  padding: 10px;
  color: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin: 0 auto;
  max-width: 300px;
`;

export const CourseImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  display: block;
`;

export const CourseInfo = styled.div`
  padding: 15px;
`;

export const CourseTitle = styled.h3`
  margin-top: 0;
  font-size: 21px;
  font-weight: 800;
  font-family: "Inter", sans-serif;
`;

export const CourseDescription = styled.p`
  margin: 20px 0;
  font-family: "Ubuntu", sans-serif;
  font-weight: 500;
`;

export const CourseLink = styled.a`
  color: #4baf0d;
  font-weight: 700;
  font-size: 21px;
  font-family: "Inter", sans-serif;
  text-decoration: none;
`;
