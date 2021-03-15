import React from 'react';
import TopBanner from '../components/Homepage/TopBanner';
import Conference from '../components/Homepage/Conference';
// import Video from '../components/Homepage/Video';
import Speakers from '../components/Homepage/Speakers';
import Partners from '../components/Homepage/Partners';
// import JoinGraphQLCommunity from '../components/Homepage/JoinGraphQLCommunity';
import Workshop from '../components/Homepage/Workshop';
import Talks from '../components/Homepage/Talks';
import Schedule from '../components/Homepage/Schedule';
import { SEO } from '../components/seo';
import Layout from '../components/Layout';
const IndexPage = (props) => (
  <Layout location={props.location}>
    <SEO
      title="GraphQL Asia 2021"
      description="GraphQL Asia is the largest gathering of the GraphQL community in Asia! Meet the creators of leading GraphQL tooling, talk to the experts implementing GraphQL in their companies as well as practitioners and enthusiasts from Asia and the rest of the world."
      metaImg="https://graphql-engine-cdn.hasura.io/assets/graphql-asia/graphql-asia.png"
      canonicalLink="https://graphql.asia/"
    />
    <TopBanner location={props.location} />
    {/* <Video /> */}
    <Speakers />
    <Workshop />
    <Talks />
    <Schedule />
    <Partners />
    {/* <JoinGraphQLCommunity /> */}
    <Conference />
  </Layout>
);

export default IndexPage;
