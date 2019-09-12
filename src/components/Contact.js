import React from "react"
// import { Link } from "gatsby"
import './styles.scss'
const arrowPink = require('../images/arrow-pink.svg');
const mail = require('../images/mail.svg');
const twitter = require('../images/twitter.svg');
const location = require('../images/location.svg');

const Contact = () => (
  <div id="speakers" className={'contactWrapper blueGradientBgColor sectionWrapper '}>
    <div className={'container noPadd'}>
        <div className={'sectionHeader'}>
          CONTACT US
        </div>
        <div className={'fieldWrapper'}>
          <div className={'col-md-6 col-sm-6 col-xs-12 noPadd contactBorRight'}>
            <div className={'field'}>
              <label className={'fieldLabel pageDescription'}>Name</label>
              <input type="text" />
            </div>
            <div className={'field'}>
              <label className={'fieldLabel pageDescription'}>E mail</label>
              <input type="email" />
            </div>
            <div className={'field'}>
              <label className={'fieldLabel pageDescription'}>Message</label>
              <textarea type="text" rows="6" />
            </div>
            <div className={'pinkLink'}>
              <a href="https://www.graphql-asia.org/" target="_blank" rel="noopener noreferrer">SEND MESSAGE<img src={arrowPink} alt={'Arrow'} /></a>
            </div>
          </div>
          <div className={'col-md-6 col-sm-6 col-xs-12 noPadd'}>
            <div className={'contactDetails contactBorBottom'}>
              <div className={'contactImg'}>
                <img src={mail} alt={'Mail'} />
              </div>
              <div className={'contactName'}>
                <a href="mailto:anubha@hasura.io">anubha@hasura.io</a>
              </div>
            </div>
            <div className={'contactDetails contactBorBottom'}>
              <div className={'contactImg'}>
                <img src={twitter} alt={'Twitter'} />
              </div>
              <div className={'contactName'}>
                <a href="https://twitter.com/graphqlasia" target="_blank" rel="noopener noreferrer">@graphqlasia</a>
              </div>
            </div>
            <div className={'contactDetails'}>
              <div className={'contactImg'}>
                <img src={location} alt={'Location'} />
              </div>
              <div className={'contactName'}>
                Bengaluru, <span className={'fontNormal'}>Karnataka</span>
              </div>
            </div>
          </div>
        </div>
    </div>
  </div>
)

export default Contact
