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
        <button className={'transparentBtn'}>BUY TICKETS</button>
      </div>
      <div className={'pageDescription'}>
        We will also be offering diversity as well as student scholarships. If you’d like to apply, <a href="/">click here</a>
      </div>
      <div className={'sectionHeader removePaddBottom'}>
        BROUGHT TO YOU BY
      </div>
      <div className={'brand'}>
        <a href="https://hasura.io/" target="_blank" rel="noopener noreferrer"><img src={hasuraLogo} alt={'Hasura logo'} /></a>
      </div>
    </div>
    <div className={'watermarkImg'}>
      <img src={twenty} alt={'Twenty twenty'} />
    </div>
  </div>
)

export default Brought
