import React from 'react';
// import { Link } from "gatsby"
import './styles.scss';
// const graphqlAsia = require('../images/graphql_Asia2020_heading.svg');
// const megaphone = require('../images/megaphone.svg');
// import { workshopState } from './AllState.js';
import ScheduleSection from './ScheduleSection';
const ScheduleTopBanner = ({ location }) => {
  return (
    <div>
      <div className="scheduleWrapper detailsBgImage">
        <div className={'container noPadd'}>
          <div className="sectionHeader">Schedule</div>
          <div className="pinkSeperateLine"></div>
        </div>
      </div>
      <div className="sectionWrapperSmall">
        <div className={'container noPadd'}>
          <ScheduleSection location={location} />
        </div>
      </div>
    </div>
  );
};

export default ScheduleTopBanner;
