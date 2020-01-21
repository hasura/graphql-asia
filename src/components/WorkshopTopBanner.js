import React from "react"
import { Link } from "gatsby"
import './styles.scss'
// const graphqlAsia = require('../images/graphql_Asia2020_heading.svg');
// const megaphone = require('../images/megaphone.svg');
import { workshopState } from './AllState.js';

const arrowPink = require('../images/arrow-pink.svg');
const time = require('../images/time.svg');
const expand = require('../images/expand-more-pink.svg');

const WorkshopTopBanner = (props) => {
  const workshopUrl = props.workshopUrl;
  const currentWorkshop = workshopState[workshopUrl];
  if(!currentWorkshop) {
    window.location.href = "/404";
  }
  return (
    <div>
      <div className='detailsTopBannerWrapper detailsBgImage'>
        <div className={'container noPadd'}>
          <div className='detailsWrapper'>
            <div className='col-md-4 col-sm-4 col-xs-12 noPadd'>
              <div className='title titleTop'>
                WORKSHOP TITLE
              </div>
            </div>
            <div className='col-md-8 col-sm-8 col-xs-12 noPadd'>
              <div className='profileWrapper'>
                <div className='profileName'>
                  {currentWorkshop.title}
                </div>
                <div className='socialWrapper'>
                  <div className='workshopIcon'>
                    <img src={time} alt='Time icon'/><span>{currentWorkshop.time}</span>
                  </div>
                  <div className='workshopIcon'>
                    <img src={currentWorkshop.levelImg} alt={currentWorkshop.level}/><span>{currentWorkshop.level}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='sectionWrapperSmall'>
        <div className={'container noPadd'}>
          <div className={'clearBoth'}>
          {
            (currentWorkshop.workshopDescription) ? (
              <div className='aboutSpeakerWrapper'>
                <div className='col-md-4 col-sm-4 col-xs-12 noPadd'>
                  <div className='title titleTop'>
                    WORKSHOP DESCRIPTION
                  </div>
                </div>
                <div className='col-md-8 col-sm-8 col-xs-12 noPadd'>
                  <div className='pageDescription'>
                    {currentWorkshop.workshopDescription}
                  </div>
                </div>
              </div>
            ) : null
          }
          {
            (currentWorkshop.workshopCover) ? (
              <div className='aboutSpeakerWrapper'>
                <div className='col-md-4 col-sm-4 col-xs-12 noPadd'>
                  <div className='title titleTop'>
                  WHAT THE WORKSHOP WILL COVER
                  </div>
                </div>
                <div className='col-md-8 col-sm-8 col-xs-12 noPadd'>
                  <div className='pageDescription'>
                    <ul>
                    {
                      currentWorkshop.workshopCover.map((list, index) => {
                        return (
                          <li><img src={expand} alt='Expand'/>{list}</li>
                        )
                      })
                    }
                    </ul>
                  </div>
                </div>
              </div>
            ): null
          }
          {
            (currentWorkshop.workshopTakeaway) ? (
              <div className='aboutSpeakerWrapper'>
                <div className='col-md-4 col-sm-4 col-xs-12 noPadd'>
                  <div className='title titleTop'>
                    TAKEAWAYS
                  </div>
                </div>
                <div className='col-md-8 col-sm-8 col-xs-12 noPadd'>
                  <div className='pageDescription'>
                    {currentWorkshop.workshopTakeaway}
                  </div>
                </div>
              </div>
            ) : null
          }
          <div className='aboutSpeakerWrapper'>
            <div className='col-md-4 col-sm-4 col-xs-12 noPadd'>
              <div className='title titleTop'>
                SPEAKER
              </div>
            </div>
            <div className='col-md-8 col-sm-8 col-xs-12 noPadd'>
              <div className='speakersProfile'>
                <div className='speakerImg'>
                  <img src={currentWorkshop.img} alt={currentWorkshop.name}/>
                </div>
                <div className='profile'>
                  <div className='name'>
                    {currentWorkshop.name}
                  </div>
                  <div className='designation'>
                    {currentWorkshop.designation}
                  </div>
                  <div className='organization'>
                    {currentWorkshop.org}
                  </div>
                </div>
              </div>
            </div>
          </div>
          </div>
          <div className={'clearBoth aboutSpeakerWrapper'}>
            <div className={'col-md-offset-4 col-sm-offset-4'}>
              <div className='pinkLink '>
                <Link to="/#workshops">BACK TO WORKSHOPS<img src={arrowPink} alt={'Arrow'} /></Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};

export default WorkshopTopBanner
