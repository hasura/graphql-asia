import React from 'react';

import { SEO } from '../components/seo';
import Layout from '../components/Layout';
import RegisterTopBanner from '../components/Register/RegisterTopBanner';

const IndexPage = ({ location }) => {
  return (
    <Layout location={location}>
      <SEO
        title="GraphQL Asia 2021 Register"
        description="GraphQL Asia is the largest gathering of the GraphQL community in Asia! Meet the creators of leading GraphQL tooling, talk to the experts implementing GraphQL in their companies as well as practitioners and enthusiasts from Asia and the rest of the world."
        metaImg="https://graphql-engine-cdn.hasura.io/assets/graphql-asia/graphql-asia.png"
        canonicalLink="https://graphql.asia/register/"
      />
      <RegisterTopBanner location={location} />
    </Layout>
  );
};

export default IndexPage;
