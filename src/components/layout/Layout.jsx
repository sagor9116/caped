import React from "react"
import { StaticQuery, graphql } from "gatsby"
import { Header, Footer } from "../../components"

const Layout = ({ children }) => {
  return (
    <StaticQuery
      query={graphql`
        query SiteTitleQuery {
          site {
            siteMetadata {
              siteTitle
              menuLinks {
                name
                path
              }
            }
          }
        }
      `}
      render={(data) => (
        <>
          <Header
            menuLinks={data.site.siteMetadata.menuLinks}
            siteTitle={data.site.siteMetadata.siteTitle}
          />
          <main>{children}</main>
          <Footer />
        </>
      )}
    />
  )
}

export default Layout
