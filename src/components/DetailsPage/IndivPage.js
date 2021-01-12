import React, {Fragment} from "react";
import { Link } from 'gatsby';
import '../Common/Styles.scss';
const star = require('../Common/images/star.svg');

const copy = require('../Common/images/copy.svg');
const whatsapp = require('../Common/images/whatsapp.svg');
const twitter = require('../Common/images/twitter.svg');
const linkedin = require('../Common/images/linkedin.svg');
const IndivPage = props => {
  return (
    <div className='detailsPageWrapper sectionWrapper removePaddTop'>
      <div className='articleDesc fontBold'>
        {
          props.currentDetailsPage.speakersList ? (
            <Fragment>
              {
                props.currentDetailsPage.speakersList.map((name, index) => {
                  return (
                    <Fragment key={index}>
                      { name.speakersName }
                      { index < (props.currentDetailsPage.speakersList.length - 1) ? ', ' : '' }
                    </Fragment>
                  )
                })
              }
            </Fragment>
          ) : null
        }
      </div>
      {
        props.currentDetailsPage.title ? (
          <div className='articleSubTitle'>
            {props.currentDetailsPage.title}
          </div>
        ) : null
      }
      {
        props.currentDetailsPage.description ? (
          <Fragment>
            {
              props.currentDetailsPage.description.map((desc, index) => {
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
        props.currentDetailsPage.contents ? (
          <Fragment>
            {
              props.currentDetailsPage.contents.map((desc, index) => {
                return (
                  <Fragment key={index}>
                    <div className='articleSectionTitle fontBold'>
                      {desc.title}
                    </div>
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
                  </Fragment>
                )
              })
            }
          </Fragment>
        ) : null
      }
      {
        props.currentDetailsPage.speakersTitle ? (
          <div className='articleSectionTitle fontBold'>
            {props.currentDetailsPage.speakersTitle}
          </div>
        ) : null
      }
      {
        props.currentDetailsPage.speakersList ? (
          <Fragment>
            {
              props.currentDetailsPage.speakersList.map((speakers, index) => {
                return (
                  <div key={index} className='speakerDetails'>
                    <div className='speakersProfile'>
                      <div className='speakersImg'>
                        <img src={speakers.speakersImg} alt={speakers.speakersName} />
                      </div>
                      <div className='pl-40'>
                        <div className='commonLink'>
                          {speakers.speakersName}
                        </div>
                        <div className='articleDesc'>
                          {speakers.speakersDesignation}
                        </div>
                        {
                          speakers.speakersBio ? (
                            <div className='articleDesc'>
                              {speakers.speakersBio}
                            </div>
                          ) : null
                        }
                      </div>
                    </div>
                  </div>
                )
              })
            }
          </Fragment>
        ) : null
      }
      <div className='shareWrapper'>
        <div className='articleDesc fontBold'>
          {props.currentDetailsPage.isWorkshop ? 'Share this workshop' : 'Share this talk'}
        </div>
        <div className='shareIconWrapper'>
          <div className='shareIcon'>
            <img src={copy} alt='Copy' />
          </div>
          <div className='shareIcon'>
            <img src={whatsapp} alt='Whatsapp' />
          </div>
          <div className='shareIcon'>
            <img src={twitter} alt='Twitter' />
          </div>
          <div className='shareIcon'>
            <img src={linkedin} alt='LinkedIn' />
          </div>
        </div>
      </div>
      <div className='backBtnWrapper'>
        <div className={((!props.isLightMode) ? 'lightLine' : 'darkLine')}></div>
        <Link to='/#speakers'><button className='commonBtn darkBtn'>← Back to Speakers</button></Link>
      </div>
    </div>
  );
};

export default IndivPage;
