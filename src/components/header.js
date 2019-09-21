import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import './styles.scss'
const logo = require('../images/logo.svg');
const Header = ({ siteTitle }) => {
  const scrollToView = (e) => {
    // e.preventDefault();
    const element = e.target.getAttribute('srollid');
    if (window.location.pathname !== '/') {
      window.location.href = element;
    }
    const node = document.getElementById(element.split('#')[1]);
    console.log('element', window.location.pathname);
    console.log('element', element);
    node.scrollIntoView({ block: 'start', behavior: 'smooth' })
  }
  return (
    <header>
      <div className="headerWrapper">
        <nav className="navbar navbar-default navBarDefault">
          <div className="container">
            <div className="navbar-header navBarHeader">
              <Link className="navbar-brand navBarBrand" to="/"><img src={logo} alt={'Brand'} /></Link>
              <button type="button" className="navbar-toggle collapsed navBarToggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar iconBar"></span>
                <span className="icon-bar iconBar"></span>
                <span className="icon-bar iconBar"></span>
              </button>
            </div>
            <div className="collapse navbar-collapse navBarCollapse" id="bs-example-navbar-collapse-1">
              <ul className="nav navbar-nav navbar-right navBarRight">
                <li className={'navBarList'}><button onClick={scrollToView} srollid="/#overview">OVERVIEW</button></li>
                <li className={'navBarList'}><button onClick={scrollToView} srollid="/#speakers">SPEAKERS</button></li>
                <li className={'navBarList'}><button onClick={scrollToView} srollid="/#schedule">SCHEDULE</button></li>
                <li className={'navBarList'}><button onClick={scrollToView} srollid="/#sponsors">SPONSORS</button></li>
                <li className={'navBarList'}><button onClick={scrollToView} srollid="/#ticket">TICKETS</button></li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
