import React, {Fragment} from "react";
import {Link} from 'gatsby';
import '../Common/Styles.scss';
const arrow = require('../Common/images/arrow.svg');
const star = require('../Common/images/star.svg');
const IndivWorkshop = ({workshopList}) => {
  return (
    <li>
      <img src={star} alt="Star" />
      <Link to={workshopList.url}>
        <div className='articleSectionTitle fontBold'>
          {workshopList.title}
        </div>
        {
          workshopList.description ? (
            <Fragment>
            {
              workshopList.description.map((desc, index) => {
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
          !workshopList.comingSoon ? (
            <div className='articleDesc fontBold500'>
              Presented by{' '}
              <span>
              {
                workshopList.speakersList.map((name, index) => {
                  return (
                    <Fragment key={index}>
                      { name.speakersName }
                      { index < (workshopList.speakersList.length - 1) ? ', ' : '' }
                    </Fragment>
                  )
                })
              }
              </span>
            </div>
          ) : null
        }
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

export default IndivWorkshop;
