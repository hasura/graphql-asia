import React, { Fragment } from 'react';
import { Link } from 'gatsby';

import '../Common/Styles.scss';

const arrow = require('../Common/images/arrow.svg');

// const star = require('../Common/images/star.svg');

const IndivWorkshop = ({ workshopList, isLightMode }) => {
  return (
    <li className={isLightMode ? 'lightModeBorder' : 'darkModeBorder'}>
      {/* <img src={star} alt="Star" /> */}
      <Link to={workshopList.url}>
        <div className="articleSectionTitle fontBold">{workshopList.title}</div>
        {workshopList.description ? (
          <Fragment>
            {workshopList.description.map((desc, index) => {
              return (
                <div key={index} className="articleDesc pb-40">
                  {desc.desc ? desc.desc : null}
                  {desc.list ? (
                    <ul>
                      {desc.list.map((list, subIndex) => {
                        return (
                          <li key={subIndex}>
                            {/* <img src={star} alt="star" /> */}
                            {list}
                          </li>
                        );
                      })}
                    </ul>
                  ) : null}
                </div>
              );
            })}
          </Fragment>
        ) : null}
        {!workshopList.comingSoon && (
          <div className="articleDesc fontBold500">
            <span>
              {workshopList.speakersList.map((name, index) => {
                return (
                  <div key={index} className="speaker-talk-card">
                    <img src={name.speakersImg} alt={name.speakersName} />
                    <p className={isLightMode ? 'lightModeText' : 'darkModeText'}>
                      {name.speakersName}
                    </p>
                  </div>
                );
              })}
            </span>
          </div>
        )}
        <div className="articleDesc fontBold500 readMore">
          <span>Read More </span>
          <span className="readMoreArrow">→</span>
        </div>
        <div className="workshopArrow">
          <img src={arrow} alt="Arrow" />
        </div>
      </Link>
    </li>
  );
};

export default IndivWorkshop;
