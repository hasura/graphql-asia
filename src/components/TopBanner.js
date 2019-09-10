import React from "react"
// import { Link } from "gatsby"
import './styles.scss'
const calendar = require('../images/calendar.svg');
const place = require('../images/place.svg');
const graphqlAsia = require('../images/graphql_Asia2020_heading.svg');
const TopBanner = () => (
  <div className={'topBannerWrapper'}>
    <div className={'headerImg'}>
      <img src={graphqlAsia} alt={'GRAPHQL ASIA 2020'} />
    </div>
    <div className={'pageDescription'}>
      Asia’s largest GraphQL conference is back!<br/>Book your tickets now to get an <span className={'fontBold'}>early bird discount!</span>
    </div>
    <div className={'buttonWrapper'}>
      <button className={'whiteBtn'}>BUY TICKETS <span className={'fontNormal'}>/ $200</span></button>
    </div>
    <div className={'placeDetails'}>
      <div className={'details'}>
        <img src={calendar} alt={'Calendar icon'} />
        FEBURARY 21-22, 2020
      </div>
      <div className={'details'}>
        <img src={place} alt={'Place icon'} />
        CHANCERY, BENGALURU
      </div>
    </div>
  </div>
)

export default TopBanner
