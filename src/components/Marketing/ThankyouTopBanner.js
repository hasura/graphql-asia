import React, {useState} from 'react';
import { CopyToClipboard } from "react-copy-to-clipboard";
import { Link } from 'gatsby';
import IconHover from '../Common/IconHover';
const copyDarkMode = require('../Common/images/copy-dark-mode.svg');
const whatsappDarkMode = require('../Common/images/whatsapp-dark-mode.svg');
const linkedinDarkMode = require('../Common/images/linkedin-dark-mode.svg');
const twitterDarkMode = require('../Common/images/twitter-dark-mode.svg');

const copyLightMode = require('../Common/images/copy-light-mode.svg');
const whatsappLightMode = require('../Common/images/whatsapp-light-mode.svg');
const linkedinLightMode = require('../Common/images/linkedin-light-mode.svg');
const twitterLightMode = require('../Common/images/twitter-light-mode.svg');

const star = require('../Common/images/star.svg');
const add = require('../Common/images/add.svg');
const ThankyouTopBanner = props => {
  const [isCopied, setIsCopiedToggle] = useState(false);
  const onCopy = () => {
    setIsCopiedToggle(true);
    setTimeout(() => setIsCopiedToggle(false), 3000);
  };
  const renderCopyIcon = () => {
    if (isCopied) {
      return (
        <div className={'copiedWrapper ' + ((!props.isLightMode) ? 'copiedDarkMode' : 'copiedLightMode')}>Copied</div>
      );
    }
    return null;
  };
  return (

    <div className="registerWrapper landingThankWrapper">
      <div className='wd80'>
        <div className="mainSubTitle">Thank you for registering for GraphQL Asia!</div>
        <div className="articleDesc removePaddTop">
          Here are a couple of things before you go on with your day:
        </div>
        <ul className="articleDesc">
          <li>
            <img src={star} alt="Star" />
            <span>
              Check your inbox for a confirmation email. If you have not got one, please email
              Harsha at <a href="mailto:events@hasura.io">events@hasura.io</a> with the subject
              line <span className="redColor">”GQLA 2021 Registration Error“</span>.
            </span>
          </li>
          <li>
            <img src={star} alt="Star" />
            <span>
              We will send you more information on workshop topics, speakers, schedule and how to
              attend the conference around the{' '}
              <span className="redColor">3rd week of January</span>.
            </span>
          </li>
          <li>
            <img src={star} alt="Star" />
            <span>And of course, add the conference to your calendar below</span>
          </li>
        </ul>
        <div className="commonLink">
          <a href="https://www.addevent.com/event/wJ5798313">
            <img className="addIcon" src={add} alt="Add" />
            Add to Calendar
          </a>
        </div>
        <div className='landingThankShareWrapper'>
          <div className='articleDesc fontBold'>
            Invite your friends
          </div>
          <div className='shareIconWrapper'>
            <CopyToClipboard text={`https://graphql.asia/`} onCopy={onCopy}>
              <div className='shareIcon'>
                <IconHover
                  baseImgSrc = {copyDarkMode}
                  hoverImgSrc = {copyLightMode}
                  altText = 'Discord'
                />
                {renderCopyIcon()}
              </div>
            </CopyToClipboard>
            <a className='shareIcon'
              href={
                `https://wa.me/?text=https://graphql.asia/`
              }
               data-action="share/whatsapp/share"
            >
            <IconHover
              baseImgSrc = {whatsappDarkMode}
              hoverImgSrc = {whatsappLightMode}
              altText = 'Discord'
            />
          </a>
            <a className='shareIcon'
              href={
                `https://twitter.com/intent/tweet?&text=Super excited to be attending GraphQL Asia 2021! Join me there #GraphQL&url=https://graphql.asia/`
              }
              target="_blank"
              rel="noopener noreferrer"
            >
              <IconHover
                baseImgSrc = {twitterDarkMode}
                hoverImgSrc = {twitterLightMode}
                altText = 'Discord'
              />
            </a>
            <a className='shareIcon'
               href={
                  `http://www.linkedin.com/shareArticle?mini=true&url=https://graphql.asia/&title=Super excited to be attending GraphQL Asia 2021! Join me there #GraphQL&summary=Super excited to be attending GraphQL Asia 2021! Join me there #GraphQL&source=https://graphql.asia/`
                }
                target="_blank"
                rel="noopener noreferrer"
            >
              <IconHover
                baseImgSrc = {linkedinDarkMode}
                hoverImgSrc = {linkedinLightMode}
                altText = 'Discord'
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ThankyouTopBanner;
