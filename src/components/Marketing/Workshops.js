import React from 'react';

import workshopBulletIcon from './images/workshop_bullet.svg';
import workshopIllustration from '../Common/images/pattern-dark.svg';

export const Workshops = () => (
  <div className="workshops-section-wrapper">
    <div className="workshops-section col-md-12 noPadd">
      <div className="flex col-md-12 noPadd">
        <h2 className="col-md-3 noPadd">Workshops</h2>
        <div className="workshops col-md-9 noPadd">
          <div className="flex workshop-div">
            <img src={workshopBulletIcon} alt="workshop" />
            <div>
              <h2>Server-side Authentication in GraphQL</h2>
              <p>
                Given by <span className="red-text">Roy Derks</span> |{' '}
                <span className="red-text">Vandebron</span>
              </p>
            </div>
          </div>
          <div className="flex workshop-div">
            <img src={workshopBulletIcon} alt="workshop" />
            <div>
              <h2>GraphQL on SQL Server with Hasura</h2>
              <p>More info coming soon</p>
            </div>
          </div>
          <div className="flex workshop-div">
            <img src={workshopBulletIcon} alt="workshop" />
            <div>
              <h2>Introduction to Hasura</h2>
              <p>
                Given by <span className="red-text">Hasura</span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <img
        className="workshop-illustration"
        src={workshopIllustration}
        alt="graphql-asia-illustration"
      />
    </div>
  </div>
);
