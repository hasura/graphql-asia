import React from 'react';
import {Link} from 'gatsby'
import Layout from '../components/Layout';
import { SEO } from '../components/seo';
import CodeOfConductTopBanner from '../components/CodeOfConduct/CodeOfConductTopBanner';
import graphqlAsiaImg from '../images/graphqlAsiaLogo.png';
const CodeOfConduct = () => {
  return (
    <Layout>
      <SEO title="GraphQL Asia 2021" />
      <CodeOfConductTopBanner />
    </Layout>
  );
}

export default CodeOfConduct;
