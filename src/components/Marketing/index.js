import React from 'react';

import gqlaImg from '../Common/images/logo-dark-mode.svg';
import hasuraLogo from '../Common/images/powered-logo-dark-mode.svg';
import '../Common/Styles.scss';
import '../styles/marketing.scss';

import graphQLIcon from './images/graphql_icon.svg';
import confIcon from './images/conferences_icon.svg';
import chatIcon from './images/languages_icon.svg';
import workshopIcon from './images/workshop_icon.svg';
import formIllustration from './images/form_illustration.png';

const HeaderSection = () => (
  <div className="marketing-header-section">
    <div className="col-md-3 noPadd">
      <img src={gqlaImg} alt="graphql-asia" />
    </div>
    <div className="mainHeading col-md-7 noPadd pr-20">
      Asia&apos;s largest GraphQL Conf is back
    </div>
    <div className="poweredBrand col-md-2 flex flex-end noPadd">
      <a href="https://hasura.io/">
        <img src={hasuraLogo} alt="Powered Logo" />
      </a>
    </div>
  </div>
);

const SignupForm = () => (
  <div className="signup-form-wrapper">
    <div className="signup-form-div">
      <h2>Join us for the third edition of GraphQL Asia!</h2>
      <p>24th &amp; 25th Feb | Online | Free </p>
      <form>
        <input type="email" placeholder="Your email adress" />
        <button type="submit">Register</button>
      </form>
    </div>
    <img src={formIllustration} alt="gqla-illustration" />
  </div>
);

const TopBanner = () => (
  <div className="marketing-landing-banner">
    <div className="col-md-6 noPadd">
      <div className="flex mb-40 space-between">
        <div className="marketing-headlight-div col-md-6 noPadd pr-20">
          <img src={graphQLIcon} alt="graphql-fireside-chat" />
          <h2>Fireside Chat with GraphQL’s Co-founder!</h2>
          <p>
            Dan Schafer talks about the state of GraphQL and its future. Ask him questions live!{' '}
          </p>
        </div>
        <div className="marketing-headlight-div col-md-6 noPadd ml-30 pr-20">
          <img src={confIcon} alt="graphql-fireside-chat" />
          <h2>Conference Talks</h2>
          <p>In-depth Tech talks about GraphQL and company stories of how they are using GraphQL</p>
        </div>
      </div>
      <div className="flex space-between">
        <div className="marketing-headlight-div col-md-6 noPadd pr-20">
          <img src={workshopIcon} alt="graphql-fireside-chat" />
          <h2>Workshops</h2>
          <p>Live, hands-on workshops for all skill levels (Beginner to advanced)</p>
        </div>
        <div className="marketing-headlight-div col-md-6 noPadd ml-30 pr-20">
          <img src={chatIcon} alt="graphql-fireside-chat" />
          <h2>Multiple Languages</h2>
          <p>Get perspectives from GraphQL devs from all over the world</p>
        </div>
      </div>
    </div>
    <div className="col-md-6 flex flex-end noPadd pl-40">
      <SignupForm />
    </div>
  </div>
);

const FooterSection = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="mt-20">
      <hr className="light-hr" />
      <hr className="red-hr" />
      <div className="marketing-footer-section flex">
        <div className="articleDesc">{`© ${currentYear} Hasura Inc. All rights reserved`}</div>
        <div className="poweredBrand">
          <a href="https://hasura.io/">
            <img src={hasuraLogo} alt="Powered Logo" />
          </a>
        </div>
      </div>
    </div>
  );
};

export const MarketingPage = () => (
  <div id="viewport" className="darkModeLayout advertisement-site-wrapper">
    <HeaderSection />
    <TopBanner />
    <FooterSection />
  </div>
);
