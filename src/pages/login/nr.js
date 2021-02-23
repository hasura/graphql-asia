import React from 'react';

import { SEO } from '../components/seo';
import Layout from '../components/Layout';
import LoginTopBanner from '../components/Login/LoginTopBanner';

const Login = ({ location }) => {
  return (
    <Layout location={location}>
      <SEO
        title="Registered for GraphQL Asia"
        description="You have been registered for the GraphQL Asia conference"
        metaImg="https://graphql-engine-cdn.hasura.io/assets/graphql-asia/graphql-asia.png"
        canonicalLink="https://graphql.asia/login/nr/"
      />
      <LoginTopBanner location={location} />
    </Layout>
  );
};

export default Login;
