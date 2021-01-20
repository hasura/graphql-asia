import React, {Fragment} from "react";
import {Link} from 'gatsby';
import '../Common/Styles.scss';
import { talkDetailsPage } from '../Homepage/AllState.js'
import IndivTalk from '../Homepage/IndivTalk';
const TalksList = props => {
  const talkListState = talkDetailsPage.map((talksList, index) => {
    return (
      <IndivTalk key={index} talksList={talksList} />
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
          <Link to='/'><button className='commonBtn darkBtn'>← Back to Homepage</button></Link>
        </div>
      </div>
    </div>
  );
};

export default TalksList;
