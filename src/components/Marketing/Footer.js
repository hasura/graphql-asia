import React from 'react';
import { Link } from 'gatsby';

import hasuraLogo from '../Common/images/powered-logo-dark-mode.svg';
import footerPattern from '../Common/images/footer-pattern.svg';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="mt-20">
      <hr className="light-hr" />
      <hr className="red-hr" />
      <div className="marketing-footer-section flex">
        <div className="flex flex-column">
          <ul className="articleDesc flex">
            <li className="darkModeBorRight" style={{ paddingRight: '15px', marginRight: '15px' }}>
              <a
                href="https://hasura.io/legal/website-terms-of-use"
                target="_blank"
                rel="noreferrer"
              >
                Terms &amp; Conditions
              </a>
            </li>
            <li className="darkModeBorRight" style={{ paddingRight: '15px', marginRight: '15px' }}>
              <a
                href="https://hasura.io/legal/hasura-privacy-policy/"
                target="_blank"
                rel="noreferrer"
              >
                Privacy Policy
              </a>
            </li>
            <li className="darkModeBorRight" style={{ border: 'none ' }}>
              <Link to="/code-of-conduct/">Code Of Conduct</Link>
            </li>
          </ul>
          <div className="articleDesc">{`© ${currentYear} Hasura Inc. All rights reserved`}</div>
        </div>
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
