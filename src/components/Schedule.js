import React from "react"
import { Link } from "gatsby"
import './styles.scss'
const scheduleIcon = require('../images/schedule.svg');
const workshop = require('../images/workshop.svg');
const talk = require('../images/talk.svg');
// const breaks = require('../images/breaks.svg');
const hasuraDumbledore = require('../images/hasura-dumbledore.png');
const icons = require('../images/icons.svg');
const Schedule = () => (
  <div id="schedule" className={'scheduleWrapper sectionWrapper watermarkWrapper positionBottom'}>
    <div className={'container noPadd'}>
      <div className={'sectionHeader'}>
        SCHEDULE
      </div>
      <div className={'pinkSeperateLine'}></div>
      <div className={'pageDescription wd60'}>
        We will have 3 full days packed with <span className={'fontBold'}>workshops, lightning talks, panel discussions</span> and in depth technical talks about all things GraphQL, with a special focus on <span className={'fontBold'}>cloud-native GraphQL</span>.
      </div>
      <div className={'scheduleDetailsWrapper'}>
        <div className={'col-md-6 col-sm-6 col-xs-12 noPadd borderRight'}>
          <div className={'scheduleList'}>
            <div className={'listImg'}>
              <img src={workshop} alt={'Workshop'}/>
            </div>
            <div className={'pageDescription'}>
              1 Full day of <span className="fontBold">workshops</span>
            </div>
            <div className={'pageDescriptionPink'}>
              20 FEB, 2020
            </div>
          </div>
        </div>
        <div className={'col-md-6 col-sm-6 col-xs-12 noPadd'}>
          <div className={'scheduleList'}>
            <div className={'listImg'}>
              <img src={talk} alt={'Talk'}/>
            </div>
            <div className={'pageDescription'}>
              2 Full days of <span className="fontBold">talks</span>
            </div>
            <div className={'pageDescriptionPink'}>
              21-22 FEB, 2020
            </div>
          </div>
        </div>
      </div>
      <div className={'buttonWrapper'}>
        <Link to="/tickets"><button className={'blueBtn'}>BUY TICKETS</button></Link>
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
          </div>
        </div>
      </div>
    </div>
    <div className={'watermarkImgTop hidden-xs'}>
      <img src={scheduleIcon} alt={'Schedule'} />
    </div>
  </div>
)

export default Schedule
