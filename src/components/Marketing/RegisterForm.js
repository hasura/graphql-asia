import React from 'react';

import MarketoForm from '../Common/marketoform';
import formIllustration from './images/form_illustration.png';
const marketoHost = 'https://page.hasura.io';

export const RegisterForm = () => {
  return (
    <div className="signup-form-wrapper">
      <img className='mobileShowPattern' src={formIllustration} alt="gqla-illustration" />
      <div className="signup-form-div">
        <h2>Join us for the third edition of GraphQL Asia!</h2>
        <p>24th &amp; 25th Feb | Online | Free </p>
        <div id="register-form">
          <MarketoForm
            formId="1117"
            marketoHost={marketoHost}
            id="631-HMN-492"
            styleClass="marketoFormWrapper graphQLMktoForm"
          />
        </div>
      </div>
      <img className='mobileHidePattern' src={formIllustration} alt="gqla-illustration" />
    </div>
  );
}
