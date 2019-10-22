import React from 'react';
import './styles.scss';
const leelaPalace = require('../images/leela-palace.png');
const Venue = () => (
  <div id="venue" className={'venueWrapper sectionWrapper watermarkWrapper lightGrayBgColor positionTop'}>
    <div className={'container noPadd'}>
      <div className={'col-md-7 col-sm-7 col-xs-12 noPadd'}>
        <div className={'sectionHeader'}>
          VENUE
        </div>
        <div className={'pageDescription'}>
          The Leela Palace Bengaluru is one of the best 5 star hotels in Bangalore, India stands majestically amidst seven acres of lush gardens and a sparkling lagoon.
        </div>
      </div>
      <div className={'col-md-5 col-sm-5 col-xs-12'}>
        <div className={'overviewImg'}>
          <img src={leelaPalace} alt={'Leela Palace'} />
        </div>
      </div>
    </div>
  </div>
)
export default Venue;
