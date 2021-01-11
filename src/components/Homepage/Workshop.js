import React from "react";
import '../Common/Styles.scss';
const star = require('../Common/images/star.svg');
const Workshop = props => {
  return (
    <div className={'sectionWrapper ' + ((!props.isLightMode) ? 'darkModeBorBottom' : 'lightModeBorBottom')}>
      <div className='workshopWrapper'>
        <div className='articleSubTitle'>Workshops</div>
        <ul>
          <li>
            <img src={star} alt='Star'/>
            <span>
              <div className='articleSectionTitle fontBold'>
                Server-side Authentication in GraphQL
              </div>
              <div className='articleDesc'>
                A hands-on workshop about handling authentication and authorization in GraphQL. During this 3 hour workshop you’ll learn how to add authentication to a GraphQL server using JWTs, and handle query responses with user roles. As a bonus we’ll be adding an authentication server with Auth0.
              </div>
              <div className='articleDesc fontBold'>
                Presented by <a href='https://twitter.com/gethackteam' target='_blank' rel='noopener noreferrer'>Roy Derks</a>
              </div>
            </span>
          </li>
          <li>
            <img src={star} alt='Star'/>
            <span>
              <div className='articleSectionTitle fontBold'>
                SQL Server & GraphQL
              </div>
              <div className='articleDesc'>
                More info coming soon
              </div>
            </span>
          </li>
          <li>
            <img src={star} alt='Star'/>
            <span>
              <div className='articleSectionTitle fontBold'>
                GraphQL Fundamentals Workshop
              </div>
              <div className='articleDesc'>
                More info coming soon
              </div>
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Workshop;
