import React from 'react';
const danSchafer = require('../Common/images/dan-schafer.png');
const aditi = require('../Common/images/aditi.png');
const royDerks = require('../Common/images/roy-derks.png');
const tanmaiGopal = require('../Common/images/tanmai-gopal.png');
const sunitha = require('../Common/images/sunitha.png');
const kumaraswamy = require('../Common/images/kumaraswamy.png');
const keweiQu = require('../Common/images/kewei-qu.png');

const yudaiShinnoki = require('../Common/images/yudai-shinnoki.png');
const roshanAlexander = require('../Common/images/roshan-alexander.png');
const wojciechTrocki = require('../Common/images/wojciech-trocki.png');
const peterPiekarczyk = require('../Common/images/peter-piekarczyk.png');
const gregMacwilliam = require('../Common/images/greg-macwilliam.png');
const lauraHam = require('../Common/images/laura-ham.png');
const zhifanLi = require('../Common/images/zhifan-li.png');
const bharatKashyap = require('../Common/images/bharat-kashyap.png');
const toanNguyen = require('../Common/images/toan-nguyen.png');
const pranayKalro = require('../Common/images/pranay-kalro.png');
const tamasPiros = require('../Common/images/tamas-piros.png');
const aaronPowell = require('../Common/images/aaron-powell.png');
const praveenDuriaraju = require('../Common/images/praveen-duriaraju.png');
const brookeSwanson = require('../Common/images/brooke-swanson.png');
const jesseMartin = require('../Common/images/jesse-martin.png');

const nikhilChandrappa = require('../Common/images/nikhil-chandrappa.png');
const sandipanBiswas = require('../Common/images/sandipan-biswas.png');



const speakersDetails = [
  {
    talkPageUrl: '/talks/the-state-of-graphql/',
    speakersName: 'Dan Schafer',
    speakersImg: danSchafer,
    speakersDesignation: (
      <span>
        GraphQL Co-Creator / Director of Engineering,
        <br />
        Facebook
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
        <br />
        Tokopedia
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
        <br />
        Vandebron
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
        <br />
        Hasura
      </span>
    ),
  },
  {
    talkPageUrl:
      '/talks/building-high-performing-applications-using-graphql-for-heterogeneous-system/',
    speakersName: 'Sunitha N',
    speakersImg: sunitha,
    speakersDesignation: (
      <span>
        Tech Lead,
        <br />
        SAP
      </span>
    ),
  },
  {
    talkPageUrl:
      '/talks/building-high-performing-applications-using-graphql-for-heterogeneous-system/',
    speakersName: 'Kumaraswamy Gowda',
    speakersImg: kumaraswamy,
    speakersDesignation: (
      <span>
        Principal Software Engineer,
        <br />
        SAP
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
        <br />
        Facebook
      </span>
    ),
  },
  {
    talkPageUrl: '/talks/monorepo-development-using-hasura-role-and-graphql-code-generator/',
    speakersName: 'Yudai Shinnoki',
    speakersImg: yudaiShinnoki,
    speakersDesignation: (
      <span>
        CTO,
        <br />
        WASD Inc.
      </span>
    ),
  },
  {
    talkPageUrl: '/talks/intelligent-caching-with-graphql-gateway-using-cdc/',
    speakersName: 'Roshan Alexander',
    speakersImg: roshanAlexander,
    speakersDesignation: (
      <span>
        Engineering Manager,
        <br />
        Pratilipi
      </span>
    ),
  },
  {
    talkPageUrl: '/talks/connect-your-enterprise-systems-with-graphql-using-apache-kafka-and-hasura/',
    speakersName: 'Wojciech Trocki',
    speakersImg: wojciechTrocki,
    speakersDesignation: (
      <span>
        Principal Software Engineer, AeroGear,
        <br />
        Red Hat
      </span>
    ),
  },
  {
    talkPageUrl: '/talks/graphql-wrong-answers-only/',
    speakersName: 'Peter Piekarczyk',
    speakersImg: peterPiekarczyk,
    speakersDesignation: (
      <span>
        Co-Founder & CTO,
        <br />
        Draftbit
      </span>
    ),
  },
  {
    talkPageUrl: '/talks/reintroducing-schema-stitching-in-2021/',
    speakersName: 'Greg	MacWilliam',
    speakersImg: gregMacwilliam,
    speakersDesignation: (
      <span>
        Senior Software Engineer,
        <br />
        Vox Media
      </span>
    ),
  },
  {
    talkPageUrl: '/talks/data-science-with-weaviate-and-graphql/',
    speakersName: 'Laura Ham',
    speakersImg: lauraHam,
    speakersDesignation: (
      <span>
        Community Solution Engineer,
        <br />
        SeMI Technologies
      </span>
    ),
  },
  {
    talkPageUrl: '/talks/scalable-and-resilient-graphql-subscriptions-with-distributed-sql-databases/',
    speakersName: 'Nikhil Chandrappa',
    speakersImg: nikhilChandrappa,
    speakersDesignation: (
      <span>
        Software Engineer Lead,
        <br />
        Yugabyte
      </span>
    ),
  },
  {
    talkPageUrl: '/talks/adding-bleeding-edge-tech-to-archaic-government-graphql-for-govtech/',
    speakersName: 'Bharat Kashyap',
    speakersImg: bharatKashyap,
    speakersDesignation: (
      <span>
        Software Engineer,
        <br />
        Samagra Development Associates
      </span>
    ),
  },
  {
    talkPageUrl: '/talks/a-tale-of-inherited-projects-and-why-we-kept-hasura/',
    speakersName: 'Brooke Swanson',
    speakersImg: brookeSwanson,
    speakersDesignation: (
      <span>
        Software Engineer,
        <br />
        Outpace
      </span>
    ),
  },
  {
    talkPageUrl: '/talks/graphql-and-microservices-the-different-approaches-and-challenges/',
    speakersName: 'Toan	Nguyen',
    speakersImg: toanNguyen,
    speakersDesignation: (
      <span>
        Software Engineer,
        <br />
        Hasura
      </span>
    ),
  },
  {
    talkPageUrl: '/talks/adopting-graphql-in-a-legacy-nodejs-api/',
    speakersName: 'Pranay	Kalro',
    speakersImg: pranayKalro,
    speakersDesignation: (
      <span>
        Software Dev Engineer,
        <br />
        Tesco
      </span>
    ),
  },
  {
    talkPageUrl: '/workshops/graphql-in-the-jamstack/',
    speakersName: 'Tamas Piros',
    speakersImg: tamasPiros,
    speakersDesignation: (
      <span>
        Developer Evangelist,
        <br />
        Cloudinary
      </span>
    ),
  },
  {
    talkPageUrl: '/workshops/type-safe-graphql-apps-with-typescript/',
    speakersName: 'Aaron Powell',
    speakersImg: aaronPowell,
    speakersDesignation: (
      <span>
        Principal Cloud Advocate,
        <br />
        Microsoft
      </span>
    ),
  },
  {
    talkPageUrl: '/workshops/introduction-to-hasura/',
    speakersName: 'Praveen Durairaju',
    speakersImg: praveenDuriaraju,
    speakersDesignation: (
      <span>
        Developer Advocate,
        <br />
        Hasura
      </span>
    ),
  },
  {
    talkPageUrl: '/workshops/graphql-on-sql-server-with-hasura/',
    speakersName: 'Jesse Martin',
    speakersImg: jesseMartin,
    speakersDesignation: (
      <span>
        Technical Product Marketer,
        <br />
        Hasura
      </span>
    ),
  },
  {
    talkPageUrl: '/workshops/building-distributed-graph/',
    speakersName: 'Sandipan Biswas',
    speakersImg: sandipanBiswas,
    speakersDesignation: (
      <span>
        Software Developer,
        <br />
        Atlassian
      </span>
    ),
  },
];
const talkDetailsPage = [
  {
    url: '/talks/the-state-of-graphql/',
    metaTags: {
      title: 'The State of GraphQL',
      canonicalUrl: 'https://graphql.asia/talks/the-state-of-graphql/',
      description: 'Coming Soon',
      metaImg: 'https://graphql-engine-cdn.hasura.io/assets/graphql-asia/the-state-of-graphql.png',
    },
    title: 'The State of GraphQL ',
    speakersTitle: 'About the speakers',
    backLink: '/talks/',
    language: 'English',
    time: '08:00 am -	08:30 am',
    talkType: 'Fireside Chat',
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
        speakersBio:
          'Dan Schafer is a Director of Engineering at Facebook and a co-creator of GraphQL. He worked on the original GraphQL API for Facebook News Feed, developed Facebook’s GraphQL API Design principles, expanded GraphQL to support Mutations and Subscriptions, and contributed to the initial release of the GraphQL specification and reference implementation. Currently, he’s a Director of Engineering on the Product Foundation team at Facebook, focused on building end-to-end frameworks for development of Facebook’s family of apps.',
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
        speakersBio:
          "Tanmai Gopal is the CEO and co-founder of Hasura. He is a StackOverflow powered fullstack developer whose areas of interest and work span React, GraphQL, Nodejs, Haskell, Docker, Postgres & Kubernetes. He is passionate about making it easy to build complex things and is the instructor of India's largest MOOC imad.tech with over 250,000 students.",
        speakersDesignation: (
          <span>
            CEO / Co-founder,
            <br />
            Hasura
          </span>
        ),
      },
    ],
  },
  {
    url: '/talks/evolution-of-graphql-at-tokopedia-with-increase-in-scale/',
    metaTags: {
      title: 'Evolution of GraphQL@Tokopedia with increase in Scale',
      canonicalUrl:
        'https://graphql.asia/talks/evolution-of-graphql-at-tokopedia-with-increase-in-scale/',
      description:
        'Are you planning to use GraphQL and have questions about how you can use it,  will it scale as you continue to grow, what all hurdles you can face and what all benefits you can get if you adapt it, then do hear out our story on how we leveraged GraphQL on an API Gateway.',
      metaImg:
        'https://graphql-engine-cdn.hasura.io/assets/graphql-asia/evolution-of-graphql-at-tokopedia-with-increase-in-scale.png',
    },
    title: 'Evolution of GraphQL@Tokopedia with increase in Scale',
    speakersTitle: 'About the speaker',
    backLink: '/talks/',
    language: 'English',
    time: '10:30 am -	10:55 am',
    talkType: 'Session',
    description: [
      {
        desc:
          "Are you planning to use GraphQL and have questions about how you can use it,  will it scale as you continue to grow, what all hurdles you can face and what all benefits you can get if you adapt it, then do hear out our story on how we leveraged GraphQL on an API Gateway. Since the inception of the GraphQL at Tokopedia, we have been working on creating a resilient process to govern the GraphQL ecosystem. We'll see how our GraphQL system evolved as we continued to grow to 400K RPS at the peak, to having more than 150+ services/modules integrated. How GraphQL modules can help setup clearly defined ownership and have seperation of concerns and thereby making our system more resilient, maintainable and observable. Just having GraphQL does not ensure its usability, we had to make the integration process more engaging, seamless and pain-free for our engineers. We will be showing how we have developed automation and tooling around our GraphQL ecosystem to achieve this. We'll also be discussing caching in our GraphQL ecosystem. In the end, I'll be talking about a few GraphQL features which we are exploring for our use case and soon to be used in our production system (Subscription and Federation)",
      },
    ],
    takeaways: [
      {
        desc:
          'Are you planning to use GraphQL and have questions about how you can use it,  will it scale as you continue to grow, what all hurdles you can face and what all benefits you can get if you adapt it, then do hear out the talk on how we leveraged GraphQL on an API Gateway.',
      },
    ],
    speakersList: [
      {
        speakersUrl: '/speakers/aditi-singh/',
        speakersName: 'Aditi	Singh',
        speakersImg: aditi,
        speakersBio:
          'Senior Software Engineer, creator and maintainer of GraphQL based API Gateway at Tokopedia.',
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
    url: '/talks/building-high-performing-applications-using-graphql-for-heterogeneous-system/',
    metaTags: {
      title: 'Building high performing applications using GraphQL for heterogeneous system',
      canonicalUrl:
        'https://graphql.asia/talks/building-high-performing-applications-using-graphql-for-heterogeneous-system/',
      description:
        'The user experience, performance, scalability etc all of these are essential for modern day applications. With increasingly heterogenous applications and consumers like legacy system, multiple microservices, mobile application client, third party applications, etc, catering to each of them would be challenging as every user interface or consumers fields of interest would differ resulting in different APIs or unwanted calls and data flow over the network.',
      metaImg:
        'https://graphql-engine-cdn.hasura.io/assets/graphql-asia/building-high-performing-applications-using-graphql-for-heterogeneous-system.png',
    },
    title: 'Building high performing applications using GraphQL for heterogeneous system',
    speakersTitle: 'About the speakers',
    backLink: '/talks/',
    language: 'English',
    time: '11:50 am -	12:15 pm',
    talkType: 'Session',
    description: [
      {
        desc:
          'The user experience, performance, scalability etc all of these are essential for modern day applications. With increasingly heterogenous applications and consumers like legacy system, multiple microservices, mobile application client, third party applications, etc, catering to each of them would be challenging as every user interface or consumers fields of interest would differ resulting in different APIs or unwanted calls and data flow over the network. Learn how GraphQL comes to rescue to cater variety of consumers without compromising on performance or user experience. GraphQL helps with rapid development time due to it iterative manner development and also to build scalable, high performing APIs.',
      },
    ],
    takeaways: [
      {
        desc:
          'Learn how GraphQL comes to rescue to cater variety of consumers without compromising on performance or user experience. GraphQL helps with rapid development time due to its iterative manner development and also to build scalable, high performing APIs. Learn also how GraphQL enabled us in SAP Ariba procurement applications to provide better user experience for our customers',
      },
    ],
    speakersList: [
      {
        speakersUrl: '/speakers/sunitha/',
        speakersName: 'Sunitha N',
        speakersImg: sunitha,
        speakersBio:
          'Sunitha has a overall of 10+ years of experience in IT industry. Currently, she is working at SAP as a Senior Developer for Strategic Procurement related products. She has experience in building enterprise and cloud applications for domains like Healthcare, Telecom and procurement. Her interests are towards solving problems and Micro service architecture.',
        speakersDesignation: (
          <span>
            Tech Lead,
            <br />
            SAP
          </span>
        ),
      },
      {
        speakersUrl: '/speakers/kumaraswamy-gowda/',
        speakersName: 'Kumaraswamy Gowda',
        speakersImg: kumaraswamy,
        speakersBio:
          'Kumar holds a MTech degree in Computer Science from NIT Surathkal, India. He is currently working as a Principal software engineer for Strategic Procurement related products in SAP Ariba. He has a overall of 13+ years of development experience from organizations like Oracle, JP Morgan, IBM Software labs. His expertise are in building enterprise and cloud application for domains like pharmaceutical, software tools and procurement. His interests are towards Microservice architecture and Machine Learning algorithms. He loves going on long rides on bike and conquering peaks during weekend treks.',
        speakersDesignation: (
          <span>
            Principal Software Engineer,
            <br />
            SAP
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
      description:
        'GraphQL is particularly good at resource aggregation and partial data delivery. At the same time, these characteristics also make GraphQL error handling, reporting, alerting and triaging complicated. In this talk, I will go over the challenges we discovered with GraphQL reliability at Facebook, and what we did to overcome them.',
      metaImg:
        'https://graphql-engine-cdn.hasura.io/assets/graphql-asia/graphql-error-handling-done-right.png',
    },
    title: 'GraphQL Error Handling Done Right',
    speakersTitle: 'About the speaker',
    backLink: '/talks/',
    language: 'English',
    time: '08:30 am -	08:55 am',
    talkType: 'Session',
    description: [
      {
        desc:
          'GraphQL is particularly good at resource aggregation and partial data delivery. At the same time, these characteristics also make GraphQL error handling, reporting, alerting and triaging complicated. In this talk, I will go over the challenges we discovered with GraphQL reliability at Facebook, and what we did to overcome them.',
      },
    ],
    takeaways: [
      {
        list: [
          <span>
            Learn how to surmount challenges presented with GraphQL “errors” collections, including:
            <ul>
              <li>
                Errors over-aggregation and under-aggregation are typical problems with alerting.
              </li>
              <li>
                Traditional triaging using stack traces may not work well with certain GraphQL
                errors.
              </li>
            </ul>
          </span>,
          'How to come up with creative solutions that leverage GraphQL schema and Machine Learning.',
          'How Facebook experiments with expressing criticality in GraphQL.',
        ],
      },
    ],
    speakersList: [
      {
        speakersUrl: '/speakers/kewei-qu/',
        speakersName: 'Kewei Qu',
        speakersImg: keweiQu,
        speakersBio:
          'Kewei is a software engineer at Facebook. She currently works on GraphQL reliability, efficiency and performance. Her day to day work helps various product teams across Facebook and Instagram to scale with GraphQL and allow end users get the most value of the App experiences.',
        speakersDesignation: (
          <span>
            Software Engineer,
            <br />
            Facebook
          </span>
        ),
      },
    ],
  },
  {
    url: '/talks/monorepo-development-using-hasura-role-and-graphql-code-generator/',
    metaTags: {
      title: 'Monorepo development using Hasura role and GraphQL Code Generator',
      canonicalUrl:
        'https://graphql.asia/talks/monorepo-development-using-hasura-role-and-graphql-code-generator/',
      description:
        'When your system grows above a certain size, you may need to handle multiple privileges, such as users and administrators. Hasura GraphQL Engine allows you to manage GraphQL permissions through a mechanism of roles and permissions. Based on the actual experience of using Hasura for the development of Digi Chime, we will talk about how to use Hasura roles, precautions for implementation, and efficient development method in combination with GraphQL Code Generator in monorepo configuration.',
      metaImg:
        'https://graphql-engine-cdn.hasura.io/assets/graphql-asia/monorepo-development-using-hasura-role-and-graphql-code-generator.png',
    },
    title: 'Monorepo development using Hasura role and GraphQL Code Generator',
    speakersTitle: 'About the speakers',
    backLink: '/talks/',
    language: 'Japanese',
    time: '12:10 pm -	12:35 pm',
    talkType: 'Session',
    description: [
      {
        desc:
          'When your system grows above a certain size, you may need to handle multiple privileges, such as users and administrators. Hasura GraphQL Engine allows you to manage GraphQL permissions through a mechanism of roles and permissions. Based on the actual experience of using Hasura for the development of Digi Chime, we will talk about how to use Hasura roles, precautions for implementation, and efficient development method in combination with GraphQL Code Generator in monorepo configuration.',
      },
    ],
    takeaways: [
      {
        list: [
          'Overview of Hasura roles and permissions',
          'Notes when setting multiple Hasura roles',
          'Recommended setting method of GraphQL Code Generator when there are multiple roles (Deploy monorepo using Vercel)',
        ],
      },
    ],
    speakersList: [
      {
        speakersUrl: '/speakers/yudai-shinnoki/',
        speakersName: 'Yudai Shinnoki',
        speakersImg: yudaiShinnoki,
        speakersBio:
          'Taking advantage of his experience in launching more than 10 new services, he has been leading the development of the store customer service support service "Digi Chime" since May 2020 as CTO of WASD Inc.',
        speakersDesignation: (
          <span>
            CTO,
            <br />
            WASD Inc.
          </span>
        ),
      },
    ],
  },
  {
    url: '/talks/intelligent-caching-with-graphql-gateway-using-cdc/',
    metaTags: {
      title: 'Intelligent Caching with GraphQL Gateway using CDC',
      canonicalUrl:
        'https://graphql.asia/talks/intelligent-caching-with-graphql-gateway-using-cdc/',
      description:
        'How Pratilipi build an intelligent caching layer over GraphQL gateway, leveraging their CDC patterns, to serve to millions of users with a fraction of the infrastructure cost.',
      metaImg:
        'https://graphql-engine-cdn.hasura.io/assets/graphql-asia/intelligent-caching-with-graphql-gateway-using-cdc.png',
    },
    title: 'Intelligent Caching with GraphQL Gateway using CDC',
    speakersTitle: 'About the speakers',
    backLink: '/talks/',
    language: 'English',
    time: '11:00 am -	11:25 am',
    talkType: 'Session',
    description: [
      {
        desc:
          'How Pratilipi build an intelligent caching layer over GraphQL gateway, leveraging their CDC patterns, to serve to millions of users with a fraction of the infrastructure cost.',
      },
    ],
    takeaways: [
      {
        desc:
          'Reducing downstream services load with intelligent gateway caching',
      },
    ],
    speakersList: [
      {
        speakersUrl: '/speakers/roshan-alexander/',
        speakersName: 'Roshan Alexander',
        speakersImg: roshanAlexander,
        speakersBio:
          'Passionate about anything that is related to usage of technology for making the world a better place to live in. A hardcore programmer, having several years of experience in architecting highly scalable and robust distributed systems for product startup companies. Thirst for learning new things, and longs for being out of comfort zone. Always gets things done in the simplest way possible, yet in the most elegant of implementations',
        speakersDesignation: (
          <span>
            Engineering Manager,
            <br />
            Pratilipi
          </span>
        ),
      },
    ],
  },
  {
    url: '/talks/connect-your-enterprise-systems-with-graphql-using-apache-kafka-and-hasura/',
    metaTags: {
      title: 'Connect your enterprise systems with GraphQL using Apache Kafka and Hasura',
      canonicalUrl:
        'https://graphql.asia/talks/connect-your-enterprise-systems-with-graphql-using-apache-kafka-and-hasura/',
      description:
        'When your infrastructure grow and your API gets out of control. Your manager tells you to implement GraphQL... this talk is going to show you the way.',
      metaImg:
        'https://graphql-engine-cdn.hasura.io/assets/graphql-asia/connect-your-enterprise-systems-with-graphql-using-apache-kafka-and-hasura.png',
    },
    title: 'Connect your enterprise systems with GraphQL using Apache Kafka and Hasura',
    speakersTitle: 'About the speakers',
    backLink: '/talks/',
    language: 'English',
    time: '12:40 pm -	13:05 pm',
    talkType: 'Session',
    description: [
      {
        desc:
          'When your infrastructure grow and your API gets out of control. Your manager tells you to implement GraphQL... this talk is going to show you the way.',
      },
      {
        desc:
          'Explore magical word of data streaming to integrate your various subsystems with Hasura. This talk is going to show you easy steps to move to production in weeks with Hasura and Apache Kafka.',
      },
    ],
    takeaways: [
      {
        list: [
          'Hasura gateway has no limitations when working along side Apache Kafka. You can integrate with any data source, API or even file system to build production ready GraphQL API',
          'Large organizations will require flexibility and ability to integrate with legacy subsystems but they will greatly benefit from unified GraphQL API solution like Hasura.',
          'Apache Kafka is not receiving enough attention in GraphQL ecosystem - lets change that.',
          'Data streaming can be used to deliver real time data alongside GraphQL API',
        ],
      },
    ],
    speakersList: [
      {
        speakersUrl: '/speakers/wojciech-trocki/',
        speakersName: 'Wojciech Trocki',
        speakersImg: wojciechTrocki,
        speakersBio:
          'I write GraphQL backends for living. In free time I\'m creating new ideas for GraphQL frontend libraries and tools. I have been maintaining numerous GraphQL libraries and creating starter templates for GraphQL and enterprise developers',
        speakersDesignation: (
          <span>
            Principal Software Engineer, AeroGear,
            <br />
            Red Hat
          </span>
        ),
      },
    ],
  },
  {
    url: '/talks/graphql-wrong-answers-only/',
    metaTags: {
      title: 'GraphQL: Wrong Answers Only!',
      canonicalUrl:
        'https://graphql.asia/talks/graphql-wrong-answers-only/',
      description:
        'When your infrastructure grow and your API gets out of control. Your manager tells you to implement GraphQL... this talk is going to show you the way.',
      metaImg:
        'https://graphql-engine-cdn.hasura.io/assets/graphql-asia/graphql-wrong-answers-only.png',
    },
    title: 'GraphQL: Wrong Answers Only!',
    speakersTitle: 'About the speakers',
    backLink: '/talks/',
    language: 'English',
    time: '12:35 pm -	12:45 pm',
    talkType: 'Lightning Talks',
    description: [
      {
        desc:
          'We\'ve all made silly mistakes using GraphQL in the past. To prove it, here are all the *doh* moments Draftbit has had in the last 2 years of using it.',
      },
      {
        desc:
          'We\'ll make fun of me for totally missing the ball on:',
        list: [
          'Dataloader & over fetching data',
          'Incorrectly using resolvers',
          'Writing custom non-graphql specific queries'
        ]
      },
      {
        desc:
          'and many more! Learn about the mistakes we made and how you can prevent yourself from doing the same  😂',
      },
    ],
    takeaways: [
      {
        list: [
          'We\'re all human beings and make mistakes',
          'These are actual life lessons: learn how to use GraphQL better',
        ]
      },
    ],
    speakersList: [
      {
        speakersUrl: '/speakers/peter-piekarczyk/',
        speakersName: 'Peter Piekarczyk',
        speakersImg: peterPiekarczyk,
        speakersBio: 'Peter Piekarczyk has always been a builder. He started his first agency when he was 12 selling website templates on eBay. He\'s the co-founder and CTO of YC backed Draftbit, a platform that helps you build mobile apps with any backend (including Hasura!) Peter is Expo\'s first user and has helped grow the React Native community over the years.',
        speakersDesignation: (
          <span>
            Co-Founder & CTO,
            <br />
            Draftbit
          </span>
        ),
      },
    ],
  },
  {
    url: '/talks/reintroducing-schema-stitching-in-2021/',
    metaTags: {
      title: 'Reintroducing Schema Stitching in 2021',
      canonicalUrl:
        'https://graphql.asia/talks/reintroducing-schema-stitching-in-2021/',
      description:
        'The Schema Stitching library was completely overhauled last year after becoming a project of The Guild. Learn about the new features it offers for building a distributed service graph, and how it has reemerged as a directly-comparable alternative to Apollo Federation.',
      metaImg:
        'https://graphql-engine-cdn.hasura.io/assets/graphql-asia/reintroducing-schema-stitching-in-2021.png',
    },
    title: 'Reintroducing Schema Stitching in 2021',
    speakersTitle: 'About the speakers',
    backLink: '/talks/',
    language: 'English',
    time: '09:10 am -	09:35 am',
    talkType: 'Session',
    description: [
      {
        desc:
          'The Schema Stitching library was completely overhauled last year after becoming a project of The Guild. Learn about the new features it offers for building a distributed service graph, and how it has reemerged as a directly-comparable alternative to Apollo Federation.',
      },
    ],
    takeaways: [
      {
        desc:
          'Dispel old notions of this project that was famously abandoned by Apollo. Schema Stitching has been completely revitalized, and offers some unique features that innovate upon building a GraphQL gateway.',
      },
    ],
    speakersList: [
      {
        speakersUrl: '/speakers/greg-macwilliam/',
        speakersName: 'Greg	MacWilliam',
        speakersImg: gregMacwilliam,
        speakersBio:
          'Greg is a GraphQL enthusiast, full-time dad, and loyal subject to a mini Australian shepherd. He is the author of the Schema Stitching Handbook, a founding member of the Scryfall team, and co-author of the What Makes You Tick? adventure game series.',
        speakersDesignation: (
          <span>
            Senior Software Engineer,
            <br />
            Vox Media
          </span>
        ),
      },
    ],
  },
  {
    url: '/talks/data-science-with-weaviate-and-graphql/',
    metaTags: {
      title: 'Data Science with Weaviate and GraphQL',
      canonicalUrl:
        'https://graphql.asia/talks/data-science-with-weaviate-and-graphql/',
      description:
        'Weaviate is using GraphQL to provide user-friendly data interaction. Weaviate is a vector search engine, and all search (e.g. semantic, contextual) search is done via its GraphQL API. We\'ve put a lot of thought in the design of the GraphQL API, which results in good user and developer experience. In this talk, we will take you along in the journey of how our GraphQL implementation was shaped according to user needs and software requirements, and show a demo of the current design for Weaviate.',
      metaImg:
        'https://graphql-engine-cdn.hasura.io/assets/graphql-asia/data-science-with-weaviate-and-graphql.png',
    },
    title: 'Data Science with Weaviate and GraphQL',
    speakersTitle: 'About the speakers',
    backLink: '/talks/',
    language: 'English',
    time: '11:45 am -	12:10 pm',
    talkType: 'Session',
    description: [
      {
        desc:
          'Weaviate is using GraphQL to provide user-friendly data interaction. Weaviate is a vector search engine, and all search (e.g. semantic, contextual) search is done via its GraphQL API. We\'ve put a lot of thought in the design of the GraphQL API, which results in good user and developer experience. In this talk, we will take you along in the journey of how our GraphQL implementation was shaped according to user needs and software requirements, and show a demo of the current design for Weaviate.',
      },
    ],
    takeaways: [
      {
        list: [
          'How to design a GraphQL API from user needs in data science.',
          'A very practical use case, all open source',
          'How to use the vector search engine Weaviate with GraphQL',
        ]
      },
    ],
    speakersList: [
      {
        speakersUrl: '/speakers/laura-ham/',
        speakersName: 'Laura Ham',
        speakersImg: lauraHam,
        speakersBio:
          'I am Laura Ham, community solution engineer at the startup SeMI Technologies. We are developing the open source vector search engine Weaviate, where I am responsible for the design of the technology for its users. Big part my work has been designing the GraphQL API, which I would like to share in this event and hear feedback. Next to working at SeMI, I am active in organizing meetups in the data science and UX field, and I tech coding to kids. I just graduated from my Master\'s degree in Human Computer Interaction.',
        speakersDesignation: (
          <span>
            Community Solution Engineer,
            <br />
            SeMI Technologies
          </span>
        ),
      },
    ],
  },
  {
    url: '/talks/scalable-and-resilient-graphql-subscriptions-with-distributed-sql-databases/',
    metaTags: {
      title: 'Scalable and Resilient GraphQL Subscriptions with Distributed SQL Databases',
      canonicalUrl:
        'https://graphql.asia/talks/scalable-and-resilient-graphql-subscriptions-with-distributed-sql-databases/',
      description:
        'GraphQL subscriptions are seeing broad adoption in building event-driven microservices. Like any other tech stack, as end-user traffic increases, App developers will be faced to scale the workload and make workload highly available against infrastructure outages. GraphQL subscriptions are no different. In this talk, we will walk through steps for implementing resilient and scalable GraphQL subscriptions using Hasura Engine and YugabyteDB on Kubernetes. Components of the stack, including the database, can be linearly scaled independently of each other. In addition to linear scalability, GraphQL subscriptions will inherently become resilient against outages due to the fault tolerance and HA capabilities of distributed SQL databases.',
      metaImg:
        'https://graphql-engine-cdn.hasura.io/assets/graphql-asia/scalable-and-resilient-graphql-subscriptions-with-distributed-sql-databases.png',
    },
    title: 'Scalable and Resilient GraphQL Subscriptions with Distributed SQL Databases',
    speakersTitle: 'About the speakers',
    backLink: '/talks/',
    language: 'English',
    time: '11:40 am -	11:50 am',
    talkType: 'Lightning Talks',
    description: [
      {
        desc:
          'GraphQL subscriptions are seeing broad adoption in building event-driven microservices. Like any other tech stack, as end-user traffic increases, App developers will be faced to scale the workload and make workload highly available against infrastructure outages. GraphQL subscriptions are no different. In this talk, we will walk through steps for implementing resilient and scalable GraphQL subscriptions using Hasura Engine and YugabyteDB on Kubernetes. Components of the stack, including the database, can be linearly scaled independently of each other. In addition to linear scalability, GraphQL subscriptions will inherently become resilient against outages due to the fault tolerance and HA capabilities of distributed SQL databases.',
      },
    ],
    takeaways: [
      {
        desc: 'Ability to linearly scale the GraphQL subscriptions transparently with out any downtime for client apps.',
      },
    ],
    speakersList: [
      {
        speakersUrl: '/speakers/nikhil-chandrappa/',
        speakersName: 'Nikhil Chandrappa',
        speakersImg: nikhilChandrappa,
        speakersBio:
          'Nikhil works in ecosystem engineering team at Yugabyte. He is leading the efforts on YugabyteDB integrations with open source developer tools like GraphQL, Spring Data, R2DBC, and Kubernetes. He also works with the developer community on the adoption of Distributed SQL databases in cloud native applications. Before joining Yugabyte, he worked as a senior data engineer at Pivotal, championing the cloud native data APIs and in-memory data grids for Fortune 500 customers. He has presented at major developer conferences, including Spring One, GraphQL Conferences. He is originally from Mysore, India, and has a master’s degree in Computer Engineering from Syracuse University.',
        speakersDesignation: (
          <span>
            Software Engineer Lead,
            <br />
            Yugabyte
          </span>
        ),
      },
    ],
  },
  {
    url: '/talks/adding-bleeding-edge-tech-to-archaic-government-graphql-for-govtech/',
    metaTags: {
      title: 'Adding bleeding-edge tech to archaic government: GraphQL for GovTech',
      canonicalUrl:
        'https://graphql.asia/talks/adding-bleeding-edge-tech-to-archaic-government-graphql-for-govtech/',
      description:
        'At the Central Tech Team at Samagra - a governance consulting team working in four different states in India - we\'ve been trying to create a culture of using open-source, scalable and fast (bleeding-edge) tech for government use cases. What we\'ve done so far - enable tracking and monitoring of student and teacher attendance in all public schools of Haryana; building the technology architecture behind Mission Prerna, Uttar Pradesh\'s mission to transform basic education and enable tech systems that allowed Himachal Pradesh to be declared the country\'s best state in terms of learning continuity in 2020, according to the Annual State of Education Report. How do we do it - and how does GraphQL fit into the picture?',
      metaImg:
        'https://graphql-engine-cdn.hasura.io/assets/graphql-asia/adding-bleeding-edge-tech-to-archaic-government-graphql-for-govtech.png',
    },
    title: 'Adding bleeding-edge tech to archaic government: GraphQL for GovTech',
    speakersTitle: 'About the speakers',
    backLink: '/talks/',
    language: 'English',
    time: '12:30 pm -	12:40 pm',
    talkType: 'Lightning Talks',
    description: [
      {
        desc:
          'At the Central Tech Team at Samagra - a governance consulting team working in four different states in India - we\'ve been trying to create a culture of using open-source, scalable and fast (bleeding-edge) tech for government use cases. What we\'ve done so far - enable tracking and monitoring of student and teacher attendance in all public schools of Haryana; building the technology architecture behind Mission Prerna, Uttar Pradesh\'s mission to transform basic education and enable tech systems that allowed Himachal Pradesh to be declared the country\'s best state in terms of learning continuity in 2020, according to the Annual State of Education Report. How do we do it - and how does GraphQL fit into the picture?',
      },
    ],
    takeaways: [
      {
        desc: 'Some of the questions that I will pose in the talk will be relevant to both the GraphQL community as well as the open source community at large: What are the responses when we show the Hasura Console to government employees used to the Microsoft SQL Server? What are the issues, and how can we save exchequer money through open source - building better SQL Server to Postgres migration, for example. How can GraphQL stitching enable better federation for important government projects, like the National Health Stack? Hopefully get the community excited about things happening in the GovTech space and get a lot more people interested in contributing to thing we\'re building at CTT Samagra.'
      },
    ],
    speakersList: [
      {
        speakersUrl: '/speakers/bharat-kashyap/',
        speakersName: 'Bharat	Kashyap',
        speakersImg: bharatKashyap,
        speakersBio:
          'Adding tech to gov at Samagra',
        speakersDesignation: (
          <span>
            Software Engineer,
            <br />
            Samagra Development Associates
          </span>
        ),
      },
    ],
  },
  {
    url: '/talks/a-tale-of-inherited-projects-and-why-we-kept-hasura/',
    metaTags: {
      title: 'A Tale of Inherited Projects and why we kept Hasura',
      canonicalUrl:
        'https://graphql.asia/talks/a-tale-of-inherited-projects-and-why-we-kept-hasura/',
      description:
        'In late 2019 my team inherited a proof of concept system that felt impossible to pick apart. We had a tight deadline and looking at an infrastructure map that inexplicably included Kafka it was hard not to question the inclusion of a new piece of tech like Hasura. Couldn\'t everything be a simple REST service at the end of the day? Eventually we decided to cut our losses and start from scratch. The only thing that survived our hard refresh was Hasura. This talk will go through our journey, touching on: why we decided to keep Hasura, our learnings along the way, and the gotchas that, well got us.',
      metaImg:
        'https://graphql-engine-cdn.hasura.io/assets/graphql-asia/a-tale-of-inherited-projects-and-why-we-kept-hasura.png',
    },
    title: 'A Tale of Inherited Projects and why we kept Hasura',
    speakersTitle: 'About the speakers',
    backLink: '/talks/',
    language: 'English',
    time: '09:35 am -	10:00 am',
    talkType: 'Session',
    description: [
      {
        desc:
          'In late 2019 my team inherited a proof of concept system that felt impossible to pick apart. We had a tight deadline and looking at an infrastructure map that inexplicably included Kafka it was hard not to question the inclusion of a new piece of tech like Hasura. Couldn\'t everything be a simple REST service at the end of the day? Eventually we decided to cut our losses and start from scratch. The only thing that survived our hard refresh was Hasura. This talk will go through our journey, touching on: why we decided to keep Hasura, our learnings along the way, and the gotchas that, well got us.',
      },
    ],
    takeaways: [
      {
        desc: 'Hasura is a pretty neat sharp tool. A team full of RESTful veterans can level up in a GraphQL world quickly. The interplay between postgres + hasura (GraphQL) + React + a simple backend service, makes for a resilient, easy to support service.'
      },
    ],
    speakersList: [
      {
        speakersUrl: '/speakers/brooke-swanson/',
        speakersName: 'Brooke Swanson',
        speakersImg: brookeSwanson,
        speakersBio:
          'I\'m a Madison, Wisconsin based software developer. In a non pandemic world you can find me in a local coffee shop, writing code, reading fantasy, or looking at cat pictures. I\'ve been closing parens professionally for a little over 3 years. Although I\'m based in the midwest I spend much of my time traveling.',
        speakersDesignation: (
          <span>
            Software Engineer,
            <br />
            Outpace
          </span>
        ),
      },
    ],
  },
  {
    url: '/talks/graphql-and-microservices-the-different-approaches-and-challenges/',
    metaTags: {
      title: 'GraphQL & Microservices - the different approaches & challenges',
      canonicalUrl:
        'https://graphql.asia/talks/graphql-and-microservices-the-different-approaches-and-challenges/',
      description:
        'Microservices architecture aren\'t new for flexible, horizontal scaling system. GraphQL also adapts Microservices with the popular name GraphQL Federation. So, what are benefits and challenges between traditional Microservices and GraphQL Federation? Is GraphQL Federation the only approach to implement Microservices in GraphQL? Let\'s discuss in this talk.',
      metaImg:
        'https://graphql-engine-cdn.hasura.io/assets/graphql-asia/graphql-and-microservices-the-different-approaches-and-challenges.png',
    },
    title: 'GraphQL & Microservices - the different approaches & challenges',
    speakersTitle: 'About the speakers',
    backLink: '/talks/',
    language: 'Vietnamese',
    time: '10:00 am -	10:15 am',
    talkType: 'Session',
    description: [
      {
        desc:
          'Microservices architecture aren\'t new for flexible, horizontal scaling system. GraphQL also adapts Microservices with the popular name GraphQL Federation. So, what are benefits and challenges between traditional Microservices and GraphQL Federation? Is GraphQL Federation the only approach to implement Microservices in GraphQL? Let\'s discuss in this talk.',
      },
    ],
    takeaways: [
      {
        list: [
          'Benefits and Challenges between RESTful and GraphQL microservices',
          'GraphQL Microservices approaches'
        ],
      },
    ],
    speakersList: [
      {
        speakersUrl: '/speakers/toan-nguyen/',
        speakersName: 'Toan Nguyen',
        speakersImg: toanNguyen,
        speakersBio:
          'I\'m software engineer who interests in functional programming. I\'m grateful to work with brilliant team at Hasura who eagerly contributes to open source and GraphQL community',
        speakersDesignation: (
          <span>
            Software Engineer,
            <br />
            Hasura
          </span>
        ),
      },
    ],
  },
  {
    url: '/talks/adopting-graphql-in-a-legacy-nodejs-api/',
    metaTags: {
      title: 'Adopting GraphQL in a legacy NodeJS API',
      canonicalUrl:
        'https://graphql.asia/talks/adopting-graphql-in-a-legacy-nodejs-api/',
      description:
        'How a team in Tesco chose to follow iterative approach to adopting GraphQL and removing flakiness from their existing NodeJS endpoints',
      metaImg:
        'https://graphql-engine-cdn.hasura.io/assets/graphql-asia/adopting-graphql-in-a-legacy-nodejs-api.png',
    },
    title: 'Adopting GraphQL in a legacy NodeJS API',
    speakersTitle: 'About the speakers',
    backLink: '/talks/',
    language: 'English',
    time: '10:55 am -	11:20 am',
    talkType: 'Session',
    description: [
      {
        desc:
          'How a team in Tesco chose to follow iterative approach to adopting GraphQL and removing flakiness from their existing NodeJS endpoints.',
      },
    ],
    takeaways: [
      {
        desc: 'Learn how to approach GraphQL adoption in an iterative manner.'
      },
    ],
    speakersList: [
      {
        speakersUrl: '/speakers/pranay-kalro/',
        speakersName: 'Pranay	Kalro',
        speakersImg: pranayKalro,
        speakersBio:
          'I\'m a frontend-architect at Tesco having experience building websites with varying foot-falls going up to thousands of hits per second',
        speakersDesignation: (
          <span>
            Software Dev Engineer,
            <br />
            Tesco
          </span>
        ),
      },
    ],
  },
  {
    url: '/talks/developer-productivity-with-graphql/',
    metaTags: {
      title: 'Developer Productivity with GraphQL',
      canonicalUrl: 'https://graphql.asia/talks/developer-productivity-with-graphql/',
      description: 'Coming Soon',
      metaImg: 'https://graphql-engine-cdn.hasura.io/assets/graphql-asia/developer-productivity-with-graphql.png',
    },
    title: 'Developer Productivity with GraphQL',
    speakersTitle: 'About the speaker',
    backLink: '/talks/',
    language: 'English',
    time: '10:30 am -	11:00 am',
    talkType: 'Keynote',
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
    speakersList: [
      {
        speakersUrl: '/speakers/tanmai-gopal/',
        speakersName: 'Tanmai Gopal',
        speakersImg: tanmaiGopal,
        speakersBio:
          "Tanmai Gopal is the CEO and co-founder of Hasura. He is a StackOverflow powered fullstack developer whose areas of interest and work span React, GraphQL, Nodejs, Haskell, Docker, Postgres & Kubernetes. He is passionate about making it easy to build complex things and is the instructor of India's largest MOOC imad.tech with over 250,000 students.",
        speakersDesignation: (
          <span>
            CEO / Co-founder,
            <br />
            Hasura
          </span>
        ),
      },
    ],
  },
  {
    url: '/talks/3factor-app-an-accessible-design-pattern-for-serverless/',
    metaTags: {
      title: '3factor app: An Accessible Design Pattern for Serverless',
      canonicalUrl: 'https://graphql.asia/talks/3factor-app-an-accessible-design-pattern-for-serverless/',
      description: 'In this talk, I will showcase a pattern involving realtime graphQL, event-driven programming and serverless, called the 3factor app. The 3factor pattern is a super accessible pattern for every level of developer to start developing modern apps on serverless. We will see where traditional monolithic architectures fall short and how to build scalable and reliable apps using this pattern.  We will especially look at the advantages of using 3factor: from infinite scalability to uninterrupted disaster recovery. Then I will share how you, too, can get started using 3factor design patterns.',
      metaImg: 'https://graphql-engine-cdn.hasura.io/assets/graphql-asia/3factor-app-an-accessible-design-pattern-for-serverless.png',
    },
    title: '3factor app: An Accessible Design Pattern for Serverless',
    speakersTitle: 'About the speaker',
    backLink: '/talks/',
    language: 'English',
    time: '11:20 am -	11:30 am',
    talkType: 'Lightning Talks',
    description: [
      {
        desc: 'In this talk, I will showcase a pattern involving realtime graphQL, event-driven programming and serverless, called the 3factor app. The 3factor pattern is a super accessible pattern for every level of developer to start developing modern apps on serverless. We will see where traditional monolithic architectures fall short and how to build scalable and reliable apps using this pattern.  We will especially look at the advantages of using 3factor: from infinite scalability to uninterrupted disaster recovery. Then I will share how you, too, can get started using 3factor design patterns.',
      },
    ],
    speakersList: [
      {
        speakersUrl: '/speakers/praveen-duriaraju/',
        speakersName: 'Praveen Durairaju',
        speakersImg: praveenDuriaraju,
        speakersDesignation: (
          <span>
            Developer Advocate,
            <br />
            Hasura
          </span>
        ),
        speakersOrg: 'Hasura',
      },
    ],
  },

  {
    url: '/workshops/server-side-authentication-in-graphql/',
    metaTags: {
      title: 'Server-side Authentication in GraphQL',
      canonicalUrl: 'https://graphql.asia/workshops/server-side-authentication-in-graphql/',
      description:
        'A hands-on workshop about handling authentication and authorization in GraphQL. During this 3 hour workshop you’ll learn how to add authentication to a GraphQL server using JWTs, and handle query responses with user roles. As a bonus we’ll be adding an authentication server with Auth0.',
      metaImg:
        'https://graphql-engine-cdn.hasura.io/assets/graphql-asia/server-side-authentication-in-graphql.png',
    },
    title: 'Server-side Authentication in GraphQL',
    isWorkshop: true,
    speakersTitle: 'Presented by',
    backLink: '/workshops/',
    language: 'English',
    time: '12:30 pm -	03:30 pm',
    talkType: 'Workshop',
    description: [
      {
        desc:
          'A hands-on workshop about handling authentication and authorization in GraphQL. During this 3 hour workshop you’ll learn how to add authentication to a GraphQL server using JWTs, and handle query responses with user roles. As a bonus we’ll be adding an authentication server with Auth0.',
      },
    ],
    contents: [
      {
        title: 'The contents:',
        list: ['Authentication with JWTs', 'Handling query responses and user roles', 'Auth0'],
      },
      {
        title: 'Prerequisites:',
        list: ['JavaScript (preferably TypeScript)', 'GraphQL'],
      },
    ],
    speakersList: [
      {
        speakersUrl: '/speakers/roy-derks/',
        speakersName: 'Roy Derks',
        speakersImg: royDerks,
        speakersBio:
          'Roy Derks is a serial startup CTO, developer, author and conference speaker from Amsterdam. Currently leading the engineering teams at Vandebron, on a mission to provide the world with renewable energy.',
        speakersDesignation: (
          <span>
            Leading the Engineering teams,
            <br /> Vandebron
          </span>
        ),
        speakersOrg: 'Vandebron',
      },
    ],
  },
  {
    url: '/workshops/introduction-to-hasura/',
    metaTags: {
      title: 'Introduction to Hasura',
      canonicalUrl: 'https://graphql.asia/workshops/introduction-to-hasura/',
      description:
        'Hasura makes developers superhuman and simplifies app development with its open-source real-time API engine to instantly create reusable, real-time GraphQL and REST APIs from your new and existing data',
      metaImg: 'https://graphql-engine-cdn.hasura.io/assets/graphql-asia/introduction-to-hasura.png',
    },
    title: 'Introduction to Hasura',
    backLink: '/workshops/',
    language: 'English',
    time: '08:00 am -	10:30 am',
    talkType: 'Workshop',
    isWorkshop: true,
    speakersTitle: 'Presented by',
    description: [
      {
        desc:
          'Hasura makes developers superhuman and simplifies app development with its open-source real-time API engine to instantly create reusable, real-time GraphQL and REST APIs from your new and existing data',
      },
      {
        desc:
          'This 90 minute hands-on workshop will help new users get familiar with Hasura by building a fully functional realtime backend with Hasura.',
      },
    ],
    speakersList: [
      {
        speakersUrl: '/speakers/praveen-durairaju/',
        speakersName: 'Praveen Durairaju',
        speakersImg: praveenDuriaraju,
        speakersDesignation: (
          <span>
            Developer Advocate,
            <br />
            Hasura
          </span>
        ),
        speakersOrg: 'Hasura',
      },
    ],
  },
  {
    url: '/workshops/graphql-in-the-jamstack/',
    metaTags: {
      title: 'GraphQL in the Jamstack',
      canonicalUrl: 'https://graphql.asia/workshops/graphql-in-the-jamstack/',
      description:
        'The adoption rate of the Jamstack is increasing at a tremendous pace. At its core, sites created with the Jamstack utilise static sites generated by various tools. Some of these tools utilise GraphQL heavily from querying metadata to querying dynamic page content. As part of this workshop attendees will have the opportunity to familiarise themselves with Gatsby.js and learn how to build a Jamstack application while leveraging GraphQL and learning about the core pillars of the Jamstack.',
      metaImg:
        'https://graphql-engine-cdn.hasura.io/assets/graphql-asia/graphql-in-the-jamstack.png',
    },
    title: 'GraphQL in the Jamstack',
    isWorkshop: true,
    speakersTitle: 'Presented by',
    backLink: '/workshops/',
    language: 'English',
    time: '08:00 am -	10:30 am',
    talkType: 'Workshop',
    description: [
      {
        desc:
          'The adoption rate of the Jamstack is increasing at a tremendous pace. At its core, sites created with the Jamstack utilise static sites generated by various tools. Some of these tools utilise GraphQL heavily from querying metadata to querying dynamic page content. As part of this workshop attendees will have the opportunity to familiarise themselves with Gatsby.js and learn how to build a Jamstack application while leveraging GraphQL and learning about the core pillars of the Jamstack.',
      },
    ],
    takeaways: [
      {
        desc: 'Attendees will be able to learn about the core principles of the Jamstack, while understanding how GraphQL can be utilised via Gatsby.js - a popular open source framework based on React.',
      },
    ],
    speakersList: [
      {
        speakersUrl: '/speakers/tamas-piros/',
        speakersName: 'Tamas Piros',
        speakersImg: tamasPiros,
        speakersBio:
          'Tamas is a Google Developer Expert in Web Technologies and a seasoned Developer Evangelist. He is a passionate advocate for modern web technologies, helping people understand and unlock the latest & greatest features of web development.',
        speakersDesignation: (
          <span>
            Developer Evangelist,
            <br />
            Cloudinary
          </span>
        ),
        speakersOrg: 'Cloudinary',
      },
    ],
  },
  {
    url: '/workshops/type-safe-graphql-apps-with-typescript/',
    metaTags: {
      title: 'Type-safe GraphQL apps with TypeScript',
      canonicalUrl: 'https://graphql.asia/workshops/type-safe-graphql-apps-with-typescript/',
      description:
        'The adoption rate of the Jamstack is increasing at a tremendous pace. At its core, sites created with the Jamstack utilise static sites generated by various tools. Some of these tools utilise GraphQL heavily from querying metadata to querying dynamic page content. As part of this workshop attendees will have the opportunity to familiarise themselves with Gatsby.js and learn how to build a Jamstack application while leveraging GraphQL and learning about the core pillars of the Jamstack.',
      metaImg:
        'https://graphql-engine-cdn.hasura.io/assets/graphql-asia/type-safe-graphql-apps-with-typescript.png',
    },
    title: 'Type-safe GraphQL apps with TypeScript',
    isWorkshop: true,
    speakersTitle: 'Presented by',
    backLink: '/workshops/',
    language: 'English',
    time: '08:00 am -	10:30 am',
    talkType: 'Workshop',
    description: [
      {
        desc:
          'In this workshop we’re going to look at how to bring type-safety to our GraphQL apps using TypeScript. For our server, we’ll look at how we can share types between the schema, resolvers and data access layer. Then we’ll take a look at how to share those types across to our client application (we’ll use React in the workshop).',
      },
      {
        desc:
          'It\'ll be a hands on workshop, so be prepared to get ready to implement your own type safe JavaScript GraphQL application.',
      },
    ],
    contents: [
      {
        title: 'Prerequisites:',
        desc: <span>A VS Code <a href='https://code.visualstudio.com/docs/remote/containers' target='_blank' rel='noopener noreferrer'>Devcontainer</a> will be provided that contains all dependencies ready to go. If attendees are unable to use a VS Code Devcontainer, they will need to have</span>,
        list: [
          'Node.js 12',
          'An editor',
          <span>Latest version of the <a href='https://docs.microsoft.com/en-us/azure/azure-functions/functions-run-local#v2' target='_blank' rel='noopener noreferrer'>Azure Function Core Tools</a> to run the GraphQL server</span>
        ],
      },
      {
        desc: 'Some prior knowledge of TypeScript will be beneficial, but not required. An Azure account will be needed if they wish to deploy it at the end of the workshop.'
      },
    ],
    takeaways: [
      {
        desc: 'At the end of the workshop, attendees should have an understanding of the options for creating type-safe GraphQL applications, and how to have that type-safety applied to the client and server components.',
      },
    ],
    speakersList: [
      {
        speakersUrl: '/speakers/aaron-powell/',
        speakersName: 'Aaron Powell',
        speakersImg: aaronPowell,
        speakersBio:
          'Aaron is a Developer Advocate at Microsoft. Having spent 15 years doing web development he’s seen it all, from browser wars, the rise of AJAX and the fall of 20 JavaScript frameworks (and that was just yesterday!). Always tinkering with something new he explores crazy ideas like writing your own implementation of numbers in .NET, creating IoC in JavaScript or implementing tic-tac-toe using git commits. When not sitting at a computer he can be found running while pushing his two kids in a pram.',
        speakersDesignation: (
          <span>
            Principal Cloud Advocate,
            <br />
            Microsoft
          </span>
        ),
        speakersOrg: 'Microsoft',
      },
    ],
  },
  {
    url: '/workshops/graphql-on-sql-server-with-hasura/',
    metaTags: {
      title: 'GraphQL on SQL Server with Hasura',
      canonicalUrl: 'https://graphql.asia/workshops/graphql-on-sql-server-with-hasura/',
      description:
        'Learn how to leverage GraphQL while keeping your stack in place with this hands-on workshop demonstrating the new multi-database support in Hasura. This workshop will show how to bring an existing MSSQL database into the Hasura engine and unlock all the benefits of GraphQL and Hasura\'s business-logic mapping layer. Existing knowledge of MSSQL will be helpful but not required as we\'ll focus most of our time on bringing the database into Hasura itself and mapping additional logic on top of this powerful stack.',
      metaImg:
        'https://graphql-engine-cdn.hasura.io/assets/graphql-asia/graphql-on-sql-server-with-hasura.png',
    },
    title: 'GraphQL on SQL Server with Hasura',
    isWorkshop: true,
    speakersTitle: 'Presented by',
    backLink: '/workshops/',
    language: 'English',
    time: '12:30 pm -	03:30 pm',
    talkType: 'Workshop',
    description: [
      {
        desc:
          'Learn how to leverage GraphQL while keeping your stack in place with this hands-on workshop demonstrating the new multi-database support in Hasura. This workshop will show how to bring an existing MSSQL database into the Hasura engine and unlock all the benefits of GraphQL and Hasura\'s business-logic mapping layer. Existing knowledge of MSSQL will be helpful but not required as we\'ll focus most of our time on bringing the database into Hasura itself and mapping additional logic on top of this powerful stack.',
      },
    ],
    contents: [
      {
        title: 'Prerequisites:',
        list: [
          'Familiarity with MSSQL or Postgres',
        ],
      },
    ],
    takeaways: [
      {
        list: [
          'Learn how to add MSSQL to Hasura',
          'Learn how Hasura Actions, Functions, and GraphQL can accelerate your time-to-market',
        ],
      },
    ],
    speakersList: [
      {
        speakersUrl: '/speakers/jesse-martin/',
        speakersName: 'Jesse Martin',
        speakersImg: jesseMartin,
        speakersBio:
          'Jesse Martin is an experienced teacher and digital strategist, helping companies learn about new technologies and apply them to real-world problems. He\'s currently working in technical product marketing at Hasura Inc.',
        speakersDesignation: (
          <span>
            Technical Product Marketer,
            <br />
            Hasura
          </span>
        ),
        speakersOrg: 'Hasura',
      },
    ],
  },
  {
    url: '/workshops/building-distributed-graph/',
    metaTags: {
      title: 'Building Distributed Graph',
      canonicalUrl: 'https://graphql.asia/workshops/building-distributed-graph/',
      description:
        ' In this workshop we will go through building an enterprise-scale unified but distributed data graph. We will use various methodologies and frameworks to build data graph.',
      metaImg:
        'https://graphql-engine-cdn.hasura.io/assets/graphql-asia/building-distributed-graph.png',
    },
    title: 'Building Distributed Graph',
    isWorkshop: true,
    speakersTitle: 'Presented by',
    backLink: '/workshops/',
    language: 'English',
    time: '08:00 am -	10:30 am',
    talkType: 'Workshop',
    description: [
      {
        desc:
          'In this workshop we will go through building an enterprise-scale unified but distributed data graph. We will use various methodologies and frameworks to build data graph.',
      },
    ],
    takeaways: [
      {
        desc: 'Attendees gets exposure to various ways to create distributed data graph',
      },
    ],
    speakersList: [
      {
        speakersUrl: '/speakers/sandipan-biswas/',
        speakersName: 'Sandipan Biswas',
        speakersImg: sandipanBiswas,
        speakersBio:
          'Sandipan is a developer at Atlassian working on Jira Service Management focusing on Incident Management. He has experience building highly scalable, reliable, available distributed systems. He has worked on GraphQL to build incident management on top of Services exposed in Jira Service Management.',
        speakersDesignation: (
          <span>
            Software Developer,
            <br />
            Atlassian
          </span>
        ),
        speakersOrg: 'Atlassian',
      },
    ],
  },
];
const scheduleDetailsOne = [
  {
    type: 'break',
    title: 'Conference Begins',
    time: '10:25 am',
  },
  {
    url: '/talks/developer-productivity-with-graphql/',
    type: 'talk',
  },
  {
    url: '/talks/intelligent-caching-with-graphql-gateway-using-cdc/',
    type: 'talk',
  },
  {
    type: 'break',
    title: '15 Minute Break',
    time: '11:25 am - 11:40 am',
  },
  {
    url: '/talks/scalable-and-resilient-graphql-subscriptions-with-distributed-sql-databases/',
    type: 'talk',
  },
  {
    url: '/talks/building-high-performing-applications-using-graphql-for-heterogeneous-system/',
    type: 'talk',
  },
  {
    type: 'break',
    title: '15 Minute Break',
    time: '12:15 pm - 12:30 pm',
  },
  {
    url: '/talks/adding-bleeding-edge-tech-to-archaic-government-graphql-for-govtech/',
    type: 'talk',
  },
  {
    url: '/talks/connect-your-enterprise-systems-with-graphql-using-apache-kafka-and-hasura/',
    type: 'talk',
  },
];
const scheduleDetailsTwo = [
  {
    type: 'break',
    title: 'Day 2 Begins',
    time: '07:55 am',
  },
  {
    url: '/talks/the-state-of-graphql/',
    type: 'talk',
  },
  {
    url: '/talks/graphql-error-handling-done-right/',
    type: 'talk',
  },
  {
    type: 'break',
    title: '15 Minute Break',
    time: '08:55 am - 09:10 am'
  },
  {
    url: '/talks/reintroducing-schema-stitching-in-2021/',
    type: 'talk',
  },
  {
    url: '/talks/a-tale-of-inherited-projects-and-why-we-kept-hasura/',
    type: 'talk',
  },
  {
    url: '/talks/graphql-and-microservices-the-different-approaches-and-challenges/',
    type: 'talk',
  },
  {
    type: 'break',
    title: '15 Minute Break',
    time: '10:15 am - 10:30 am'
  },
  {
    url: '/talks/evolution-of-graphql-at-tokopedia-with-increase-in-scale/',
    type: 'talk',
  },
  {
    url: '/talks/adopting-graphql-in-a-legacy-nodejs-api/',
    type: 'talk',
  },
  {
    url: '/talks/3factor-app-an-accessible-design-pattern-for-serverless/',
    type: 'talk',
  },
  {
    type: 'break',
    title: '15 Minute Break',
    time: '11:30 am - 11:45 am'
  },
  {
    url: '/talks/data-science-with-weaviate-and-graphql/',
    type: 'talk',
  },
  {
    url: '/talks/monorepo-development-using-hasura-role-and-graphql-code-generator/',
    type: 'talk',
  },
  {
    url: '/talks/graphql-wrong-answers-only/',
    type: 'talk',
  },
];
const workshopScheduleDetails = [
  {
    url: '/workshops/introduction-to-hasura/',
    type: 'workshop',
  },
  {
    url: '/workshops/graphql-in-the-jamstack/',
    type: 'workshop',
  },
  {
    url: '/workshops/type-safe-graphql-apps-with-typescript/',
    type: 'workshop',
  },
  {
    url: '/workshops/building-distributed-graph/',
    type: 'workshop',
  }
];
const workshopScheduleDetailsTwo = [
  {
    url: '/workshops/server-side-authentication-in-graphql/',
    type: 'workshop',
  },
  {
    url: '/workshops/graphql-on-sql-server-with-hasura/',
    type: 'workshop',
  }
]
export { speakersDetails, talkDetailsPage, scheduleDetailsOne, scheduleDetailsTwo, workshopScheduleDetails, workshopScheduleDetailsTwo };
