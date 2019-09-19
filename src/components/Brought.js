import React from "react"
// import { Link } from "gatsby"
import './styles.scss'
const hasuraLogo =require('../images/hasura-logo.svg');
const twenty = require('../images/twenty.svg');
const Brought = () => (
  <div id="ticket" className={'broughtWrapper sectionWrapper watermarkWrapper'}>
    <div className={'container noPadd'}>
      <div className={'sectionHeader'}>
        TICKETS
      </div>
      <div className={'pageDescription'}>
        You can get tickets for just the conference or the conference along with one of the dedicated workshops.
      </div>
      <div className={'buttonWrapper'}>
        <a href="https://www.townscript.com/e/graphql-asia--2020/booking" target={'_blank'}><button className={'transparentBtn'}>BUY TICKETS</button></a>
      </div>
      <div className={'pageDescription'}>
        We will also be offering diversity as well as student scholarships. If you’d like to apply, <a href="https://hasurahq.typeform.com/to/ukj62Q" target="_blank" rel="noopener noreferrer">click here</a>
      </div>
      <div className={'sectionSubHeader removePaddBottom'}>
        Brought to you by
      </div>
      <div className={'brand'}>
        <a href="https://hasura.io/" target="_blank" rel="noopener noreferrer"><img src={hasuraLogo} alt={'Hasura logo'} /></a>
      </div>
    </div>
    <div className={'watermarkImg hidden-xs'}>
      <img src={twenty} alt={'Twenty twenty'} />
    </div>
  </div>
)

export default Brought
