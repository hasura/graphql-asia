import React, {Fragment} from 'react';

import workshopBulletIcon from './images/workshop_bullet.svg';
import workshopIllustration from '../Common/images/pattern-dark.svg';
import { talkDetailsPage } from '../Homepage/AllState.js'
export const Workshops = () => (
  <div className="workshops-section-wrapper">
    <div className="workshops-section col-md-12 noPadd">
      <div className="flex col-md-12 col-xs-12 noPadd workshop-wrapper-div">
        <h2 className="col-md-3 noPadd">Workshops</h2>
        <div className="workshops col-md-9 col-xs-12 noPadd">
          {
            talkDetailsPage.map((talksDetails, index) => {
              return (
                <Fragment key={index}>
                  {
                    talksDetails.isWorkshop ? (
                      <div className="flex workshop-div">
                        <img src={workshopBulletIcon} alt="workshop" />
                        <div>
                          <h2>{talksDetails.title}</h2>
                          {
                            talksDetails.speakersList ? (
                              <p>
                                {
                                  talksDetails.speakersList.map((name, index) => {
                                    return (
                                      <Fragment key={index}>
                                        Given by <span>
                                          { name.speakersName }
                                          { index < (talksDetails.speakersList.length - 1) ? ', ' : '' }
                                        </span> |{' '}
                                        <span className="red-text">{name.speakersOrg ? name.speakersOrg : 'Hasura'}</span>
                                      </Fragment>
                                    )
                                  })
                                }
                              </p>
                            ) : null
                          }
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
      <img
        className="workshop-illustration"
        src={workshopIllustration}
        alt="graphql-asia-illustration"
      />
    </div>
  </div>
);
