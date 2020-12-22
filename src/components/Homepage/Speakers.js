import React from "react";
import '../Common/Styles.scss';
const submitBtnIcon = require('../Common/images/submit-btn-icon.svg');
const submitBtnIconHover = require('../Common/images/submit-btn-icon-hover.svg');
import { speakersDetails } from './AllState.js'
const Speakers = props => {
  const speakersList = speakersDetails.map((speakers, index) => {
    return (
      <div key={index} className='speakersList threeColumsList'>
        <div className='speakersListContainer'>
          <div className='speakersImg'>
            <img src={speakers.speakersImg} alt={speakers.speakersName} />
          </div>
          <div className='speakersProfileWrapper'>
            <div className='commonLink'>
              {speakers.speakersName}
            </div>
            <div className='articleDesc'>
              {speakers.speakersDesignation}
            </div>
          </div>
        </div>
      </div>
    )
  })
  return (
    <div className={'speakersWrapper sectionWrapper ' + ((!props.isLightMode) ? 'darkModeBorBottom' : 'lightModeBorBottom')}>
      <div className='speakersHeader'>
        <div className='articleTitle'>People who’ve spoken at GQLA in the past.</div>
        <div className='buttonWrapper alignSelfEnd'>
          <button className='commonBtn darkBtn'>
            <img className='submitIcon' src={submitBtnIcon} alt='Icon' />
            <img className='submitIconHover' src={submitBtnIconHover} alt='Icon' />
            Submit a Proposal
          </button>
        </div>
      </div>
      <div className='speakersListWrapper threeColumsWrapper'>
        {speakersList}
      </div>
    </div>
  );
};

export default Speakers;
