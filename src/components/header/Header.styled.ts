// src/components/header/Header.styled.ts
import styled from "styled-components";

export const HeaderWrapper = styled.header`
  background-color: #f8f9fa;
  padding: 20px 0;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  position: relative;
  z-index: 10;
`;

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

export const Navbar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const NavLogo = styled.a`
  font-size: 24px;
  font-weight: bold;
  color: #333;
  text-decoration: none;
`;

export const NavMenu = styled.ul`
  display: flex;
  gap: 20px;

  @media (max-width: 768px) {
    position: absolute;
    top: 60px;
    right: 0;
    background-color: white;
    width: 100%;
    height: calc(100vh - 60px);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 40px;
    opacity: 0;
    visibility: hidden;
    transform: translateY(-100%);
    transition: all 0.3s ease;

    &.active {
      opacity: 1;
      visibility: visible;
      transform: translateY(0);
    }
  }
`;

export const NavItem = styled.li`
  list-style: none;
`;

export const NavLink = styled.a`
  text-decoration: none;
  color: #333;
  font-size: 18px;
  font-weight: 500;

  &:hover {
    color: #0056b3;
  }
`;

export const ButtonHover = styled.button`
  background-color: #0056b3;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 8px;
  cursor: pointer;
  font-size: 16px;
  font-weight: 600;
  transition: background-color 0.3s ease-in-out;

  &:hover {
    background-color: #003f7f;
  }
`;

export const Hamburger = styled.div`
  display: none;
  cursor: pointer;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    gap: 5px;
  }
`;

export const Bar = styled.span`
  width: 25px;
  height: 3px;
  background-color: #333;
  border-radius: 2px;
`;
