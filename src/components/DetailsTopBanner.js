import React from "react"
// import { Link } from "gatsby"
import './styles.scss'
// const graphqlAsia = require('../images/graphql_Asia2020_heading.svg');
// const megaphone = require('../images/megaphone.svg');
const robertZhu = require('../images/Robert-Zhu.png');
const twitter = require('../images/twitter-pink.svg');
const github = require('../images/github-pink.svg');
const DetailsTopBanner = () => (
  <div className='detailsTopBannerWrapper detailsBgImage'>
    <div className={'container noPadd'}>
      <div className='detailsWrapper'>
        <div className='profileImg'>
          <img src={robertZhu} alt={'Robert Zhu'}/>
        </div>
        <div className='profileWrapper'>
          <div className='profileName'>
            Robert Zhu
          </div>
          <div className='profileDesignation'>
            PRINCIPAL TECHNICAL EVANGELIST,
          </div>
          <div className='profileOrganization'>
            AWS
          </div>
          <div className='socialWrapper'>
            <div className='socialIcon'>
              <a href={'https://github.com/robzhu'} target="_blank" rel="noopener noreferrer"><img src={github} alt={'github'} /></a>
            </div>
            <div className='socialIcon'>
              <a href={'https://twitter.com/rbzhu/'} target="_blank" rel="noopener noreferrer"><img src={twitter} alt={'Twitter'} /></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default DetailsTopBanner
