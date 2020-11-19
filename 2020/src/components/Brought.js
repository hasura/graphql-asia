import React from 'react';
import { Link } from 'gatsby';
import './styles.scss';
const hasuraLogo = require('../images/hasura-logo.svg');
const townscriptLogo = require('../images/townscript-logo.svg');
const twenty = require('../images/twenty.svg');
const Brought = () => (
  <div id="ticket" className={'broughtWrapper sectionWrapper watermarkWrapper'}>
    <div className={'container noPadd'}>
      <div className={'col-md-7 col-sm-7 col-xs-12'}>
        <div className={'sectionHeader'}>TICKETS</div>
        <div className={'pageDescription'}>
          You can get tickets for just the conference or the conference along with one of the
          dedicated workshops.
        </div>
        <div className={'buttonWrapper'}>
          <Link to="/tickets">
            <button className={'transparentBtn'}>BUY TICKETS</button>
          </Link>
        </div>
        <div className={'pageDescription removePaddBottom'}>
          We have group discounts available for groups of 5 or more.
        </div>
      </div>
      <div className={'col-md-5 col-sm-5 col-xs-12'}>
        <div className={'brandWrapper'}>
          <div className={'sectionSubHeader removePaddBottom'}>Ticketing partner</div>
          <div className={'brand'}>
            <a href="https://www.townscript.com/" target="_blank" rel="noopener noreferrer">
              <img src={townscriptLogo} alt={'Townscript logo'} />
            </a>
          </div>
          <div className={'sectionSubHeader removePaddBottom'}>Brought to you by</div>
          <div className={'brand removePaddBottom'}>
            <a href="https://hasura.io/" target="_blank" rel="noopener noreferrer">
              <img src={hasuraLogo} alt={'Hasura logo'} />
            </a>
          </div>
        </div>
      </div>
    </div>
    <div className={'watermarkImg hidden-xs'}>
      <img src={twenty} alt={'Twenty twenty'} />
    </div>
  </div>
);

export default Brought;
