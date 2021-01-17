import React from 'react';

import gqlaImg from '../Common/images/logo-dark-mode.svg';
import hasuraLogo from '../Common/images/powered-logo-dark-mode.svg';
import workshopIllustration from '../Common/images/pattern-dark.svg';
import '../Common/Styles.scss';
import '../styles/marketing.scss';

import graphQLIcon from './images/graphql_icon.svg';
import confIcon from './images/conferences_icon.svg';
import chatIcon from './images/languages_icon.svg';
import workshopIcon from './images/workshop_icon.svg';
import workshopBulletIcon from './images/workshop_bullet.svg';
import formIllustration from './images/form_illustration.png';

import danSchafer from '../Common/images/dan-schafer.png';

const HeaderSection = () => (
  <div className="marketing-header-section">
    <div className="col-md-3 noPadd">
      <img src={gqlaImg} alt="graphql-asia" />
      <div className="articleDesc redColor fontBold">24th &amp; 25th Feb</div>
    </div>
    <div className="mainHeading col-md-7 noPadd pr-20">
      Asia&apos;s largest GraphQL Conf is back
    </div>
    <div className="poweredBrand col-md-2 flex flex-end noPadd">
      <a href="https://hasura.io/">
        <img src={hasuraLogo} alt="Powered Logo" />
      </a>
    </div>
  </div>
);

const SignupForm = () => (
  <div className="signup-form-wrapper">
    <div className="signup-form-div">
      <h2>Join us for the third edition of GraphQL Asia!</h2>
      <p>24th &amp; 25th Feb | Online | Free </p>
      <form>
        <input type="email" placeholder="Your email adress" />
        <button type="submit">Register</button>
      </form>
    </div>
    <img src={formIllustration} alt="gqla-illustration" />
  </div>
);

const TopBanner = () => (
  <div className="marketing-landing-banner">
    <div className="col-md-6 noPadd">
      <div className="flex mb-40 space-between">
        <div className="marketing-headlight-div col-md-6 noPadd pr-20">
          <img src={graphQLIcon} alt="graphql-fireside-chat" />
          <h2>Fireside Chat with GraphQL’s Co-founder!</h2>
          <p>
            Dan Schafer talks about the state of GraphQL and its future. Ask him questions live!{' '}
          </p>
        </div>
        <div className="marketing-headlight-div col-md-6 noPadd ml-30 pr-20">
          <img src={confIcon} alt="graphql-fireside-chat" />
          <h2>Conference Talks</h2>
          <p>In-depth Tech talks about GraphQL and company stories of how they are using GraphQL</p>
        </div>
      </div>
      <div className="flex space-between">
        <div className="marketing-headlight-div col-md-6 noPadd pr-20">
          <img src={workshopIcon} alt="graphql-fireside-chat" />
          <h2>Workshops</h2>
          <p>Live, hands-on workshops for all skill levels (Beginner to advanced)</p>
        </div>
        <div className="marketing-headlight-div col-md-6 noPadd ml-30 pr-20">
          <img src={chatIcon} alt="graphql-fireside-chat" />
          <h2>Multiple Languages</h2>
          <p>Get perspectives from GraphQL devs from all over the world</p>
        </div>
      </div>
    </div>
    <div className="col-md-6 flex flex-end noPadd pl-40">
      <SignupForm />
    </div>
  </div>
);

const WorkShops = () => (
  <div className="workshops-section-wrapper">
    <div className="workshops-section col-md-12 noPadd">
      <div className="flex col-md-12 noPadd">
        <h2 className="col-md-3 noPadd">Workshops</h2>
        <div className="workshops col-md-9 noPadd">
          <div className="flex workshop-div">
            <img src={workshopBulletIcon} alt="workshop" />
            <div>
              <h2>Server-side Authentication in GraphQL</h2>
              <p>
                Given by <span className="red-text">Roy Derks</span> |{' '}
                <span className="red-text">Vandebron</span>
              </p>
            </div>
          </div>
          <div className="flex workshop-div">
            <img src={workshopBulletIcon} alt="workshop" />
            <div>
              <h2>GraphQL on SQL Server with Hasura</h2>
              <p>More info coming soon</p>
            </div>
          </div>
          <div className="flex workshop-div">
            <img src={workshopBulletIcon} alt="workshop" />
            <div>
              <h2>Introduction to Hasura</h2>
              <p>
                Given by <span className="red-text">Hasura</span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <img
        className="workshop-illustration"
        src={workshopIllustration}
        alt="graphql-asia-illustration"
      />
    </div>
  </div>
);

const Talks = () => {
  const speakersData = [
    {
      headline: 'The State of GraphQL',
      speakers: [
        {
          speaker: 'Dan Schafer',
          speakerImg: danSchafer,
          description: 'GraphQL Co-Creator / Director of Engineering, Facebook',
        },
        {
          speaker: 'Tanmai Gopal',
          speakerImg: danSchafer,
          description: 'CEO / Co-founder, Hasura',
        },
      ],
    },
    {
      headline: 'Evolution of GraphQL at Tokopedia with increase in Scale',
      speakers: [
        {
          speaker: 'Aditi Singh',
          speakerImg: danSchafer,
          description: 'Senior Software Engineer, Tokopedia',
        },
      ],
    },
  ];

  return (
    <div className="talks-wrapper-div">
      <div className="talks-wrapper flex col-md-12 noPadd">
        <h2 className="col-md-3 noPadd">Talks</h2>
        <div className="talks-section col-md-9 noPadd flex">
          {speakersData.map(({ headline, speakers }) => (
            <div className="talk-div flex col-md-6" key={headline}>
              <img src={workshopBulletIcon} alt="workshop" />
              <div className="flex flex-column">
                <h2>{headline}</h2>
                {speakers.map(({ speaker, speakerImg, description }) => (
                  <div className="flex align-center mt-30" key={speaker}>
                    <img src={speakerImg} alt={speaker} className="speaker-img" />
                    <div className="flex flex-column speaker-details">
                      <h2>{speaker}</h2>
                      <p>{description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const FooterSection = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="mt-20">
      <hr className="light-hr" />
      <hr className="red-hr" />
      <div className="marketing-footer-section flex">
        <div className="articleDesc">{`© ${currentYear} Hasura Inc. All rights reserved`}</div>
        <div className="poweredBrand">
          <a href="https://hasura.io/">
            <img src={hasuraLogo} alt="Powered Logo" />
          </a>
        </div>
      </div>
    </div>
  );
};

export const MarketingPage = () => (
  <div id="viewport" className="darkModeLayout advertisement-site-wrapper">
    <HeaderSection />
    <TopBanner />
    <WorkShops />
    <Talks />
    <FooterSection />
  </div>
);
