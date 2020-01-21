import React from "react"
import { Link } from "gatsby"
import { speakerState } from './AllState.js';
import './styles.scss'

const speaker = require('../images/speaker.svg');
const twitter = require('../images/twitter-pink.svg');
const github = require('../images/github-pink.svg');
const linkedIn = require('../images/linkedin-pink.svg');

const Speakers  = (props) => {
    const speakersContainer = Object.keys(speakerState).map((url, index) => {
      return (
        <div key = {index} className='col-md-3 col-sm-4 col-xs-6 flexContainer'>
          <div className='speakersList flexList'>
            <div className='speakerImg'>
              <Link to={'/speakers/'+url}><img src={speakerState[url].img} alt={speakerState[url].name}/></Link>
            </div>
            <div className='name'>
              <Link to={'/speakers/'+url}>{speakerState[url].name}</Link>
            </div>
            <div className='designation flexAlign'>
                <Link to={'/speakers/'+url}>{speakerState[url].designation}</Link>
            </div>
            <div className='organization'>
                <Link to={'/speakers/'+url}>{speakerState[url].org}</Link>
            </div>
            <div className='socialWrapper'>
              {
                (speakerState[url].githubLink) ? (
                  <div className='socialIcon'>
                    <a href={speakerState[url].githubLink} target="_blank" rel="noopener noreferrer"><img src={github} alt={'github'} /></a>
                  </div>
                ) : null
              }
              {
                (speakerState[url].twitterLink) ? (
                  <div className='socialIcon'>
                    <a href={speakerState[url].twitterLink} target="_blank" rel="noopener noreferrer"><img src={twitter} alt={'Twitter'} /></a>
                  </div>
                ) : null
              }
              {
                (speakerState[url].linkedInLink) ? (
                  <div className='socialIcon'>
                    <a href={speakerState[url].linkedInLink} target="_blank" rel="noopener noreferrer"><img src={linkedIn} alt={'Linkedin'} /></a>
                  </div>
                ) : null
              }
            </div>
          </div>
        </div>
      )
    })
    return (
      <div id="speakers" className={'speakersWrapper lightGrayBgColor sectionWrapper watermarkWrapper'}>
        <div className={'container noPadd'}>
            <div className={'sectionHeader'}>
              SPEAKERS
            </div>
            <div className={'pinkSeperateLine'}></div>
            <div className={'speakersListWrapper flexBoxWrapper'}>
              {speakersContainer}
            </div>
            <div className='pageDescription'>
              More speakers to be announced soon!
            </div>
        </div>
        <div className={'watermarkImg hidden-xs'}>
          <img src={speaker} alt={'speaker water mark'}/>
        </div>
      </div>
    );
}
export default Speakers
