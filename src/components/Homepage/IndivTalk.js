import React, {Fragment} from "react";
import {Link} from 'gatsby';
import '../Common/Styles.scss';
const arrow = require('../Common/images/arrow.svg');
const star = require('../Common/images/star.svg');
const IndivTalk = ({talksList}) => {
  return (
    <li>
      <img src={star} alt="Star" />
      <Link to={talksList.url}>
        <div className='articleSectionTitle fontBold'>
          {talksList.title}
        </div>
        <div className='articleDesc fontBold500'>
          Speaker:{' '}
          <span>
          {
            talksList.speakersList ? (
              <Fragment>
                {
                  talksList.speakersList.map((name, index) => {
                    return (
                      <Fragment key={index}>
                        { name.speakersName }
                        { index < (talksList.speakersList.length - 1) ? ', ' : '' }
                      </Fragment>
                    )
                  })
                }
              </Fragment>
            ) : null
          }
          </span> | Language: <span>{talksList.language}</span>
        </div>
        <div className='articleDesc fontBold500 readMore'>
          <span>Read More </span><span className='readMoreArrow'>→</span>
        </div>
        <div className='workshopArrow'>
          <img src={arrow} alt='Arrow' />
        </div>
      </Link>
    </li>
  );
};

export default IndivTalk;
