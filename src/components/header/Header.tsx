import React, { useState } from "react";
import {
  HeaderWrapper,
  Navbar,
  NavMenu,
  NavItem,
  NavLink,
  NavLogo,
  ButtonHover,
  Hamburger,
  Bar,
  Container,
} from "./Header.styled";

const Header: React.FC = () => {
  const [menuActive, setMenuActive] = useState<boolean>(false); // Corrected useState syntax

  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  return (
    <HeaderWrapper>
      <Container>
        <Navbar>
          <NavLogo href="/">TechSpace.</NavLogo>
          <NavMenu className={menuActive ? "active" : ""}>
            <NavItem>
              <NavLink href="/">მთავარი</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/course">კურსები</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/about">მიზანი</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/blog">ბლოგი</NavLink>
            </NavItem>
            <NavItem>
              <ButtonHover onClick={() => alert("Modal opens!")}>
                შესვლა
              </ButtonHover>
            </NavItem>
          </NavMenu>
          <Hamburger onClick={toggleMenu}>
            <Bar />
            <Bar />
            <Bar />
          </Hamburger>
        </Navbar>
      </Container>
    </HeaderWrapper>
  );
};

export default Header;
