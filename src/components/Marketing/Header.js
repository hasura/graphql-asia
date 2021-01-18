import React from 'react';

import gqlaImg from '../Common/images/logo-dark-mode.svg';
import hasuraLogo from '../Common/images/powered-logo-dark-mode.svg';

export const Header = () => (
  <div className="marketing-header-section">
    <div className="col-md-3 noPadd">
      <img src={gqlaImg} alt="graphql-asia" />
      <div className="articleDesc redColor fontBold">24th &amp; 25th Feb</div>
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
