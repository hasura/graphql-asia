import React from "react"
import { Link } from "gatsby"
import './styles.scss'
const calendar = require('../images/calendar.svg');
const place = require('../images/place.svg');
const graphqlAsia = require('../images/graphql_Asia2020_heading.svg');
const TopBanner = () => (
  <div className={'topBannerWrapper bgImage'}>
    <div className={'headerImg'}>
      <img src={graphqlAsia} alt={'GRAPHQL ASIA 2020'} />
    </div>
    <div className={'pageDescription'}>
      Asia’s largest GraphQL conference is back!<br/>Limited Super <span className={'fontBold'}>Early Bird Tickets</span> available now!
    </div>
    <div className={'buttonWrapper'}>
      <Link to="/tickets"><button className={'whiteBtn'}>BUY TICKETS</button></Link>
    </div>
    <div className={'placeDetails'}>
      <div className={'details'}>
        <img src={calendar} alt={'Calendar icon'} />
        FEBRUARY 20-22, 2020
      </div>
      <div className={'details'}>
        <img src={place} alt={'Place icon'} />
        LEELA PALACE, BENGALURU
      </div>
    </div>
  </div>
)

export default TopBanner
