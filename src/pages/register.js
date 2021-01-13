import React from 'react';
import { Link } from 'gatsby';
import { SEO } from '../components/seo';
import Layout from '../components/Layout';
import RegisterTopBanner from '../components/Register/RegisterTopBanner'
const IndexPage = ({ location }) => {
  return (
    <Layout location={props.location}>
      <SEO
        title='GraphQL Asia 2021 Register'
        description='GraphQL Asia is the largest gathering of the GraphQL community in Asia! Meet the creators of leading GraphQL tooling, talk to the experts implementing GraphQL in their companies as well as practitioners and enthusiasts from Asia and the rest of the world.'
        metaImg='https://graphql-engine-cdn.hasura.io/assets/graphql-asia/graphql-asia.png'
        canonicalLink='https://graphql.asia/'
      />
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
