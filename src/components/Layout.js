import React, {useState} from "react";
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
const Layout = ({ children }) => {
  const [isLightMode, setIsLightMode] = useState(false)
  return (
    <div className={((!isLightMode) ? 'darkModeLayout' : 'lightModeLayout')}>
      <img className='pattern' src={(!isLightMode) ? patternDark : patternLight} alt='Pattern' />
      <div className='mainWrapper'>
        <div className='modeChangeWrapper'>
          <img
            onClick={()=>{setIsLightMode(true)}}
            src={(!isLightMode) ? lightIconDarkMode : lightIconLightMode} alt='icon'
          />
          <img
            onClick={()=>{setIsLightMode(false)}}
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
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  location: PropTypes.object,
};

export default Layout;
