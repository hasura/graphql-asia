import React, { Fragment, useState, useEffect } from 'react';
import MarketoForm from '../Common/marketoform';
import '../Common/Styles.scss';

const marketoHost = 'https://page.hasura.io';

const star = require('../Common/images/star.svg');

const add = require('../Common/images/add.svg');

const RegisterTopBanner = ({ location }) => {
  const [isAliId, setIsAliId] = useState(false);

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);

    const searchAliId = searchParams.get('aliId');

    if (searchAliId || searchAliId === '') {
      setIsAliId(true);
      // document.getElementById('marketo-form-id').scrollIntoView({ behavior: "smooth", block: "start", inline: "start" });
    }
  }, [location.search]);

  return (
    <div className="registerWrapper sectionWrapper removePaddTop">
      {isAliId ? (
        <Fragment>
          <div className="mainSubTitle">Thank you for registering for GraphQL Asia!</div>
          <div className="articleDesc removePaddTop">
            Here are a couple of things before you go on with your day:
          </div>
          <ul className="articleDesc">
            <li>
              <img src={star} alt="Star" />
              <span>
                Check your inbox for a confirmation email. If you have not got one, please email
                Harsha at <a href="mailto:events@hasura.io">events@hasura.io</a> with the subject
                line <span className="redColor">”GQLA 2021 Registration Error“</span>.
              </span>
            </li>
            <li>
              <img src={star} alt="Star" />
              <span>
                We will send you more information on workshop topics, speakers, schedule and how to
                attend the conference around the{' '}
                <span className="redColor">2nd week of February</span>.
              </span>
            </li>
            <li>
              <img src={star} alt="Star" />
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
      ) : (
        <Fragment>
          <div className="mainSubTitle">Register for GraphQL Asia 2021</div>
          <div className="articleDesc removePaddTop pb-10">
            Sign up below
          </div>
          <MarketoForm
            formId="1143"
            marketoHost={marketoHost}
            id="631-HMN-492"
            styleClass="marketoFormWrapper"
          />
          <div className="articleDesc">
            Submitting this form means you agree to the{' '}
            <a href="https://hasura.io/legal/website-terms-of-use/">Terms and Conditions</a> and{' '}
            <a href="https://hasura.io/legal/hasura-privacy-policy/">Privacy Policy</a>.
          </div>
        </Fragment>
      )}
    </div>
  );
};

export default RegisterTopBanner;
