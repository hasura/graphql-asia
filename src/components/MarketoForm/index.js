import React, { useState, useEffect } from 'react';

import graphqlAsiaImg from '../../images/graphqlAsia.png';
import './formStyles.scss';

const marketoScriptId = 'mktoForms';

export function MarketoForm({ formId, marketoHost, id, styleClass, onSubmitCB }) {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (!document.getElementById(marketoScriptId)) {
      loadScript();
    } else {
      setIsLoaded(true);
    }
  }, []);

  useEffect(() => {
    isLoaded &&
      window.MktoForms2.loadForm(
        marketoHost,
        id,
        formId
      );
  }, [isLoaded, formId, marketoHost, id]);

  const loadScript = () => {
    const s = document.createElement('script');

    s.id = marketoScriptId;
    s.type = 'text/javascript';
    s.async = true;
    s.src = `${marketoHost}/js/forms2/js/forms2.min.js`;
    s.onreadystatechange = function () {
      if (this.readyState === 'complete' || this.readyState === 'loaded') {
        setIsLoaded(true);
      }
    };
    s.onload = () => setIsLoaded(true);
    document.getElementsByTagName('head')[0].appendChild(s);
  };

  return (
    <div className="landing-div">
      <div className="form-wrapper-div">
        <img src={graphqlAsiaImg} alt="graphql-asia-2021" id="graphql-asia-logo" />
        <p id="form-desc">Online Conference | Feb 2021 </p>
        <form onSubmit={
          (e) => {
            e.preventDefault();
            if (onSubmitCB) {
              onSubmitCB()
            }
          }
        } className={styleClass} id={`mktoForm_${formId}`}>
        </form>
        <p id="email-agreement-text">
          *By submitting this form, I agree to receive emails from Hasura
        </p>
      </div>
    </div>
  );
}