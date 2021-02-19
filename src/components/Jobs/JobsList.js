import React, { Fragment } from "react";
import {Link} from 'gatsby';
import '../Common/Styles.scss';
const atlassianLogo = require('../Common/images/atlassian-logo.svg');
const lightArrow = require('../Common/images/light-arrow.svg');
const darkArrow = require('../Common/images/dark-arrow.svg');
const lightArrowLine = require('../Common/images/light-arrow-line.svg');
const darkarrowLine = require('../Common/images/dark-arrow-line.svg');
const star = require('../Common/images/star.svg');

const JobsList = props => {
  return (
    <Fragment>
      <div className={'detailsPageWrapper sectionWrapper removePaddTop' + ((!props.isLightMode) ? ' darkModeBorBottom' : ' lightModeBorBottom')}>
        <h1 className='mainSubTitle'>
          Check out these Job Offers from our Sponsors
        </h1>
        <div className='brandLogo'>
          <img src={atlassianLogo} alt='Atlassian' />
        </div>
        <h2 className='articleSubTitle'>
          Full Stack Engineer, Jira Align
        </h2>
        <div className='articleDesc pb-40'>
          You’ll be joining a team that is passionate about building great software and quickly iterating on ideas and work to provide customers with continuously improving experience.
        </div>
        <div className='commonLink'>
          <a target='_blank' rel='noopener noreferrer'>
            Learn More
            <div className='arrow'>
              <img className='arrowIcon' src={(!props.isLightMode) ? lightArrow : darkArrow} alt='Arrow'/>
              {/* <img className='arrowIconHover' src={(!props.isLightMode) ? lightArrowLine : darkarrowLine} alt='Arrow'/> */}
            </div>
          </a>
        </div>
      </div>
      <div className={'detailsPageWrapper sectionWrapper' + ((!props.isLightMode) ? ' darkModeBorBottom' : ' lightModeBorBottom')}>
        <div className='brandLogo'>
          <img src={atlassianLogo} alt='Atlassian' />
        </div>
        <h2 className='articleSubTitle'>
          Jobs at Atlassian
        </h2>
        <div className='articleDesc pb-20'>
          You’ll be joining a team that is passionate about building great software and quickly iterating on ideas and work to provide customers with continuously improving experience. We have opening for the following Jobs:
        </div>
        <div className='articleDesc pb-40'>
          <ul>
            <li><img src={star} alt='star' />Full Stack Engineer, Jira Align</li>
            <li><img src={star} alt='star' />Senior Data Architect (Austin or Remote)</li>
            <li><img src={star} alt='star' />Full Stack Developer, Product Integrations</li>
            <li><img src={star} alt='star' />Backend Development Engineer</li>
          </ul>
        </div>
        <div className='commonLink'>
          <a target='_blank' rel='noopener noreferrer'>
            Learn More
            <div className='arrow'>
              <img className='arrowIcon' src={(!props.isLightMode) ? lightArrow : darkArrow} alt='Arrow'/>
              {/* <img className='arrowIconHover' src={(!props.isLightMode) ? lightArrowLine : darkarrowLine} alt='Arrow'/> */}
            </div>
          </a>
        </div>
      </div>
    </Fragment>
  );
};

export default JobsList;
