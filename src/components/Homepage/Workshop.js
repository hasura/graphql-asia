import React, {Fragment} from "react";
import {Link} from 'gatsby';
import '../Common/Styles.scss';
import { detailsPage } from '../Homepage/AllState.js'
const arrow = require('../Common/images/arrow.svg');
const Workshop = props => {
  return (
    <div id='workshops' className={'sectionWrapper ' + ((!props.isLightMode) ? 'darkModeBorBottom' : 'lightModeBorBottom')}>
      <div className='workshopWrapper'>
        <div className='articleSubTitle'>Workshops</div>
        <ul>
          {
            detailsPage.map((talksList, index) => {
              return (
                <Fragment key={index}>
                  {
                    talksList.isWorkshop ? (
                      <li className={((!props.isLightMode) ? 'darkModeListBorBottom' : 'lightModeListBorBottom')}>
                        <Link to={talksList.url}>
                          <div className='articleSectionTitle fontBold'>
                            {talksList.title}
                          </div>
                          {
                            talksList.description ? (
                              <Fragment>
                              {
                                talksList.description.map((desc, index) => {
                                  return (
                                    <div key={index} className='articleDesc pb-40'>
                                      {
                                        desc.desc ? (
                                          desc.desc
                                        ) : null
                                      }
                                      {
                                        desc.list ? (
                                          <ul>
                                            {
                                              desc.list.map((list, subIndex) => {
                                                return (
                                                  <li key={subIndex}>
                                                    <img src={star} alt='star' />
                                                    {list}
                                                  </li>
                                                )
                                              })
                                            }
                                          </ul>
                                        ) : null
                                      }
                                    </div>
                                  )
                                })
                              }
                              </Fragment>
                            ) : null
                          }
                          {
                            !talksList.comingSoon ? (
                              <div className='articleDesc fontBold'>
                                Presented by{' '}
                                <span>
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
                                </span>
                              </div>
                            ) : null
                          }
                          <div className='workshopArrow'>
                            <img src={arrow} alt='Arrow' />
                          </div>
                        </Link>
                      </li>
                    ) : null
                  }
                </Fragment>
              )
            })
          }
        </ul>
      </div>
    </div>
  );
};

export default Workshop;
