import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import '../components/styles.scss'
import DetailsTopBanner from '../components/DetailsTopBanner'
// import TownScript from '../components/TownScript'
const IndexPage = () => (
  <Layout>
    <SEO title="Speakers Details | GraphQL Asia 2020" />
      <DetailsTopBanner/>
  </Layout>
)

export default IndexPage
