import React from "react"
// import { Link } from "gatsby"
import './styles.scss'
const hall = require('../images/hall.png');
const arrow = require('../images/arrow_forward.svg');
const overview = require('../images/overview.svg');
const Overview = () => (
  <div id="overview" className={'overviewWrapper sectionWrapper watermarkWrapper'}>
    <div className={'container noPadd'}>
      <div className={'col-md-6 col-sm-6 col-xs-12 noPadd'}>
        <div className={'sectionHeader'}>
          OVERVIEW
        </div>
        <div className={'pageDescription'}>
          The GraphQL Asia 2020 conference that will take place in Bengaluru, is the largest gathering of the community that uses and develops open-source GraphQL.
        </div>
        <div className={'blueLink'}>
          <a href="https://www.graphql-asia.org/" target="_blank" rel="noopener noreferrer">GRAPHQL ASIA 2019 WEBSITE <img src={arrow} alt={'Arrow'} /></a>
        </div>
      </div>
      <div className={'col-md-6 col-sm-6 col-xs-12 noPadd'}>
        <div className={'overviewImg'}>
          <img src={hall} alt={'Hall'} />
        </div>
      </div>
    </div>
    <div className={'watermarkImg'}>
      <img src={overview} alt={'overview water mark'}/>
    </div>
  </div>
)

export default Overview
