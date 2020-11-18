import React from "react"
// import { Link } from "gatsby"
import './styles.scss'
const proposal = require('../images/proposal.svg');
const Proposals = () => (
  <div id="speakers" className={'proposalsWrapper gradientBgColor sectionWrapper watermarkWrapper'}>
    <div className={'container noPadd'}>
        <div className={'sectionHeader'}>
          CALL FOR PROPOSALS
        </div>
        <div className={'pageDescription'}>
          We will curate the best talks from the community and bring them to you! If you’ve been working with GraphQL in any capacity, we’d love to hear from you. We encourage first time speakers to apply. Do write to us if you have any questions.
        </div>
        <div className={'buttonWrapper'}>
          <a href="https://www.papercall.io/graphql-asia" target="_blank" rel="noopener noreferrer"><button className={'transparentBtn'}>SUBMIT A TALK</button></a>
        </div>
    </div>
    <div className={'watermarkImgRight hidden-xs'}>
      <img src={proposal} alt={'proposal water mark'}/>
    </div>
  </div>
)

export default Proposals
