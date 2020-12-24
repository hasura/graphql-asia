import React from 'react';
import { Link } from 'gatsby';
import { SEO } from '../components/seo';
import Layout from '../components/Layout';
import RegisterTopBanner from '../components/Register/RegisterTopBanner'
const IndexPage = ({ location }) => {
  return (
    <Layout>
      <SEO title="GraphQL Asia 2021" />
      <RegisterTopBanner location = {location}/>
      {/*<div className="landing-div">
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
      */}
    </Layout>
  );
}

export default IndexPage;
