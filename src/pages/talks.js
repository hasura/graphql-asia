import React from 'react';
import { SEO } from '../components/seo';
import Layout from '../components/Layout';
import TalksList from '../components/Talks/TalksList';
const TalksPage = (props) => (
  <Layout location={props.location}>
    <SEO
      title="GraphQL Asia 2021"
      description="GraphQL Asia is the largest gathering of the GraphQL community in Asia! Meet the creators of leading GraphQL tooling, talk to the experts implementing GraphQL in their companies as well as practitioners and enthusiasts from Asia and the rest of the world."
      metaImg="https://graphql-engine-cdn.hasura.io/assets/graphql-asia/graphql-asia.png"
      canonicalLink="https://graphql.asia/talks/"
    />
    <TalksList />
  </Layout>
);

export default TalksPage;
