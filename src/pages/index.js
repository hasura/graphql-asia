import React from 'react';
import TopBanner from '../components/Homepage/TopBanner';
import Conference from '../components/Homepage/Conference';
import Video from '../components/Homepage/Video';
import Speakers from '../components/Homepage/Speakers';
import Partners from '../components/Homepage/Partners';
import JoinGraphQLCommunity from '../components/Homepage/JoinGraphQLCommunity';
import { SEO } from '../components/seo';
import Layout from '../components/Layout';
const IndexPage = props => (
  <Layout>
    <SEO title="GraphQL Asia 2021" />
    <TopBanner/>
    <Video />
    <Conference />
    <Speakers />
    <Partners />
    <JoinGraphQLCommunity />
  </Layout>
);

export default IndexPage;
