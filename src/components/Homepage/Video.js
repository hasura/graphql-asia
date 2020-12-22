import React from "react";
import '../Common/Styles.scss';
const Video = props => {
  return (
    <video width="100%" controls>
      <source src="https://www.learningcontainer.com/wp-content/uploads/2020/05/sample-mp4-file.mp4" type="video/mp4" />
    </video>
  );
};

export default Video;
