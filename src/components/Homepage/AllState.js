import React from "react";
const danSchafer = require('../Common/images/dan-schafer.png');
const aditi = require('../Common/images/aditi.png');
const royDerks = require('../Common/images/roy-derks.png');
const tanmaiGopal = require('../Common/images/tanmai-gopal.png');
const sunitha = require('../Common/images/sunitha.png');
const kumaraswamy = require('../Common/images/kumaraswamy.png');
const keweiQu = require('../Common/images/kewei-qu.png');
const speakersDetails = [
  {
    talkPageUrl: '/talks/the-state-of-graphql/',
    speakersName: 'Dan Schafer',
    speakersImg: danSchafer,
    speakersDesignation: (
      <span>
        GraphQL Co-Creator / Director of Engineering,
        <br />Facebook
      </span>
    ),
  },
  {
    talkPageUrl: '/talks/evolution-of-graphql-at-tokopedia-with-increase-in-scale/',
    speakersName: 'Aditi	Singh',
    speakersImg: aditi,
    speakersDesignation: (
      <span>
        Senior Software Engineer,
        <br />Tokopedia
      </span>
    ),
  },
  {
    talkPageUrl: '/workshops/server-side-authentication-in-graphql/',
    speakersName: 'Roy Derks',
    speakersImg: royDerks,
    speakersDesignation: (
      <span>
        Leading the Engineering teams,
        <br />Vandebron
      </span>
    ),
  },
  {
    talkPageUrl: '/talks/the-state-of-graphql/',
    speakersName: 'Tanmai Gopal',
    speakersImg: tanmaiGopal,
    speakersDesignation: (
      <span>
        CEO / Co-founder,
        <br />Hasura
      </span>
    ),
  },
  {
    talkPageUrl: '/talks/building-high-performing-applications-using-graphql-for-heterogeneous-system/',
    speakersName: 'Sunitha N',
    speakersImg: sunitha,
    speakersDesignation: (
      <span>
        Tech Lead,
        <br />SAP
      </span>
    ),
  },
  {
    talkPageUrl: '/talks/building-high-performing-applications-using-graphql-for-heterogeneous-system/',
    speakersName: 'Kumaraswamy Gowda',
    speakersImg: kumaraswamy,
    speakersDesignation: (
      <span>
        Principal Software Engineer,
        <br />SAP
      </span>
    ),
  },
  {
    talkPageUrl: '/talks/graphql-error-handling-done-right/',
    speakersName: 'Kewei Qu',
    speakersImg: keweiQu,
    speakersDesignation: (
      <span>
        Software Engineer,
        <br />Facebook
      </span>
    ),
  },
]
const detailsPage = [
  {
    url: '/talks/the-state-of-graphql/',
    metaTags: {
      title: 'The State of GraphQL',
      canonicalUrl: 'https://graphql.asia/talks/the-state-of-graphql/',
      description: 'Coming Soon',
      metaImg: "https://graphql.asia/graphql-asia.png",
    },
    title: 'The State of GraphQL ',
    speakersTitle: 'About the speakers',
    description: [
      {
        desc: 'Coming Soon',
      },
    ],
    takeaways: [
      {
        desc: 'Coming Soon',
      },
    ],
    multipleSpeakers: 'Speakers',
    speakersList: [
      {
        speakersUrl: '/speakers/dan-schafer/',
        speakersName: 'Dan Schafer',
        speakersImg: danSchafer,
        speakersBio: 'Dan Schafer is a Director of Engineering at Facebook and a co-creator of GraphQL. He worked on the original GraphQL API for Facebook News Feed, developed Facebook’s GraphQL API Design principles, expanded GraphQL to support Mutations and Subscriptions, and contributed to the initial release of the GraphQL specification and reference implementation. Currently, he’s a Director of Engineering on the Product Foundation team at Facebook, focused on building end-to-end frameworks for development of Facebook’s family of apps.',
        speakersDesignation: (
          <span>
            GraphQL Co-Creator / Director of Engineering,
            <br /> Facebook
          </span>
        ),
      },
      {
        speakersUrl: '/speakers/tanmai-gopal/',
        speakersName: 'Tanmai Gopal',
        speakersImg: tanmaiGopal,
        speakersBio: 'Tanmai Gopal is the CEO and co-founder of Hasura. He is a StackOverflow powered fullstack developer whose areas of interest and work span React, GraphQL, Nodejs, Haskell, Docker, Postgres & Kubernetes. He is passionate about making it easy to build complex things and is the instructor of India\'s largest MOOC imad.tech with over 250,000 students.',
        speakersDesignation: (
          <span>
            CEO / Co-founder,
            <br />Hasura
          </span>
        ),
      },
    ],
  },
  {
    url: '/talks/evolution-of-graphql-at-tokopedia-with-increase-in-scale/',
    metaTags: {
      title: 'Evolution of GraphQL@Tokopedia with increase in Scale',
      canonicalUrl: 'https://graphql.asia/talks/evolution-of-graphql-at-tokopedia-with-increase-in-scale/',
      description: 'Are you planning to use GraphQL and have questions about how you can use it,  will it scale as you continue to grow, what all hurdles you can face and what all benefits you can get if you adapt it, then do hear out our story on how we leveraged GraphQL on an API Gateway.',
      metaImg: "https://graphql.asia/graphql-asia.png",
    },
    title: 'Evolution of GraphQL@Tokopedia with increase in Scale',
    speakersTitle: 'About the speaker',
    description: [
      {
        desc: 'Are you planning to use GraphQL and have questions about how you can use it,  will it scale as you continue to grow, what all hurdles you can face and what all benefits you can get if you adapt it, then do hear out our story on how we leveraged GraphQL on an API Gateway. Since the inception of the GraphQL at Tokopedia, we have been working on creating a resilient process to govern the GraphQL ecosystem. We\'ll see how our GraphQL system evolved as we continued to grow to 400K RPS at the peak, to having more than 150+ services/modules integrated. How GraphQL modules can help setup clearly defined ownership and have seperation of concerns and thereby making our system more resilient, maintainable and observable. Just having GraphQL does not ensure its usability, we had to make the integration process more engaging, seamless and pain-free for our engineers. We will be showing how we have developed automation and tooling around our GraphQL ecosystem to achieve this. We\'ll also be discussing caching in our GraphQL ecosystem. In the end, I\'ll be talking about a few GraphQL features which we are exploring for our use case and soon to be used in our production system (Subscription and Federation)'
      },
    ],
    takeaways: [
      {
        desc: 'Are you planning to use GraphQL and have questions about how you can use it,  will it scale as you continue to grow, what all hurdles you can face and what all benefits you can get if you adapt it, then do hear out the talk on how we leveraged GraphQL on an API Gateway.'
      }
    ],
    speakersList: [
      {
        speakersUrl: '/speakers/aditi-singh/',
        speakersName: 'Aditi	Singh',
        speakersImg: aditi,
        speakersDesignation: (
          <span>
            Senior Software Engineer,
            <br /> Tokopedia
          </span>
        ),
      },
    ],
  },
  {
    url: '/workshops/server-side-authentication-in-graphql/',
    metaTags: {
      title: 'Server-side Authentication in GraphQL',
      canonicalUrl: 'https://graphql.asia/workshops/server-side-authentication-in-graphql/',
      description: 'A hands-on workshop about handling authentication and authorization in GraphQL. During this 3 hour workshop you’ll learn how to add authentication to a GraphQL server using JWTs, and handle query responses with user roles. As a bonus we’ll be adding an authentication server with Auth0.',
      metaImg: "https://graphql.asia/graphql-asia.png",
    },
    title: 'Server-side Authentication in GraphQL',
    isWorkshop: true,
    speakersTitle: 'Presented by',
    description: [
      {
        desc: 'A hands-on workshop about handling authentication and authorization in GraphQL. During this 3 hour workshop you’ll learn how to add authentication to a GraphQL server using JWTs, and handle query responses with user roles. As a bonus we’ll be adding an authentication server with Auth0.'
      },
    ],
    contents: [
      {
        title: 'The contents:',
        list: [
          'Authentication with JWTs',
          'Handling query responses and user roles',
          'Auth0',
        ],
      },
      {
        title: 'Prerequisites:',
        list: [
          'JavaScript (preferably TypeScript)',
          'GraphQL',
        ],
      },
    ],
    speakersList: [
      {
        speakersUrl: '/speakers/roy-derks/',
        speakersName: 'Roy Derks',
        speakersImg: royDerks,
        speakersDesignation: (
          <span>
            Leading the Engineering teams,
            <br /> Vandebron
          </span>
        ),
      },
    ],
  },
  {
    url: '/workshops/sql-server-and-graphql/',
    metaTags: {
      title: 'SQL Server & GraphQL',
      canonicalUrl: 'https://graphql.asia/workshops/sql-server-and-graphql/',
      description: 'SQL Server & GraphQL.',
      metaImg: "https://graphql.asia/graphql-asia.png",
    },
    title: 'SQL Server & GraphQL',
    isWorkshop: true,
    comingSoon: true,
    description: [
      {
        desc: 'More info coming soon'
      },
    ],
  },
  {
    url: '/workshops/graphql-fundamentals-workshop/',
    metaTags: {
      title: 'GraphQL Fundamentals Workshop',
      canonicalUrl: 'https://graphql.asia/workshops/graphql-fundamentals-workshop/',
      description: 'GraphQL Fundamentals Workshop.',
      metaImg: "https://graphql.asia/graphql-asia.png",
    },
    title: 'GraphQL Fundamentals Workshop',
    isWorkshop: true,
    comingSoon: true,
    description: [
      {
        desc: 'More info coming soon'
      },
    ],
  },
  {
    url: '/talks/building-high-performing-applications-using-graphql-for-heterogeneous-system/',
    metaTags: {
      title: 'Building high performing applications using GraphQL for heterogeneous system',
      canonicalUrl: 'https://graphql.asia/talks/building-high-performing-applications-using-graphql-for-heterogeneous-system/',
      description: 'The user experience, performance, scalability etc all of these are essential for modern day applications. With increasingly heterogenous applications and consumers like legacy system, multiple microservices, mobile application client, third party applications, etc, catering to each of them would be challenging as every user interface or consumers fields of interest would differ resulting in different APIs or unwanted calls and data flow over the network.',
      metaImg: "https://graphql.asia/graphql-asia.png",
    },
    title: 'Building high performing applications using GraphQL for heterogeneous system',
    speakersTitle: 'About the speakers',
    description: [
      {
        desc: 'The user experience, performance, scalability etc all of these are essential for modern day applications. With increasingly heterogenous applications and consumers like legacy system, multiple microservices, mobile application client, third party applications, etc, catering to each of them would be challenging as every user interface or consumers fields of interest would differ resulting in different APIs or unwanted calls and data flow over the network. Learn how GraphQL comes to rescue to cater variety of consumers without compromising on performance or user experience. GraphQL helps with rapid development time due to it iterative manner development and also to build scalable, high performing APIs.',
      },
    ],
    takeaways: [
      {
        desc: 'Learn how GraphQL comes to rescue to cater variety of consumers without compromising on performance or user experience. GraphQL helps with rapid development time due to its iterative manner development and also to build scalable, high performing APIs. Learn also how GraphQL enabled us in SAP Ariba procurement applications to provide better user experience for our customers'
      }
    ],
    speakersList: [
      {
        speakersUrl: '/speakers/sunitha/',
        speakersName: 'Sunitha N',
        speakersImg: sunitha,
        speakersDesignation: (
          <span>
            Tech Lead,
            <br />SAP
          </span>
        ),
      },
      {
        speakersUrl: '/speakers/kumaraswamy-gowda/',
        speakersName: 'Kumaraswamy Gowda',
        speakersImg: kumaraswamy,
        speakersDesignation: (
          <span>
            Principal Software Engineer,
            <br />SAP
          </span>
        ),
      },
    ],
  },
  {
    url: '/talks/graphql-error-handling-done-right/',
    metaTags: {
      title: 'GraphQL Error Handling Done Right',
      canonicalUrl: 'https://graphql.asia/talks/graphql-error-handling-done-right/',
      description: 'GraphQL is particularly good at resource aggregation and partial data delivery. At the same time, these characteristics also make GraphQL error handling, reporting, alerting and triaging complicated. In this talk, I will go over the challenges we discovered with GraphQL reliability at Facebook, and what we did to overcome them.',
      metaImg: "https://graphql.asia/graphql-asia.png",
    },
    title: 'GraphQL Error Handling Done Right',
    speakersTitle: 'About the speaker',
    description: [
      {
        desc: 'GraphQL is particularly good at resource aggregation and partial data delivery. At the same time, these characteristics also make GraphQL error handling, reporting, alerting and triaging complicated. In this talk, I will go over the challenges we discovered with GraphQL reliability at Facebook, and what we did to overcome them.',
      },
    ],
    takeaways: [
      {
        list: [
          <span>Learn how to surmount challenges presented with GraphQL “errors” collections, including:
            <ul>
              <li>Errors over-aggregation and under-aggregation are typical problems with alerting.</li>
              <li>Traditional triaging using stack traces may not work well with certain GraphQL errors.</li>
            </ul>
          </span>,
          'How to come up with creative solutions that leverage GraphQL schema and Machine Learning.',
          'How Facebook experiments with expressing criticality in GraphQL.',
        ]
      }
    ],
    speakersList: [
      {
        speakersUrl: '/speakers/kewei-qu/',
        speakersName: 'Kewei Qu',
        speakersImg: keweiQu,
        speakersDesignation: (
          <span>
            Software Engineer,
            <br />Facebook
          </span>
        ),
      },
    ],
  },
]
export { speakersDetails, detailsPage };
