import React, { Fragment } from 'react';

import { Footer } from './Footer';
import redBox from '../Common/images/red-box.svg';
import add from '../Common/images/add.svg';

export const Thankyou = () => (
  <div id="viewport" className="darkModeLayout advertisement-site-wrapper">
    <div className="registerWrapper sectionWrapper removePaddTop thankyou-wrapper">
      <Fragment>
        <div className="mainSubTitle">Thank you for registering for GraphQL Asia!</div>
        <div className="articleDesc removePaddTop">
          Here are a couple of things before you go on with your day:
        </div>
        <ul className="articleDesc">
          <li>
            <img src={redBox} alt="Box" />
            <span>
              Check your inbox for a confirmation email. If you have not got one, please email
              Harsha at <a href="mailto:events@hasura.io">events@hasura.io</a> with the subject line{' '}
              <span className="redColor">”GQLA 2021 Registration Error“</span>.
            </span>
          </li>
          <li>
            <img src={redBox} alt="Box" />
            <span>
              We will send you more information on workshop topics, speakers, schedule and how to
              attend the conference around the <span className="redColor">3rd week of January</span>
              .
            </span>
          </li>
          <li>
            <img src={redBox} alt="Box" />
            <span>And of course, add the conference to your calendar below</span>
          </li>
        </ul>
        <div className="commonLink">
          <a href="https://www.addevent.com/event/wJ5798313">
            <img className="addIcon" src={add} alt="Add" />
            Add to Calendar
          </a>
        </div>
      </Fragment>
    </div>
    <Footer />
  </div>
);
