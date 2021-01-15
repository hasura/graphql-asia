import React from 'react';
import { Link } from 'gatsby';

import gqlaImg from '../Common/images/logo-dark-mode.svg';
import hasuraLogo from '../Common/images/powered-logo-dark-mode.svg';
import '../Common/Styles.scss';
import '../styles/marketing.scss';

const HeaderSection = () => (
  <div className="marketing-header-section">
    <Link to="/">
      <img src={gqlaImg} alt="graphql-asia" />
    </Link>
    <div className="mainHeading col-md-7">Asia&apos;s largest GraphQL Conf is back</div>
    <div className="poweredBrand">
      <a href="https://hasura.io/">
        <img src={hasuraLogo} alt="Powered Logo" />
      </a>
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
    <FooterSection />
  </div>
);
