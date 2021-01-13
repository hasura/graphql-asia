import React from "react";
import '../Common/Styles.scss';
const reactBangaloreDark = require('../Common/images/react-bangalore-dark.svg');
const graphQLBangaloreDark = require('../Common/images/graphql-bangalore-dark.svg');
const reactBangaloreLight = require('../Common/images/react-bangalore-light.svg');
const graphQLBangaloreLight = require('../Common/images/graphql-bangalore-light.svg');
const download = require('../Common/images/download.svg');
const downloadHover = require('../Common/images/download-hover.svg');

const Partners = props => {
  return (
    <div>
      <div id='sponsorship' className={'communityPartnersWrapper sectionWrapper ' + ((!props.isLightMode) ? 'darkModeBorBottom' : 'lightModeBorBottom')}>
        <div className='articleSubTitle'>Sponsorship</div>
        <div className='communityPartnersHeader'>
          <div className='articleSectionTitle'>
            If you are interested in sponsoring GraphQL Asia, reach out to Harsha at <a href='mailto:events@hasura.io'>events@hasura.io</a>
          </div>
          <div className='buttonWrapper alignSelfEnd'>
            <a href="/GQLA-Sponsorship-brochure.pdf" download>
              <button className='commonBtn darkBtn'>
                <img className='submitIcon' src={download} alt='Icon' />
                <img className='submitIconHover' src={downloadHover} alt='Icon' />
                Submit a Proposal
              </button>
            </a>
          </div>
        </div>
      </div>
      <div className={'communityPartnersWrapper sectionWrapper ' + ((!props.isLightMode) ? 'darkModeBorBottom' : 'lightModeBorBottom')}>
        <div className='articleSubTitle'>Community Partners</div>
        <div className='partnersBrandWrapper'>
          <a href='https://www.meetup.com/ReactJS-Bangalore/' target='_blank' rel='noopener noreferrer'>
            <img src={(!props.isLightMode) ? reactBangaloreDark : reactBangaloreLight} alt='React bangalore' />
          </a>
          <a href='https://www.meetup.com/graphql-bangalore/' target='_blank' rel='noopener noreferrer'>
            <img src={(!props.isLightMode) ? graphQLBangaloreDark : graphQLBangaloreLight} alt='GraphQL bangalore' />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Partners;
