// import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import './styles.scss'
const logo = require('../images/logo.svg');
const Header = ({ siteTitle }) => (
  <header>
    <div className="headerWrapper">
      <nav class="navbar navbar-default navBarDefault">
        <div class="container">
          <div class="navbar-header navBarHeader">
            <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
              <span class="sr-only">Toggle navigation</span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
            </button>
            <a class="navbar-brand navBarBrand" href="/"><img src={logo} alt={'Brand'} /></a>
          </div>
          <div class="collapse navbar-collapse navBarCollapse" id="bs-example-navbar-collapse-1">
            <ul class="nav navbar-nav navbar-right navBarRight">
              <li className={'navBarList'}><a href="#overview">OVERVIEW</a></li>
              <li className={'navBarList'}><a href="#speakers">SPEAKERS</a></li>
              <li className={'navBarList'}><a href="#schedule">SCHEDULE</a></li>
              <li className={'navBarList'}><a href="#sponsors">SPONSORS</a></li>
              <li className={'navBarList'}><a href="#ticket"><button className={'transparentBtn'}>BUY TICKETS</button></a></li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
