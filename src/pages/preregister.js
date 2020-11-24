import React, { useState, useEffect } from 'react';
import { Link } from 'gatsby';

import { MarketoForm } from '../components/MarketoForm';
import graphqlAsiaImg from '../images/graphqlAsiaLogo.png';
import '../components/styles/formStyles.scss';

const marketoHost = "https://page.hasura.io";

const IndexPage = ({ location }) => {
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
    <div className="landing-div">
      <div className="form-wrapper-div">
        <Link to="/">
          <img src={graphqlAsiaImg} alt="graphql-asia-2021" id="graphql-asia-logo" />
        </Link>
        <p id="form-desc">Online Conference | Feb 2021 </p>
        {isAliId ? <h1 style={{ color: 'white', textAlign: 'center' }}>Thank you for signing up!</h1> : <MarketoForm formId="1068" marketoHost={marketoHost} id="631-HMN-492" styleClass="marketoFormWrapper webinarMarAuto" />}
        <div className="policy-text mt-12">
          &copy; {(new Date().getFullYear())} Hasura Inc. All rights reserved | <a href="https://hasura.io/legal/hasura-privacy-policy/" target="_blank" rel="noopener noreferrer">Privacy policy</a> | <Link to='/code-of-conduct/'>Code of Conduct</Link>
        </div>
      </div>
    </div>
  );
}

export default IndexPage;
