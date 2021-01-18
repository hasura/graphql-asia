import React from 'react';

import hasuraLogo from '../Common/images/powered-logo-dark-mode.svg';
import footerPattern from '../Common/images/footer-pattern.svg';

export const Footer = () => {
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
      <div className="footerPattern">
        <img src={footerPattern} alt="pattern" />
      </div>
    </div>
  );
};
