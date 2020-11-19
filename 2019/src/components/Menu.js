import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

const Menu = ({ props }) => (
  <div id="newmenu">
    <div className="inner">
      <ul className="links">
        {/* <li className="open" onClick={props.onToggleMenu}><span className="icon alt fa-hamburger"/></li> */}
        {/* <li className="desktop"><Link  to="/speakers">Speakers</Link></li> */}
        <li>
          <Link
            className={
              typeof window !== 'undefined' &&
              window &&
              window.location.pathname === '/agenda'
                ? 'active'
                : ''
            }
            to="/agenda"
          >
            Agenda
          </Link>
        </li>
        <li>
          <Link
            className={
              typeof window !== 'undefined' &&
              window &&
              window.location.pathname === '/venue'
                ? 'active'
                : ''
            }
            to="/venue"
          >
            Venue
          </Link>
        </li>
        {/* <li className="desktop"><Link className={ typeof window !== 'undefined' && window && window.location.pathname === '/tickets' ? 'active' : ''} to="/tickets">Tickets</Link></li> */}
        <li>
          <Link
            className={
              typeof window !== 'undefined' &&
              window &&
              window.location.pathname === '/workshops'
                ? 'active'
                : ''
            }
            to="/workshops"
          >
            Workshops
          </Link>
        </li>
        {/* <li><a target="_blank" rel="noopener noreferrer" href="https://www.townscript.com/e/graphql-asia-020103/booking">Tickets</a></li>                 */}
        <li>
          <Link
            className={
              typeof window !== 'undefined' &&
              window &&
              window.location.pathname === '/sponsor'
                ? 'active'
                : ''
            }
            to="/sponsor"
          >
            Sponsors
          </Link>
        </li>
        <li className="desktop">
          <Link
            className={
              typeof window !== 'undefined' &&
              window &&
              window.location.hash === '#contact-us'
                ? 'active'
                : ''
            }
            to="#contact-us"
          >
            Contact
          </Link>
        </li>
      </ul>
      <ul className="actions vertical">
        {/* <li><a href="#" className="button special fit">Get Started</a></li> */}
      </ul>
    </div>
    {/* <a className="close" onClick={props.onToggleMenu} href="javascript:;">Close</a> */}
  </div>
)

Menu.propTypes = {
  onToggleMenu: PropTypes.func,
}

export default Menu
