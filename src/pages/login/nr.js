import React from 'react';

import { SEO } from '../../components/seo';
import Layout from '../../components/Layout';
import NrTopBanner from '../../components/Login/NrTopBanner';

const Login = ({ location }) => {
  return (
    <Layout location={location}>
      <SEO
        title="Registered for GraphQL Asia"
        description="You have been registered for the GraphQL Asia conference"
        metaImg="https://graphql-engine-cdn.hasura.io/assets/graphql-asia/graphql-asia.png"
        canonicalLink="https://graphql.asia/login/nr/"
      />
      <NrTopBanner location={location} />
    </Layout>
  );
};

export default Login;
