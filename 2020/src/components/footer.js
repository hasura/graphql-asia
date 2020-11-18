import React from "react"
import './styles.scss'

const copy = require('../images/copyright.svg');
const twitterBrands = require('../images/twitter-brands.svg');
const facebookBrands = require('../images/facebook-brands.svg');
// const instagramBrands = require('../images/instagram-brands.svg');
const youtubeBrands = require('../images/youtube-brands.svg');

const Footer = () => {
  return (
    <footer className={'footerWrapper'}>
      <div className={'container noPadd'}>
        <div className={'footerContainer footerBorTop'}>
          <div className={'footerListWrapper'}>
            <div className={'copyRight'}>
              <img src={copy} alt={'Copy right icon'} />2020 Hasura. All rights reserved
            </div>
            <ul>
              <li className={'copyRight'}><a href="https://www.graphql-asia.org/code-of-conduct" target="_blank" rel="noopener noreferrer">Code of conduct</a></li>
              {/*
              <li className={'copyRight'}><a href="/">Refund policy</a></li>
              <li className={'copyRight'}><a href="/">Diversity</a></li>
              */}
              <li className={'copyRight fontBold'}><a href="https://learn.hasura.io/" target="_blank" rel="noopener noreferrer">New to GraphQL?</a></li>
            </ul>
          </div>
          <div className={'socialWrapper'}>
            <div className={'socialIcon'}>
              <a href="https://twitter.com/graphqlasia" target="_blank" rel="noopener noreferrer"><img src={twitterBrands} alt={'Twitter brands'} /></a>
            </div>
            <div className={'socialIcon'}>
              <a href="https://www.facebook.com/graphqlasia" target="_blank" rel="noopener noreferrer"><img src={facebookBrands} alt={'Facebook brands'} /></a>
            </div>
            {/*
            <div className={'socialIcon'}>
              <a href="/" target="_blank"><img src={instagramBrands} alt={'Instagram brands'} /></a>
            </div>
            */}
            <div className={'socialIcon'}>
              <a href="https://www.youtube.com/channel/UCXMN61PUm8_U-GYMIxffQkA" target="_blank" rel="noopener noreferrer"><img src={youtubeBrands} alt={'Youtube brands'} /></a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
