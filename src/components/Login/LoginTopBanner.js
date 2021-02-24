import React, { Fragment, useState, useEffect } from 'react';
import MarketoForm from '../Common/marketoform';
import '../Common/Styles.scss';
const marketoHost = 'https://page.hasura.io';
const star = require('../Common/images/star.svg');
const add = require('../Common/images/add.svg');
const LoginTopBanner = ({ location }) => {
  return (
    <div className="registerWrapper sectionWrapper removePaddTop">
      <div className="mainSubTitle">Login to GraphQL Asia</div>
      <div className="articleDesc removePaddTop pb-10">
        Enter your email below
      </div>
      <MarketoForm
        formId="1152"
        marketoHost={marketoHost}
        id="631-HMN-492"
        styleClass="marketoFormWrapper"
      />
      <div className="articleDesc">
        Submitting this form means you agree to the{' '}
        <a href="https://hasura.io/legal/website-terms-of-use/">Terms and Conditions</a> and{' '}
        <a href="https://hasura.io/legal/hasura-privacy-policy/">Privacy Policy</a>.
      </div>
    </div>
  );
};

export default LoginTopBanner;
