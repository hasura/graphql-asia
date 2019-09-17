// import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import TopBanner from "../components/TopBanner"
import './styles.scss'
const logo = require('../images/logo.svg');
const Header = ({ siteTitle }) => (
  <header className={'bgImage'}>
    <div className="headerWrapper">
      <nav className="navbar navbar-default navBarDefault">
        <div className="container">
          <div className="navbar-header navBarHeader">
            <a className="navbar-brand navBarBrand" href="/"><img src={logo} alt={'Brand'} /></a>
            <button type="button" className="navbar-toggle collapsed navBarToggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar iconBar"></span>
              <span className="icon-bar iconBar"></span>
              <span className="icon-bar iconBar"></span>
            </button>
          </div>
          <div className="collapse navbar-collapse navBarCollapse" id="bs-example-navbar-collapse-1">
            <ul className="nav navbar-nav navbar-right navBarRight">
              <li className={'navBarList'}><a href="#overview">OVERVIEW</a></li>
              <li className={'navBarList'}><a href="#speakers">SPEAKERS</a></li>
              <li className={'navBarList'}><a href="#schedule">SCHEDULE</a></li>
              <li className={'navBarList'}><a href="#sponsors">SPONSORS</a></li>
              <li className={'navBarList'}><a href="#ticket"><button className={'transparentBtnNav'}>BUY TICKETS</button></a></li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
    <TopBanner />
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
