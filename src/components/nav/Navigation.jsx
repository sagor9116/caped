import React, { useState, useEffect } from "react"
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
  const [scroll, setScroll] = useState(false)
  const [click, setClick] = useState(false)

  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScroll(true)
    } else {
      setScroll(false)
    }
  }

  const handleClick = () => setClick(!click)

  useEffect(() => {
    changeNav()
    window.addEventListener("scroll", changeNav)
  }, [])

  return (
    <Wrapper>
      <Nav active={scroll} click={click}>
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
          {/* NavMenu */}

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
          {/* NavSocialMenu */}
        </NavMenuContainer>
        {/* NavMenuContainer*/}
      </Nav>
      {/* Nav */}
    </Wrapper>
  )
}

export default Navigation
