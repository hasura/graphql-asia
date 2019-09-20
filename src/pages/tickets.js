import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"


const IndexPage = () => (
  <Layout>
    <SEO title="Tickets" />
      <iframe title="tickets" src="https://www.townscript.com/widget/graphql-asia--2020" frameBorder="0" height="770" width="100%"></iframe>
      <button onClick='popup("graphql-asia--2020");' className="tsbutton">Register Now</button>
  </Layout>
)

export default IndexPage
