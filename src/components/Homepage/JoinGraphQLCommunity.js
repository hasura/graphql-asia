import React from "react";
import '../Common/Styles.scss';
const JoinGraphQLCommunity = props => {
  return (
    <div className={'joinGraphQLWrapper sectionWrapper ' + ((!props.isLightMode) ? 'darkModeBorBottom' : 'lightModeBorBottom')}>
      <div className='articleTitle'>
        Join the largest GraphQL community on this side of the earth.
      </div>
      <div className='buttonWrapper alignSelfEnd'>
        <button className='commonBtn lightBtn'>Register Now</button>
      </div>
    </div>
  );
};

export default JoinGraphQLCommunity;
