import React from "react";
import { Link } from 'gatsby';
import '../Common/Styles.scss';
const submitBtnIcon = require('../Common/images/submit-btn-icon.svg');
const submitBtnIconHover = require('../Common/images/submit-btn-icon-hover.svg');
const TopBanner = props => {
  return (
    <div className='topBannerWrapper sectionWrapperBottom'>
      <div className='mainTitle'>GraphQL Asia 2021</div>
      <div className='articleSectionTitle'>
        Asia’s largest GraphQL Conference is back! And this time we’re accepting talks & workshops in multiple Asian languages.
      </div>
      <div className='buttonWrapper'>
        <a href='https://docs.google.com/forms/d/e/1FAIpQLSdIKOPK9VaxhJptC7f2zk1PsvQMkxE7W7Jl1-xemCea9JpZng/viewform?usp=sf_link' target='_blank' rel='noopener noreferrer'>
          <button className='commonBtn darkBtn mr-20'>
            <img className='submitIcon' src={submitBtnIcon} alt='Icon' />
            <img className='submitIconHover' src={submitBtnIconHover} alt='Icon' />
            Submit a Proposal
          </button>
        </a>
        <Link to='/register/'><button className='commonBtn lightBtn ml-20'>Register Now</button></Link>
      </div>
    </div>
  );
};

export default TopBanner;
