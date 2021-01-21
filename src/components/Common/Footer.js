import React from "react";
import {Link} from 'gatsby';
import IconHover from './IconHover';
import '../Common/Styles.scss';
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
const Footer = ({isLightMode}) => {
  return (
    <div className='footerWrapper sectionWrapper removePaddBottom'>
      <ul className='articleDesc'>
        <li className={((!isLightMode) ? 'darkModeBorRight' : 'lightModeBorRight')}><Link to='/code-of-conduct/'>Code Of Conduct</Link></li>
        <li className={((!isLightMode) ? 'darkModeBorRight' : 'lightModeBorRight')}><a href='mailto:events@hasura.io'>Sponsor GraphQL Asia 2021</a></li>
        <li><a href='mailto:events@hasura.io'>Contact us</a></li>
      </ul>
      <div className='articleDesc'>
        © {(new Date().getFullYear())} Hasura Inc. All rights reserved
      </div>
      <div className='footerLogoWrapper'>
        <div className='poweredLogo'>
          <a href='https://hasura.io/'><img src={(!isLightMode) ? poweredLogoDarkMode : poweredLogoLightMode} alt='Powered Logo' /></a>
        </div>
        <div className='socialIconWrapper'>
          <a href='https://discord.com/invite/hasura' target='_blank' rel='noopener noreferrer'>
            <IconHover
              baseImgSrc = {(!isLightMode) ? discordDarkMode : discordLightMode}
              hoverImgSrc = {discordHover}
              altText = 'Discord'
            />
          </a>
          <a href='https://www.linkedin.com/company/graphql-asia' target='_blank' rel='noopener noreferrer'>
            <IconHover
              baseImgSrc = {(!isLightMode) ? linkedinDarkMode : linkedinLightMode}
              hoverImgSrc = {linkedinHover}
              altText = 'Discord'
            />
          </a>
          <a href='https://twitter.com/graphqlasia' target='_blank' rel='noopener noreferrer'>
            <IconHover
              baseImgSrc = {(!isLightMode) ? twitterDarkMode: twitterLightMode}
              hoverImgSrc = {twitterHover}
              altText = 'Discord'
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
