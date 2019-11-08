import React from "react"
// import { Link } from "gatsby"
import './styles.scss'
const graphql = require('../images/graphql.svg');
const sponsors = require('../images/sponsors.svg');

const digitalOcean = require('../images/digital-ocean.svg');
const amplify = require('../images/amplify.svg');
const tokopedia = require('../images/tokopedia.svg');
const atlassian = require('../images/atlassian.svg');
const github = require('../images/github.svg');
const dgraph = require('../images/dgraph-logo.svg');
const Sponsors = () => (
  <div id="sponsors" className={'sponsorWrapper sectionWrapper watermarkWrapper'}>
    <div className={'container noPadd'}>
      <div className={'col-md-8 col-sm-8 col-xs-12 noPadd'}>
        <div className={'sectionHeader'}>
          SPONSORS
        </div>
        <div className={'pinkSeperateLine'}></div>
        <div className={'pageDescription'}>
          GraphQL Asia presents the opportunity to market your product/company to over 500 of the forward thinking engineers and engineering leaders who have made GraphQL one of the most exciting technologies today! <br/><br/>If you are interested in sponsoring this year’s event, please write to us at <a href="mailto:hello@graphql.asia">hello@graphql.asia</a>
        </div>
        <div className={'buttonWrapper'}>
          <a href="mailto:hello@graphql.asia?subject=Sponsoring GraphQL Asia"> <button className={'blueBtn'}>BECOME A SPONSOR</button></a>
          {/*<button className={'whiteBtn'}>LEARN MORE</button>*/}
        </div>
      </div>
      <div className={'col-md-4 col-sm-4 col-xs-12 '}>
        <div className={'overviewImg'}>
          <img src={graphql} alt={'Graphql'} />
        </div>
      </div>
      <div className={'pastSponsorWrapper'}>
        <div className={'sectionSubHeader'}>
          Platinum Sponsors
        </div>
        <div className={'platinumIcons'}>
          <a href="https://dgraph.io/" target="_blank" rel="noopener noreferrer"><img src={dgraph} alt={'Dgraph'}/></a>
        </div>
      </div>
      <div className={'pastSponsorWrapper'}>
        <div className={'sectionSubHeader'}>
          Past Sponsors
        </div>
        <div className={'icons'}>
          <a href="https://www.digitalocean.com" target="_blank" rel="noopener noreferrer"><img src={digitalOcean} alt={'Digital Ocean'}/></a>
          <a href="https://aws.amazon.com/amplify" target="_blank" rel="noopener noreferrer"><img src={amplify} alt={'amplify'}/></a>
          <a href="https://www.tokopedia.com" target="_blank" rel="noopener noreferrer"><img src={tokopedia} alt={'tokopedia'}/></a>
          <a href="https://www.atlassian.com" target="_blank" rel="noopener noreferrer"><img src={atlassian} alt={'atlassian'}/></a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer"><img src={github} alt={'github'}/></a>
        </div>
      </div>
    </div>
    <div className={'watermarkImg hidden-xs'}>
      <img src={sponsors} alt={'Sponsors water mark'}/>
    </div>
  </div>
)

export default Sponsors
