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

export const MarketingPage = () => (
  <div id="viewport" className="darkModeLayout">
    <HeaderSection />
  </div>
);
