import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import '../components/styles.scss'
import TicketsTopBanner from '../components/TicketsTopBanner'
const IndexPage = () => (
  <Layout>
    <SEO title="Tickets | GraphQL Asia 2020" />
      <TicketsTopBanner/>
      <div className={'ticketsWrapper'}>
        <div className={'container noPadd'}>
          <iframe title="tickets" src="https://www.townscript.com/widget/graphql-asia--2020" frameBorder="0" height="800" width="100%"></iframe>
        </div>
      </div>
  </Layout>
)

export default IndexPage
