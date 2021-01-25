import React, {Fragment} from "react";
import {Link} from 'gatsby';
import '../Common/Styles.scss';
import { talkDetailsPage } from '../Homepage/AllState.js'
import IndivTalk from '../Homepage/IndivTalk';
const lightBackArrow = require('../Common/images/back-arrow-light.svg');
const darkBackArrow = require('../Common/images/back-arrow-dark.svg');
const TalksList = props => {
  const talkListState = talkDetailsPage.map((talksList, index) => {
    return (
      <Fragment key={index}>
       {
         !talksList.isWorkshop ? (
           <IndivTalk talksList={talksList} />
         ) : null
       }
      </Fragment>

    )
  })
  return (
    <div id='workshops' className={'sectionWrapper removePaddTop' + ((props.wdClass) ? ' wd80' : '')}>
      <div className='workshopWrapper'>
        <div className='articleSubTitle'>Talks</div>
        <ul>
          {talkListState}
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

export default TalksList;
