import React from 'react';

import { RegisterForm } from './RegisterForm';
import graphQLIcon from './images/graphql_icon.svg';
import confIcon from './images/conferences_icon.svg';
import chatIcon from './images/languages_icon.svg';
import workshopIcon from './images/workshop_icon.svg';

export const TopBanner = () => (
  <div className="marketing-landing-banner">
    <div className="col-md-6 noPadd">
      <div className="flex mb-40 space-between">
        <div className="marketing-headlight-div col-md-6 noPadd pr-20">
          <img src={graphQLIcon} alt="graphql-fireside-chat" />
          <h2>Fireside Chat with GraphQL’s Co-founder!</h2>
          <p>
            Dan Schafer talks about the state of GraphQL and its future. Ask him questions live!{' '}
          </p>
        </div>
        <div className="marketing-headlight-div col-md-6 noPadd ml-30 pr-20">
          <img src={confIcon} alt="graphql-fireside-chat" />
          <h2>Conference Talks</h2>
          <p>In-depth Tech talks about GraphQL and company stories of how they are using GraphQL</p>
        </div>
      </div>
      <div className="flex space-between">
        <div className="marketing-headlight-div col-md-6 noPadd pr-20">
          <img src={workshopIcon} alt="graphql-fireside-chat" />
          <h2>Workshops</h2>
          <p>Live, hands-on workshops for all skill levels (Beginner to advanced)</p>
        </div>
        <div className="marketing-headlight-div col-md-6 noPadd ml-30 pr-20">
          <img src={chatIcon} alt="graphql-fireside-chat" />
          <h2>Multiple Languages</h2>
          <p>Get perspectives from GraphQL devs from all over the world</p>
        </div>
      </div>
    </div>
    <div className="col-md-6 flex flex-end noPadd pl-40">
      <RegisterForm />
    </div>
  </div>
);
