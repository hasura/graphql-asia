import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
import Contact from '../components/Contact'
import SEO from "../components/seo"
import '../components/styles.scss'
import ScheduleTopBanner from '../components/ScheduleTopBanner'
// import TownScript from '../components/TownScript'
const IndexPage = () => (
  <Layout>
    <SEO title="Schedule Details | GraphQL Asia 2020" />
      <ScheduleTopBanner/>
    <Contact/>
  </Layout>
)

export default IndexPage
