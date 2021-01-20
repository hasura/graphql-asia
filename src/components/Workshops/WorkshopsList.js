import React, {Fragment} from "react";
import {Link} from 'gatsby';
import '../Common/Styles.scss';
import { workshopDetailsPage } from '../Homepage/AllState.js'
import IndivWorkshop from '../Homepage/IndivWorkshop';
const WorkshopsList = props => {
  const workshopsListState = workshopDetailsPage.map((workshops, index) => {
    return (
      <IndivWorkshop key={index} workshopList={workshops} />
    )
  })
  return (
    <div id='workshops' className={'sectionWrapper removePaddTop' + ((props.wdClass) ? ' wd80' : '')}>
      <div className='workshopWrapper'>
        <div className='articleSubTitle'>Workshops</div>
        <ul>
          {workshopsListState}
        </ul>
        <div className='backBtnWrapper'>
          <div className={((!props.isLightMode) ? 'lightLine' : 'darkLine')}></div>
          <Link to='/'><button className='commonBtn darkBtn'>← Back to Homepage</button></Link>
        </div>
      </div>
    </div>
  );
};

export default WorkshopsList;
