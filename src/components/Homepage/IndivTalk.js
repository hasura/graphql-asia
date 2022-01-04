import React, { Fragment } from 'react';
import { Link } from 'gatsby';

import '../Common/Styles.scss';

const arrow = require('../Common/images/arrow.svg');

const IndivTalk = (props) => {
  const { talksList, isLightMode } = props;

  return (
    <li className={isLightMode ? 'lightModeBorder' : 'darkModeBorder'}>
      <Link to={talksList.url}>
        <div className="articleSectionTitle fontBold">{talksList.title}</div>
        <div>
          <div className="articleDesc fontBold500">
            <span>
              {talksList.speakersList && (
                <Fragment>
                  {talksList.speakersList.map((speaker, index) => {
                    return (
                      <div key={index} className="speaker-talk-card">
                        <img src={speaker.speakersImg} alt={speaker.speakersName} />
                        <p className={isLightMode ? 'lightModeText' : 'darkModeText'}>
                          {speaker.speakersName}
                        </p>
                      </div>
                    );
                  })}
                </Fragment>
              )}
            </span>
          </div>
          <div className="articleDesc fontBold500 readMore">
            <span>Read More </span>
            <span className="readMoreArrow">→</span>
          </div>
          <div className="workshopArrow">
            <img src={arrow} alt="Arrow" className="arrow-img" />
          </div>
        </div>
      </Link>
    </li>
  );
};

export default IndivTalk;
