import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
import Contact from '../components/Contact'
import SEO from "../components/seo"
import '../components/styles.scss'
import HealthTopBanner from '../components/HealthTopBanner'
// import TownScript from '../components/TownScript'
const IndexPage = (props) => {
  return (
    <Layout>
      <SEO title="Health | GraphQL Asia 2020" />
        <HealthTopBanner/>
      <Contact/>
    </Layout>
  )
}

export default IndexPage
