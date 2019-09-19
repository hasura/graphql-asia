import React from 'react'
import DigitalOceanLogo from "../assets/images/DO_Logo_horizontal_blue.svg"
import GithubLogo from "../assets/images/GitHub_Logo.png"
import TokopediaLogo from "../assets/images/tokopedia.png"
import AWSAmplifyLogo from "../assets/images/aws-amplify-logo-large.png"
import AtlassianLogo from "../assets/images/atlassian.png"
const Sponsors = (props) => (
    <div>
        <h3>
          Silver
        </h3>
        <ul className="actions">
            <li>
                <a style={{
                    border:'none'
                }} href="https://www.digitalocean.com/">
                <img style={{
                    // background: 'white',
                    // height: '250px',
                    width: '275px',
                    objectFit: 'contain',
                    // padding: '.5em'
                }} src={DigitalOceanLogo} alt="Digital Ocean" />
                </a>
            </li>
            <li>
                <a style={{
                    border:'none'
                }} href="https://aws.amazon.com/amplify/">
                <img style={{
                    // background: 'white',
                    height: '65px',
                    // width: '275px',
                    objectFit: 'contain',
                    // padding: '.5em'
                }} src={AWSAmplifyLogo} alt="AWS Amplify" />
                </a>
            </li>            
        </ul>
        <h3>
          Bronze
        </h3>
        <ul className="actions">
            <li>
                <a style={{
                    border:'none'
                }} href="https://github.com/">
                <img style={{
                    // background: 'white',
                    // height: '100px',
                    width: '110px',
                    objectFit: 'contain',
                    // padding: '.5em'
                }} src={GithubLogo} alt="Github" />
                </a>
            </li>
            <li>
                <a style={{
                    border:'none'
                }} href="https://tokopedia.com/">
                <img style={{
                    // background: 'white',
                    // height: '100px',
                    width: '170px',
                    objectFit: 'contain',
                    // padding: '.5em'
                }} src={TokopediaLogo} alt="Tokopedia" />
                </a>
            </li>
            
            <li>
                <a style={{
                    border:'none'
                }} href="https://www.atlassian.com/">
                <img style={{
                    background: 'white',
                    height: '47px',                    
                    objectFit: 'contain',
                    padding: '.5em'
                }} src={AtlassianLogo} alt="Atlassian" />
                </a>
            </li>
           
        </ul>
    </div>
)

export default Sponsors
