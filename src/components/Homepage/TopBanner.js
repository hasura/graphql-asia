import React from "react";
import '../Common/Styles.scss';
const submitBtnIcon = require('../Common/images/submit-btn-icon.svg');
const submitBtnIconHover = require('../Common/images/submit-btn-icon-hover.svg');
const TopBanner = props => {
  return (
    <div className='topBannerWrapper sectionWrapperBottom'>
      <div className='mainTitle'>GraphQL Asia 2021</div>
      <div className='articleDesc'>
        Asia’s largest GraphQL Conference is back! And this time we’re accepting talks & workshops in multiple Asian languages.
      </div>
      <div className='buttonWrapper'>
        <button className='commonBtn darkBtn mr-20'>
          <img className='submitIcon' src={submitBtnIcon} alt='Icon' />
          <img className='submitIconHover' src={submitBtnIconHover} alt='Icon' />
          Submit a Proposal
        </button>
        <button className='commonBtn lightBtn ml-20'>Register Now</button>
      </div>
    </div>
  );
};

export default TopBanner;
