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
        Every year, we cater the best set of speakers and curate best talks from the community for you. If you want to apply for being one of the speakers, you can apply here
        </div>
        <div className={'buttonWrapper'}>
          <a href="https://www.papercall.io/graphql-asia" target="_blank" rel="noopener noreferrer"><button className={'transparentBtn'}>SUBMIT A TALK</button></a>
        </div>
    </div>
    <div className={'watermarkImg'}>
      <img src={proposal} alt={'proposal water mark'}/>
    </div>
  </div>
)

export default Proposals
