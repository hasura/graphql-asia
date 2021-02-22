import React from "react";
import '../Common/Styles.scss';
const reactBangaloreDark = require('../Common/images/react-bangalore-dark.svg');
const graphQLBangaloreDark = require('../Common/images/graphql-bangalore-dark.svg');

const womenCodeDark = require('../Common/images/women-code-dark.svg');
const graphqlSingaporDark = require('../Common/images/graphql-singapor-dark.svg');
const jsDark = require('../Common/images/js-dark.svg');
const graphqlSydneyDark = require('../Common/images/graphql-sydney-dark.svg');

const graphqlCopenhagenDark = require('../Common/images/graphql-copenhagen-dark.svg');
const graphqlAmsterdamDark = require('../Common/images/graphql-amsterdam-dark.svg');

const reactBangaloreLight = require('../Common/images/react-bangalore-light.svg');
const graphQLBangaloreLight = require('../Common/images/graphql-bangalore-light.svg');

const womenCodeLight = require('../Common/images/women-code-light.svg');
const graphqlSingaporLight = require('../Common/images/graphql-singapor-light.svg');
const jsLight = require('../Common/images/js-light.svg');
const graphqlSydneyLight = require('../Common/images/graphql-sydney-light.svg');
const graphqlCopenhagenLight = require('../Common/images/graphql-copenhagen-light.svg');
const graphqlAmsterdamLight = require('../Common/images/graphql-amsterdam-light.svg');


const atlassianLight = require('../Common/images/atlassian-light.svg');
const atlassianDark = require('../Common/images/atlassian-dark.svg');

const yugabyteLight = require('../Common/images/yugabyte-light.png');
const yugabyteDark = require('../Common/images/yugabyte-dark.png');

const graphqlBangkokDark = require('../Common/images/graphql-bangkok-dark.svg');
const reactDelhiDark = require('../Common/images/react-delhi-dark.svg');
const reactPhilippinesDark = require('../Common/images/react-philippines-dark.svg');
const graphqlWroclawDark = require('../Common/images/graphql-wroclaw-dark.svg');
const graphqlBangkokLight = require('../Common/images/graphql-bangkok-light.svg');
const reactDelhiLight = require('../Common/images/react-delhi-light.svg');
const reactPhilippinesLight = require('../Common/images/react-philippines-light.svg');
const graphqlWroclawLight = require('../Common/images/graphql-wroclaw-light.svg');

const download = require('../Common/images/download.svg');
const downloadHover = require('../Common/images/download-hover.svg');
const stackhawkDark = require('../Common/images/stackhawk-dark.png');
const stackhawkLight = require('../Common/images/stackhawk-light.png');



const Partners = props => {
  return (
    <div>
      <div id='sponsorship' className={'communityPartnersWrapper sectionWrapper ' + ((!props.isLightMode) ? 'darkModeBorBottom' : 'lightModeBorBottom')}>
        <div className='articleSubTitle'>Sponsors</div>
        <div className='partnersBrandWrapper partnersBrandWrapperDisplay'>
          <a href='https://www.atlassian.com/' target='_blank' rel='noopener noreferrer'>
            <img className='wd70' src={(!props.isLightMode) ? atlassianDark : atlassianLight} alt='React bangalore' />
          </a>
          <a href='https://www.yugabyte.com/' target='_blank' rel='noopener noreferrer'>
            <img className='yugabite' src={(!props.isLightMode) ? yugabyteDark : yugabyteLight} alt='React bangalore' />
          </a>
          <a href='https://www.stackhawk.com/' target='_blank' rel='noopener noreferrer'>
            <img className='yugabite' src={(!props.isLightMode) ? stackhawkDark : stackhawkLight} alt='React bangalore' />
          </a>
        </div>
        {/*
        <div className='communityPartnersHeader'>
          <div className='articleSectionTitle'>
            If you are interested in sponsoring GraphQL Asia, reach out to Harsha at <a href='mailto:events@hasura.io'>events@hasura.io</a>
          </div>
          <div className='buttonWrapper alignSelfEnd'>
            <a href="/GQLA-Sponsorship-brochure.pdf" download>
              <button className='commonBtn darkBtn'>
                <img className='submitIcon' src={download} alt='Icon' />
                <img className='submitIconHover' src={downloadHover} alt='Icon' />
                Download Brochure
              </button>
            </a>
          </div>
        </div>
        */}
      </div>
      <div id='community-partners' className={'communityPartnersWrapper sectionWrapper ' + ((!props.isLightMode) ? 'darkModeBorBottom' : 'lightModeBorBottom')}>
        <div className='articleSubTitle'>Community Partners</div>
        <div className='partnersBrandWrapper'>
          <a href='https://twitter.com/ReactBangalore' target='_blank' rel='noopener noreferrer'>
            <img src={(!props.isLightMode) ? reactBangaloreDark : reactBangaloreLight} alt='React bangalore' />
          </a>
          <a href='https://twitter.com/WWCodeManila' target='_blank' rel='noopener noreferrer'>
            <img src={(!props.isLightMode) ? womenCodeDark : womenCodeLight} alt='Women code' />
          </a>
          <a href='https://www.meetup.com/GraphQL-SG/' target='_blank' rel='noopener noreferrer'>
            <img src={(!props.isLightMode) ? graphqlSingaporDark : graphqlSingaporLight} alt='GraphQL singapore' />
          </a>
          <a href='https://www.meetup.com/graphql-bangalore/' target='_blank' rel='noopener noreferrer'>
            <img src={(!props.isLightMode) ? graphQLBangaloreDark : graphQLBangaloreLight} alt='GraphQL bangalore' />
          </a>
          <a href='https://www.meetup.com/jslovers/' target='_blank' rel='noopener noreferrer'>
            <img className='wd80' src={(!props.isLightMode) ? jsDark : jsLight} alt='JS' />
          </a>
          <a href='https://www.meetup.com/GraphQL-Sydney/' target='_blank' rel='noopener noreferrer'>
            <img src={(!props.isLightMode) ? graphqlSydneyDark : graphqlSydneyLight} alt='GraphQL sydney' />
          </a>
          <a href='https://www.meetup.com/Amsterdam-GraphQL-Meetup/' target='_blank' rel='noopener noreferrer'>
            <img src={(!props.isLightMode) ? graphqlAmsterdamDark : graphqlAmsterdamLight} alt='GraphQL sydney' />
          </a>
          <a href='https://www.meetup.com/Copenhagen-GraphQL-Meetup-Group/' target='_blank' rel='noopener noreferrer'>
            <img src={(!props.isLightMode) ? graphqlCopenhagenDark : graphqlCopenhagenLight} alt='GraphQL sydney' />
          </a>

          <a href='https://www.meetup.com/GraphQL-Bangkok/' target='_blank' rel='noopener noreferrer'>
            <img src={(!props.isLightMode) ? graphqlBangkokDark : graphqlBangkokLight} alt='GraphQL sydney' />
          </a>
          <a href='https://reactjs.org.ph/' target='_blank' rel='noopener noreferrer'>
            <img src={(!props.isLightMode) ? reactPhilippinesDark : reactPhilippinesLight} alt='GraphQL sydney' />
          </a>
          <a href='https://www.meetup.com/React-Delhi-NCR/' target='_blank' rel='noopener noreferrer'>
            <img src={(!props.isLightMode) ? reactDelhiDark : reactDelhiLight} alt='GraphQL sydney' />
          </a><br/>
          <a href='https://www.meetup.com/pl-PL/GraphQL-Wroclaw/' className='twoColumn' target='_blank' rel='noopener noreferrer'>
            <img  className='wd80' src={(!props.isLightMode) ? graphqlWroclawDark : graphqlWroclawLight} alt='GraphQL sydney' />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Partners;
