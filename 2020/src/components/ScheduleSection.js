import React from 'react';
import { Link } from 'gatsby';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { scheduleStateDayOne, scheduleStateDayTwo } from './AllState.js';
import './styles.scss';

class ScheduleSection extends React.Component {
  constructor() {
    super();
    this.state = { tabIndex: 0 };
    this.scrollToTabs = this.scrollToTabs.bind(this);
  }
  scrollToTabs(index) {
    this.setState({ tabIndex: index });
    const element = document.getElementById('tabsView');
    element.scrollIntoView({ behavior: 'smooth' });
  }
  componentDidMount() {
    const queryParams = new URLSearchParams(this.props.location.search);
    const queryParamDay = queryParams.get('day');
    this.setState({ tabIndex: parseInt(queryParamDay) - 1 || 0 });
  }
  render() {
    const tag = require('../images/tag.svg');
    const clock = require('../images/clock.svg');
    const scheduleListDayOne = Object.keys(scheduleStateDayOne).map((url, index) => {
      return (
        <div key={url + index}>
          {scheduleStateDayOne[url].type && scheduleStateDayOne[url].type === 'break' ? (
            <div className="scheduleListBreak">
              <div className="scheduleBorderLeft"></div>
              <div className="scheduleProfile">
                <img
                  className={
                    (scheduleStateDayOne[url].maxHeight
                      ? 'borderRadiusRemove scheduleProfileImg'
                      : 'borderRadiusRemove') +
                    ' ' +
                    (scheduleStateDayOne[url].bosrderRadius ? 'borderRadius' : '')
                  }
                  src={scheduleStateDayOne[url].img}
                  alt={scheduleStateDayOne[url].name}
                />
              </div>
              <div className="scheduledetails">
                <div className="scheduleTitle">{scheduleStateDayOne[url].title}</div>
                <div className="talkWrapper">
                  <div className="talk">
                    <img src={clock} alt="clock" /> {scheduleStateDayOne[url].duration}
                  </div>
                </div>
              </div>
              <div className="timeWrapper">{scheduleStateDayOne[url].scheduleTime}</div>
            </div>
          ) : (
            <Link
              to={
                scheduleStateDayOne[url].panel && scheduleStateDayOne[url].panel === 'panel'
                  ? '/panel/' + url
                  : '/speakers/' + url
              }
            >
              <div
                key={scheduleStateDayOne[url].name}
                className="scheduleListWrapper scheduleListBgGray"
              >
                <div className="scheduleProfile">
                  <img src={scheduleStateDayOne[url].img} alt={scheduleStateDayOne[url].name} />
                </div>
                <div className="scheduledetails">
                  <div className="scheduleTitle">{scheduleStateDayOne[url].title}</div>
                  <div className="talkWrapper">
                    <div className="talk name">
                      <img src={scheduleStateDayOne[url].tagImg} alt="Tag icon" />{' '}
                      {scheduleStateDayOne[url].name}
                    </div>
                    <div className="talk">
                      <img src={clock} alt="clock" /> {scheduleStateDayOne[url].duration}
                    </div>
                    {scheduleStateDayOne[url].tag ? (
                      <div className="talk">
                        <img src={tag} alt="tag" /> {scheduleStateDayOne[url].tag}
                      </div>
                    ) : null}
                  </div>
                </div>
                <div className="timeWrapper">{scheduleStateDayOne[url].scheduleTime}</div>
              </div>
            </Link>
          )}
        </div>
      );
    });
    const scheduleListDayTwo = Object.keys(scheduleStateDayTwo).map((url, index) => {
      return (
        <div key={url + index}>
          {scheduleStateDayTwo[url].type && scheduleStateDayTwo[url].type === 'break' ? (
            <div className="scheduleListBreak">
              <div className="scheduleBorderLeft"></div>
              <div className="scheduleProfile">
                <img
                  className={
                    (scheduleStateDayTwo[url].maxHeight
                      ? 'borderRadiusRemove scheduleProfileImg'
                      : 'borderRadiusRemove') +
                    ' ' +
                    (scheduleStateDayTwo[url].bosrderRadius ? 'borderRadius' : '')
                  }
                  src={scheduleStateDayTwo[url].img}
                  alt={scheduleStateDayTwo[url].name}
                />
              </div>
              <div className="scheduledetails">
                <div className="scheduleTitle">{scheduleStateDayTwo[url].title}</div>
                <div className="talkWrapper">
                  <div className="talk">
                    <img src={clock} alt="clock" /> {scheduleStateDayTwo[url].duration}
                  </div>
                </div>
              </div>
              <div className="timeWrapper">{scheduleStateDayTwo[url].scheduleTime}</div>
            </div>
          ) : (
            <Link
              to={
                scheduleStateDayTwo[url].panel && scheduleStateDayTwo[url].panel === 'panel'
                  ? '/panel/' + url
                  : '/speakers/' + url
              }
            >
              <div
                key={scheduleStateDayTwo[url].name}
                className="scheduleListWrapper scheduleListBgGray"
              >
                <div className="scheduleProfile">
                  <img src={scheduleStateDayTwo[url].img} alt={scheduleStateDayTwo[url].name} />
                </div>
                <div className="scheduledetails">
                  <div className="scheduleTitle">{scheduleStateDayTwo[url].title}</div>
                  <div className="talkWrapper">
                    <div className="talk name">
                      <img src={scheduleStateDayTwo[url].tagImg} alt="Tag icon" />{' '}
                      {scheduleStateDayTwo[url].name}
                    </div>
                    <div className="talk">
                      <img src={clock} alt="clock" /> {scheduleStateDayTwo[url].duration}
                    </div>
                    {scheduleStateDayTwo[url].tag ? (
                      <div className="talk">
                        <img src={tag} alt="tag" /> {scheduleStateDayTwo[url].tag}
                      </div>
                    ) : null}
                  </div>
                </div>
                <div className="timeWrapper">{scheduleStateDayTwo[url].scheduleTime}</div>
              </div>
            </Link>
          )}
        </div>
      );
    });
    return (
      <div className="scheduleTabWrapper">
        <Tabs
          id="tabsView"
          className="commonTabWrapper"
          selectedIndex={this.state.tabIndex}
          onSelect={(tabIndex) => this.setState({ tabIndex })}
        >
          <TabList className="commonTabNav">
            <Tab
              className={
                'commonTabList commonTabListBor' +
                (this.state.tabIndex === 0 ? ' commonTabListActive' : '')
              }
            >
              21 FEB, 2020
            </Tab>
            <Tab
              className={
                'commonTabList' + (this.state.tabIndex === 1 ? ' commonTabListActive' : '')
              }
            >
              22 FEB, 2020
            </Tab>
          </TabList>
          <TabPanel className="commonTabPanel">{scheduleListDayOne}</TabPanel>
          <TabPanel className="commonTabPanel">{scheduleListDayTwo}</TabPanel>
        </Tabs>
        <div className="commonTabWrapper removePaddBottom">
          <div className="commonTabNav removePaddBottom">
            <div
              className={
                'commonTabList commonTabListBor' +
                (this.state.tabIndex === 0 ? ' commonTabListActive' : '')
              }
              onClick={() => this.scrollToTabs(0)}
            >
              21 FEB, 2020
            </div>
            <div
              className={
                'commonTabList' + (this.state.tabIndex === 1 ? ' commonTabListActive' : '')
              }
              onClick={() => this.scrollToTabs(1)}
            >
              22 FEB, 2020
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default ScheduleSection;
