import React, {Fragment} from "react";
import {Link} from 'gatsby';
import '../Common/Styles.scss';
const arrow = require('../Common/images/arrow.svg');
const star = require('../Common/images/star.svg');
const IndivSchedule = ({indivTalks}) => {
  return (
    <li>
      <Link to={indivTalks.url} className='scheduleList'>
        <div className='time articleDesc'>
          {indivTalks.time ? indivTalks.time : ''}
          <div className='istBtnMobile articleDesc fontBold'>
            IST
            <div className='istBtnHover'>Indian Standard Time</div>
          </div>
        </div>
        <div className='scheduleDetailsWrapper'>
          <div>
            <div className='articleSectionTitle fontBold'>
              {indivTalks.title}
            </div>
            <div className='talkTypes'>
              <div className='talkBtn articleDesc'>
                {indivTalks.talkType}
              </div>
              <div className='talkBtn articleDesc'>
                {indivTalks.language}
              </div>
            </div>
          </div>
          <div>
            {
              indivTalks.speakersList ? (
                <Fragment>
                  {
                    indivTalks.speakersList.map((speakers, index) => {
                      return (
                        <div key={index} className='speakersDetailsInfo'>
                          <div className='speakersImg'>
                            <img src={speakers.speakersImg} alt={speakers.speakersName} />
                          </div>
                          <div>
                            <div className='commonLink'>
                              {speakers.speakersName}
                            </div>
                            <div className='articleDesc'>
                              {speakers.speakersDesignation}
                            </div>
                          </div>
                        </div>
                      )
                    })
                  }
                </Fragment>
              ) : null
            }
          </div>
        </div>
        <div className='workshopArrow'>
          <img src={arrow} alt='Arrow' />
        </div>
        <div className='articleDesc fontBold500 readMore'>
          <span>Read More </span><span className='readMoreArrow'>→</span>
        </div>
      </Link>
    </li>
  );
};

export default IndivSchedule;
