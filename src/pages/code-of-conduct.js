import React from 'react';
import {Link} from 'gatsby'
import Layout from '../components/Layout';
import { SEO } from '../components/seo';
import CodeOfConductTopBanner from '../components/CodeOfConduct/CodeOfConductTopBanner';
import graphqlAsiaImg from '../images/graphqlAsiaLogo.png';
const CodeOfConduct = () => {
  return (
    <Layout>
      <SEO
        title='GraphQL Asia 2021'
        description='GraphQL Asia is the largest gathering of the GraphQL community in Asia! Meet the creators of leading GraphQL tooling, talk to the experts implementing GraphQL in their companies as well as practitioners and enthusiasts from Asia and the rest of the world.'
        metaImg='https://graphql-engine-cdn.hasura.io/assets/graphql-asia/graphql-asia.png'
        canonicalLink='https://graphql.asia/'
      />
      <CodeOfConductTopBanner />
    </Layout>
  );
}

export default CodeOfConduct;
