import React from 'react';
import Layout from '../components/Layout';
import { SEO } from '../components/seo';
import '../components/Common/Styles.scss';
const NotFoundPage = (props) => (
  <Layout location={props.location}>
    <SEO
      title="404: Not found"
      description="GraphQL Asia is the largest gathering of the GraphQL community in Asia! Meet the creators of leading GraphQL tooling, talk to the experts implementing GraphQL in their companies as well as practitioners and enthusiasts from Asia and the rest of the world."
      metaImg="https://graphql-engine-cdn.hasura.io/assets/graphql-asia/graphql-asia.png"
      canonicalLink="https://graphql.asia/"
    />
    <div className="notFoundWrapper">
      <div className="mainTitle">NOT FOUND</div>
      <div className="articleDesc">You just hit a route that doesn&#39;t exist... the sadness.</div>
    </div>
  </Layout>
);

export default NotFoundPage;
