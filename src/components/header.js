// import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import './styles.scss'
const Header = ({ siteTitle }) => (
  <header>
    <div className="headerWrapper">
      hi
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
