import React from "react"
// import { Link } from "gatsby"
import './styles.scss'
const hall = require('../images/hall.png');
const arrow = require('../images/arrow_forward.svg');
const overview = require('../images/overview.svg');
const Overview = () => (
  <div id="overview" className={'overviewWrapper sectionWrapper watermarkWrapper'}>
    <div className={'container noPadd'}>
      <div className={'col-md-6 col-sm-7 col-xs-12 noPadd'}>
        <div className={'sectionHeader'}>
          OVERVIEW
        </div>
        <div className={'pinkSeperateLine'}></div>
        <div className={'pageDescription'}>
          GraphQL Asia is the largest gathering of the GraphQL community in Asia! With over 500 people expected at the 2020 edition, you’ll meet the creators of leading GraphQL tooling, talk to the experts implementing GraphQL in their companies as well as practitioners and enthusiasts from Asia and the rest of the world.
        </div>
        <div className={'blueLink'}>
          <a href="https://graphql.asia/2019" target="_blank" rel="noopener noreferrer">GRAPHQL ASIA 2019 WEBSITE<img src={arrow} alt={'Arrow'} /></a>
        </div>
      </div>
      <div className={'col-md-6 col-sm-5 col-xs-12 noPadd'}>
        <div className={'overviewImg'}>
          <img src={hall} alt={'Hall'} />
        </div>
      </div>
    </div>
    <div className={'watermarkImg hidden-xs'}>
      <img src={overview} alt={'overview water mark'}/>
    </div>
  </div>
)

export default Overview
