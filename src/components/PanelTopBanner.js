import React from "react"
import { Link } from "gatsby"
import './styles.scss'
import Layout from './layout'
import Contact from './Contact'
// const graphqlAsia = require('../images/graphql_Asia2020_heading.svg');
// const megaphone = require('../images/megaphone.svg');
import { panelState } from './AllState.js';

const arrowPink = require('../images/arrow-pink.svg');
const time = require('../images/time.svg');
const twitter = require('../images/twitter-pink.svg');
const github = require('../images/github-pink.svg');
const linkedIn = require('../images/linkedin-pink.svg');

const WorkshopTopBanner = (props) => {
  const panelUrl = props.pageContext.slug;
  const currentPanel = panelState[panelUrl];
  if(!currentPanel) {
    window.location.href = "/404";
  }
  return (
    <Layout>
      <div className='detailsTopBannerWrapper detailsBgImage'>
        <div className={'container noPadd'}>
          <div className='panelDetailsWrapper'>
            <div className='col-md-4 col-sm-4 col-xs-12 noPadd'>
              <div className='title titleTopPanel'>
                PANEL DISCUSSION
              </div>
            </div>
            <div className='col-md-8 col-sm-8 col-xs-12 noPadd'>
              <div className='profileWrapper'>
                <div className='profileName'>
                  {currentPanel.title}
                </div>
                <div className='socialWrapper'>
                  <div className='workshopIcon'>
                    <img src={time} alt='Time icon'/><span>{currentPanel.time}</span>
                  </div>
                  <div className='workshopIcon'>
                    <img src={currentPanel.levelImg} alt={currentPanel.level}/><span>{currentPanel.level}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='sectionWrapperSmall'>
        <div className={'container noPadd'}>
          <div className={'clearBoth'}>
          {
            (currentPanel.subTitle) ? (
            <div className={'clearBoth aboutSpeakerWrapper'}>
              <div className={'col-md-offset-4 col-sm-offset-4'}>
                <div className="speakersTitle">
                  {currentPanel.subTitle}
                </div>
              </div>
            </div>
          ) : null
          }
          {
            (currentPanel.panelDescription) ? (
              <div className='aboutSpeakerWrapper'>
                <div className='col-md-4 col-sm-4 col-xs-12 noPadd'>
                  <div className='title titleTop'>
                    DESCRIPTION
                  </div>
                </div>
                <div className='col-md-8 col-sm-8 col-xs-12 noPadd'>
                  <div className='pageDescription'>
                    {currentPanel.panelDescription}
                  </div>
                </div>
              </div>
            ) : null
          }
          {
            (currentPanel.panelMembers) ? (
              <div className='aboutSpeakerWrapper'>
                <div className='col-md-4 col-sm-4 col-xs-12 noPadd'>
                  <div className='title titleTop'>
                    PANEL MEMBERS
                  </div>
                </div>
                <div className='col-md-8 col-sm-8 col-xs-12 noPadd'>
                  {
                    currentPanel.panelMembers.map((memberDetails, index) => {
                      return (
                        <div key={index} className='speakersProfile'>
                          <div className='speakerImg'>
                            <img src={memberDetails.img} alt={memberDetails.name}/>
                          </div>
                          <div className='profile'>
                            <div className='name'>
                              {memberDetails.name}
                            </div>
                            <div className='designation'>
                              {memberDetails.designation}
                            </div>
                            <div className='organization'>
                              {memberDetails.org}
                            </div>
                            <div className='socialWrapper'>
                              {
                                (memberDetails.githubLink) ? (
                                  <div className='socialIcon'>
                                    <a href={memberDetails.githubLink} target="_blank" rel="noopener noreferrer"><img src={github} alt={'Github'} /></a>
                                  </div>
                                ) : null
                              }
                              {
                                (memberDetails.twitterLink) ? (
                                  <div className='socialIcon'>
                                    <a href={memberDetails.twitterLink} target="_blank" rel="noopener noreferrer"><img src={twitter} alt={'Twitter'} /></a>
                                  </div>
                                ) : null
                              }
                              {
                                (memberDetails.linkedInLink) ? (
                                  <div className='socialIcon'>
                                    <a href={memberDetails.linkedInLink} target="_blank" rel="noopener noreferrer"><img src={linkedIn} alt={'LinkedIn'} /></a>
                                  </div>
                                ) : null
                              }
                            </div>
                          </div>
                        </div>
                      )
                    })
                  }
                </div>
              </div>
            ) : null
          }
          <div className='aboutSpeakerWrapper'>
            <div className='col-md-4 col-sm-4 col-xs-12 noPadd'>
              <div className='title titleTop'>
                MODERATOR
              </div>
            </div>
            <div className='col-md-8 col-sm-8 col-xs-12 noPadd'>
              <div className='speakersProfile'>
                <div className='speakerImg'>
                  <img src={currentPanel.moderatorImg} alt={currentPanel.moderatorName}/>
                </div>
                <div className='profile'>
                  <div className='name'>
                    {currentPanel.moderatorName}
                  </div>
                  <div className='designation'>
                    {currentPanel.moderatorDesignation}
                  </div>
                  <div className='organization'>
                    {currentPanel.moderatorOrg}
                  </div>
                  <div className='socialWrapper'>
                    {
                      (currentPanel.moderatorGithubLink) ? (
                        <div className='socialIcon'>
                          <a href={currentPanel.moderatorGithubLink} target="_blank" rel="noopener noreferrer"><img src={github} alt={'Github'} /></a>
                        </div>
                      ) : null
                    }
                    {
                      (currentPanel.moderatorTwitterLink) ? (
                        <div className='socialIcon'>
                          <a href={currentPanel.moderatorTwitterLink} target="_blank" rel="noopener noreferrer"><img src={twitter} alt={'Twitter'} /></a>
                        </div>
                      ) : null
                    }
                    {
                      (currentPanel.moderatorLinkedInLink) ? (
                        <div className='socialIcon'>
                          <a href={currentPanel.moderatorLinkedInLink} target="_blank" rel="noopener noreferrer"><img src={linkedIn} alt={'LinkedIn'} /></a>
                        </div>
                      ) : null
                    }
                  </div>
                </div>
              </div>
            </div>
          </div>
          </div>
          {
            (currentPanel.bios) ? (
                currentPanel.bios.map((bios, key) => {
                  return (
                    <div key={key} className='aboutSpeakerWrapper'>
                      <div className='col-md-4 col-sm-4 col-xs-12 noPadd'>
                        <div className='title titleTop'>
                          ABOUT {bios.name}
                        </div>
                      </div>
                      <div className='col-md-8 col-sm-8 col-xs-12 noPadd'>
                        <div className='pageDescription'>
                          {bios.description}
                        </div>
                      </div>
                    </div>
                  )
                })
           ) : null
          }
          <div className={'clearBoth aboutSpeakerWrapper'}>
            <div className={'col-md-offset-4 col-sm-offset-4'}>
              <div className='pinkLink '>
                <Link to={'/schedule?day='+currentPanel.day}>CHECK OUT THE SCHEDULE<img src={arrowPink} alt={'Arrow'} /></Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Contact />
    </Layout>
  )
};

export default WorkshopTopBanner
