import React from "react"
import { Navigation, Announcement } from "../../components"

const Header = ({ menuLinks, siteTitle }) => {
  return (
    <div>
      <Announcement />
      <Navigation menuLinks={menuLinks} siteTitle={siteTitle} />
    </div>
  )
}

export default Header
