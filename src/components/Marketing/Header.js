import React, {useState} from 'react';
import { Link } from 'gatsby';
import { RegisterForm } from './RegisterForm';
import gqlaImg from '../Common/images/logo-dark-mode.svg';
import hasuraLogo from '../Common/images/powered-logo-dark-mode.svg';
import registerPattern from '../Common/images/register-pattern.svg';
import close from '../Common/images/close.svg';
export const Header = ({ isMobile }) => {
  const [isShowForm, setIsShowForm] = useState(false)
  if (isMobile) {
    return (
      <div className="marketing-header-section">
        <div className="flex space-between align-center">
          <div className="col-md-3 noPadd">
            <img src={gqlaImg} alt="graphql-asia" id="gqla-logo" />
            <div className="articleDesc redColor fontBold">24th &amp; 25th Feb</div>
          </div>
          <div className="poweredBrand col-md-2 flex flex-end noPadd">
            <a href="https://hasura.io/">
              <img src={hasuraLogo} alt="Powered Logo" />
            </a>
          </div>
        </div>
        <div className="mainHeading col-md-12 noPadd">Asia&apos;s largest GraphQL Conf is back</div>
        <div className="buttonWrapper">
          <button onClick={()=> setIsShowForm(true)} className="commonBtn darkBtn">
            Register Now
          </button>
        </div>
        <div className={'mobile-signup-form-wrapper' + ((isShowForm) ? ' show-signup-form-wrapper' : '')}>
          {/*eslint-disable-next-line*/}
          <div className='mobileShowPattern closeBtn' onClick={()=> setIsShowForm(false)}>
            <img src={close} alt='Close' />
          </div>
          <RegisterForm />
        </div>
      </div>
    );
  }

  return (
    <div className="marketing-header-section">
      <div className="col-md-3 noPadd">
        <img src={gqlaImg} alt="graphql-asia" id="gqla-logo" />
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
};
