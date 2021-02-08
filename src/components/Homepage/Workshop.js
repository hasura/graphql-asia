import React, {Fragment} from "react";
import {Link} from 'gatsby';
import '../Common/Styles.scss';
import IndivWorkshop from './IndivWorkshop';
import { workshopDetailsPage } from '../Homepage/AllState.js'
const arrow = require('../Common/images/arrow.svg');
const star = require('../Common/images/star.svg');
const warning = require('../Common/images/warning.svg');
const Workshop = props => {
  return (
    <div id='workshops' className={'sectionWrapper removePaddBottom' + ((!props.isLightMode) ? ' darkModeBorBottom' : ' lightModeBorBottom') + ((props.wdClass) ? ' wd80' : '')}>
      <div className='workshopWrapper'>
        <div className='articleSubTitle'>Workshops</div>
        <div className='articleDesc fontBold'>
          <img src={warning} alt='Warning' />
          All workshops will start at 8 AM IST on 24th Feb
        </div>
        <ul>
          {
            workshopDetailsPage.map((workshopList, index) => {
              return (
                <IndivWorkshop key={index} workshopList ={ workshopList } />
              )
            })
          }
        </ul>
      </div>
    </div>
  );
};

export default Workshop;
