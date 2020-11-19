import React from 'react';
import { Link } from 'gatsby';

import graphqlAsiaImg from '../../images/graphqlAsia.png';
import twitterIcon from '../../images/twitter.svg';
import '../styles/landing.scss';

const ButtonSection = () => (
  <div className="landing-cta-div mt-8">
    <Link to="/preregister">
      <button className="btn-primary signup-btn">
        Signup to know about early-bird tickets<span className="right-arrow">→</span>
      </button>
    </Link>
    <button className="btn-secondary">Submit your CFP</button>
  </div>
);

const FooterSection = () => (
  <div className="footer-section-div mt-8">
    <div className="landing-footer-nav">
      <a href="https://graphql.asia/2019" target="_blank" rel="noopener noreferrer">
        GraphQL Asia 2019<span className="right-arrow">→</span>
      </a>
    </div>
    <div className="landing-footer-nav">
      <a href="https://graphql.asia" target="_blank" rel="noopener noreferrer">
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
