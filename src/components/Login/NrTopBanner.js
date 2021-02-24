import React, { Fragment, useState, useEffect } from 'react';
import MarketoForm from '../Common/marketoform';
import '../Common/Styles.scss';
const NrTopBanner = ({ location }) => {
  return (
    <div className="registerWrapper sectionWrapper removePaddTop">
      <div className="mainSubTitle">Login to GraphQL Asia</div>
      <div className="articleDesc removePaddTop sectionWrapperBottomLarge">
        Since you have not already registered for GraphQL Asia - we have registered you and sent a ticket code to your email address. Please check your inbox to login.
      </div>
      {/*<div className="articleDesc">
        Submitting this form means you agree to the{' '}
        <a href="https://hasura.io/legal/website-terms-of-use/">Terms and Conditions</a> and{' '}
        <a href="https://hasura.io/legal/hasura-privacy-policy/">Privacy Policy</a>.
      </div>*/}
    </div>
  );
};

export default NrTopBanner;
