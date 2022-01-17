import React from 'react';
import { Link } from 'gatsby';
import IconHover from './IconHover';
import './Styles.scss';
const brandDarkMode = require('./images/logo-dark-mode.svg');
const brandLightMode = require('./images/logo-light-mode.svg');
const discordDarkMode = require('./images/discord-dark-mode.svg');
const linkedinDarkMode = require('./images/linkedin-dark-mode.svg');
const twitterDarkMode = require('./images/twitter-dark-mode.svg');
const discordLightMode = require('./images/discord-light-mode.svg');
const linkedinLightMode = require('./images/linkedin-light-mode.svg');
const twitterLightMode = require('./images/twitter-light-mode.svg');
const discordHover = require('./images/discord-hover.svg');
const linkedinHover = require('./images/linkedin-hover.svg');
const twitterHover = require('./images/twitter-hover.svg');
const poweredLogoLightMode = require('./images/powered-logo-light-mode.svg');
const poweredLogoDarkMode = require('./images/powered-logo-dark-mode.svg');
const LeftSidebar = ({ isLightMode, location }) => {
  const path = location.pathname;
  return (
    <div className="leftSidebarWrapper">
      <div className="brand">
        <Link to="/">
          <img src={!isLightMode ? brandDarkMode : brandLightMode} alt="Brand" />
        </Link>
      </div>
      <div className="articleDesc redColor fontBold">24th & 25th Feb</div>
      <ul className="articleDesc">
        <li className={path === '/recordings/' ? 'active' : ''}>
          <Link to="/recordings/">View Recordings</Link>
        </li>
        <li className={path === '/speakers/' ? 'active' : ''}>
          <Link to="/speakers/">Speakers</Link>
        </li>
        <li className={path === '/workshops/' ? 'active' : ''}>
          <Link to="/workshops/">Workshops</Link>
        </li>
        <li className={path === '/talks/' ? 'active' : ''}>
          <Link to="/talks/">Talks</Link>
        </li>
        <li>
          <Link to="/#schedule">Schedule</Link>
        </li>
        {/* <li><Link to='/jobs/'>Jobs</Link></li> */}
        <li className={path === '/code-of-conduct/' ? 'active' : ''}>
          <Link to="/code-of-conduct/">Code of Conduct</Link>
        </li>
        <li>
          <Link to="/#sponsorship">Sponsors</Link>
        </li>
        <li>
          <Link to="/#about">About</Link>
        </li>
      </ul>
      <div className="leftSidebarFooterWrapper">
        <div className="poweredBrand">
          <a href="https://hasura.io/">
            <img
              src={!isLightMode ? poweredLogoDarkMode : poweredLogoLightMode}
              alt="Powered Logo"
            />
          </a>
        </div>
        <div className="socialIconWrapper">
          <a href="https://discord.com/invite/hasura" target="_blank" rel="noopener noreferrer">
            <IconHover
              baseImgSrc={!isLightMode ? discordDarkMode : discordLightMode}
              hoverImgSrc={discordHover}
              altText="Discord"
            />
          </a>
          <a
            href="https://www.linkedin.com/company/graphql-asia"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IconHover
              baseImgSrc={!isLightMode ? linkedinDarkMode : linkedinLightMode}
              hoverImgSrc={linkedinHover}
              altText="Discord"
            />
          </a>
          <a href="https://twitter.com/graphqlasia" target="_blank" rel="noopener noreferrer">
            <IconHover
              baseImgSrc={!isLightMode ? twitterDarkMode : twitterLightMode}
              hoverImgSrc={twitterHover}
              altText="Discord"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default LeftSidebar;
