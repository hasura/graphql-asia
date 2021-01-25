import React, {Fragment} from 'react';
import workshopBulletIcon from './images/workshop_bullet.svg';
import { talkDetailsPage } from '../Homepage/AllState.js'
export const Talks = () => {
  return (
    <div className="talks-wrapper-div">
      <div className="talks-wrapper flex col-md-12 noPadd">
        <h2 className="col-md-3 noPadd">Talks</h2>
        <div className="talks-section col-md-9 noPadd flex">
          {
            talkDetailsPage.map((talksDetails, index) => {
              return (
                <Fragment key={index}>
                  {
                    !talksDetails.isWorkshop ? (
                      <div className="talk-div col-md-6">
                        <img src={workshopBulletIcon} alt="workshop" />
                        <div className="flex flex-column">
                          <h2>{talksDetails.title}</h2>
                          {talksDetails.speakersList.map((speakers, subIndex) => (
                            <div className="flex align-center mt-30" key={subIndex}>
                              <img src={speakers.speakersImg} alt={speakers.speakersName} className="speaker-img" />
                              <div className="flex flex-column speaker-details">
                                <h2>{speakers.speakersName}</h2>
                                <p>{speakers.speakersDesignation}</p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    ) : null
                  }
                </Fragment>
              )
            })
          }
        </div>
      </div>
    </div>
  );
};
