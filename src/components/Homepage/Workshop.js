import React, {Fragment} from "react";
import {Link} from 'gatsby';
import '../Common/Styles.scss';
import IndivWorkshop from './IndivWorkshop';
import { talkDetailsPage } from '../Homepage/AllState.js'
const arrow = require('../Common/images/arrow.svg');
const star = require('../Common/images/star.svg');
const Workshop = props => {
  return (
    <div id='workshops' className={'sectionWrapper removePaddBottom' + ((!props.isLightMode) ? ' darkModeBorBottom' : ' lightModeBorBottom') + ((props.wdClass) ? ' wd80' : '')}>
      <div className='workshopWrapper'>
        <div className='articleSubTitle'>Workshops</div>
        <ul>
          {
            talkDetailsPage.map((workshopList, index) => {
              return (
                <Fragment key={index}>
                  {
                    workshopList.isWorkshop ? (
                      <IndivWorkshop workshopList ={ workshopList } />
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

export default Workshop;
