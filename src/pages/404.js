import React from 'react';

import Layout from '../components/Layout';
import { SEO } from '../components/seo';
import '../components/Common/Styles.scss';
const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <div className="notFoundWrapper">
      <div className='mainTitle'>NOT FOUND</div>
      <div className='articleDesc'>You just hit a route that doesn&#39;t exist... the sadness.</div>
    </div>
  </Layout>
);

export default NotFoundPage;
