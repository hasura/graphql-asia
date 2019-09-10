import React from "react"
// import { Link } from "gatsby"
import './styles.scss'
const graphql = require('../images/graphql.svg');
const sponsors = require('../images/sponsors.svg');

const doIcon = require('../images/do-icon.svg');
const digitalOcean = require('../images/digital-ocean.svg');
const amplify = require('../images/amplify.svg');
const tokopedia = require('../images/tokopedia.svg');
const atlassian = require('../images/atlassian.svg');
const github = require('../images/github.svg');

const Sponsors = () => (
  <div id="sponsors" className={'sponsorWrapper sectionWrapper watermarkWrapper lightGrayBgColor positionTop'}>
    <div className={'container noPadd'}>
      <div className={'col-md-8 col-sm-8 col-xs-12 noPadd'}>
        <div className={'sectionHeader'}>
          SPONSORS
        </div>
        <div className={'pageDescription'}>
          If you are looking for sponsorship opportunities to market your product, designs or services, GraphQL Asia is the best platform to interact with amazing set of CXOs, Team leads, professional and student developers. If you are interested in sponsoring this year’s event, please write to us at <a href="mailto:anubha@hasura.io">anubha@hasura.io</a>
        </div>
        <div className={'buttonWrapper'}>
          <button className={'blueBtn'}>BECOME A SPONSOR</button>
          <button className={'whiteBtn'}>LEARN MORE</button>
        </div>
        <div className={'sectionSubHeader'}>
          Past Sponsors
        </div>
      </div>
      <div className={'col-md-4 col-sm-4 col-xs-12 '}>
        <div className={'overviewImg'}>
          <img src={graphql} alt={'Graphql'} />
        </div>
      </div>
      <div className={'pastSponsorWrapper'}>
        <div className={'icons'}>
          <img src={doIcon} alt={'Digital Ocean'}/>
          <img src={digitalOcean} alt={'Digital Ocean'}/>
          <img src={amplify} alt={'amplify'}/>
          <img src={tokopedia} alt={'tokopedia'}/>
          <img src={atlassian} alt={'atlassian'}/>
          <img src={github} alt={'github'}/>
        </div>
      </div>
    </div>
    <div className={'watermarkImg'}>
      <img src={sponsors} alt={'Sponsors water mark'}/>
    </div>
  </div>
)

export default Sponsors
