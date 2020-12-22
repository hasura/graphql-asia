import React, { useState, useEffect } from 'react';
import { Link } from 'gatsby';
import MarketoForm from '../Common/marketoform';
import '../Common/Styles.scss';
const marketoHost = "https://page.hasura.io";
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
    <div className='registerWrapper'>
      <div className='mainSubTitle'>
        Register for GraphQL Asia 2021
      </div>
      <MarketoForm formId="1067" marketoHost={marketoHost} id="631-HMN-492" styleClass="marketoFormWrapper" />
    </div>
  );
}

export default RegisterTopBanner;
