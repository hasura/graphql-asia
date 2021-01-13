import React, {Fragment} from "react";
import {Link} from 'gatsby';
import '../Common/Styles.scss';
import { detailsPage } from '../Homepage/AllState.js'
const arrow = require('../Common/images/arrow.svg');
const Talks = props => {
  return (
    <div id='talks' className={'sectionWrapper ' + ((!props.isLightMode) ? 'darkModeBorBottom' : 'lightModeBorBottom')}>
      <div className='workshopWrapper'>
        <div className='articleSubTitle'>Talks</div>
        <ul>
          {
            detailsPage.map((talksList, index) => {
              return (
                <Fragment key={index}>
                  {
                    !talksList.isWorkshop ? (
                      <li>
                        <Link to={talksList.url}>
                          <div className='articleSectionTitle fontBold'>
                            {talksList.title}
                          </div>
                          <div className='articleDesc fontBold'>
                            Speaker:{' '}
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
                            </span> | Language: <span>English</span>
                          </div>
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

export default Talks;
