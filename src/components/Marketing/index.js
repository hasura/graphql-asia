import React from 'react';
import { Link } from 'gatsby';

import gqlaImg from '../Common/images/logo-dark-mode.svg';
import hasuraLogo from '../Common/images/powered-logo-dark-mode.svg';
import '../Common/Styles.scss';

const HeaderSection = () => (
  <div>
    <Link to="/">
      <img src={gqlaImg} alt="graphql-asia" />
    </Link>
    <div className="mainTitle">Asia&apos;s Largest GraphQL Conf is Back</div>
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
