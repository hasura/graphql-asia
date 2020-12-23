import React from "react";
import { Link } from 'gatsby';
import '../Common/Styles.scss';
const JoinGraphQLCommunity = props => {
  return (
    <div className={'joinGraphQLWrapper sectionWrapper'}>
      <div className='articleTitle'>
        Join the largest GraphQL community on this side of the earth.
      </div>
      <div className='buttonWrapper alignSelfEnd'>
        <Link to='/register/'><button className='commonBtn lightBtn'>Register Now</button></Link>
      </div>
    </div>
  );
};

export default JoinGraphQLCommunity;
