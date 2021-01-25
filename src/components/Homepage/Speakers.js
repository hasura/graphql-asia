import React, {Fragment} from "react";
import {Link} from 'gatsby';
import '../Common/Styles.scss';
import { speakersDetails } from './AllState.js'
import IndivSpeaker from './IndivSpeaker';
const submitBtnIcon = require('../Common/images/submit-btn-icon.svg');
const submitBtnIconHover = require('../Common/images/submit-btn-icon-hover.svg');
const Speakers = props => {
  const speakersList = speakersDetails.map((speakers, index) => {
    return (
      <Fragment key={index}>
        {
          index < 6  ? (
            <IndivSpeaker speakers={speakers} />
          ) : null
        }
      </Fragment>
    )
  })
  return (
    <div id='speakers' className='speakersWrapper sectionWrapper removePaddBottom'>
      <div className='speakersHeader'>
        <div className='articleTitle'>Speakers</div>
        {/*
        <div className='buttonWrapper alignSelfEnd'>
          <a href='https://docs.google.com/forms/d/e/1FAIpQLSdIKOPK9VaxhJptC7f2zk1PsvQMkxE7W7Jl1-xemCea9JpZng/viewform?usp=sf_link' target='_blank' rel='noopener noreferrer'>
            <button className='commonBtn darkBtn'>
              <img className='submitIcon' src={submitBtnIcon} alt='Icon' />
              <img className='submitIconHover' src={submitBtnIconHover} alt='Icon' />
              Submit a Proposal
            </button>
          </a>
        </div>
        */}
      </div>
      <div className='speakersWrapperOverflow'>
        <div className='speakersListWrapper threeColumsWrapper'>
          {speakersList}
        </div>
      </div>
      <div className='backBtnWrapper'>
        <div className={((!props.isLightMode) ? 'lightLine' : 'darkLine')}></div>
        <Link to='/speakers/'>
          <button className='commonBtn darkBtn'>
            View all Speakers
          </button>
        </Link>
      </div>
      {/*
      <div className='buttonWrapper mobileShow'>
        <a href='https://docs.google.com/forms/d/e/1FAIpQLSdIKOPK9VaxhJptC7f2zk1PsvQMkxE7W7Jl1-xemCea9JpZng/viewform?usp=sf_link' target='_blank' rel='noopener noreferrer'>
          <button className='commonBtn darkBtn'>
            <img className='submitIcon' src={submitBtnIcon} alt='Icon' />
            <img className='submitIconHover' src={submitBtnIconHover} alt='Icon' />
            Submit a Proposal
          </button>
        </a>
      </div>
      */}
    </div>
  );
};

export default Speakers;
