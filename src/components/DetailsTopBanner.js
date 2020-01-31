import React from "react"
import { Link } from "gatsby"

import Header from "./header"
import Footer from "./footer"
import Contact from "./Contact"
import './styles.scss'
// const graphqlAsia = require('../images/graphql_Asia2020_heading.svg');
// const megaphone = require('../images/megaphone.svg');
import { speakerState } from './AllState.js';

const twitter = require('../images/twitter-pink.svg');
const github = require('../images/github-pink.svg');
const linkedIn = require('../images/linkedin-pink.svg');
const arrowPink = require('../images/arrow-pink.svg');

const DetailsTopBanner = (props) => {
  const speakerUrl = props.pageContext.slug;
  const currentSpeaker = speakerState[speakerUrl];
  if(!currentSpeaker) {
    window.location.href = "/404";
  }
  return (
    <div className={'positionRel'}>
      <Header />
      <div className='detailsTopBannerWrapper detailsBgImage'>
        <div className={'container noPadd'}>
          <div className='detailsWrapper'>
            <div className='col-md-4 col-sm-4 col-xs-12 noPadd'>
              <div className='profileImg'>
                <img src={currentSpeaker.img} alt={currentSpeaker.name}/>
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
                  {
                    (currentSpeaker.githubLink) ? (
                      <div className='socialIcon'>
                        <a href={currentSpeaker.githubLink} target="_blank" rel="noopener noreferrer"><img src={github} alt={'Github'} /></a>
                      </div>
                    ) : null
                  }
                  {
                    (currentSpeaker.twitterLink) ? (
                      <div className='socialIcon'>
                        <a href={currentSpeaker.twitterLink} target="_blank" rel="noopener noreferrer"><img src={twitter} alt={'Twitter'} /></a>
                      </div>
                    ) : null
                  }
                  {
                    (currentSpeaker.linkedInLink) ? (
                      <div className='socialIcon'>
                        <a href={currentSpeaker.linkedInLink} target="_blank" rel="noopener noreferrer"><img src={linkedIn} alt={'LinkedIn'} /></a>
                      </div>
                    ) : null
                  }
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='sectionWrapperSmall'>
        <div className={'container noPadd'}>
          <div className={'clearBoth'}>
          {
            (currentSpeaker.title) ? (
              <div className='aboutSpeakerWrapper'>
                <div className='col-md-4 col-sm-4 col-xs-12 noPadd'>
                  <div className='title titleTop'>
                    Talk Title
                  </div>
                </div>
                <div className='col-md-8 col-sm-8 col-xs-12 noPadd'>
                  <div className='speakersTitle'>
                    {currentSpeaker.title}
                  </div>
                </div>
              </div>
            ) : null
          }
          {
            (currentSpeaker.abstract) ? (
              <div className='aboutSpeakerWrapper'>
                <div className='col-md-4 col-sm-4 col-xs-12 noPadd'>
                  <div className='title titleTop'>
                    Talk Abstract
                  </div>
                </div>
                <div className='col-md-8 col-sm-8 col-xs-12 noPadd'>
                  <div className='pageDescription'>
                    {currentSpeaker.abstract}
                  </div>
                </div>
              </div>
            ): null
          }
          {
            (currentSpeaker.description) ? (
              <div className='aboutSpeakerWrapper'>
                <div className='col-md-4 col-sm-4 col-xs-12 noPadd'>
                  <div className='title titleTop'>
                    Talk Description
                  </div>
                </div>
                <div className='col-md-8 col-sm-8 col-xs-12 noPadd'>
                  <div className='pageDescription'>
                    {currentSpeaker.description}
                  </div>
                </div>
              </div>
            ) : null
          }
          {
            (currentSpeaker.about) ? (
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
                </div>
              </div>
            ) : null
          }
          </div>
          <div className={'clearBoth aboutSpeakerWrapper'}>
            <div className={'col-md-offset-4 col-sm-offset-4'}>
              <div className='pinkLink '>
                <Link to="/#speakers">BACK TO SPEAKERS<img src={arrowPink} alt={'Arrow'} /></Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Contact />
      <Footer />
    </div>
  )
};

export default DetailsTopBanner
