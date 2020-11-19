import React from 'react';
// import { Link } from "gatsby"
import './styles.scss';
// const graphqlAsia = require('../images/graphql_Asia2020_heading.svg');
// const megaphone = require('../images/megaphone.svg');
const TicketsTopBanner = () => (
  <div className={'ticketTopBannerWrapper ticketsBgImage'}>
    {/*
    <div className={'headerImg'}>
      <img src={graphqlAsia} alt={'GRAPHQL ASIA 2020'} />
    </div>
    */}
    <div className={'discountWrapper'}>
      <div className={'container noPadd'}>
        <div className={'discountTitle'}>
          {/* <img src={megaphone} alt={'Megaphone'}/> */}
          <div className={'discountDescription'}>
            <span>We have group discounts!</span> <span>10% discount</span> for groups of 5+ people,{' '}
            <span>15% discount</span> for groups of 10+ people, and <span>20% discount</span> for
            groups of 20 people and above!
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default TicketsTopBanner;
