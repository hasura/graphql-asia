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

const LeftSidebar = ({isLightMode}) => {
  return (
    <div className='leftSidebarWrapper'>
      <div className='brand'>
        <img src={(!isLightMode) ? brandDarkMode : brandLightMode} alt='Brand' />
      </div>
      <div className='commonLink'>
        24th & 25th Feb’21
      </div>
      <ul className='articleDesc'>
        <li><a href='https://docs.google.com/forms/d/e/1FAIpQLSdIKOPK9VaxhJptC7f2zk1PsvQMkxE7W7Jl1-xemCea9JpZng/viewform?usp=sf_link' target='_blank' rel='noopener noreferrer'>Submit a Proposal</a></li>
        <li><Link to='#conference/'>Previous Conferences</Link></li>
        <li><Link to='#sponsor-us/'>Sponsorship</Link></li>
        <li><Link to='/code-of-conduct/'>Code of Conduct</Link></li>
      </ul>
      <div className='socialIconWrapper'>
        <a href='https://discord.com/invite/hasura' target='_blank' rel='noopener noreferrer'>
          <IconHover
            baseImgSrc = {(!isLightMode) ? discordDarkMode : discordLightMode}
            hoverImgSrc = {discordHover}
            altText = 'Discord'
          />
        </a>
        <a href='https://www.linkedin.com/company/hasura/' target='_blank' rel='noopener noreferrer'>
          <IconHover
            baseImgSrc = {(!isLightMode) ? linkedinDarkMode : linkedinLightMode}
            hoverImgSrc = {linkedinHover}
            altText = 'Discord'
          />
        </a>
        <a href='https://twitter.com/hasurahq' target='_blank' rel='noopener noreferrer'>
          <IconHover
            baseImgSrc = {(!isLightMode) ? twitterDarkMode: twitterLightMode}
            hoverImgSrc = {twitterHover}
            altText = 'Discord'
          />
        </a>
      </div>
    </div>
  );
}

export default LeftSidebar;
