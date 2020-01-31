/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useEffect } from "react"

import Header from "./header"
import Footer from "./footer"
import "./layout.css"
import './styles.scss'

const Layout = ({ children }) => {
  useEffect( () => {
    const hash = window.location.hash.replace('#', '');
    if (hash) {
      setTimeout( () => {
        const node = document.getElementById(hash);
        if (node) {
          node.scrollIntoView({ block: 'start', behavior: 'smooth' })
        }
      }, 500);
    }
  }, [])
  return (
    <>
      <div className={'positionRel'}>
        <Header/>
        <div>
          <main>{children}</main>
          <Footer />
        </div>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
