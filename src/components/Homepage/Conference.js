import React from "react";
import '../Common/Styles.scss';
const Conference = props => {
  console.log(props)
  return (
    <div className='conferenceWrapper sectionWrapper'>
      <div>
        <div className='articleSubTitle'>The Conference</div>
        <div className='articleDesc'>
          With participation from virtually every corner of the continent, GraphQL Asia is well on its way to becoming Asia’s foremost conference in this domain.
        </div>
        <div className='articleSectionTitle'>
          Check out our past conferences for more on us.
        </div>
      </div>
      <div>
        <div className='commonLinkWrapper'>
          <div className='commonLink'>
            <a>
              GraphQL 19
              <div className='arrow'></div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Conference;
