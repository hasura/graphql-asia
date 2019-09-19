import React from 'react'
import BrikLogo from "../assets/images/white-brikl-logo.png"
import HasuraLogo from "../assets/images/white-logo.svg"
import { Link } from 'gatsby'
const Footer = (props) => (
    <footer id="footer">
        <div className="inner wide flex">
            <div className="flex2">
                <ul className="icons">
                    <li><a rel="noopener noreferrer" href="https://twitter.com/graphqlasia" className="icon alt fa-twitter"><span className="label">Twitter</span></a></li>
                    <li><a rel="noopener noreferrer" href="https://www.facebook.com/graphqlasia" className="icon alt fa-facebook"><span className="label">Facebook</span></a></li>
                    <li><a rel="noopener noreferrer" href="https://www.linkedin.com/company/graphql-asia/" className="icon alt fa-linkedin"><span className="label">LinkedIn</span></a></li>
                </ul>
                <ul className="copyright">
                    <li>&copy; GraphQL Asia</li><li>Gatsby Theme by: <a href="https://html5up.net">HTML5 UP</a></li>
                    <li>
                        <Link to="/code-of-conduct">Code of Conduct</Link>
                    </li>
                </ul>
            </div>
            <div className="flex2">
                <p>GraphQL Asia is brought to you by Hasura and BrikL.</p>
                <ul className="actions">
                    <li>
                        <a style={{
                            border:'none'
                        }} href="https://hasura.io/" rel="noopener noreferrer">
                        <img style={{
                            // background: 'white',
                            // height: '150px',
                            width: '150px',
                            objectFit: 'contain',
                            // padding: '.5em'
                        }} src={HasuraLogo} alt="Hasura" />
                        </a>
                    </li>
                    <li>
                        <a style={{
                            border:'none'
                        }} href="https://www.brikl.io" rel="noopener noreferrer">
                        <img style={{
                            // background: 'white',
                            // height: '150px',
                            width: '150px',
                            objectFit: 'contain',
                            // padding: '.5em'
                        }} src={BrikLogo} alt="BrikL" />
                        {/* <Img fixed={this.props.data.file.childImageSharp.fixed} /> */}
                        </a>
                    </li>
                </ul>

            </div>
        </div>
    </footer>
)

export default Footer
