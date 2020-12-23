import React from "react";
import {Link} from 'gatsby';
import '../Common/Styles.scss';
const Footer = ({isLightMode}) => {
  return (
    <div className={'footerWrapper sectionWrapper removePaddBottom ' + ((!isLightMode) ? 'darkModeBorTop' : 'lightModeBorTop')}>
      <ul className='articleDesc'>
        <li className={((!isLightMode) ? 'darkModeBorRight' : 'lightModeBorRight')}><Link to='/code-of-conduct/'>Code Of Conduct</Link></li>
        <li className={((!isLightMode) ? 'darkModeBorRight' : 'lightModeBorRight')}><a href='mailto:events@hasura.io'>Sponsor GraphQL Asia 2021</a></li>
        <li><a href='mailto:events@hasura.io'>Contact us</a></li>
      </ul>
      <div className='articleDesc'>
        © {(new Date().getFullYear())} Hasura Inc. All rights reserved
      </div>
    </div>
  );
};

export default Footer;
