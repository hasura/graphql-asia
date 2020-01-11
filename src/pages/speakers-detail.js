import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
import Contact from '../components/Contact'
import SEO from "../components/seo"
import '../components/styles.scss'
import DetailsTopBanner from '../components/DetailsTopBanner'
// import TownScript from '../components/TownScript'
const IndexPage = () => (
  <Layout>
    <SEO title="Speakers Details | GraphQL Asia 2020" />
      <DetailsTopBanner/>
      <Contact/>
  </Layout>
)

export default IndexPage
