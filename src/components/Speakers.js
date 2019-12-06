import React from "react"
// import { Link } from "gatsby"
import './styles.scss'
const speaker = require('../images/speaker.svg');
const robertZhu = require('../images/Robert-Zhu.png');
const samJulien = require('../images/Sam-Julien.png');
const vishakhaSingh = require('../images/Vishakha-Singh.png');
const radoslavStankov = require('../images/Radoslav-Stankov.png');
const gagoFrigerio = require('../images/Gago-Frigerio.png');
const shipraGupta = require('../images/Shipra-Gupta.png');
const sarjeelYusuf = require('../images/Sarjeel-Yusuf.png');
const lachlanYoung = require('../images/Lachlan-Young.png');
const carlosRufo = require('../images/Carlos-Rufo.png');
const vilvaAthiban = require('../images/Vilva-Athiban.png');
const kiranKumar = require('../images/Kiran-Kumar.png');
const ivanGoncharov = require('../images/Ivan-Goncharov.png');
const twitter = require('../images/twitter-pink.svg');
const github = require('../images/github-pink.svg');

class Speakers extends React.Component {
  constructor() {
    super();
    this.state = {
      speakersList: [
        {
          imgSrc: robertZhu,
          name: 'Robert Zhu',
          designation: 'PRINCIPAL TECHNICAL EVANGELIST',
          organization: 'AWS',
          twitterLink: 'https://twitter.com/rbzhu/',
          githubLink: 'https://github.com/robzhu',
        },
        {
          imgSrc: samJulien,
          name: 'Sam Julien',
          designation: 'DEVELOPER ADVOCATE ENGINEER',
          organization: 'AUTH0',
          twitterLink: 'https://twitter.com/samjulien',
          githubLink: 'https://github.com/samjulien',
        },
        {
          imgSrc: vishakhaSingh,
          name: 'Vishakha Singh',
          designation: 'SOFTWARE ENGINEER',
          organization: 'PAYPAL',
          twitterLink: 'https://twitter.com/visheei',
        },
        {
          imgSrc: radoslavStankov,
          name: 'Radoslav Stankov',
          designation: 'HEAD OF ENGINEERING',
          organization: 'PRODUCTHUNT',
          twitterLink: 'https://twitter.com/rstankov',
          githubLink: 'https://gist.github.com/RStankov',
        },
        {
          imgSrc: gagoFrigerio,
          name: 'Gago Frigerio',
          designation: 'STAFF ENGINEER',
          organization: 'COURSERA',
          twitterLink: 'https://twitter.com/gagoar',
          githubLink: 'https://github.com/gagoar',
        },
        {
          imgSrc: shipraGupta,
          name: 'Shipra Gupta',
          designation: 'COMPUTER SCIENTIST',
          organization: 'ADOBE',
          githubLink: 'https://github.com/shipraguptaa',
        },
        {
          imgSrc: sarjeelYusuf,
          name: 'Sarjeel Yusuf',
          designation: 'PRODUCT MANAGER',
          organization: 'ATLASSIAN',
          twitterLink: 'https://twitter.com/SarjeelY',
          githubLink: 'https://github.com/AmateurIndian',
        },
        {
          imgSrc: lachlanYoung,
          name: 'Lachlan Young',
          designation: 'FULL-STACK DEVELOPER',
          organization: 'TANDA',
          twitterLink: 'https://twitter.com/builtbyproxy',
          githubLink: 'https://github.com/builtbyproxy',
        },
        {
          imgSrc: carlosRufo,
          name: 'Carlos Rufo',
          designation: 'INSTRUCTOR',
          organization: 'VUE SCHOOL',
          twitterLink: 'https://twitter.com/swcarlosrj',
          githubLink: 'https://github.com/swcarlosrj',
        },
        {
          imgSrc: vilvaAthiban,
          name: 'Vilva Athiban P B',
          designation: 'JAVASCRIPT DEVELOPER',
          organization: 'OMIO',
          twitterLink: 'https://twitter.com/vilvaathibanpb',
          githubLink: 'https://github.com/vilvaathibanpb',
        },
        {
          imgSrc: kiranKumar,
          name: 'Kiran Kumar Abburi',
          designation: 'FOUNDER',
          organization: 'NEOSTACK',
          twitterLink: 'https://twitter.com/kiran_abburi',
        },
        {
          imgSrc: ivanGoncharov,
          name: 'Ivan Goncharov',
          designation: 'GRAPHQL CONSULTANT',
          organization: 'APIS.GURU',
          twitterLink: 'https://twitter.com/E1Goncharov',
          githubLink: 'https://github.com/IvanGoncharov/',
        },
      ]
    }
  }

  render() {
    const speakersContainer = this.state.speakersList.map((list, index) => {
      return (
        <div className='col-md-3 col-sm-6 col-xs-12 flexContainer'>
          <div className='speakersList flexList'>
            <div className='speakerImg'>
              <img src={list.imgSrc} alt={list.name}/>
            </div>
            <div className='name'>
              {list.name}
            </div>
            <div className='designation flexAlign'>
              {list.designation}
            </div>
            <div className='organization'>
              {list.organization}
            </div>
            <div className='socialWrapper'>
              {
                (list.githubLink) ? (
                  <div className='socialIcon'>
                    <a href={list.githubLink} target="_blank" rel="noopener noreferrer"><img src={github} alt={'github'} /></a>
                  </div>
                ) : null
              }
              {
                (list.twitterLink) ? (
                  <div className='socialIcon'>
                    <a href={list.twitterLink} target="_blank" rel="noopener noreferrer"><img src={twitter} alt={'Twitter'} /></a>
                  </div>
                ) : null
              }
            </div>
          </div>
        </div>
      )
    })
    return (
      <div id="speakers" className={'speakersWrapper lightGrayBgColor sectionWrapper watermarkWrapper'}>
        <div className={'container noPadd'}>
            <div className={'sectionHeader'}>
              Speakers
            </div>
            <div className={'pinkSeperateLine'}></div>
            <div className={'speakersListWrapper flexBoxWrapper'}>
              {speakersContainer}
            </div>
            <div className='pageDescription'>
              More speakers to be announced soon!
            </div>
        </div>
        <div className={'watermarkImg hidden-xs'}>
          <img src={speaker} alt={'speaker water mark'}/>
        </div>
      </div>
    )};
}
export default Speakers
