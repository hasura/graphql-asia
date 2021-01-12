import React, {Fragment} from "react";
import { Link } from 'gatsby';
import '../Common/Styles.scss';
import { SEO } from '../seo';
import Layout from '../Layout';
import IndivPage from './IndivPage';
import { detailsPage } from '../Homepage/AllState.js'

const DetailsPage = props => {
  const detailsPageUrl = props.pageContext.slug;
  const currentDetailsPageFilter = detailsPage.filter((b) => b.url === detailsPageUrl)
  const currentDetailsPage = currentDetailsPageFilter[0];
  // if (!currentDetailsPage) {
  //   if (typeof window !== undefined) {
  //     window.location.href = "/404";
  //   }
  // }
  return (
    <Layout>
      <SEO
        title={currentDetailsPage.metaTags.title}
        description={currentDetailsPage.metaTags.description}
        metaImg={currentDetailsPage.metaTags.metaImg}
        canonicalLink={currentDetailsPage.metaTags.canonicalUrl}
      />
      <IndivPage currentDetailsPage={currentDetailsPage}/>
    </Layout>
  );
};
export default DetailsPage;
