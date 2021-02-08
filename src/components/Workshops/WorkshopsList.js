import React, {Fragment} from "react";
import {Link} from 'gatsby';
import '../Common/Styles.scss';
import { workshopDetailsPage } from '../Homepage/AllState.js'
import IndivWorkshop from '../Homepage/IndivWorkshop';
const lightBackArrow = require('../Common/images/back-arrow-light.svg');
const darkBackArrow = require('../Common/images/back-arrow-dark.svg');
const warning = require('../Common/images/warning.svg');
const WorkshopsList = props => {
  const workshopsListState = workshopDetailsPage.map((workshops, index) => {
    return (
      <Fragment key={index}>
        {
          workshops.isWorkshop ? (
            <IndivWorkshop workshopList={workshops} />
          ) : null
        }
      </Fragment>
    )
  })
  return (
    <div id='workshops' className={'sectionWrapper removePaddTop' + ((props.wdClass) ? ' wd80' : '')}>
      <div className='workshopWrapper'>
        <div className='articleSubTitle'>Workshops</div>
        <div className='articleDesc fontBold'>
          <img src={warning} alt='Warning' />
          All workshops will start at 8 AM IST on 24th Feb
        </div>
        <ul>
          {workshopsListState}
        </ul>
        <div className='backBtnWrapper'>
          <div className={((!props.isLightMode) ? 'lightLine' : 'darkLine')}></div>
          <Link to='/'>
            <button className='commonBtn darkBtn'>
              <img className='submitIcon mart-4' src={lightBackArrow} alt='Arrow' />
              <img className='submitIconHover mart-4' src={darkBackArrow} alt='Arrow' />
              Back to Homepage
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default WorkshopsList;
