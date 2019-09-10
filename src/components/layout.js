/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"
import './styles.scss'
const copy = require('../images/copyright.svg');
const twitterBrands = require('../images/twitter-brands.svg');
const facebookBrands = require('../images/facebook-brands.svg');
const instagramBrands = require('../images/instagram-brands.svg');
const youtubeBrands = require('../images/youtube-brands.svg');

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <div className={'bgImage'}>
        <Header/>
        <div>
          <main>{children}</main>
          <footer className={'footerWrapper'}>
            <div className={'container noPadd'}>
              <div className={'footerListWrapper'}>
                <div className={'copyRight'}>
                  <img src={copy} alt={'Copy right icon'} /> 2019 Hasura Inc. All rights reserved
                </div>
                <ul>
                  <li className={'copyRight'}><a href="/">Code of conduct</a></li>
                  <li className={'copyRight'}><a href="/">Refund policy</a></li>
                  <li className={'copyRight'}><a href="/">Diversity</a></li>
                  <li className={'copyRight fontBold'}><a href="/">New to GraphQL?</a></li>
                </ul>
              </div>
              <div className={'socialWrapper'}>
                <div className={'socialIcon'}>
                  <a href="/"><img src={twitterBrands} alt={'Twitter brands'} /></a>
                </div>
                <div className={'socialIcon'}>
                  <a href="/"><img src={facebookBrands} alt={'Facebook brands'} /></a>
                </div>
                <div className={'socialIcon'}>
                  <a href="/"><img src={instagramBrands} alt={'Instagram brands'} /></a>
                </div>
                <div className={'socialIcon'}>
                  <a href="/"><img src={youtubeBrands} alt={'Youtube brands'} /></a>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
