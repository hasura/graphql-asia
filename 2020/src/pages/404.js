import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import '../components/styles.scss';
const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <div className="notFoundBgImage">
      <div className="notFoundWrapper">
        <div className="container">
          <h1>NOT FOUND</h1>
          <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
        </div>
      </div>
    </div>
  </Layout>
);

export default NotFoundPage;
