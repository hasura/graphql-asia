import React from "react";
import '../Common/Styles.scss';
const lightRrrow = require('../Common/images/light-arrow.svg')
const darkRrrow = require('../Common/images/dark-arrow.svg')
const Conference = props => {
  return (
    <div id='conference' className={'conferenceWrapper sectionWrapper ' + ((!props.isLightMode) ? 'darkModeBorBottom' : 'lightModeBorBottom')}>
      <div>
        <div className='articleSubTitle'>The Conference</div>
        <div className='articleDesc'>
          With participation from virtually every corner of the continent, GraphQL Asia is well on its way to becoming Asia’s foremost conference in this domain.
        </div>
        <div className='articleSectionTitle'>
          Check out our past conferences for more on us.
        </div>
      </div>
      <div className='alignSelfEnd'>
        <div className='commonLinkWrapper'>
          <div className='commonLink pr-90'>
            <a href='https://graphql.asia/2019/' target='_blank' rel='noopener noreferrer'>
              GraphQL 19
              <div className='arrow'>
                <img src={(!props.isLightMode) ? lightRrrow : darkRrrow} alt='Arrow'/>
              </div>
            </a>
          </div>
          <div className='commonLink'>
            <a href='https://graphql.asia/2020/' target='_blank' rel='noopener noreferrer'>
              GraphQL 20
              <div className='arrow'>
                <img src={(!props.isLightMode) ? lightRrrow : darkRrrow} alt='Arrow'/>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Conference;
