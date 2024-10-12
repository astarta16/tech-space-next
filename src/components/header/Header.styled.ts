import styled from "styled-components";

export const HeaderWrapper = styled.header`
  width: 100%;
  position: sticky;
  top: 0;
  z-index: 1000;
  background-color: #ffffff;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  padding: 15px 0;
`;

export const Container = styled.div`
  max-width: 90%;
  margin: 20px auto;
`;

export const Navbar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  z-index: 10;
`;

export const NavMenu = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;

  &.active {
    left: 0;
    z-index: 1000;
  }

  @media only screen and (max-width: 894px) {
    position: fixed;
    left: -100%;
    top: 5rem;
    flex-direction: column;
    background-color: #fff;
    width: 100%;
    border-radius: 10px;
    text-align: center;
    transition: 0.3s;
    box-shadow: 0 10px 27px rgba(0, 0, 0, 0.05);

    &.active {
      left: 0;
    }
  }
`;

export const NavItem = styled.li`
  margin-left: 3rem;

  @media only screen and (max-width: 894px) {
    margin: 2.5rem 0;
  }
`;

export const NavLink = styled.a`
  font-size: 24px;
  font-weight: 700;
  color: navy;
  text-decoration: none;

  &:hover {
    color: #070033;
  }
`;

export const NavLogo = styled.a`
  font-size: 40px;
  font-weight: 900;
  color: navy;
  text-decoration: none;
`;

export const ButtonHover = styled.button`
  font-size: 16px;
  padding: 15px 40px;
  font-weight: 600;
  color: #fff;
  cursor: pointer;
  background-size: 300% 100%;
  border: none;
  border-radius: 50px;
  background-image: linear-gradient(
    to right,
    #34588a,
    #4481eb,
    #061586,
    #0958ce
  );
  box-shadow: 0 4px 15px 0 rgba(4, 79, 190, 0.75);
  transition: all 0.4s ease-in-out;

  &:hover {
    background-position: 100% 0;
  }
`;

export const Hamburger = styled.div`
  display: none;
  cursor: pointer;
  z-index: 1001;

  @media only screen and (max-width: 894px) {
    display: block;
  }
`;

export const Bar = styled.span`
  display: block;
  width: 25px;
  height: 3px;
  margin: 5px auto;
  transition: all 0.3s ease-in-out;
  background-color: navy;

  ${Hamburger}.active & {
    &:nth-child(2) {
      opacity: 0;
    }

    &:nth-child(1) {
      transform: translateY(8px) rotate(45deg);
    }

    &:nth-child(3) {
      transform: translateY(-8px) rotate(-45deg);
    }
  }
`;
