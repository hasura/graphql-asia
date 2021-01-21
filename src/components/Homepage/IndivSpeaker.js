import React, {Fragment} from "react";
import {Link} from 'gatsby';
import '../Common/Styles.scss';
const arrow = require('../Common/images/arrow.svg');
const IndivSpeaker = ({speakers}) => {
  return (
    <div className='speakersList threeColumsList'>
      <Link to={speakers.talkPageUrl}>
        <div className='speakersListContainer'>
          <div className='speakersImg'>
            <img src={speakers.speakersImg} alt={speakers.speakersName} />
          </div>
          <div className='speakersProfileWrapper'>
            <div className='commonLink'>
              {speakers.speakersName}
            </div>
            <div className='articleDesc fontBold500'>
              {speakers.speakersDesignation}
            </div>
          </div>
          <div className='speakerArrow'>
            <img src={arrow} alt='Arrow' />
          </div>
        </div>
      </Link>
    </div>
  );
};

export default IndivSpeaker;
