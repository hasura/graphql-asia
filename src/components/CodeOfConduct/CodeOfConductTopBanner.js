import React from "react";
import {Link} from 'gatsby';
import '../Common/Styles.scss';
const CodeOfConductTopBanner = props => {
  return (
    <div className='codeOfContentWrapper sectionWrapperBottom mt-40'>
      <div className='mainSubTitle'>
        Code of Conduct
      </div>
      <div className='articleDesc'>
        All attendees, speakers, sponsors and volunteers at Enterprise GraphQL Conf 2020 are required to agree with the following code of conduct. Organisers will enforce this code throughout the event. We expect cooperation from all participants to help ensure a safe environment for everybody.<br/><br/>
        In case you have identified a breach of our CoC, please send an email addressed to <span className='redColor'>Rajoshi Ghosh</span> with the subject <span className='redColor'>Reporting CoC Violation for GraphQL Asia Conference 2021</span> immediately to <a href='mailto:events@hasura.io'>events@hasura.io</a>
      </div>
      <div className='articleTitle'>
        The Short Version
      </div>
      <div className='articleDesc'>
        Our conference is dedicated to providing a harassment-free conference experience for everyone, regardless of gender, gender identity and expression, age, sexual orientation, disability, physical appearance, body size, race, ethnicity, religion (or lack thereof), or technology choices. We do not tolerate harassment of conference participants in any form. Sexual language and imagery is not appropriate for any conference venue, including talks, workshops, parties, Twitter and other online media. Conference participants violating these rules may be expelled from the conference without a refund at the discretion of the conference organisers.
      </div>
      <div className='articleTitle'>
        The Long Version
      </div>
      <div className='articleDesc removePaddBottom'>
        Harassment includes offensive verbal comments related to gender, gender identity and expression, age, sexual orientation, disability, physical appearance, body size, race, ethnicity, religion, technology choices, sexual images in public spaces, deliberate intimidation, stalking, following, harassing photography or recording, sustained disruption of talks or other events, inappropriate physical contact, and unwelcome sexual attention.<br/><br/>
        Participants asked to stop any harassing behavior are expected to comply immediately.<br/><br/>
        Sponsors are also subject to the anti-harassment policy. In particular, sponsors should not use sexualised images, activities, or other material. Booth staff (including volunteers) should not use sexualised clothing/uniforms/costumes, or otherwise create a sexualised environment.<br/><br/>
        If a participant engages in harassing behavior, the conference organisers may take any action they deem appropriate, including warning the offender or expulsion from the conference with no refund.<br/><br/>
        If you are being harassed, notice that someone else is being harassed, or have any other concerns, please contact a member of conference staff immediately - please see the section below on how to report CoC violations.<br/><br/>
        Conference staff will be happy to assist those experiencing harassment to feel safe for the duration of the conference. We value your attendance.<br/><br/>
        We expect participants to follow these rules at all times during conference events and workshop venues and conference-related social events.<br/><br/>
        Original source and credit: <a className='redColor' href='http://2012.jsconf.us/#/about' target='_blank' rel='noopener noreferrer'>http://2012.jsconf.us/#/about</a> & <a className='redColor' href='https://geekfeminism.wikia.org/wiki/Conference_anti-harassment/Policy' target='_blank' rel='noopener noreferrer'>The Ada Initiative</a><br/><br/>
        This work is licensed under a Creative Commons Attribution 3.0 Unported License
      </div>
    </div>
  );
};

export default CodeOfConductTopBanner;
