import React, {Fragment} from "react";
import { Link } from 'gatsby';
import '../Common/Styles.scss';
import { SEO } from '../seo';
import Layout from '../Layout';
import IndivTalksPage from './IndivTalksPage';
import { talkDetailsPage } from '../Homepage/AllState.js'

const TalkDetailsPage = props => {
  const detailsPageUrl = props.pageContext.slug;
  const currentDetailsPageFilter = talkDetailsPage.filter((b) => b.url === detailsPageUrl)
  const currentDetailsPage = currentDetailsPageFilter[0];
  // if (!currentDetailsPage) {
  //   if (typeof window !== undefined) {
  //     window.location.href = "/404";
  //   }
  // }
  return (
    <Layout location={props.location}>
      <SEO
        title={currentDetailsPage.metaTags.title}
        description={currentDetailsPage.metaTags.description}
        metaImg={currentDetailsPage.metaTags.metaImg}
        canonicalLink={currentDetailsPage.metaTags.canonicalUrl}
      />
      <IndivTalksPage currentDetailsPage={currentDetailsPage}/>
    </Layout>
  );
};
export default TalkDetailsPage;
