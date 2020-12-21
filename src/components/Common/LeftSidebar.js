import React from "react";
import { Link } from "gatsby";
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

const LeftSidebar = () => {
  return (
    <div className='leftSidebarWrapper'>
      <div className="brand">
        <img src={brandDarkMode} alt="Brand" />
      </div>
      <div className="subTitle">
        21st &amp; 22nd
        <br />
        Oct’20
      </div>
      <ul className="desc">
        <Link to="/">
          <li>Speakers</li>
        </Link>
        <Link to="/enterprisegraphql/#events">
          <li>Events</li>
        </Link>
        <Link to="/enterprisegraphql/#schedule">
          <li>Schedule</li>
        </Link>
      </ul>
      <div className='socialIconWrapper'>
        <a href='#' target='_blank' rel='noopener noreferrer'>
          <IconHover
            baseImgSrc = {discordDarkMode}
            hoverImgSrc = {discordHover}
            altText = 'Discord'
          />
        </a>
      </div>
    </div>
  );
}

export default LeftSidebar;
