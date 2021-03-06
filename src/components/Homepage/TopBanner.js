import React from 'react';
import { Link } from 'gatsby';
import '../Common/Styles.scss';
const submitBtnIcon = require('../Common/images/submit-btn-icon.svg');
const submitBtnIconHover = require('../Common/images/submit-btn-icon-hover.svg');
const TopBanner = (props) => {
  return (
    <div className="topBannerWrapper sectionWrapperBottom">
      <div className="mainTitle">Asia's Largest GraphQL Conf is Back</div>
      <div className="articleSectionTitle">
        Join us on 24th & 25th Feb for the third edition of GraphQL Asia happening online and free!
        And this time we're accepting talks & workshops in multiple Asian languages.
      </div>
      <div className="buttonWrapper">
        <Link to="/register/">
          <button className="commonBtn darkBtn">Register Now</button>
        </Link>
        <Link to="/login/">
          <button className="commonBtn lightBtn ml-20">Login</button>
        </Link>
      </div>
    </div>
  );
};

export default TopBanner;
