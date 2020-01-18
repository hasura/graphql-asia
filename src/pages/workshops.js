import React from "react"
// import { Link } from "gatsby"
import { Router } from "@reach/router"

import Layout from "../components/layout"
import Contact from '../components/Contact'
import SEO from "../components/seo"
import '../components/styles.scss'
import WorkshopTopBanner from '../components/WorkshopTopBanner'
// import TownScript from '../components/TownScript'
const IndexPage = () => (
  <Layout>
    <SEO title="Workshop Details | GraphQL Asia 2020" />
    <Router>
      <WorkshopTopBanner path="/workshops/:workshopUrl" />
    </Router>
    <Contact/>
  </Layout>
)

export default IndexPage
