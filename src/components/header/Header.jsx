import React from "react"
import { Navigation, Announcement } from "../../components"
import Title from "../title/Title"

const Header = ({ menuLinks, siteTitle }) => {
  return (
    <div>
      <Announcement />
      <Navigation menuLinks={menuLinks} siteTitle={siteTitle} />
      <Title />
    </div>
  )
}

export default Header
