import React from "react";
import '../Common/Styles.scss';
const mapDark = require('../Common/images/map-dark.svg');
const mapLight = require('../Common/images/map-light.svg');
// video width="100%" controls>
//   <source src="https://www.learningcontainer.com/wp-content/uploads/2020/05/sample-mp4-file.mp4" type="video/mp4" />
// </video>
const Video = props => {
  return (
    <div className='videoWrapper'>
      <img src={(!props.isLightMode) ? mapDark : mapLight} alt='Thumbnail' />
    </div>
  );
};

export default Video;
