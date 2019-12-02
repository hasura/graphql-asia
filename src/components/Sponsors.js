import React from "react"
// import { Link } from "gatsby"
import './styles.scss'
const graphql = require('../images/graphql.svg');
const sponsors = require('../images/sponsors.svg');
const dgraph = require('../images/dgraph-logo.svg');
const wt = require('../images/wt.png');
const cb = require('../images/cb.png');
const moz = require('../images/moz.png');
const gs = require('../images/gs.png');
const js = require('../images/js.png');
const msp = require('../images/msp.png');
const gdgb = require('../images/gdgb.png');


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
          Community Partners
        </div>
        <div className={'icons'}>
          <a href="https://twitter.com/wtmblr" target="_blank" rel="noopener noreferrer"><img src={wt} alt={'Women techmakers'}/></a>
          <a href="https://codingblocks.com/" target="_blank" rel="noopener noreferrer"><img src={cb} alt={'Coding blocks'}/></a>
          <a href="https://t.me/joinchat/AFfAPD1xS9_WEiXjDfkYGA" target="_blank" rel="noopener noreferrer"><img src={moz} alt={'Mozilla karnataka'}/></a>
          <a href="https://twitter.com/girlscript1" target="_blank" rel="noopener noreferrer"><img src={gs} alt={'Girl script'}/></a>
          <a href="https://twitter.com/jslovers_del" target="_blank" rel="noopener noreferrer"><img src={js} alt={'JS lovers'}/></a>
        </div>
        <div className={'icons removePaddBottom'}>
          <a href="https://studentpartners.microsoft.com/en-us" target="_blank" rel="noopener noreferrer"><img src={msp} alt={'Microsoft student partners'}/></a>
          <a href="https://twitter.com/GDGBLR" target="_blank" rel="noopener noreferrer"><img className={'gdgb'} src={gdgb} alt={'GDG Bangalore'}/></a>
        </div>
      </div>
    </div>
    <div className={'watermarkImg hidden-xs'}>
      <img src={sponsors} alt={'Sponsors water mark'}/>
    </div>
  </div>
)

export default Sponsors
