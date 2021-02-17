import React, {Fragment, useState} from "react";
import {Link} from 'gatsby';
import Break from './Break';
import IndivSchedule from './IndivSchedule';
import '../Common/Styles.scss';
import IndivWorkshop from './IndivWorkshop';
import { talkDetailsPage, scheduleDetailsOne, scheduleDetailsTwo, workshopScheduleDetails, workshopScheduleDetailsTwo } from '../Homepage/AllState.js'
const arrow = require('../Common/images/arrow.svg');
const star = require('../Common/images/star.svg');
const talksLight = require('../Common/images/talks-light.svg');
const talksDark = require('../Common/images/talks-dark.svg');
const workshopLight = require('../Common/images/workshop-light.svg');
const workshopDark = require('../Common/images/workshop-dark.svg');
const Schedule = props => {
  const [currentTab, setCurrentTab] = useState('talks');
  const [dayTab, setDayTab] = useState('dayOne');
  const [dayWorkshopTab, setDayWorkshopTab] = useState('dayOne');
  const dayOneShedule = scheduleDetailsOne.map((shedule, index) => {
    const currenttalksFilter = talkDetailsPage.filter(b => b.url === shedule.url);
    const currentTalks = currenttalksFilter[0];
    return (
      <Fragment key={index}>
        {shedule.type && shedule.type === "break" ? (
          <Break breakDetails={shedule} />
        ) : (
          <IndivSchedule indivTalks={currentTalks} />
        )}
      </Fragment>
    );
  });
  const dayTwoShedule = scheduleDetailsTwo.map((shedule, index) => {
    const currenttalksFilter = talkDetailsPage.filter(b => b.url === shedule.url);
    const currentTalks = currenttalksFilter[0];
    return (
      <Fragment key={index}>
        {shedule.type && shedule.type === "break" ? (
          <Break breakDetails={shedule} />
        ) : (
          <IndivSchedule indivTalks={currentTalks} />
        )}
      </Fragment>
    );
  });

  const dayOneWorkshop = workshopScheduleDetails.map((shedule, index) => {
    const currenttalksFilter = talkDetailsPage.filter(b => b.url === shedule.url);
    const currentTalks = currenttalksFilter[0];
    return (
      <Fragment key={index}>
        {shedule.type && shedule.type === "break" ? (
          <Break breakDetails={shedule} />
        ) : (
          <IndivSchedule indivTalks={currentTalks} />
        )}
      </Fragment>
    );
  });

  const dayTwoWorkshop = workshopScheduleDetailsTwo.map((shedule, index) => {
    const currenttalksFilter = talkDetailsPage.filter(b => b.url === shedule.url);
    const currentTalks = currenttalksFilter[0];
    return (
      <Fragment key={index}>
        {shedule.type && shedule.type === "break" ? (
          <Break breakDetails={shedule} />
        ) : (
          <IndivSchedule indivTalks={currentTalks} />
        )}
      </Fragment>
    );
  });

  return (
    <div id='schedule' className={'sectionWrapper' + ((props.wdClass) ? ' wd80' : '')}>
      <div className='scheduleWrapper'>
        <div className='scheduleHeader'>
          <div className='articleSubTitle'>Schedule</div>
          <div className='buttonWrapper'>
            <button onClick={()=>{setCurrentTab('talks');setDayTab('dayOne');setDayWorkshopTab('dayOne')}} className={'commonBtn ' + ((currentTab === 'talks') ? 'darkRedBtn' : 'transparentBtn')}>
              {
                !props.isLightMode ? (
                  <img src={talksLight} alt='Icon' />
                ) : (
                  <Fragment>
                    {
                      currentTab === 'talks' ? (
                        <img src={talksLight} alt='Icon' />
                      ) : (
                        <img src={talksDark} alt='Icon' />
                      )
                    }

                  </Fragment>
                )
              }
              Talks
            </button>
            <button onClick={()=>{setCurrentTab('workshops');setDayTab('dayOne');setDayWorkshopTab('dayOne')}} className={'commonBtn ' + ((currentTab === 'workshops') ? 'darkRedBtn' : 'transparentBtn')}>
              {
                !props.isLightMode ? (
                  <img src={workshopLight} alt='Icon' />
                ) : (
                  <Fragment>
                    {
                      currentTab === 'workshops' ? (
                        <img src={workshopLight} alt='Icon' />
                      ) : (
                        <img src={workshopDark} alt='Icon' />
                      )
                    }

                  </Fragment>
                )
              }
              Workshops
            </button>
          </div>
        </div>
        <div className='dateTab'>
          <button onClick={()=>{setDayTab('dayOne'); setDayWorkshopTab('dayOne')}} className={'commonBtn ' + ((dayTab === 'dayOne' && dayWorkshopTab === 'dayOne') ? 'darkBlockBtn' : 'transparentBtn')}>24th Feb</button>
          {
            currentTab === 'talks' ? (
              <button onClick={()=>{setDayTab('dayTwo')}} className={'commonBtn ' + ((dayTab === 'dayTwo') ? 'darkBlockBtn' : 'transparentBtn')}>25th Feb</button>
            ) : null
          }
          {
            currentTab === 'workshops' ? (
              <button onClick={()=>{setDayWorkshopTab('dayTwo')}} className={'commonBtn ' + ((dayWorkshopTab === 'dayTwo') ? 'darkBlockBtn' : 'transparentBtn')}>26th Feb</button>
            ) : null
          }
        </div>
        <ul className='scheduleListHeader scheduleListWrapper removeBorBottom'>
          <li className='scheduleList'>
            <div className='time articleSectionTitle fontBold'>
              TIME
              <div className='istBtn articleDesc fontBold'>
                IST
                <div className='istBtnHover'>Indian Standard Time</div>
              </div>
              {/*
              <CopyToClipboard text='Indian Standard Time' onCopy={onCopy}>
                <div className='istBtn articleDesc fontBold'>
                  IST
                </div>
                {renderCopyIcon()}
              </CopyToClipboard>
              */}
            </div>
            <div className='scheduleDetailsWrapper'>
              <div className='time articleSectionTitle fontBold'>
                EVENT
              </div>
              <div className='time articleSectionTitle fontBold'>
                SPEAKERS
              </div>
            </div>
          </li>
        </ul>
        <ul className={'scheduleListWrapper ' + ((dayTab === 'dayOne' && currentTab === 'talks') ? '' : 'displayNone')}>
          {dayOneShedule}
        </ul>
        <ul className={'scheduleListWrapper ' + ((currentTab === 'workshops' && dayWorkshopTab === 'dayOne') ? '' : 'displayNone')}>
          {dayOneWorkshop}
        </ul>
        <ul className={'scheduleListWrapper ' + ((dayTab === 'dayTwo' && currentTab === 'talks') ? '' : 'displayNone')}>
          {dayTwoShedule}
        </ul>
        <ul className={'scheduleListWrapper ' + ((dayWorkshopTab === 'dayTwo' && currentTab === 'workshops') ? '' : 'displayNone')}>
          {dayTwoWorkshop}
        </ul>
      </div>
    </div>
  );
};

export default Schedule;
