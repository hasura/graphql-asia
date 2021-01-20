import React, {Fragment} from "react";
import {Link} from 'gatsby';
import '../Common/Styles.scss';
import { speakersDetails } from '../Homepage/AllState.js'
import IndivSpeaker from '../Homepage/IndivSpeaker';
const SpeakersList = props => {
  const speakersListState = speakersDetails.map((speakers, index) => {
    return (
      <IndivSpeaker key={index} speakers={speakers} />
    )
  })
  return (
    <div className='speakersWrapper sectionWrapper removePaddTop'>
      <div className='speakersHeader'>
        <div className='articleTitle'>Speakers</div>
      </div>
      <div className='speakersWrapperOverflow'>
        <div className='speakersListWrapper threeColumsWrapper'>
          {speakersListState}
        </div>
      </div>
      <div className='backBtnWrapper'>
        <div className={((!props.isLightMode) ? 'lightLine' : 'darkLine')}></div>
        <Link to='/'><button className='commonBtn darkBtn'>← Back to Homepage</button></Link>
      </div>
    </div>
  );
};

export default SpeakersList;
