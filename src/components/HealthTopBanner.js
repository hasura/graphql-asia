import React from "react"
import { Link } from "gatsby"
import './styles.scss'
const arrowPink = require('../images/arrow-pink.svg');
const HealthTopBanner = () => {
  return (
    <div>
      <div className='healthWrapper detailsBgImage'>
        <div className='container noPadd'>
          <div className='wd60'>
            <div className="sectionHeader">Health guidelines</div>
          </div>
        </div>
      </div>
      <div className='sectionWrapperMedium'>
        <div className={'container noPadd'}>
          <div className='wd60 healthDescriptionWrapper'>
            <div className='thanksDescription'>
              Over 400 people are attending GraphQL Asia from all over the globe. Here are a few guidelines we will be following to ensure everyone’s wellbeing.
            </div>
            <div className='pageDescription'>
              <span>Hi’s without the handshake</span><br/> Please avoid physical contact while greeting someone. Stick to Asian greetings, waves or anything else you can think of 😃
            </div>
            <div className='pageDescription'>
              <span>Stay sanitized</span><br/> Hand sanitizers are available all over the event. We will ask to use them at registrations, at lunch or after using the bathroom.
            </div>
            <div className='pageDescription'>
              <span>Feeling sick? Cover up!</span><br/> If you’re not feeling well please ask for a facemask at the registration counter.
            </div>
            <div className='pinkLink'>
              <Link to={'/'}>CHECK OUT THE SCHEDULE<img src={arrowPink} alt={'Arrow'} /></Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};

export default HealthTopBanner
