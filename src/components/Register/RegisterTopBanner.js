import React, {Fragment, useState, useEffect } from 'react';
import { Link } from 'gatsby';
import MarketoForm from '../Common/marketoform';
import '../Common/Styles.scss';
const marketoHost = "https://page.hasura.io";
const redBox = require('../Common/images/red-box.svg');
const add = require('../Common/images/add.svg');
const RegisterTopBanner = ({ location }) => {
  const [isAliId, setIsAliId] = useState(false);

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);

    const searchAliId = searchParams.get("aliId");

    if (searchAliId || searchAliId === '') {
      setIsAliId(true);
      // document.getElementById('marketo-form-id').scrollIntoView({ behavior: "smooth", block: "start", inline: "start" });
    }
  }, [location.search]);

  return (
    <div className='registerWrapper sectionWrapper removePaddTop'>
      {
        isAliId ? (
          <Fragment>
            <div className='mainSubTitle'>
              Thank you for registering for GraphQL Asia!
            </div>
            <div className='articleDesc removePaddTop'>
              Here are a couple of things before you go on with your day:
            </div>
            <ul className='articleDesc'>
              <li><img src={redBox} alt='Box' /><span>We will send you more information about workshop topics, speakers, schedule and how to attend the conference around the <span className='redColor'>3rd week of January</span>.</span></li>
              <li><img src={redBox} alt='Box' /><span>In case you have any questions please reach out to Harsha at <a href='mailto:events@hasura.io'>events@hasura.io</a>.</span></li>
            </ul>
            <div className='commonLink'>
              <a>
                <img src={add} alt='Add' />Add to Calendar
              </a>
            </div>
          </Fragment>
        ) : (
          <Fragment>
            <div className='mainSubTitle'>
              Register for GraphQL Asia 2021
            </div>
            <div className='articleDesc removePaddTop pb-10'>
              What is your name and how do we reach you?
            </div>
            <MarketoForm formId="1067" marketoHost={marketoHost} id="631-HMN-492" styleClass="marketoFormWrapper" />
            <div className='articleDesc'>
              Submitting this form means you agree to the <a href='#'>Terms and Conditions</a> and <a href='#'>Email Policy</a>.
            </div>
          </Fragment>
        )
      }
    </div>
  );
}

export default RegisterTopBanner;
