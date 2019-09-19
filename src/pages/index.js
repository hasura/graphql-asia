import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Overview from '../components/Overview'
import Proposals from '../components/Proposals'
import Schedule from '../components/Schedule'
import Sponsors from '../components/Sponsors'
import Brought from '../components/Brought'
// import Subscribe from '../components/Subscribe'
import Contact from '../components/Contact'
const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Overview />
    <Proposals />
    <Schedule />
    <Sponsors />
    <Brought />
    {/* <Subscribe /> */}
    <Contact />
  </Layout>
)

export default IndexPage
