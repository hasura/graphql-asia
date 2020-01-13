import React from "react"
// import { Link } from "gatsby"
import './styles.scss'
// const graphqlAsia = require('../images/graphql_Asia2020_heading.svg');
// const megaphone = require('../images/megaphone.svg');
const vishakhaSingh = require('../images/Vishakha-Singh.png');
const twitter = require('../images/twitter-pink.svg');
const github = require('../images/github-pink.svg');
const arrowPink = require('../images/arrow-pink.svg');
const speakerState = {
  'vishakha-singh': {
    'name': 'Vishakha Singh',
    'designation': 'SOFTWARE ENGINEER',
    'org': 'PAYPAL',
    'img': { path: vishakhaSingh, alt: 'Vishakha Singh'},
    'title': 'How we improved PayPal checkout conversions using GraphQL',
    'description': 'At PayPal, we are rebuilding our checkout experience from the ground up. The most important and logical problem we are solving is to make the experience super fast. Come hear our story on how we leveraged GraphQL server to smartly and efficiently present varied regional payment experiences to people all around the globe.',
    'about': 'Vishakha is a software engineer at PayPal where she works to make the checkout experience faster and better. She completed her Masters from Georgia Tech specializing in Computer Networks only to later realize her passion for Javascript and UI engineering. She also loves spending time meditating, baking and experimenting with makeup!'
  }
};
const DetailsTopBanner = (props) => {
  const speakerUrl = props.speakerUrl;
  console.log(speakerUrl);
  console.log(speakerState[speakerUrl]);
  /*
  if(!speakerState.speakerUrl) {
    window.location.href = "/404";
  }
  */
  const currentSpeaker = speakerState[speakerUrl];
  return (
    <div>
      <div className='detailsTopBannerWrapper detailsBgImage'>
        <div className={'container noPadd'}>
          <div className='detailsWrapper'>
            <div className='col-md-4 col-sm-4 col-xs-12 noPadd'>
              <div className='profileImg'>
                <img src={currentSpeaker.img.path} alt={currentSpeaker.img.alt}/>
              </div>
            </div>
            <div className='col-md-8 col-sm-8 col-xs-12 noPadd'>
              <div className='profileWrapper'>
                <div className='profileName'>
                  {currentSpeaker.name}
                </div>
                <div className='profileDesignation'>
                  {currentSpeaker.designation}
                </div>
                <div className='profileOrganization'>
                  {currentSpeaker.org}
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
                {currentSpeaker.title}
              </div>
              <div className='pageDescription'>
                {currentSpeaker.description}
              </div>
            </div>
          </div>
          <div className='aboutSpeakerWrapper'>
            <div className='col-md-4 col-sm-4 col-xs-12 noPadd'>
              <div className='title'>
                ABOUT {currentSpeaker.name}
              </div>
            </div>
            <div className='col-md-8 col-sm-8 col-xs-12 noPadd'>
              <div className='pageDescription'>
                {currentSpeaker.about}
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
};

export default DetailsTopBanner
