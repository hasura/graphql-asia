import React from 'react';

import graphqlAsiaImg from '../../images/graphqlAsia.png';
import '../styles/landing.scss';

export const Landing = () => (
  <div className="landing-div">
    <div className="flex flex-direction-column align-items-center">
      <img src={graphqlAsiaImg} alt="graphql-asia-2021" id="graphql-asia-logo" />
      <div className="col-md-8 col-sm-8 col-xs-12">
        <h1 id="main-heading">GraphQL Asia 2021 is brewing...</h1>
        <p id="heading-desc">Online Conference | Feb 2021 </p>
        <div className="landing-cta-div flex justify-content-center">
          <button className="primary-cta mr-24">
            Signup to know About early-bird tickets<span id="right-arrow">→</span>
          </button>
          <buton className="secondary-cta">
            Submit your CFP
          </buton>
        </div>
      </div>
    </div>
  </div>
);
