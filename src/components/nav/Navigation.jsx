import React, { useState } from "react"
import { v4 as uuidv4 } from "uuid"

import {
  RiMenu3Fill,
  RiSearchLine,
  RiCloseLine,
  RiUser3Fill,
  RiShoppingBagLine,
} from "react-icons/ri"

import {
  Nav,
  NavLinks,
  NavLogoLink,
  NavMenu,
  NavSocialMenu,
  IconLink,
  ToggleBars,
  Wrapper,
  NavMenuContainer,
} from "./navigation.styles"

const Navigation = ({ siteTitle, menuLinks }) => {
  const [click, setClick] = useState(false)

  const handleClick = () => setClick(!click)

  return (
    <Wrapper>
      <Nav click={click}>
        <NavMenuContainer>
          <NavLogoLink to="/">{siteTitle}</NavLogoLink>

          <ToggleBars onClick={handleClick}>
            {click ? <RiCloseLine /> : <RiMenu3Fill />}
          </ToggleBars>
          <NavMenu onClick={handleClick} click={click}>
            {menuLinks.map((link) => (
              <NavLinks to={link.path} key={uuidv4()}>
                {link.name}
              </NavLinks>
            ))}
          </NavMenu>

          <NavSocialMenu>
            <IconLink to="/">
              <RiSearchLine />
            </IconLink>
            <IconLink to="/">
              <RiUser3Fill />
            </IconLink>
            <IconLink to="/">
              <RiShoppingBagLine />
            </IconLink>
          </NavSocialMenu>
        </NavMenuContainer>
      </Nav>
    </Wrapper>
  )
}

export default Navigation
