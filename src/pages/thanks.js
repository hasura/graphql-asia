import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import '../components/styles.scss'
import ThanksTopBanner from '../components/ThanksTopBanner'
// import TownScript from '../components/TownScript'
const smileEmoji = require('../images/Smiling-Emoji.png');
const IndexPage = () => (
  <Layout>
    <SEO title="Thanks | GraphQL Asia 2020" />
      <ThanksTopBanner/>
      <div className='thanksWrapper'>
        <div className={'container noPadd'}>
          <div className='thanksContainer'>
            <div className='sectionHeader'>
              Success!!<br/>
              You will receive your ticket via email.
            </div>
            <div className='thanksDescription'>
              We request you to not print the ticket.
            </div>
            <div className='graphQlHeader'>
              See you at the conference <img src={smileEmoji} alt={'Smile emoji'}/>
            </div>
          </div>
        </div>
      </div>
  </Layout>
)

export default IndexPage
