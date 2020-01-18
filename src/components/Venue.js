import React from 'react';
import './styles.scss';
const leelaPalace = require('../images/leela-palace.png');
const Venue = () => (
  <div id="venue" className={'venueWrapper sectionWrapper watermarkWrapper positionTop'}>
    <div className={'container noPadd'}>
      <div className={'sectionHeader'}>
        VENUE
      </div>
      <div className={'pinkSeperateLine'}></div>
      <div className={'col-md-6 col-sm-7 col-xs-12 noPadd'}>
        <div className={'pageDescription'}>
          The conference will take place at The Leela Palace, which is one of the best 5 star hotels in Bengaluru, India and stands majestically amidst seven acres of lush gardens and a sparkling lagoon.
        </div>
        <div className={'pageDescription'}>
          To avail special conference rates for staying at the hotel, please send an email to <a href="mailto:saikat.saha@theleela.com">saikat.saha@theleela.com</a> and <a href="mailto:namrata.gupta@theleela.com">namrata.gupta@theleela.com</a> along with a copy of your ticket.
        </div>
        <div className={'pageDescription removePaddBottom'}>
          The workshops will be hosted at the <a href="https://theterrace.hasura.io/" target="_blank" rel="noopener noreferrer">Terrace @ Hasura</a>.
        </div>
      </div>
      <div className={'col-md-6 col-sm-5 col-xs-12'}>
        <div className={'overviewImg'}>
          <img src={leelaPalace} alt={'Leela Palace'} />
        </div>
      </div>
    </div>
  </div>
)
export default Venue;
