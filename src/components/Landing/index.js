import React from 'react';
import { Link } from 'gatsby';

import graphqlAsiaImg from '../../images/graphqlAsiaLogo.png';
import twitterIcon from '../../images/twitter.svg';
import '../styles/landing.scss';

const ButtonSection = () => (
  <div className="landing-cta-div mt-7">
    <a href="https://docs.google.com/forms/d/e/1FAIpQLSdIKOPK9VaxhJptC7f2zk1PsvQMkxE7W7Jl1-xemCea9JpZng/viewform?usp=sf_link" target="_blank" rel="noopener noreferrer">
      <button className="btn-primary">Submit a Talk</button>
    </a>
    <Link to="/preregister">
      <button className="btn-secondary signup-btn">
        Sign Up for Alerts<span className="right-arrow">→</span>
      </button>
    </Link>
  </div>
);

const FooterSection = () => (
  <div className="flex flex-direction-column align-items-center">
    <div className="footer-section-div mt-7">
      <div className="landing-footer-nav">
        <a href="https://graphql.asia/2019" target="_blank" rel="noopener noreferrer">
          GraphQL Asia 2019<span className="right-arrow">→</span>
        </a>
      </div>
      <div className="landing-footer-nav">
        <a href="https://graphql.asia/2020" target="_blank" rel="noopener noreferrer">
          GraphQL Asia 2020<span className="right-arrow">→</span>
        </a>
      </div>
      <div className="landing-footer-nav" id="graphql-asia-link">
        <a href="https://twitter.com/graphqlasia" target="_blank" rel="noopener noreferrer">
          <img src={twitterIcon} alt="twitter-graphqlasia" id="twitter-icon" />
        @graphqlasia
        </a>
      </div>
    </div>
    <div className="policy-text mt-7">
      &copy; {(new Date().getFullYear())} Hasura Inc. All rights reserved | <a href="https://hasura.io/legal/hasura-privacy-policy/" target="_blank" rel="noopener noreferrer">Privacy policy</a> | <Link to='/code-of-conduct/'>Code of Conduct</Link>
    </div>
  </div>
);

export const Landing = () => (
  <div className="landing-div">
    <div className="flex flex-direction-column align-items-center">
      <img src={graphqlAsiaImg} alt="graphql-asia-2021" id="graphql-asia-logo" />
      <div className="col-md-8 col-sm-8 col-xs-12">
        <h1 id="main-heading">GraphQL Asia 2021 is brewing...</h1>
        <p id="heading-desc">Online Conference | Feb 2021 </p>
        <ButtonSection />
        <FooterSection />
      </div>
    </div>
  </div>
);
