import React, {useState, useEffect} from "react";
import PropTypes from "prop-types";
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
const Layout = ({ children }) => {
  const getLightModeFromLocalStorage = () => {
    if (typeof window !== 'undefined') {
      if ("localStorage" in window && window.localStorage && "getItem" in window.localStorage) {
        const lightModeConsent = window.localStorage.getItem("lightModeConsent");
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
  }
  const [isLightMode, setIsLightMode] = useState(getLightModeFromLocalStorage());
  useEffect(() => {
    setIsLightMode(getLightModeFromLocalStorage());
  },[]);
  const removeDarkMode = () => {
    if (typeof window !== undefined) {
      window.localStorage.setItem("lightModeConsent", "true");
      if ("localStorage" in window && window.localStorage && "getItem" in window.localStorage) {
        setIsLightMode(true);
      }
    }
  }
  const setDarkMode = () => {
    if (typeof window !== undefined) {
      window.localStorage.setItem("lightModeConsent", "false");
      if ("localStorage" in window && window.localStorage && "getItem" in window.localStorage) {
        setIsLightMode(false);
      }
    }
  }
  return (
    <div className={((!isLightMode) ? 'darkModeLayout' : 'lightModeLayout')}>
      <div className='mainWrapper'>
        <img className='pattern' src={(!isLightMode) ? patternDark : patternLight} alt='Pattern' />
        <div className='modeChangeWrapper'>
          <img
            onClick={()=>{removeDarkMode()}}
            src={(!isLightMode) ? lightIconDarkMode : lightIconLightMode} alt='icon'
          />
          <img
            onClick={()=>{setDarkMode()}}
            src={(!isLightMode) ? darkIconDarkMode : darkIconLightMode} alt='icon'
          />
        </div>
        <div className='mainGridWrapper'>
          <div>
            <LeftSidebar isLightMode = {isLightMode}/>
          </div>
          <div>
            {
              children.map((child, index) => (
                <React.Fragment key={index}>
                  {React.cloneElement(child, { isLightMode })}
                </React.Fragment>
              ))
            }
            <Footer isLightMode = {isLightMode}/>
          </div>
        </div>
      </div>
      <div className='footerPattern'>
        <img src={footerPattern} alt='pattern' />
      </div>
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  location: PropTypes.object,
};

export default Layout;
