import React from "react"
// import { Link } from "gatsby"
import './styles.scss'
// const graphqlAsia = require('../images/graphql_Asia2020_heading.svg');
// const megaphone = require('../images/megaphone.svg');
const vishakhaSingh = require('../images/Vishakha-Singh.png');
const twitter = require('../images/twitter-pink.svg');
const github = require('../images/github-pink.svg');
const arrowPink = require('../images/arrow-pink.svg');
const DetailsTopBanner = () => (
  <div>
    <div className='detailsTopBannerWrapper detailsBgImage'>
      <div className={'container noPadd'}>
        <div className='detailsWrapper'>
          <div className='col-md-4 col-sm-4 col-xs-12 noPadd'>
            <div className='profileImg'>
              <img src={vishakhaSingh} alt={'Vishakha Singh'}/>
            </div>
          </div>
          <div className='col-md-8 col-sm-8 col-xs-12 noPadd'>
            <div className='profileWrapper'>
              <div className='profileName'>
                Vishakha Singh
              </div>
              <div className='profileDesignation'>
                SOFTWARE ENGINEER,
              </div>
              <div className='profileOrganization'>
                PAYPAL
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
    </div>
    <div className='sectionWrapperSmall'>
      <div className={'container noPadd'}>
        <div className='aboutSpeakerWrapper'>
          <div className='col-md-4 col-sm-4 col-xs-12 noPadd'>
            <div className='title titleTop'>
              TALK DETAILS
            </div>
          </div>
          <div className='col-md-8 col-sm-8 col-xs-12 noPadd'>
            <div className='speakersTitle'>
              How we improved PayPal checkout conversions using GraphQL
            </div>
            <div className='pageDescription'>
              At PayPal, we are rebuilding our checkout experience from the ground up. The most important and logical problem we are solving is to make the experience super fast. Come hear our story on how we leveraged GraphQL server to smartly and efficiently present varied regional payment experiences to people all around the globe.
            </div>
          </div>
        </div>
        <div className='aboutSpeakerWrapper'>
          <div className='col-md-4 col-sm-4 col-xs-12 noPadd'>
            <div className='title'>
              ABOUT VISHAKHA
            </div>
          </div>
          <div className='col-md-8 col-sm-8 col-xs-12 noPadd'>
            <div className='pageDescription'>
              Vishakha is a software engineer at PayPal where she works to make the checkout experience faster and better. She completed her Masters from Georgia Tech specializing in Computer Networks only to later realize her passion for Javascript and UI engineering. She also loves spending time meditating, baking and experimenting with makeup!
            </div>
            <div className='pinkLink'>
              <a href="/#speakers">BACK TO SPEAKERS<img src={arrowPink} alt={'Arrow'} /></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default DetailsTopBanner
