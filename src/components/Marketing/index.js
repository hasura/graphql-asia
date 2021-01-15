import React from 'react';

import gqlaImg from '../Common/images/logo-dark-mode.svg';
import hasuraLogo from '../Common/images/powered-logo-dark-mode.svg';
import '../Common/Styles.scss';
import '../styles/marketing.scss';

import graphQLIcon from './images/graphql_icon.svg';
import confIcon from './images/conferences_icon.svg';
import chatIcon from './images/languages_icon.svg';
import workshopIcon from './images/workshop_icon.svg';

const HeaderSection = () => (
  <div className="marketing-header-section">
    <img src={gqlaImg} alt="graphql-asia" />
    <div className="mainHeading col-md-7">Asia&apos;s largest GraphQL Conf is back</div>
    <div className="poweredBrand">
      <a href="https://hasura.io/">
        <img src={hasuraLogo} alt="Powered Logo" />
      </a>
    </div>
  </div>
);

const TopBanner = () => (
  <div className="marketing-landing-banner col-md-12">
    <div className="col-md-6 noPadd">
      <div className="flex mb-50">
        <div className="marketing-headlight-div col-md-6">
          <img src={graphQLIcon} alt="graphql-fireside-chat" />
          <h2>Fireside Chat with GraphQL’s Co-founder!</h2>
          <p>
            Dan Schafer talks about the state of GraphQL and its future. Ask him questions live!{' '}
          </p>
        </div>
        <div className="marketing-headlight-div col-md-6 ml-45">
          <img src={confIcon} alt="graphql-fireside-chat" />
          <h2>Conference Talks</h2>
          <p>In-depth Tech talks about GraphQL and company stories of how they are using GraphQL</p>
        </div>
      </div>
      <div className="flex">
        <div className="marketing-headlight-div col-md-6">
          <img src={workshopIcon} alt="graphql-fireside-chat" />
          <h2>Workshops</h2>
          <p>Live, hands-on workshops for all skill levels (Beginner to advanced)</p>
        </div>
        <div className="marketing-headlight-div col-md-6 ml-30">
          <img src={chatIcon} alt="graphql-fireside-chat" />
          <h2>Multiple Languages</h2>
          <p>Get perspectives from GraphQL devs from all over the world</p>
        </div>
      </div>
    </div>
    <div className="col-md-6"></div>
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
