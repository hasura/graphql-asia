import React, { Fragment, useEffect, useState } from 'react';

import { Header } from './Header';
import { TopBanner } from './TopBanner';
import { Workshops } from './Workshops';
import { Talks } from './Talks';
import { Footer } from './Footer';
import '../Common/Styles.scss';
import '../styles/marketing.scss';

const redBox = require('../Common/images/red-box.svg');

const add = require('../Common/images/add.svg');

export const MarketingPage = ({ location }) => {
  const [width, setWidth] = useState(undefined);

  const [isAliId, setIsAliId] = useState(false);

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);

    const searchAliId = searchParams.get('aliId');

    if (searchAliId || searchAliId === '') {
      setIsAliId(true);
      // document.getElementById('marketo-form-id').scrollIntoView({ behavior: "smooth", block: "start", inline: "start" });
    }
  }, [location.search]);

  const handleWindowResize = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    setWidth(window.innerWidth);

    window.addEventListener('resize', handleWindowResize);
    return () => window.removeEventListener('resize', handleWindowResize);
  }, []);

  const isMobile = width < 600;

  if (isAliId) {
    return (
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
                  Harsha at <a href="mailto:events@hasura.io">events@hasura.io</a> with the subject
                  line <span className="redColor">”GQLA 2021 Registration Error“</span>.
                </span>
              </li>
              <li>
                <img src={redBox} alt="Box" />
                <span>
                  We will send you more information on workshop topics, speakers, schedule and how
                  to attend the conference around the{' '}
                  <span className="redColor">3rd week of January</span>.
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
      </div>
    );
  }

  return (
    <div id="viewport" className="darkModeLayout advertisement-site-wrapper">
      <Header isMobile={isMobile} />
      <TopBanner isMobile={isMobile} />
      <Workshops />
      <Talks />
      <Footer />
    </div>
  );
};
