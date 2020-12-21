import React from "react";
import '../Common/Styles.scss';
const TopBanner = props => {
  console.log(props.isLightMode)
  return (
    <div className='topBannerWrapper sectionWrapperBottom'>
      <div className='mainTitle'>GraphQL Asia 2021</div>
      <div className='articleDesc'>
        Asia’s largest GraphQL Conference is back! And this time we’re accepting talks & workshops in multiple Asian languages.
      </div>
      <div className='buttonWrapper'>
        <button className='commonBtn darkBtn mr-20'>Submit a Proposal</button>
        <button className='commonBtn lightBtn ml-20'>Register Now</button>
      </div>
    </div>
  );
};

export default TopBanner;
