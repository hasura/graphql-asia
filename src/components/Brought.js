import React from "react"
// import { Link } from "gatsby"
import './styles.scss'
const hasuraLogo =require('../images/hasura-logo.svg');
const twenty = require('../images/twenty.svg');
const Brought = () => (
  <div className={'broughtWrapper sectionWrapper watermarkWrapper'}>
    <div className={'container noPadd'}>
      <div className={'sectionHeader'}>
        TICKETS
      </div>
      <div className={'pageDescription'}>
        You can get tickets for just the conference or the conference along with one of the dedicated workshops.
      </div>
      <div className={'buttonWrapper'}>
        <button className={'transparentBtn'}>BUY TICKETS <span className={'fontNormal'}>/ $200</span></button>
      </div>
      <div className={'pageDescription'}>
        We will also be offering diversity as well as student scholarships. If you’d like to apply, <a>click here</a>
      </div>
      <div className={'sectionHeader removePaddBottom'}>
        BROUGHT TO YOU BY
      </div>
      <div className={'brand'}>
        <img src={hasuraLogo} alt={'Hasura logo'} />
      </div>
    </div>
    <div className={'watermarkImg'}>
      <img src={twenty} alt={'Twenty twenty'} />
    </div>
  </div>
)

export default Brought
