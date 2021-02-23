import React, { Fragment } from "react";
import {Link} from 'gatsby';
import '../Common/Styles.scss';
const lightArrow = require('../Common/images/light-arrow.svg');
const darkArrow = require('../Common/images/dark-arrow.svg');
const lightArrowLine = require('../Common/images/light-arrow-line.svg');
const darkarrowLine = require('../Common/images/dark-arrow-line.svg');
const star = require('../Common/images/star.svg');
const atlassianLight = require('../Common/images/atlassian-light.svg');
const atlassianDark = require('../Common/images/atlassian-dark.svg');

const yugabyteLight = require('../Common/images/yugabyte-light.png');
const yugabyteDark = require('../Common/images/yugabyte-dark.png');
const JobsList = props => {
  return (
    <Fragment>
      <div className={'detailsPageWrapper sectionWrapper removePaddTop' + ((!props.isLightMode) ? ' darkModeBorBottom' : ' lightModeBorBottom')}>
        <h1 className='mainSubTitle'>
          Check out these Job Offers from our Sponsors
        </h1>
        <div className='brandLogo'>
          <img className='yugabite' src={(!props.isLightMode) ? yugabyteDark : yugabyteLight} alt='React bangalore' />
        </div>
        <h2 className='articleSubTitle'>
          Join the Yugabyte Team
        </h2>
        <div className='articleDesc pb-40'>
          We are on a mission to build the default database for cloud native applications in a multi-cloud world. We are well underway on this journey with YugabyteDB, the open source, high-performance, distributed SQL database. And the best is yet to come! We are looking for talented and driven people to join us. Here are a few of the current job openings:
        </div>
        <div className='articleDesc pb-40'>
          <ul>
            <li><img src={star} alt='star' />Backend Software Engineer, Cloud Infrastructure</li>
            <li><img src={star} alt='star' />Drivers and Tools Engineer, Ecosystem Engineering</li>
            <li><img src={star} alt='star' />Software Maintenance Engineer</li>
            <li><img src={star} alt='star' />Software Engineer, Core Database</li>
          </ul>
        </div>
        <div className='commonLink'>
          <a href='https://www.yugabyte.com/careers/' target='_blank' rel='noopener noreferrer'>
            Learn More
            <div className='arrow'>
              <img className='arrowIcon' src={(!props.isLightMode) ? lightArrow : darkArrow} alt='Arrow'/>
              {/* <img className='arrowIconHover' src={(!props.isLightMode) ? lightArrowLine : darkarrowLine} alt='Arrow'/> */}
            </div>
          </a>
        </div>
      </div>
      <div className={'detailsPageWrapper sectionWrapper' + ((!props.isLightMode) ? ' darkModeBorBottom' : ' lightModeBorBottom')}>
        <div className='brandLogo'>
          <img className='wd70' src={(!props.isLightMode) ? atlassianDark : atlassianLight} alt='React bangalore' />
        </div>
        <h2 className='articleSubTitle'>
          Jobs at Atlassian
        </h2>
        <div className='articleDesc pb-20'>
          Atlassian’s mission of “Unleash the potential of every team” is the guiding light behind what we do. We have developed well-known products (Jira, Confluence, Trello, etc.), that fit in the fabric of teamwork across different types of teams, and the processes to help every team succeed.
        </div>
        <div className='articleDesc pb-20'>
          We are looking for engineers across all levels to join our team in Bengaluru. You will be responsible for leading the product development and platform teams that build Opsgenie’s core product features such as alerting flow, notifications management, user management and pricing & subscription management. You will apply your inquisitive approach in a collaborative manner no matter the task, solving complex problems whether they touch the customer or simply compliment the work of your team.
        </div>
        <div className='articleDesc pb-20'>
          You will also be required to deeply understand technology landscapes and evaluate the use of new technologies. You will be influential within your team and work with peers and senior leaders to define and revise the standards for operational excellence across Atlassian. You will consistently tackle abstract issues that span multiple functional areas and drive your team to push for improvements that can scale across other teams, services, and platforms.
        </div>
        <div className='articleDesc pb-20 fontBold'>
          On your first day we’ll expect you to have:
        </div>
        <div className='articleDesc pb-40'>
          <ul>
            <li><img src={star} alt='star' />BS degree in Computer Science or equivalent work experience</li>
            <li><img src={star} alt='star' />1 - 10+ years of leadership experience in program management and/or software development teams.</li>
            <li><img src={star} alt='star' />Prior hands-on experience in operating services that offer five 9s availability</li>
            <li><img src={star} alt='star' />Prior hands-on experience in software development as a member or leader of a development team.</li>
            <li><img src={star} alt='star' />Experience designing, building, and operating large systems with scalability, availability, testing and performance requirements</li>
            <li><img src={star} alt='star' />Real passion for learning and mentoring your team to evolve the engineering craft within your team</li>
          </ul>
        </div>
        <div className='articleDesc pb-20 fontBold'>
          It's great, but not required, if you have:
        </div>
        <div className='articleDesc pb-40'>
          <ul>
            <li><img src={star} alt='star' />Understanding of SaaS, PaaS, IaaS industry with hands-on experience with public cloud offerings (e.g., AWS, GAE, Azure)</li>
            <li><img src={star} alt='star' />Familiarity with AWS Services (DynamoDB, SQS, SNS, EC2, and ElastiCache)</li>
            <li><img src={star} alt='star' />Experience with building microservices designed for high availability and low latency</li>
            <li><img src={star} alt='star' />A passion for applying DevOps concepts (CI/CD, etc.) to improve the delivery process of software</li>
            <li><img src={star} alt='star' />Experience in ElasticSearch and Redis</li>
            <li><img src={star} alt='star' />Experience with Authentication and Authorization (SSO, OAuth2, OpenID Connect)</li>
            <li><img src={star} alt='star' />Familiarity with Reactive Systems</li>
          </ul>
        </div>
        <div className='commonLink'>
          <a href='https://flows.beamery.com/atlassian/graph-ql-india' target='_blank' rel='noopener noreferrer'>
            Learn More
            <div className='arrow'>
              <img className='arrowIcon' src={(!props.isLightMode) ? lightArrow : darkArrow} alt='Arrow'/>
              {/* <img className='arrowIconHover' src={(!props.isLightMode) ? lightArrowLine : darkarrowLine} alt='Arrow'/> */}
            </div>
          </a>
        </div>
      </div>
    </Fragment>
  );
};

export default JobsList;
