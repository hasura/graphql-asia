import React, {useState} from "react";
import PropTypes from "prop-types";
import './Common/Styles.scss';
import LeftSidebar from './Common/LeftSidebar';
const Layout = ({ children }) => {
  const [isLightMode, setIsLightMode] = useState(false)
  return (
    <div className={((!isLightMode) ? 'darkModeLayout' : 'lightModeLayout')}>
      <div className={'mainWrapper'}>
        <div className='mainGridWrapper'>
          <div>
            <LeftSidebar/>
          </div>
          <div>
            {
              children.map((child, index) => (
                <React.Fragment key={index}>
                  {React.cloneElement(child, { isLightMode })}
                </React.Fragment>
              ))
            }
          </div>
        </div>
        {/*<Footer location={location} />*/}
      </div>
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  location: PropTypes.object,
};

export default Layout;
