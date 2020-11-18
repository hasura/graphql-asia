import React from 'react';
// import { Link } from "gatsby"
import MailchimpSubscribe from 'react-mailchimp-subscribe';
import './styles.scss';
const CustomForm = ({ status, message, onValidated }) => {
  let email;

  const submit = () =>
    email &&
    email.value.indexOf('@') > -1 &&
    onValidated({
      EMAIL: email.value,
    });

  return (
    <div>
      <div className={'formDetails'}>
        <input ref={(node) => (email = node)} type="email" placeholder="Your email" />
        <button onClick={submit}>SUBSCRIBE</button>
      </div>
      {status === 'sending' && <div style={{ color: '#fff', paddingTop: '10px' }}>sending...</div>}
      {status === 'error' && (
        <div
          style={{ color: 'red', paddingTop: '10px' }}
          dangerouslySetInnerHTML={{ __html: message }}
        />
      )}
      {status === 'success' && (
        <div
          style={{ color: 'green', paddingTop: '10px' }}
          dangerouslySetInnerHTML={{ __html: message }}
        />
      )}
    </div>
  );
};

const url =
  '//hasura.us13.list-manage.com/subscribe/post?u=9b63e92a98ecdc99732456b0e&amp;id=f5c4f66bcf';

const Subscribe = () => (
  <div className={'subscribeWrapper sectionWrapperSmall lightGrayBgColor'}>
    <div className={'container noPadd'}>
      <div className={'col-md-6 col-sm-6 col-xs-12 noPadd'}>
        <div className={'pageDescription'}>
          <span className={'fontBold'}>Stay updated</span> with announcements, press, new conference
          details, and more!
        </div>
      </div>
      <div className={'col-md-6 col-sm-6 col-xs-12 noPadd subscribeForm'}>
        <MailchimpSubscribe
          url={url}
          render={({ subscribe, status, message }) => (
            <CustomForm
              status={status}
              message={message}
              onValidated={(formData) => subscribe(formData)}
            />
          )}
        />
      </div>
    </div>
  </div>
);

export default Subscribe;
