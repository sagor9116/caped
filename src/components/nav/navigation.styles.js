import styled from "styled-components"
import { Link } from "gatsby"
import { breakpoints } from "../../utils/styles"

export const Wrapper = styled.div``

export const Nav = styled.div`
  height: 80px;
  position: sticky;
  top: 0;
  background: ${({ active }) => (active ? "blue" : "white")};
  z-index: 999;

  @media screen and (max-width: ${breakpoints.l}px) {
  }
`

export const NavMenuContainer = styled.nav`
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  z-index: 1;
`

export const NavLogoLink = styled(Link)`
  display: flex;
  align-items: center;
  color: var(--font-color);
  height: 100%;
  font-family: var(--header-font);
  font-weight: 800;
  letter-spacing: 2px;
  text-transform: uppercase;
  font-size: var(--font-small);
  padding: 0.5rem 1rem;

  @media screen and (min-width: ${breakpoints.m}px) {
    font-size: var(--font-medium);
  }

  @media screen and (min-width: ${breakpoints.l}px) {
    font-size: var(--font-large);
    font-weight: 600;
    letter-spacing: 1px;
  }
`

export const NavMenu = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: ${breakpoints.l}px) {
    width: 100%;
    height: 90vh;
    flex-direction: column;
    position: absolute;
    top: ${({ click }) => (click ? "100%" : "-10000px")};
    opacity: 1;

    background: #fff;
  }
`

export const NavLinks = styled(Link)`
  color: var(--font-color);
  font-weight: 600;
  display: flex;
  align-items: center;
  padding: 0 1rem;
  letter-spacing: 1px;

  @media screen and (max-width: ${breakpoints.l}px) {
    width: 100%;
    text-align: center;
    display: table;
    padding: 2rem;
    font-size: var(--font-small);
  }
`

export const NavSocialMenu = styled.div`
  display: flex;
  align-items: center;

  @media screen and (max-width: ${breakpoints.l}px) {
    width: 100%;
    justify-content: center;
    margin-right: 2rem;
  }
`

export const IconLink = styled(Link)`
  padding: 0 1rem;
  font-size: var(--font-small);
  color: var(--font-color);
  position: relative;

  @media screen and (max-width: ${breakpoints.l}px) {
    padding: 0 6px;
    font-size: var(--font-medium);
    :nth-child(2) {
      display: none;
    }
  }
`

// mobile-menu
export const ToggleBars = styled.div`
  display: none;
  color: var(--font-color);
  transition: 0.5s all ease-in;

  @media screen and (max-width: ${breakpoints.l}px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 78%);
    font-size: var(--font-medium);
    cursor: pointer;
  }
`
