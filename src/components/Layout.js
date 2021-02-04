import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import './Common/Styles.scss';
import LeftSidebar from './Common/LeftSidebar';
import Footer from './Common/Footer';
const patternDark = require('./Common/images/pattern-dark.svg');
const patternLight = require('./Common/images/pattern-light.svg');

const darkIconDarkMode = require('./Common/images/dark-icon-dark-mode.svg');
const lightIconDarkMode = require('./Common/images/light-icon-dark-mode.svg');

const darkIconLightMode = require('./Common/images/dark-icon-light-mode.svg');
const lightIconLightMode = require('./Common/images/light-icon-light-mode.svg');
const footerPattern = require('./Common/images/footer-pattern.svg');
function openMenuBar() {
  var x = document.getElementById('navbar');
  var hamburgerMenu = document.getElementById('menuClick');
  if (x.className === 'topnav') {
    x.className += ' responsive';
    hamburgerMenu.className += ' open';
    document.body.style.overflow = 'hidden';
    document.getElementById('viewport').style.overflow = 'hidden';
  } else {
    if (x.className === 'topnav responsive') {
      x.className = 'topnav';
      hamburgerMenu.className = 'navBarToggle';
      document.body.style.overflow = null;
      document.getElementById('viewport').style.overflow = null;
    }
  }
}
const Layout = ({ children, location }) => {
  const getLightModeFromLocalStorage = () => {
    if (typeof window !== 'undefined') {
      if ('localStorage' in window && window.localStorage && 'getItem' in window.localStorage) {
        const lightModeConsent = window.localStorage.getItem('lightModeConsent');
        if (lightModeConsent === null) {
          return false;
        } else if (lightModeConsent === 'true') {
          return true;
        } else {
          return false;
        }
      }
    }
    return false;
  };
  const [isLightMode, setIsLightMode] = useState(getLightModeFromLocalStorage());
  const wrapperRef = useRef(null);
  useEffect(() => {
    document.addEventListener('click', handleClickOutside, false);
    setIsLightMode(getLightModeFromLocalStorage());
    return () => {
      document.removeEventListener('click', handleClickOutside, false);
    };
  }, []);
  const handleClickOutside = (event) => {
    if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
      var x = document.getElementById('navbar');
      if (x.className === 'topnav responsive') {
        x.className = 'topnav';
        document.body.style.overflow = null;
        document.getElementById('viewport').style.overflow = null;
      }
    }
  };
  const removeDarkMode = () => {
    if (typeof window !== undefined) {
      window.localStorage.setItem('lightModeConsent', 'true');
      if ('localStorage' in window && window.localStorage && 'getItem' in window.localStorage) {
        setIsLightMode(true);
      }
    }
  };
  const setDarkMode = () => {
    if (typeof window !== undefined) {
      window.localStorage.setItem('lightModeConsent', 'false');
      if ('localStorage' in window && window.localStorage && 'getItem' in window.localStorage) {
        setIsLightMode(false);
      }
    }
  };
  const path = location.pathname;
  const isPattern =
    path === '/' || path === '/code-of-conduct/' || path === '/register/' || path === '/404'
      ? true
      : false;
  return (
    <div id="viewport" className={!isLightMode ? 'darkModeLayout' : 'lightModeLayout'}>
      <div className="mainWrapper">
        {isPattern ? (
          <img className="pattern" src={!isLightMode ? patternDark : patternLight} alt="Pattern" />
        ) : null}
        <div id="navbar" className="topnav" ref={wrapperRef}>
          {/*eslint-disable-next-line*/}
          <div
            className="navBarToggle"
            aria-label="button"
            role="button"
            tabIndex="0"
            onClick={() => openMenuBar()}
            id="menuClick"
          >
            <span className="iconBar"></span>
            <span className="iconBar"></span>
            <span className="iconBar"></span>
          </div>
          <div className="visibleMobile">
            <ul className="navBarULMobile articleDesc">
              <li>
                <Link to="/speakers/" onClick={() => openMenuBar()}>
                  Speakers
                </Link>
              </li>
              <li>
                <Link to="/workshops/" onClick={() => openMenuBar()}>
                  Workshops
                </Link>
              </li>
              <li>
                <Link to="/talks/" onClick={() => openMenuBar()}>
                  Talks
                </Link>
              </li>
              <li>
                <Link to="/code-of-conduct/" onClick={() => openMenuBar()}>
                  Code of Conduct
                </Link>
              </li>
              <li>
                <Link to="/#sponsorship" onClick={() => openMenuBar()}>
                  Sponsorship
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="modeChangeWrapper">
          <img
            onClick={() => {
              removeDarkMode();
            }}
            src={!isLightMode ? lightIconDarkMode : lightIconLightMode}
            alt="icon"
          />
          <img
            onClick={() => {
              setDarkMode();
            }}
            src={!isLightMode ? darkIconDarkMode : darkIconLightMode}
            alt="icon"
          />
        </div>
        <div className="mainGridWrapper">
          <div>
            <LeftSidebar isLightMode={isLightMode} location={location}/>
          </div>
          <div>
            {children.map((child, index) => (
              <React.Fragment key={index}>
                {React.cloneElement(child, { isLightMode })}
              </React.Fragment>
            ))}
            <Footer isLightMode={isLightMode} />
          </div>
        </div>
      </div>
      <div className="footerPattern">
        <img src={footerPattern} alt="pattern" />
      </div>
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  location: PropTypes.object,
};

export default Layout;
