import React from "react";
import '../Common/Styles.scss';
const lightArrow = require('../Common/images/light-arrow.svg');
const darkArrow = require('../Common/images/dark-arrow.svg');


const lightArrowLine = require('../Common/images/light-arrow-line.svg');
const darkarrowLine = require('../Common/images/dark-arrow-line.svg');

const Conference = props => {
  return (
    <div id='conference' className={'conferenceWrapper sectionWrapper ' + ((!props.isLightMode) ? 'darkModeBorBottom' : 'lightModeBorBottom')}>
      <div>
        <div className='articleSubTitle'>The Conference</div>
        <div className='articleDesc'>
          With participation from virtually every corner of the continent, GraphQL Asia is well on its way to becoming Asia’s foremost conference in this domain.
        </div>
      </div>
      <div className='alignSelfEnd'>
        <div className='articleSectionTitle'>
          Check out our past conferences for more on us.
        </div>
        <div className='commonLinkWrapper'>
          <div className='commonLink'>
            <a href='https://graphql.asia/2019/' target='_blank' rel='noopener noreferrer'>
              GraphQL 19
              <div className='arrow'>
                <img className='arrowIcon' src={(!props.isLightMode) ? lightArrow : darkArrow} alt='Arrow'/>
                <img className='arrowIconHover' src={(!props.isLightMode) ? lightArrowLine : darkarrowLine} alt='Arrow'/>
              </div>
            </a>
          </div>
          <div className='commonLink'>
            <a href='https://graphql.asia/2020/' target='_blank' rel='noopener noreferrer'>
              GraphQL 20
              <div className='arrow'>
                <img className='arrowIcon' src={(!props.isLightMode) ? lightArrow : darkArrow} alt='Arrow'/>
                <img className='arrowIconHover' src={(!props.isLightMode) ? lightArrowLine : darkarrowLine} alt='Arrow'/>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Conference;
