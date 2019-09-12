import React from "react"
// import { Link } from "gatsby"
import './styles.scss'
const scheduleIcon = require('../images/schedule.svg');
const workshop = require('../images/workshop.svg');
const talk = require('../images/talk.svg');
const breaks = require('../images/breaks.svg');
const hasuraDumbledore = require('../images/hasura-dumbledore.png');
const icons = require('../images/icons.svg');
const Schedule = () => (
  <div id="schedule" className={'scheduleWrapper sectionWrapper watermarkWrapper positionBottom'}>
    <div className={'container noPadd'}>
      <div className={'sectionHeader'}>
        SCHEDULE
      </div>
      <div className={'pageDescription wd60'}>
        We will have 3 full days packed with <span className={'fontBold'}>workshops, lightning talks, product demos, panel discussions</span> and in depth technical talks about all aspects of GraphQL, with a special section on <span className={'fontBold'}>cloud-native GraphQL</span> usage!
      </div>
      <div className={'scheduleDetailsWrapper'}>
        <div className={'col-md-4 col-sm-4 col-xs-12 noPadd borderRight'}>
          <div className={'scheduleList'}>
            <div className={'listImg'}>
              <img src={workshop} alt={'Workshop'}/>
            </div>
            <div className={'pageDescription'}>
              1 Full day of
            </div>
            <div className={'pageDescription fontBold letterSpacing'}>
              WORKSHOPS
            </div>
          </div>
        </div>
        <div className={'col-md-4 col-sm-4 col-xs-12 noPadd borderRight'}>
          <div className={'scheduleList'}>
            <div className={'listImg'}>
              <img src={talk} alt={'Talk'}/>
            </div>
            <div className={'pageDescription'}>
              2 Full days of
            </div>
            <div className={'pageDescription fontBold letterSpacing'}>
              TALKS
            </div>
          </div>
        </div>
        <div className={'col-md-4 col-sm-4 col-xs-12 noPadd'}>
          <div className={'scheduleList'}>
            <div className={'listImg'}>
              <img src={breaks} alt={'Breaks'}/>
            </div>
            <div className={'pageDescription'}>
              Breaks for
            </div>
            <div className={'pageDescription fontBold letterSpacing'}>
              NETWORKING
            </div>
          </div>
        </div>
      </div>
      <div className={'buttonWrapper'}>
        <button className={'blueBtn'}>REGISTER</button>
      </div>
      <div className={'sectionPosition'}>
        <div className={'purpleGradientBgColor col-md-12 col-sm-12 col-xs-12 noPadd wd90'}>
          <div className={'graphqlWrapper wd100'}>
            <div className={'col-md-6 col-sm-7 col-xs-12 noPadd'}>
              <div className={'graphQlHeader'}>
                New to GraphQL?
              </div>
              <div className={'graphQlDescription'}>
                Get ready for the conference by getting up to speed with GraphQL.<br/>
                <span className={'fontBold'}>Learn GraphQL in 2 hours</span> by integrating GraphQL APIs to an app in your favourite frontend framework.
              </div>
              <div className={'buttonWrapper'}>
                <a href="https://learn.hasura.io/" target="_blank" rel="noopener noreferrer"><button className={'transparentBtn'}>GET STARTED</button></a>
              </div>
            </div>
            <div className={'iconsImg'}>
              <img src={icons} alt={'Icons'}/>
            </div>
            <div className={'graphQlImg'}>
              <img src={hasuraDumbledore} alt={'Hasura dumbledore'}/>
            </div>
            <div className={'col-md-6 col-sm-6 col-xs-12 noPadd'}>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className={'watermarkImgTop'}>
      <img src={scheduleIcon} alt={'Schedule'} />
    </div>
  </div>
)

export default Schedule
