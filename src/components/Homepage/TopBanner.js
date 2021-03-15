import React, {useState, useEffect} from 'react';
import { Link } from 'gatsby';
import '../Common/Styles.scss';
import MarketoForm from '../Common/marketoform';
const marketoHost = 'https://page.hasura.io';
const submitBtnIcon = require('../Common/images/submit-btn-icon.svg');
const submitBtnIconHover = require('../Common/images/submit-btn-icon-hover.svg');
const btnPattern = require('../Common/images/btn-pattern.svg');
const checkIcon = require('../Common/images/check-icon.svg');
const TopBanner = (props) => {
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
    <div className="topBannerWrapper sectionWrapperBottom">
      <div className="mainTitle">Asia's Largest GraphQL Conf is Back</div>
      <div className="articleSectionTitle">
        Join us on 24th & 25th Feb for the third edition of GraphQL Asia happening online and free!
        And this time we're accepting talks & workshops in multiple Asian languages.
      </div>
      { isAliId ? (
        <div className={'checkMailWrapper articleDesc ' + ((!props.isLightMode) ? 'darkModeBorder' : 'lightModeBorder')}>
          <img src={checkIcon} alt='check icon' />
          Check your Email inbox for the video link
        </div>
      ) : (
        <MarketoForm
          formId="1165"
          marketoHost={marketoHost}
          id="631-HMN-492"
          styleClass="marketoFormWrapper subscribeNewsletterForm"
        />
      )
      }
      {/*
      <div className="buttonWrapper">
        <Link to="/register/">
          <button className="commonBtn darkBtn">Register Now</button>
        </Link>
        <Link to="/login/">
          <button className="commonBtn lightBtn ml-20">Login</button>
        </Link>
      </div>
      */}
    </div>
  );
};

export default TopBanner;
