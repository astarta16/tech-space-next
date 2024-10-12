// src/components/header/Header.tsx
import React, { useState } from "react";
import Link from "next/link";
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
  const [menuActive, setMenuActive] = useState<boolean>(false);

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
              <Link href="/" passHref>
                <NavLink>მთავარი</NavLink>
              </Link>
            </NavItem>
            <NavItem>
              <Link href="/courses" passHref>
                <NavLink>კურსები</NavLink>
              </Link>
            </NavItem>
            <NavItem>
              <Link href="/about" passHref>
                <NavLink>მიზანი</NavLink>
              </Link>
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
