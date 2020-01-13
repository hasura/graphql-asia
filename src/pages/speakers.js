import React from "react"
// import { Link } from "gatsby"
import { Router } from "@reach/router"

import Layout from "../components/layout"
import Contact from '../components/Contact'
import SEO from "../components/seo"
import '../components/styles.scss'
import DetailsTopBanner from '../components/DetailsTopBanner'
// import TownScript from '../components/TownScript'
const IndexPage = () => (
  <Layout>
    <SEO title="Speakers Details | GraphQL Asia 2020" />
    <Router>
      <DetailsTopBanner path="/speakers/:speakerUrl" />
    </Router>
    <Contact/>
  </Layout>
)

export default IndexPage
