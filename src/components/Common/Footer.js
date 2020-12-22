import React from "react";
import {Link} from 'gatsby';
import '../Common/Styles.scss';
const Footer = props => {
  return (
    <div className='footerWrapper sectionWrapper removePaddBottom'>
      <ul className='articleDesc'>
        <li className={((!props.isLightMode) ? 'darkModeBorRight' : 'lightModeBorRight')}><Link to='/code-of-conduct/'>Code Of Conduct</Link></li>
        <li className={((!props.isLightMode) ? 'darkModeBorRight' : 'lightModeBorRight')}><a href='mailto:events@hasura.io'>Sponsor GraphQL Asia 2021</a></li>
        <li><a href='mailto:events@hasura.io'>Contact us</a></li>
      </ul>
    </div>
  );
};

export default Footer;
