import React from 'react';

import danSchafer from '../Common/images/dan-schafer.png';
import aditi from '../Common/images/aditi.png';
import tanmaiGopal from '../Common/images/tanmai-gopal.png';
import sunitha from '../Common/images/sunitha.png';
import kumaraswamy from '../Common/images/kumaraswamy.png';
import keweiQu from '../Common/images/kewei-qu.png';
import workshopBulletIcon from './images/workshop_bullet.svg';

export const Talks = () => {
  const speakersData = [
    {
      headline: 'The State of GraphQL',
      speakers: [
        {
          speaker: 'Dan Schafer',
          speakerImg: danSchafer,
          description: 'GraphQL Co-Creator / Director of Engineering, Facebook',
        },
        {
          speaker: 'Tanmai Gopal',
          speakerImg: tanmaiGopal,
          description: 'CEO / Co-founder, Hasura',
        },
      ],
    },
    {
      headline: 'Evolution of GraphQL at Tokopedia with increase in Scale',
      speakers: [
        {
          speaker: 'Aditi Singh',
          speakerImg: aditi,
          description: 'Senior Software Engineer, Tokopedia',
        },
      ],
    },
    {
      headline: 'Building high performing applications using GraphQL for heterogeneous system',
      speakers: [
        {
          speaker: 'Sunitha N',
          speakerImg: sunitha,
          description: 'Tech Lead, SAP',
        },
        {
          speaker: 'Kumaraswamy Gowda',
          speakerImg: kumaraswamy,
          description: 'Principal Software Engineer, SAP',
        },
      ],
    },
    {
      headline: 'GraphQL Error Handling Done Right',
      speakers: [
        {
          speaker: 'Kewei Qe ',
          speakerImg: keweiQu,
          description: 'Senior Software Engineer, Facebook',
        },
      ],
    },
  ];

  return (
    <div className="talks-wrapper-div">
      <div className="talks-wrapper flex col-md-12 noPadd">
        <h2 className="col-md-3 noPadd">Talks</h2>
        <div className="talks-section col-md-9 noPadd flex">
          {speakersData.map(({ headline, speakers }) => (
            <div className="talk-div col-md-6" key={headline}>
              <img src={workshopBulletIcon} alt="workshop" />
              <div className="flex flex-column">
                <h2>{headline}</h2>
                {speakers.map(({ speaker, speakerImg, description }) => (
                  <div className="flex align-center mt-30" key={speaker}>
                    <img src={speakerImg} alt={speaker} className="speaker-img" />
                    <div className="flex flex-column speaker-details">
                      <h2>{speaker}</h2>
                      <p>{description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
          <div className="flex flex-end col-md-12">
            <p className="more-speakers-section">More speakers coming soon</p>
          </div>
        </div>
      </div>
    </div>
  );
};
