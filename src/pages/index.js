import React from 'react';

import TopBanner from '../components/Homepage/TopBanner';
import Conference from '../components/Homepage/Conference';
import { SEO } from '../components/seo';
import Layout from '../components/Layout';
const IndexPage = props => (
  <Layout>
    <SEO title="GraphQL Asia 2021" />
    <TopBanner/>
    <Conference />
  </Layout>
);

export default IndexPage;
