import React from 'react';
import { Link } from 'gatsby';
import { workshopState } from './AllState.js';
import './styles.scss';

const workshop = require('../images/workshop-watermark.svg');
const time = require('../images/time.svg');
const calendarBlue = require('../images/calendar-blue.svg');
const placeBlue = require('../images/place-blue.svg');
const Workshops = (props) => {
  const workshopContainer = Object.keys(workshopState).map((url, index) => {
    return (
      <Link key={index} to={'/workshops/' + url}>
        <div className="workshopList">
          <div className="workshopProfile">
            <img src={workshopState[url].img} alt={workshopState[url].name} />
          </div>
          <div className="workshopTitleWrapper">
            <div className="workshopTitle">{workshopState[url].title}</div>
            <div className="workshopName">{workshopState[url].name}</div>
          </div>
          <div className="timeLevelWrapper">
            <div className="time">
              <img src={time} alt="Time icon" />
              {workshopState[url].time}
            </div>
            <div className="level">
              <img src={workshopState[url].levelImg} alt={workshopState[url].level} />
              {workshopState[url].level}
            </div>
          </div>
        </div>
      </Link>
    );
  });
  return (
    <div id="workshops" className={'workshopWrapper sectionWrapper watermarkWrapper'}>
      <div className={'container noPadd'}>
        <div className={'sectionHeader'}>WORKSHOPS</div>
        <div className={'pinkSeperateLine'}></div>
        <div className="pageDescription wd60">
          GraphQL Asia features a day filled with hands-on workshops. Level up your GraphQL skills
          with sessions led by Engineers who’ve run GraphQL in production.
        </div>
        <div className="locationDateWrapper">
          <div className="locationDetails workshopBorderRight">
            <img src={placeBlue} alt="Place icon" />
            THE TERRACE @ HASURA
          </div>
          <div className="locationDetails">
            <img src={calendarBlue} alt="Calender icon" />
            20 FEB, 2020
          </div>
        </div>
        <div className={'workshopListWrapper'}>{workshopContainer}</div>
        <div className="pageDescription wd60">
          Workshop passes can be purchased along with conference tickets.
        </div>
        <div className={'buttonWrapper'}>
          <Link to="/tickets">
            <button className={'blueBtn'}>BUY TICKETS</button>
          </Link>
        </div>
      </div>
      <div className={'watermarkImg hidden-xs'}>
        <img src={workshop} alt={'workshop water mark'} />
      </div>
    </div>
  );
};
export default Workshops;
