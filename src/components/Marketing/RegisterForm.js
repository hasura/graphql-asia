import React from 'react';

import MarketoForm from '../Common/marketoform';
import formIllustration from './images/form_illustration.png';
const marketoHost = 'https://page.hasura.io';

export const RegisterForm = ({title, desc}) => {
  return (
    <div className="signup-form-wrapper">
      <div className="signup-form-div">
        <h2>{title}</h2>
        {
          desc ? (
            <p>{desc}</p>
          ) : null
        }

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
