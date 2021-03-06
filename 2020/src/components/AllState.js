const robertZhu = require('../images/Robert-Zhu.png');
const sarjeelYusuf = require('../images/Sarjeel-Yusuf.png');
const vishakhaSingh = require('../images/Vishakha-Singh.png');
const radoslavStankov = require('../images/Radoslav-Stankov.png');
const gagoFrigerio = require('../images/Gago-Frigerio.png');
const shipraGupta = require('../images/Shipra-Gupta.png');
const ivanGoncharov = require('../images/Ivan-Goncharov.png');
const samJulien = require('../images/Sam-Julien.png');
const lachlanYoung = require('../images/Lachlan-Young.png');
const vilvaAthiban = require('../images/Vilva-Athiban.png');
const kiranKumar = require('../images/Kiran-Kumar.png');
const vijayanSrinivasan = require('../images/Vijayan-Srinivasan.png');
const balaDutt = require('../images/Bala-Dutt.png');
const arunLingala = require('../images/Arun-Lingala.png');
const yogeshDesai = require('../images/Yogesh-Desai.png');
const abinashMohapatra = require('../images/Abinash-Mohapatra.png');
const rajatKhare = require('../images/Rajat-Khare.png');
const seanGrove = require('../images/Sean-Grove.png');
const manishJain = require('../images/manish-jain.jpeg');
const tiru = require('../images/tiru.jpg');
const sauradyutiCoondu = require('../images/Sauradyuti-Coondu.jpg');
const ankitaMasand = require('../images/ankita-masand.png');
const ashwinGoyal = require('../images/ashwin.png');
const rajatArun = require('../images/Rajat-Arun.png');
const vijayanBala = require('../images/Vijayan-Bala.png');
const ankitaAbineshAshwinTanmai = require('../images/Ankita-Abinesh-Ashwin-Tanmai.png');
const tanmai = require('../images/Tanmai.jpg');
const apoorv = require('../images/apoorv.jpg');
const michael = require('../images/michael.png');
const dgraphSpeakers = require('../images/dgraph-speakers.png');
const ankitMuchhala = require('../images/Ankit-Muchhala.jpg');

const ameyBanarse = require('../images/Amey-Banarse.jpg');
const michaelCompton = require('../images/Michael-Compton.jpg');
const karthicRao = require('../images/Karthic-Rao.jpg');
const shahidhMuhammed = require('../images/Shahidh-Muhammed.jpg');
const anonRay = require('../images/Anon-Ray.png');

const beginner = require('../images/beginner.svg');
const intermediate = require('../images/intermediate.svg');
// const communityTag = require('../images/community-tag.svg');
const talkTag = require('../images/talk-tag.svg');
const panelTalk = require('../images/panel-talk.svg');
const registration = require('../images/registration.svg');
const lunch = require('../images/lunch.svg');
const tea = require('../images/tea.svg');
// const dinner = require('../images/dinner.svg');
// const hasura = require('../images/hasura-icon.svg');
const graphqlasia = require('../images/graphql-asia-logo-icon.png');
const speakerState = {
  'robert-zhu': {
    img: robertZhu,
    name: 'Robert Zhu',
    designation: 'PRINCIPAL TECHNICAL EVANGELIST',
    org: 'AWS',
    twitterLink: 'https://twitter.com/rbzhu/',
    githubLink: 'https://github.com/robzhu',
    title: 'A Peek at the Future of GraphQL',
    abstract:
      "Since the formation of the GraphQL Foundation last year in March, we have been working on creating a resilient process to govern the GraphQL ecosystem and language evolution. In this talk, I will discuss the roles and responsibilities of the GraphQL Foundation, Working-group, and steering committee. Then I will discuss upcoming improvements to GraphQL ecosystem projects such as GraphQL.org and GraphiQL. Finally, we will dive deep into the most promising proposals for additions to the specification. By the end of the talk, you'll have a good sense for the direction that we are taking GraphQL in the next few years.",
    day: 1,
  },
  'manish-jain': {
    img: manishJain,
    name: 'Manish Jain',
    designation: 'FOUNDER',
    org: 'DGRAPH',
    twitterLink: 'https://twitter.com/manishrjain',
    githubLink: 'https://manishrjain.github.io/',
    title: 'Back to GraphQL',
    description:
      'At Dgraph we love GraphQL, so much that we built our graph database around the language. Early on, we decided we should modify the language in order to make it a better graph query language, therefore creating GraphQL+-. That decision was not without an important trade-off. By abandoning the specification we also made it harder to interact with the rest of the very rich GraphQL ecosystem. We recently decided to provide a GraphQL compliant spec API in addition to the existing GraphQL+- one, and our plans now include migrating some of the constructs we added to GraphQL+- back into GraphQL without breaking compatibility.How can  we build recursive queries, group by values, or structurally change a  response to our queries in GraphQL? Well, that’s the great question we are answering at Dgraph and we want to share our solutions, prototypes, and future ideas.',
    about:
      "Manish Jain is the founder of Dgraph Labs and the author of Dgraph, Badger, and Ristretto. He got thrust into real-time distributed systems right out of college, working in Web Search and Knowledge Graph infrastructure group at Google for 6.5 years. He led various projects to consolidate and serve all structured data including the knowledge graph right behind web search by building a graph indexing and serving system. After leaving Google, he decided to use this knowledge to build a scalable graph database, which could be used by big and small companies alike to serve the increasingly complex data warranted by today's applications. He has given multiple talks at various Go meetups and conferences, most notably in Gophercon Shanghai where he presented in front of a thousand developers.",
    day: 1,
  },
  'vishakha-singh': {
    img: vishakhaSingh,
    name: 'Vishakha Singh',
    designation: 'SOFTWARE ENGINEER',
    org: 'PAYPAL',
    twitterLink: 'https://twitter.com/visheei',
    title: 'How we improved PayPal checkout conversions using GraphQL',
    abstract:
      'At PayPal, we are rebuilding our checkout experience from ground up. Most important problem we are solving is to make the experience super fast. Come hear our story on how we leveraged GQL server to smartly and efficiently present varied regional payment experiences to people all around the globe.',
    about:
      'Vishakha is a software engineer at PayPal where she works to make the checkout experience faster and better. She completed her Masters from Georgia Tech specializing in Computer Networks only to later realize her passion for Javascript and UI engineering. She also loves spending time meditating, baking and experimenting with makeup!',
    day: 1,
  },
  'radoslav-stankov': {
    img: radoslavStankov,
    name: 'Radoslav Stankov',
    designation: 'HEAD OF ENGINEERING',
    org: 'PRODUCTHUNT',
    twitterLink: 'https://twitter.com/rstankov',
    githubLink: 'https://gist.github.com/RStankov',
    title: '3 Year GraphQL in Production at Product Hunt',
    abstract:
      'Lessons learned from 4 years running GraphQL on top of Ruby on Rails. The talk will focus on concrete problems and their solutions.',
    description:
      'Show all mistakes and solution to problems, I have encountered during the last year and a half when replacing Product Hunt REST API with GraphQL. Show how GraphQL can improve the application structure of a Rails application. So it is effortless for backend developers to develop and maintain features. Integrating GraphQL with Rails resolver first schema design application structure authorization optimization and performance monitoring making frontend and backend tools to play well with each other',
    about:
      'Web developer with 15+ years of experience, currently is head of engineering at Product Hunt (by Angel List). Lately, he is juggling between Ruby, Javascript, and Elixir projects, with the belief that it’s equally important to work both on the frontend and on the backend. Organizer of React.Sofia meetup, React.NotAConf conference.',
    day: 1,
  },
  'gago-frigerio': {
    img: gagoFrigerio,
    name: 'Gago Frigerio',
    designation: 'STAFF ENGINEER',
    org: 'COURSERA',
    twitterLink: 'https://twitter.com/gagoar',
    githubLink: 'https://github.com/gagoar',
    title: 'Taming schemas at scale: A modular approach to GraphQL ',
    abstract:
      'As the size of your schema grows you start to ask yourself some common questions. Who owns what parts of the schema? How do you share common functionality across the graph? Modules to the rescue! We have answered these questions and more with a modular approach to GraphQL - come and see how!',
    description:
      'To get the most out of GraphQL, most organizations end up exposing a single graph that provides a unified interface for querying all of your backing data. As your graph grows, however, it can become inefficient or even difficult to represent the graph without running into organizational problems such as schema management and ownership across the organization. To remedy this, you can divide your schema into modules that are composable, portable, and reusable, all while retaining clear and strong ownership within the graph. How does this actually work? Modules are stand-alone sections of the graph that are designed to be composed together. This gives us the flexibility to fully decouple the parts of the graph that the organization cares about (Who owns this type? Who owns this resolver? How do we share common functionality? ) from the construction of the graph itself. An extra added benefit is that modules let you prepare for federation without the operational overhead. We have built a brand new GraphQL stack using a modular approach with the intent to optimize for developer experience, ownership, and schema design. Using a combination of open-source tools such as graphql-code-generator, graphql-modules, along with some of our own custom tooling, we have been able to construct modules that are both fully isolated as well as easily composable. This approach has been invaluable in growing our graph and will likely be helpful for you too!',
    about:
      'I’m from Argentina and I work on the Developer Experience team at Coursera. I love dogs more than I love humans, playing pool and drinking dark beer.',
    day: 2,
  },
  'shipra-gupta': {
    img: shipraGupta,
    name: 'Shipra Gupta',
    designation: 'COMPUTER SCIENTIST',
    org: 'ADOBE',
    twitterLink: 'https://github.com/shipraguptaa',
    title: 'GraphQL as an API gateway in microservices architecture',
    abstract:
      'Have you heard of the term GraphQL, and not sure what it is about? Ever had to choose between API comfortable for users and “the right REST” API? Does your client make multiple rest requests corresponding to one click on UI? Do you want to reduce latency because of multiple REST calls over network.',
    description:
      'Have you heard of the term GraphQL, and not sure what it is about? Ever had to choose between API comfortable for users and “the right REST” API? Does your client make multiple rest requests corresponding to one click on UI? One backend service and multiple clients with different data requirements because of which you end up overfetching or underfetching the data? Do you own and maintain a fleet of REST endpoints and are tired of constantly checking with the client teams, on the usage of these endpoints or on the return types in the responses? Do you want to remove client teams’ dependencies on API teams? Did you have to maintain different versions of an api? ##REST vs GraphQL With a REST API, you would typically gather the data by accessing multiple endpoints. In the example, these could be /users/ endpoint to fetch the initial user data. Secondly, there’s likely to be a /users//posts endpoint that returns all the posts for a user. The third endpoint will then be the /users//followers that returns a list of followers per user. In GraphQL on the other hand, you’d simply send a single query to the GraphQL server that includes the concrete data requirements. Advantages Increased performance minimizes server round trips by aggregating data(schema stiching) from multiple source in a single request which reduces network overhead Optimum Payload- No more overfetching or underfetching of data by specifying the required data. Conditionally load or mutate data according to different client needs using resolvers. Increased developer experience With GraphQL, Client engineers don’t have to spend time to ask the API team to add or modify something. GraphQL is self-documenting which means less time trying to figure out how to use an undocumented API. Client engineers have all the control and request only things they need without modifications on the backend. This is truly liberating. Evolve your API without versions In GraphQL there are no API versions as there used to be in REST. Add new fields and types to your GraphQL API without impacting existing queries. Aging fields can be deprecated and hidden from tools. Thus a client receives a deprecation warning when querying a deprecated field. After a while, the deprecated field may be removed from the schema when not many clients are using it anymore. By using a single evolving version, GraphQL APIs give apps continuous access to new features and encourage cleaner, more maintainable server code. Improved Security, Strong Types and Validation GraphQL schemas are defined using the GraphQL Schema Definition Language (SDL). This schema serves as the contract(Single source of truth) between the client and the server to define how a client can access the data. Once the schema is defined, the teams working on frontend and backends can do their work without further communication since they both are aware of the definite structure of the data that’s sent over the network. GraphQL offers enhanced security over JSON RESTful APIs for two main reasons: a strongly typed schema (e.g., data and type validation) and an ability to filter sensitive data (no unintentionally leaked data). Graceful degradation during a service outage In microservices, it is common that requesting data fails because one of the underlying services is temporarily unavailable. GraphQL solves this problem elegantly by allowing resolvers to report errors to the client without terminating the entire request. In this way, clients can be made aware of service outages when requesting data, and react to the data that is available. Then they can potentially retry only the failing portion of the request at a future time by simply modifying the client query to backfill the missing data. Rich open source community Today, reference implementations of the GraphQL specification are available in various languages and there’s a plethora of GraphQL clients. In addition, lots of tooling provide seamless workflows and make for an amazing developer experience when building GraphQL APIs.',
    about:
      'I work as Computer Scientist in Adobe. I am a part of GraphQL service team since its inception and have designed, developed and implemented GraphQL service in Adobe which is successfully running in production. At Adobe, we found that there were multiple REST calls over network to load one page which was impacting performance and customer experience. In our journey of improving performance, GraphQL played a major role and I want to share my experience with everyone.',
    day: 2,
  },
  'ivan-goncharov': {
    img: ivanGoncharov,
    name: 'Ivan Goncharov',
    designation: 'GRAPHQL CONSULTANT',
    org: 'APIS.GURU',
    twitterLink: 'https://twitter.com/E1Goncharov',
    githubLink: 'https://github.com/IvanGoncharov',
    title: 'Hidden gems of GraphQL query',
    abstract:
      'We all love GraphQL query syntax because it’s simple and easy to learn. At the same time, it has a few useful features that are typically overlooked. If you think that you already know everything about GraphQL queries this talk is for you. Warning: spoilers from GraphQL Specification',
    description:
      'We all love GraphQL query syntax because it’s simple and easy to learn. At the same time, it has a few useful features that are typically overlooked. If you think that you already know everything about GraphQL queries this talk is for you. Warning: this talk will contain spoilers from GraphQL Specification I will talk about: * Implicit conversion of arguments * Default values for query arguments * Using block strings in arguments * extending query results and errors',
    about:
      'Ivan is the maintainer of graphql-js, an active contributor to GraphQL Specification and works as contractor for GraphQL Foundation.',
    day: 1,
  },
  'sarjeel-yusuf': {
    img: sarjeelYusuf,
    name: 'Sarjeel Yusuf',
    designation: 'PRODUCT MANAGER',
    org: 'ATLASSIAN',
    twitterLink: 'https://twitter.com/SarjeelY',
    githubLink: 'https://github.com/AmateurIndian',
    title: 'Better IoT with Serverless GraphQL',
    abstract:
      'IoT was meant to revolutionize how we were meant to integrate tech into our lives. However, IoT adoption is dismal due to a myriad of problems. The solution lies in the way we service our IoT devices on the data and compute layer, and a serverless GraphQL architecture has all the solutions.',
    description:
      'Crux of the Matter There are several challenges to the IoT model that has hampered its use, albeit major innovative strides made over the years. These issues include security, infrastructure, lack of standardization between devices, cost and development. All these barriers are hampering the implementation of crucial and valuable IoT solutions. However, novel technologies in the domain of software are providing solutions to these problems and one such technology is GraphQL on a serverless platform providing data and compute services to IoT devices. Serverless Benefits Serverless is a perfect platform for IoT devices, especially those that are not used frequently. This is because of the serverless postulates that AWS Lambda manifests. These include: * The Abstraction of server responsibility. * Scalability * Pay-as-you-go model The three properties of a serverless architecture would greatly benefit IoT adoption. IoT developers now would no longer need to worry about setting up and maintaining their own servers within their architecture. This job can now be abstracted to the cloud vendor. This easier development, assured scalability and potentially lower costs. GraphQL in the Mix GraphQL and is a syntax defining the way data is handled. With GraphQL schemas clients can get the exact data that they requested, IoT devices can be added to the network without worrying about new end-points and enhancements to data retrieval and processing. This promotes the standardization of IoT devices and the ease and reliability of development. Furthermore, since GraphQL is simply the syntax and concept, there are several developer tools to choose from. However, AppSync provides unmatched benefits for IoT, calling for its use in the IoT architecture. These benefits include offline-support, batch processing, automatic code gen and ease in serverless Lambda integration. All of this further mitigates the problems of IoT and advocates for its adoption. Hence this session is aimed at outlining the problems of IoT and describing the solutions of a serverless GraphQL backend in hopes of redefining the way IoT developers implement their solutions.',
    about:
      'An aspiring stand-up comedian thrown into the field of serverless right after graduation, Sarjeel had been working on serverless monitoring at Thundra.io for about a year. In 2019 he made the switch to Atlassian, but his passion still lies in serverless technology as is manifest in his articles exploring the realm of serverless from automatic monitoring to IoT in serverless and GraphQL processing Lambda functions. Sarjeel can usually be found in cafes discussing Eastern philosophy versus Western philosophy and laughing at the comedies of life.',
    day: 2,
  },
  'lachlan-young': {
    img: lachlanYoung,
    name: 'Lachlan Young',
    designation: 'FULL-STACK DEVELOPER',
    org: 'TANDA',
    twitterLink: 'https://twitter.com/builtbyproxy',
    githubLink: 'https://github.com/builtbyproxy',
    title: 'How to convince your boss to use GraphQL',
    abstract:
      'Being the new kid In town, GraphQL certainly has it’s appeal to gen-pop of our tech jungle. But how do you integrate and/or replace the king without alienating the rest of your subjects? Join me in discussing the philosophy behind API design and how/why it is imperative to the success of a product.',
    description:
      'GraphQL is rolling out quicker and quicker as the community around it grows and improves what was once just a vision. Yet each addition to our tech stack, brings with it its own core problems, most notably of which is how to replace the old? To date one of the biggest barriers to entry with a GraphQL API is the technical debt of maintaining two APIs or alternatively, the consequences of deprecating the Industry standard in its favour. Fortunately, we can look to our predecessors as this is not the first time our API standard has been challenged. Whilst GraphQL itself is intended to be a layer, connecting two sides of an intricately woven coin of routes, operations and responses. GraphQL faces the same problems REST initially did when attempting to scrub itself clean of SOAP, XML and the like. On the menu today we will be starting with a smooth overview of previous successors, followed by an in-depth comparison of working with both a Server-less private GraphQL Api and, a monolithic Versioned API designed for private and public consumption alike. For dessert a few war stories chased with a generous helping of philosophy around the importance of APIs and how they truly dictate the balance between success and failure of a product.',
    about:
      'When I’m not taking long walks on the beach or pursuing some ridiculous side project with the excuse of ‘learning a new skillset’ cough weebg cough, you’ll find me 9-5 overselling my skills and thriving under the pressure at Tanda. I’m a self taught programmer who has a degree in game development and included in my skillset is the ability to not take myself to seriously. I got my start creating a White Label API for a company called Fabric and programming quickly became my full time hobby. For the last two years I have been fortunate enough to find myself on a multitude of different projects including computational pointcloud calculations with C++, web development with Polymer, Full Stack React development, a GraphQL React native app and finally, a monolithic powerhouse utilising all my past experience to build a platform using Ruby, NodeJs, React, GraphQL and React. The saying goes “find something you love and do it on the weekends”. I found that out after I found full time employment and I am the living embodyment that one size does not fit all. I;m at a stage in my ‘journey’ if you will, where I am looking to give back whilst the beginning is still fresh. If I can help you with that at all, please don’t hesitate to reach out.',
    day: 1,
  },
  'sam-julien': {
    img: samJulien,
    name: 'Sam Julien',
    designation: 'DEVELOPER ADVOCATE ENGINEER',
    org: 'AUTH0',
    twitterLink: 'https://twitter.com/samjulien',
    githubLink: 'https://github.com/samjulien',
    title: 'Becoming a “Secret” Agent: Securing Your GraphQL Backend with JWTs',
    abstract:
      'Are you confused about how authentication and authorization relate to your GraphQL API? You’re not alone! Learning auth can be tough, so let’s demystify it with some practical teaching on how to use JSON Web Tokens (JWTs) with your GraphQL APIs.',
    description:
      'Are you confused about how authentication and authorization relate to your GraphQL API? You’re not alone! It’s no secret that learning auth is hard enough on its own, let alone while trying to understand how it fits with GraphQL. Let’s demystify authentication with some practical teaching on how to use JSON Web Tokens (JWTs) to add authentication to your GraphQL APIs! We’ll first shed light on some auth terminology and talk about the problem of delegated access. We’ll also discuss options to consider when choosing an authorization strategy and whether any considerations need to be made for using your GraphQL backend with a frontend on the same server versus on an external server along with multiple APIs. We’ll then step through how to handle authorization in your GraphQL server, including several options for handling access to protected data. This talk will use JavaScript examples, but the principles will apply to other backend technologies. By the end, you’ll feel a whole lot better about tackling auth in GraphQL!',
    about:
      'Sam Julien is an Angular GDE and Collaborator, a Developer Advocate Engineer at Auth0, and the creator of UpgradingAngularJS.com. He’s also the author of “Up and Running with Gatsby” on Thinkster.io. His favorite thing in the world is being outside drinking good scotch next to a fire he built himself.',
    day: 2,
  },
  'kiran-kumar-abburi': {
    img: kiranKumar,
    name: 'Kiran Kumar Abburi',
    designation: 'FOUNDER',
    org: 'NEOSTACK',
    twitterLink: 'https://twitter.com/kiran_abburi',
    title: 'Potential of GraphQL Directives',
    abstract:
      'GraphQL is good interface to build modern API’s. Some of its features like directives, introspection enable us to build tools that solve common network problems. In this talk, I will take a deep dive into GraphQL directives and explain how to abstract common patterns into custom directives.',
    description:
      'GraphQL is good interface to build modern API’s. Some of its features like directives, introspection enable us to build tools that solve common network problems in apps. In this talk, I will take a deep dive into GraphQL directives and explain how to abstract common patterns into custom directives. This talk broadly divided into 2 parts 1) How to use schema directives to solve problems on server 2) How to use query directives to solve problems on client',
    about: 'Kiran Abburi is founder of neostack.com and organizer of React Bangalore',
    day: 1,
  },
  'vijayan-srinivasan': {
    img: vijayanSrinivasan,
    name: 'Vijayan Srinivasan',
    designation: 'Group Development Manager',
    org: 'INTUIT',
    twitterLink: 'https://twitter.com/vijayanskp',
    githubLink: 'https://github.com/vijayan007',
    title: 'Authorization for GraphQL @ Intuit',
    abstract:
      'Intuit is transforming all it’s APIs from SOAP and REST to GraphQL. My team is responsible for defining the Authorization mechanism for whole of Intuit, This talk will cover how we use Attribute Based Access Control (ABAC) to provide authorization for Intuit APIs which are public and private.',
    description:
      'Intuit’s Data stewardship principles secure user’s PII, financial and tax information. Dimensionality of authorization enforcing this includes access mode (e.g. OLTP, OLAP, Big data and messaging), APIs (e.g. Restful, GraphQL), clients (device, desktop, web, first party, second party and third party), platforms(e.g. Java, Node, .NET), deployments (e.g. monoliths, micro-services, gateway, service mesh), complex rules (for variety of usecases, global products with local compliance and multiple domains) and subjects from internal (enterprise), B2B and B2C. Intuit’s vision for security with agility is to decentralize policy authoring over multiple products while addressing strict performance needs. Domain local policies authored by thousands of developers should work with global policies set at domain or company level by security experts. Multiple authorizations for multiple resources per request are either by design of the product or due to micro-services architecture. Hence low latency requirement, not sacrificing demand for complex multiple policies. Design with learning from building and operating the solution will be presented. Modular and multi-strategy design was chosen. Scaling with respect to requests vs entities (subjects, resources) is discussed. Tactics enable for shorter story cycle time for developers with a first-use experience and robust governance. PIPs as microservices feed into policy in a scalable, performant way with strong consistency needs in multi-region deployments. Solution has remote and local execution of policy. Extensibility is built in as ABAC landscape evolves, better engines come up, AI is factored in or innovations are absorbed. AuthZ for GraphQL GraphQL landscape at Intuit 100’s of entities Home built vs other implementations of GraphQL platform Different programming languages for entity providers How is GraphQL authorization same or different from REST API based authorization It is API – so same Batching of multiple requests Data about fields and entities being access Dimensions of GraphQL AuthZ Programming model Annotation based authorization Declarative externalized authorization Enforcement point Method based authorization Gateway based authorization Decision model RBAC ABAC',
    about:
      'Leading Engineering for Intuit Identity Platform in India. Having 20 years of industry experience in building large scale platforms. Worked on startups and enterprises like Oracle, Yahoo! and Intuit!',
  },
  'bala-dutt': {
    img: balaDutt,
    name: 'Bala Dutt',
    designation: 'PRINCIPAL ENGINEER',
    org: 'INTUIT',
    twitterLink: 'https://twitter.com/baladutt',
    githubLink: 'https://github.com/baladutt',
    title: 'Authorization for GraphQL @ Intuit',
    abstract:
      'Intuit is transforming all it’s APIs from SOAP and REST to GraphQL. My team is responsible for defining the Authorization mechanism for whole of Intuit, This talk will cover how we use Attribute Based Access Control (ABAC) to provide authorization for Intuit APIs which are public and private.',
    description:
      'Intuit’s Data stewardship principles secure user’s PII, financial and tax information. Dimensionality of authorization enforcing this includes access mode (e.g. OLTP, OLAP, Big data and messaging), APIs (e.g. Restful, GraphQL), clients (device, desktop, web, first party, second party and third party), platforms(e.g. Java, Node, .NET), deployments (e.g. monoliths, micro-services, gateway, service mesh), complex rules (for variety of usecases, global products with local compliance and multiple domains) and subjects from internal (enterprise), B2B and B2C. Intuit’s vision for security with agility is to decentralize policy authoring over multiple products while addressing strict performance needs. Domain local policies authored by thousands of developers should work with global policies set at domain or company level by security experts. Multiple authorizations for multiple resources per request are either by design of the product or due to micro-services architecture. Hence low latency requirement, not sacrificing demand for complex multiple policies. Design with learning from building and operating the solution will be presented. Modular and multi-strategy design was chosen. Scaling with respect to requests vs entities (subjects, resources) is discussed. Tactics enable for shorter story cycle time for developers with a first-use experience and robust governance. PIPs as microservices feed into policy in a scalable, performant way with strong consistency needs in multi-region deployments. Solution has remote and local execution of policy. Extensibility is built in as ABAC landscape evolves, better engines come up, AI is factored in or innovations are absorbed. AuthZ for GraphQL GraphQL landscape at Intuit 100’s of entities Home built vs other implementations of GraphQL platform Different programming languages for entity providers How is GraphQL authorization same or different from REST API based authorization It is API – so same Batching of multiple requests Data about fields and entities being access Dimensions of GraphQL AuthZ Programming model Annotation based authorization Declarative externalized authorization Enforcement point Method based authorization Gateway based authorization Decision model RBAC ABAC',
  },
  'arun-lingala': {
    img: arunLingala,
    name: 'Arun Lingala',
    designation: 'Staff Software Engineer',
    org: 'INTUIT',
    twitterLink: 'https://twitter.com/ArunLingalaCBK',
    githubLink: 'https://github.com/arunlingala',
    title:
      'AutoFIT, a framework to automatically inject failures per request invocation to test fault tolerant/resilient GraphQL APIs',
    abstract:
      'How do you test your failure modes explicitly on GraphQL?. How can you take control of writing Automated Integration tests that simulate failure cases and test your resiliency and fallbacks. ? We talk about an approach we have used called AutoFIT that helps make this happen!',
    description:
      'As we design GraphQL interfaces that are a connection of types, it becomes very critical to think of all the failure points that can happen and how they will manifest on the GraphQL response. Its also important that as we plan automated Integration Testing on GraphQL interfaces that runs in CI/CD pipelines to be able to represent both success and failure test cases. Existing approaches have been hard and usually need the whole environment in a failure more to be able to simulate or mock error cases from downstream dependencies. In this talk we talk about a failure injection approach that can inject desired failures in context of a GraphQL query or mutation so that they stay contained to the request and can be run repeatedly in CI/CD environments!',
  },
  'yogesh-desai': {
    img: yogeshDesai,
    name: 'Yogesh Desai',
    designation: 'SSE',
    org: 'TOKOPEDIA',
    twitterLink: 'https://twitter.com/er_YogeshDesai',
    githubLink: 'https://github.com/yogesh-desai',
    title: 'GraphQL as an API Gateway for E-commerce at Scale with Tooling.',
    abstract:
      '"As many companies started using GraphQL in production with different requirements, it is now important that one should know what are the best practises for production environment. Different domain has different use-cases and according to the importance of it the implementation may vary. We at Tokopedia, #1 Indonesian e-commerce have implemented GraphQL as an API Gateway. The main part is the scale of the Tokopedia in production. Due to very high scale we need to tackle a lot of problems and implement various features. This talk is mainly focussing on all of such things like Tooling needed, Observability, features like SingleFlight, Cache, Circuit Breakers, Rate limiters, Error Handling, Security Features, multi-DC/multi-cloud enability. This talk will be an in-depth discussion of all of the above things and how to implement these on a big scale for E-commerce domain.',
    description:
      'Like Facebook, when they wanted to expand in Africa and Asia where network connectivity of 2G-3G is an issue; GraphQL was born. At Tokopedia, we had the same kind of problem as Indonesia is a country of 18,307 islands and network connectivity in all the regions is an issue. That’s why we started implementing GraphQL which enable us to achieve efficiency in network calls. We have GraphQL layer as an API Gateway. With the help of the GraphQL we were able to get the 60K Request Per Second in within just 2-3 months of development. We are also probably the biggest GraphQL implementation as an API Gateway in Asia region. GraphQL helped us to carry out all the events very smoothly by avoiding downtimes. Let’s go deeper by getting to know the company background and the scale at which company is operating. We had a lot of services already running in the production environment at scale. It was the year of 2017, we started to implement the GraphQL as a microservice in the organization. From a small service, GraphQL layer became one of the super-critical services at Tokopedia in a very short amount of time. We also has a very unique requirement of tooling in terms of code-generators. Let’s dive deep into each of the features. GQLTools: We have the very unique tool, we call is as GQLTools, which takes service curl calls as input and generate schema and resolvers automatically. This is probably not available in the market as it is highly specific to use-case of “GraphQL as an API Gateway for E-commerce domain”. Basically, GQLTools automate the integration process of any micro-service at GraphQL layer, we started developing and automating our GQLTools which ultimately grew and evolved with time. Currently, we have automated everything end-to-end including development, unit and integration testing. SingleFlight: Many a times it happens that a user sends multiple duplicate requests and results in unnecessary traffic on network bandwidth. It also puts an unnecessary load on the microservice. SingleFlight helps a lot in such scenarios and we implemented it at the GraphQL layer. Caching: Caching also helps a lot to reduce load on the microservice and enhance the overall speed resulting enhance user experience. We had implemented no. of caching techniques like in-memory caches and it helped us in great way in terms of performance. Caching also helps to maintain user experience for a while although service is down. At scale of Tokopedia, we had implemented a couple of caching mechanisms and tried to improve those as per our custom requirements. Circuit Breakers and rate limiters: Circuit Breakers and rate limiters help in managing the traffic scenarios and a must have to guard the backend service. If any service goes down due to some issue, Circuit Breakers comes into actions and blocks the requests going to the service. It closes back once the service is up again. Rate limiters helps by blocking any excessive errors requests coming to the service. Security: Security features like HMAC, CSRF helps to improve overall security in the environment and across all the organization. It enhances security greatly by avoiding any attacks from the outside body. Error handling is also another important aspect in terms of the handling of different scenarios and requests. Observability Platform: We required many things to track and observe as we started getting all the traffic at one place. It also helped a lot to improve performance and speed of the services and reduce latencies. The authentication came at one place reducing the load on accounts service and improving overall ecosystem. We also got a sense of traffic routes and were able to improve it in terms of performance. We have built an in-house platform similar to Optics of Apollo. It is a complete ecosystem of Dashboards, alerts to the services, actions items needed on the different events like query counts, RPS, fluctuations in the traffic. At last overall the talk will be sharing overall journey of GraphQL in Tokopedia until now.',
    day: 2,
  },
  'abinash-mohapatra': {
    img: abinashMohapatra,
    name: 'Abinash Mohapatra',
    designation: 'UI ENGINEER',
    org: 'FLIPKART',
    twitterLink: 'https://twitter.com/twistedfork88',
    githubLink: 'https://github.com/twistedfork88',
    title: 'Building Flipkart Ads Platform',
    abstract:
      'Have you been working on a project from scratch, severely timeboxed, uncompromising on DX, UX, security and performance. I am and Flipkart Ads Platform is just about that. We help advertisers create ads on our platform and we used GraphQL to serve our demands and give them the best experience.',
    description:
      'INTRO It was early 2019 and, we, Flipkart (one of the largest eCommerce companies in India) set out to build the “Flipkart Ads Platform”. It was a beastly task and we wanted to make everything right. Things that were important for us were: 1. Consumer-centricity - UX and polished UI is one of the core principles for building products at Flipkart. 2. Solving data centric problems - Solving overfetching/underfetching and the n+1 problem. 3. Reduce overall code bloat - Coming from facebook flux lib, to over redux, we feel that there’s considerable code bloat for fundamental operations like data fetching. We wanted to explore more and promising alternatives if they existed. 4. Developer experience - DX is usually one more than ever, neglected area in a fast paced team. Be it dependencies on backend teams for data or the lack of a rigid contract signed in blood that potentially doesn’t cause a big fatal crash on production, things like these do reduce the overall productivity of the developer over a span of time. TECH STACK Our team had expertise in React, Styled Components for UI and we stuck by them. For areas mentioned above, we chose Apollo, for our server and client implementation. To add, an SDL first (we create schemas first, then implement resolvers) approach with TypeScript was chosen. To help with the development, we used tooling like: Graphql-code-generator (to generate TS types from our graphql schemas), graphql-import, Merge-graphql-schemas and lodash merge to distribute our schemas and resolvers. This helps ensure separation of concerns between various schemas and resolvers, while finally stitching them before instantiating Apollo Server. To summarise our architecture, UI/client talks to an Apollo Server. The apollo server in turn talks to various data provider systems via REST, collates and massage the response and sends it back to the client. TYPESCRIPT and GRAPHQL GraphQL is a typed system i.e the server’s schema (input request types or server response) have a well defined type. However, with TS in the system, it’d be a mess to re-create the types/interfaces defined on the server for TS. As discussed, we follow a SDL first development approach i.e. we define our server graphql schemas first. Now that we have our schemas, it’d be great if we could automatically create the corresponding TS interfaces or say make our resolvers typed. To help with this, we used “graphql-code-generator” tool. To add, this tool also generates react apollo components and HOCs with TS typings. This saves a lot of bandwidth for creating TS interfaces and resolver typings. This tool works with developer defined plugins that runs on a graphql schemas to generate TS interfaces. For e.g. a sample config file for the tool: schema: http://localhost:3000/graphql documents: ./src/*/.graphql generates: ./src/types.ts: plugins: - typescript - typescript-react-apollo FILES in GRAPHQL Files are an important entity in our ecosystem. Apollo Server 2.0 now provides a custom “Upload” scalar which serves file uploads. On the client, Apollo allows multipart requests for file uploads. On the server, the multipart request is processed and the resolver is provided with an upload argument that resolves into an object containing a “stream”. This is particularly important as we can pipe the stream to our data servers directly. Downloading files is however, still unsupported and is implemented via a traditional REST call. AUTHORISATION GraphQL greatly serves as a gateway for data aggregation. Our application however is role based, thereby requiring stringent access control. We needed to run URL and API auth for every request. We evaluated if we can run this on our apollo server as well. However, we wanted to keep the process as declarative as possible. For this, we used “custom directives” available in Apollo Server 2.0. For e.g. declare @auth on FIELD_DEFINITION type X { flight_number: ID details: String @auth(requires: [“P1”]) } ensures that the filed will resolve to a value that’s dictated via the “@auth” directive. The implementation of the directive is to extend the “SchemaDirectiveVisitor” class available in Apollo Server. Implementing two main methods “visitFieldDefinition” and/or “visitObject” help in controlling how the resolver for the types (against which the directive is used) should resolve into. For e.g.: class AuthDirective extends SchemaDirectiveVisitor { public visitFieldDefinition(field: GraphQLField<any, any>) { // …… } } To add, we use the custom directive not just at a field level, but at type levels as well: type Y @auth(requires:[“P3”, “P4”]) { ….. Z: String @auth(requires:[“P4”]) } // or type Query { getX: X @auth(requires:[“P1”]) } To however use/apply the directive, Apollo needs to know about it and hence we pass the directive’s class to Apollo server’s constructor: const server = new ApolloServer({ typeDefs, resolvers, schemaDirectives: { auth: AuthDirective } }); Custom directives truly abstract away the heavy-lifting from developers and make it abundantly clear regarding the needs/requirements for a given field/type. STATE MANAGEMENT and PERFORMANCE CACHING For Apollo Client (AC), we use the InMemoryCache for caching and state management. However it’s important to evaluate the query performance. AC implements normalisation (converting the graph into a flat data structure while storing) for queries that it writes/reads to/from the cache. It does incur significant costs (data dependent) while normalisation and is NOT opt-out enabled. Hermes, is one potential alternate which stores data as a “normalised graph” instead of a “normalised map”. This looks promising and we’re evaluating if our current data volume would cause any performance regression. NETWORK BATCHING Our pages are made of segments which each segment potentially having its own data provider. This situation ends up in having multiple network calls from the client thereby increasing roundtrips. (Conditional) Batching network requests helps reduce the overall number of requests to our servers and thereby RTT. However, batching comes at a cost. The performance of a batch is as good as the slowest request in the batch. By “Conditional”, we mean use batching only when needed and to not batch for important/expensive/computationally-intensive requests. OPTIMISTIC RESPONSE To have a fast, 0 latency server response for mutations, we resort to “Optimistic response” wherein we add a manually created mutation response so that the UI changes could be instantly done.This also helps reduce number of network calls as the updated result (inclusive of the current mutation) is already present at the client. REACT and PERFORMANCE a. HOOKS - We use React hooks implementation over class based. For reasons related to better composability, a PULL based approach vs a PUSH based and also the fact that Hooks minify better. For e.g. Promise.resolve().then(value => getValue(value)); // PUSH // vs const value = await getSomeValue(); // PULL b. MEMOIZATION - React hooks provide memoization techniques for components using “React.memo”, while functions/callbacks can be memoized using “useCallback” hook. Computationally expensive items could be memoized using “useMemo” hook. CONCLUSION Building our ads platform has been nothing less than a roller coaster ride. When we look back at our fundamental pillars of development i.e. UI/UX, DX, Data etc. it seems we did do some justice to them. We’re not resting and are looking forward (and eagerly waiting for) to: 1. Experimenting with Hermes cache 2. Migrating our apollo client code from render props to hooks for further code bloat reduction and maintainability (and consistency).',
    about:
      'I am Abinash. I am a UI engineer at Flipkart. I began my career here with building Flipkart Lite, India’s first large scale eCommerce PWA. My areas of focus in FK Lite have been mostly on performance, service workers, animations etc. I am a “customer first” centric developer and for me, UX is paramount. I have also worked on client side image processing like resizing, resampling. My areas of interest include Service Workers, Performance, Animations, JS/Storage Parallelism using Workers, WebAssembly. Recently I have been intrigued by GraphQL and have been working on it for around close to a year. Apart from this, I talk about Sneakers and bikes too !! And who doesn’t love Sneakers and bikes, as they say “You never see a motorcycle outside a psychiatrist’s office."',
    day: 2,
  },
  'rajat-khare': {
    img: rajatKhare,
    name: 'Rajat Khare',
    designation: 'SOFTWARE ARCHITECT',
    org: 'INTUIT',
    twitterLink: 'https://twitter.com/rajatontwit',
    githubLink: 'https://github.com/kharerajat2014',
    title:
      'AutoFIT, a framework to automatically inject failures per request invocation to test fault tolerant/resilient GraphQL APIs',
    abstract:
      'How do you test your failure modes explicitly on GraphQL?. How can you take control of writing Automated Integration tests that simulate failure cases and test your resiliency and fallbacks. ? We talk about an approach we have used called AutoFIT that helps make this happen!',
    description:
      'As we design GraphQL interfaces that are a connection of types, it becomes very critical to think of all the failure points that can happen and how they will manifest on the GraphQL response. Its also important that as we plan automated Integration Testing on GraphQL interfaces that runs in CI/CD pipelines to be able to represent both success and failure test cases. Existing approaches have been hard and usually need the whole environment in a failure more to be able to simulate or mock error cases from downstream dependencies. In this talk we talk about a failure injection approach that can inject desired failures in context of a GraphQL query or mutation so that they stay contained to the request and can be run repeatedly in CI/CD environments!',
    about:
      'Rajat is a Software Architect with Intuit. He has been with Intuit for 9 years in IDC and has worked across Intuit’s QuickBooks ecosystem of products and offerings. Rajat has been working on GraphQL ecosystem since its inception around 2015 and has built multiple applications and services using GraphQL over the last 4 years. Rajat is passionate about fueling technology innovation having deep impact on customers and business. He has 4+ filed patents Rajat is an avid external and internal speaker in conferences and enjoys sharing the great work happening in the engineering teams he works with , and coaching engineers to do the same as well.',
  },
  'sean-grove': {
    img: seanGrove,
    name: 'Sean Grove',
    designation: 'FOUNDER',
    org: 'ONEGRAPH',
    twitterLink: 'https://twitter.com/sgrove',
    githubLink: 'https://github.com/sgrove',
    title: 'Be lazy and get promoted with great GraphQL documentation',
    abstract:
      "You provide a GraphQL API, and you care deeply about your API DX:You want your developers to be happy, to find the exact information they need at just the right time,and to trust that your documentation is infallible. Only one challenge: that sounds like a lot of work, and - like the rest of us - you're lazy. Never worry! Codex is a free, OSS GraphQL documentation suite for busy (ahem) developers like you meant to achieve API documentation nirvana with minimal effort.",
    day: 2,
  },
  'vilva-athiban': {
    img: vilvaAthiban,
    name: 'Vilva Athiban P B',
    designation: 'JAVASCRIPT DEVELOPER',
    org: 'OMIO',
    twitterLink: 'https://twitter.com/vilvaathibanpb',
    githubLink: 'https://github.com/vilvaathibanpb',
    title: 'Build a GraphQL Client for React in 25 minutes',
    abstract:
      'People started using Apollo / GraphQL in production and many use it with ReactJS. This talk will be a 25-minute live coding, where we will be building the Query components (HOC, hooks and Render props component) of react-apollo. This will enable users to get better insights about using it',
    description:
      'People started using Apollo / GraphQL in production and many use it with ReactJS. This talk will be a 25-minute live coding, where we will be building the Query components (HOC, hooks and Render props component) of react-apollo. This will enable users to get better insights and implement more performant code for their products. Understanding libraries’ internals will always lead us to increase in creativity and I will try to invoke it',
    about:
      'Vilva is a Javascript developer and GraphQL enthusiast. He works for Omio. He loves to preach interesting tech topics with humor. He is on a mission to make the browser a better place to visit.',
    day: 1,
  },
  'sauradyuti-coondu': {
    img: sauradyutiCoondu,
    name: 'Sauradyuti Coondu',
    designation: 'Project Lead',
    org: 'Oracle',
    twitterLink: 'https://twitter.com/Sauradyuti',
    githubLink: 'https://github.com/Sauradyuti',
    title: 'Building performant GraphQL servers',
    abstract:
      'The results of searching for "GraphQL performance" on Google will surely raise doubts in the mind of a GraphQL adopter. Is GraphQL really less performant than REST or is it just a myth? What makes GraphQL slow? How can the performance be improved? There are numerous information on how to build a GraphQL server, but not so on how to build an efficient one. Let\'s build efficient GraphQL servers!',
    day: 1,
  },
  'ankita-masand': {
    img: ankitaMasand,
    name: 'Ankita Masand',
    designation: 'Senior Frontend Engineer',
    org: 'Treebo',
    panelUrl: '/panel/graphql-adoption',
    twitterLink: 'https://twitter.com/ankitamasand',
  },
  'ashwin-goyal': {
    img: ashwinGoyal,
    name: 'Ashwin Goyal',
    designation: 'New Initiatives',
    org: 'Swiggy',
    panelUrl: '/panel/graphql-adoption',
    linkedInLink: 'https://www.linkedin.com/in/ashwingo/',
  },
  'ankit-muchhala': {
    img: ankitMuchhala,
    name: 'Ankit Muchhala',
    designation: 'Technical Lead',
    org: 'Postman',
    twitterLink: 'https://twitter.com/ankit_muchhala',
    githubLink: 'https://github.com/ankit-m',
    title: 'REST to GraphQL - A structured thinking approach',
    description:
      'Everyone says it is easy to layer GraphQL on top of REST. Is it really? There are fundamental changes in thought processes which are often neglected, leading to poor schema design. This talk presents a structured approach to thinking in GraphQL and designing user centric schemas. The primary goal of the talk is to present a structured approach to thinking in GraphQL with something I like to call "Activities To Be Done (ATBDs)". I highlight a stepwise process to design a truly "graph-based" schema. We will also see how this approach helps various personas and facilitates in identifying "control points" for a schema.',
    day: 1,
  },
  'anon-ray': {
    img: anonRay,
    name: 'Anon Ray',
    designation: 'Software Engineer',
    org: 'Hasura',
    twitterLink: 'https://twitter.com/rayanon',
    githubLink: 'https://github.com/ecthiender',
    title: 'Building a flexible & performant authorization rule engine for GraphQL',
    abstract:
      'There are various ways of implementing authorization for a GraphQL server.  In this talk, I’ll review different approaches and problems. Eg: authz might result in making multiple calls to the database not just to resolve data but also  to fetch authorisation constraints. I will finally share our learnings in building a flexible rule engine in Hasura that avoids these pitfalls.',
    description:
      'In this talk, we will review approaches and challenges of implementing authorization in your GraphQL server. We will survey well-known patterns of authorization. I will then share our learnings from building the rule engine we have built at Hasura, describe how it avoids performance pitfalls and the pros and cons of this approach.',
    day: 2,
  },
  'amey-banarse': {
    img: ameyBanarse,
    name: 'Amey Banarse',
    designation: 'Principal Data Architect',
    org: 'YugaByte DB',
    twitterLink: 'https://twitter.com/ameybanarse',
    githubLink: 'https://github.com/ameyb',
    title: 'Turbocharging scalability of GraphQL services with a Distributed SQL DB',
    description:
      'GraphQL, with its roots in some of the biggest internet companies like Facebook, was created to simplify cloud-native application development without compromising performance or security. However, the ability to scale out on-demand, the need for high availability and tolerating cloud outages are omnipresent in cloud-native architectures. Hasura is a popular, open-source GraphQL engine that works on top of a PostgreSQL database to instantly give you a production-ready GraphQL API. However, vanilla PostgreSQL is not horizontally scalable or highly available. YugabyteDB, an open-source, distributed SQL database was built to support all PostgreSQL features with full wire-compatibility to address exactly these needs - massive scalability, high availability and geo-distribution of data. In this talk, we will look at what features are needed in a distributed SQL database to support a GraphQL engine like Hasura. We will also look at the open-source distributed SQL DB landscape, and how YugabyteDB has been optimized for scaling the Hasura GraphQL engine.',
    day: 1,
  },
  'michael-compton': {
    img: michaelCompton,
    name: 'Michael Compton',
    designation: 'GraphQL Lead',
    org: 'Dgraph',
    githubLink: 'https://github.com/MichaelJCompton​',
    panelUrl: '/panel/graphql-on-databases',
  },
  'shahidh-muhammed': {
    img: shahidhMuhammed,
    name: 'Shahidh K Muhammed',
    designation: 'Engineer',
    org: 'Hasura',
    twitterLink: 'https://twitter.com/shahidh_k',
    githubLink: 'https://github.com/shahidhk',
    title: 'API management & governance for GraphQL',
    description:
      "API management and governance is a critical part of API adoption and delivery in any organisation. In this talk, we'll be taking a look at what API management is like for GraphQL APIs. We'll go through different aspects like lifecycle management, developer engagement, monitoring, caching, traffic management etc. in a GraphQL context. We will compare and contrast to REST solutions, understand different approaches that the ecosystem is taking and I will also share my learnings from our work at Hasura.",
    day: 1,
  },
  'tanmai-gopal': {
    img: tanmai,
    name: 'Tanmai Gopal',
    designation: 'CEO',
    org: 'Hasura',
    twitterLink: 'https://twitter.com/tanmaigo',
    githubLink: 'https://github.com/coco98',
    title: 'Accelerating product & data delivery in 2020',
    description: 'Coming soon.',
    about:
      "Tanmai Gopal is the CEO, co-founder of Hasura. He is a StackOverflow powered fullstack developer whose areas of interest and work span react, GraphQL, nodejs, haskell, docker, postgres & kubernetes. He is passionate about making it easy to build complex things and is the instructor of India's largest MOOC imad.tech with over 250,000 students.",
    day: 1,
  },
  'karthic-rao': {
    img: karthicRao,
    name: 'Karthic Rao',
    designation: 'Developer Relations Lead',
    org: 'Dgraph Labs',
    twitterLink: 'https://twitter.com/hackintoshrao',
    githubLink: 'https://github.com/hackintoshrao',
    title: 'Building GraphQL APIs for a twitter clone just 5 minutes',
    description: 'Coming soon.',
    day: 2,
  },
  'rajat-khare-arun-lingala': {
    multiple: 'multipleSpeakers',
    profile: [
      {
        img: rajatKhare,
        name: 'Rajat Khare',
        designation: 'SOFTWARE ARCHITECT',
        org: 'INTUIT',
        twitterLink: 'https://twitter.com/rajatontwit',
        githubLink: 'https://github.com/kharerajat2014',
      },
      {
        img: arunLingala,
        name: 'Arun Lingala',
        designation: 'Staff Software Engineer',
        org: 'INTUIT',
        twitterLink: 'https://twitter.com/ArunLingalaCBK',
        githubLink: 'https://github.com/arunlingala',
      },
    ],
    profileDetails: [
      {
        name: 'Rajat Khare',
        about:
          'Rajat is a Software Architect with Intuit. He has been with Intuit for 9 years in IDC and has worked across Intuit’s QuickBooks ecosystem of products and offerings. Rajat has been working on GraphQL ecosystem since its inception around 2015 and has built multiple applications and services using GraphQL over the last 4 years. Rajat is passionate about fueling technology innovation having deep impact on customers and business. He has 4+ filed patents Rajat is an avid external and internal speaker in conferences and enjoys sharing the great work happening in the engineering teams he works with , and coaching engineers to do the same as well.',
      },
    ],
    title:
      'AutoFIT, a framework to automatically inject failures per request invocation to test fault tolerant/resilient GraphQL APIs',
    abstract:
      'How do you test your failure modes explicitly on GraphQL?. How can you take control of writing Automated Integration tests that simulate failure cases and test your resiliency and fallbacks. ? We talk about an approach we have used called AutoFIT that helps make this happen!',
    description:
      'As we design GraphQL interfaces that are a connection of types, it becomes very critical to think of all the failure points that can happen and how they will manifest on the GraphQL response. Its also important that as we plan automated Integration Testing on GraphQL interfaces that runs in CI/CD pipelines to be able to represent both success and failure test cases. Existing approaches have been hard and usually need the whole environment in a failure more to be able to simulate or mock error cases from downstream dependencies. In this talk we talk about a failure injection approach that can inject desired failures in context of a GraphQL query or mutation so that they stay contained to the request and can be run repeatedly in CI/CD environments!',
    day: 2,
  },
  'vijayan-srinivasan-bala-dutt': {
    multiple: 'multipleSpeakers',
    profile: [
      {
        img: vijayanSrinivasan,
        name: 'Vijayan Srinivasan',
        designation: 'Group Development Manager',
        org: 'INTUIT',
        twitterLink: 'https://twitter.com/vijayanskp',
        githubLink: 'https://github.com/vijayan007',
      },
      {
        img: balaDutt,
        name: 'Bala Dutt',
        designation: 'PRINCIPAL ENGINEER',
        org: 'INTUIT',
        twitterLink: 'https://twitter.com/baladutt',
        githubLink: 'https://github.com/baladutt',
      },
    ],
    profileDetails: [
      {
        name: 'Vijayan Srinivasan',
        about:
          'Leading Engineering for Intuit Identity Platform in India. Having 20 years of industry experience in building large scale platforms. Worked on startups and enterprises like Oracle, Yahoo! and Intuit!',
      },
    ],
    title: 'Authorization for GraphQL @ Intuit',
    abstract:
      'Intuit is transforming all it’s APIs from SOAP and REST to GraphQL. My team is responsible for defining the Authorization mechanism for whole of Intuit, This talk will cover how we use Attribute Based Access Control (ABAC) to provide authorization for Intuit APIs which are public and private.',
    description:
      'Intuit’s Data stewardship principles secure user’s PII, financial and tax information. Dimensionality of authorization enforcing this includes access mode (e.g. OLTP, OLAP, Big data and messaging), APIs (e.g. Restful, GraphQL), clients (device, desktop, web, first party, second party and third party), platforms(e.g. Java, Node, .NET), deployments (e.g. monoliths, micro-services, gateway, service mesh), complex rules (for variety of usecases, global products with local compliance and multiple domains) and subjects from internal (enterprise), B2B and B2C. Intuit’s vision for security with agility is to decentralize policy authoring over multiple products while addressing strict performance needs. Domain local policies authored by thousands of developers should work with global policies set at domain or company level by security experts. Multiple authorizations for multiple resources per request are either by design of the product or due to micro-services architecture. Hence low latency requirement, not sacrificing demand for complex multiple policies. Design with learning from building and operating the solution will be presented. Modular and multi-strategy design was chosen. Scaling with respect to requests vs entities (subjects, resources) is discussed. Tactics enable for shorter story cycle time for developers with a first-use experience and robust governance. PIPs as microservices feed into policy in a scalable, performant way with strong consistency needs in multi-region deployments. Solution has remote and local execution of policy. Extensibility is built in as ABAC landscape evolves, better engines come up, AI is factored in or innovations are absorbed. AuthZ for GraphQL GraphQL landscape at Intuit 100’s of entities Home built vs other implementations of GraphQL platform Different programming languages for entity providers How is GraphQL authorization same or different from REST API based authorization It is API – so same Batching of multiple requests Data about fields and entities being access Dimensions of GraphQL AuthZ Programming model Annotation based authorization Declarative externalized authorization Enforcement point Method based authorization Gateway based authorization Decision model RBAC ABAC',
    day: 2,
  },
};
const workshopState = {
  'why-graphql': {
    title: 'Why GraphQL?',
    img: shipraGupta,
    name: 'Shipra Gupta',
    designation: 'COMPUTER SCIENTIST',
    org: 'ADOBE',
    time: '9:00AM to 10:00AM',
    level: 'GraphQL Beginner',
    levelImg: beginner,
    workshopDescription:
      'You have heard that GraphQL is an amazing technology but you are not sure why? In this talk you will learn when and why to use GraphQL and how it can fit with existing backend services in your organisation to improve the performance.',
    workshopCover: [
      'How GraphQL helps in improving application performance and organisational agility',
      'Compare REST vs GraphQL',
      'Demo the benefits offered by GraphQL.',
    ],
    workshopTakeaway: 'You will learn when and where to use GraphQL',
  },
  'building-apps-with-react-apollo-client': {
    title: 'Building apps with React & Apollo Client',
    img: kiranKumar,
    name: 'Kiran Kumar Abburi',
    designation: 'FOUNDER',
    org: 'NEOSTACK',
    time: '10:30AM to 12:30PM',
    level: 'Intermediate',
    levelImg: intermediate,
    workshopDescription:
      "React embraces declarative model for building UI's.  But data fetching in typical applications is still imperative. GraphQL client libraries like Apollo Client solve this problem and help us use declarative data fetching to build apps and get rid of lot of data fetching boilerplate code. In this workshop, lets build a simple e-commerce app with React and learn how to leverage features of GraphQL & Apollo Client for effective data fetching, state management and real-time updates",
    workshopCover: [
      'What is Apollo Client',
      'How to setup Apollo Client in react apps',
      'Declarative data fetching with Apollo Client',
      'How Apollo cache works',
      'Mutations for sending updates to server',
      'Subscriptions for real-time updates',
      'Local state management with Apollo Client',
      'Understanding apollo links and how to use them to enhance Apollo client functionality',
      'Debugging with Apollo client devtools',
      'Performance optimisations to lookout for Gotcha you might run into with Apollo Client and how to overcome them',
    ],
    workshopTakeaway:
      'How to leverage features of GraphQL & Apollo Client to build declarative react apps',
  },
  'build-high-performance-graphql-serverless-apps-with-the-3factor-app-architecture': {
    title: 'Build high-performance GraphQL & serverless apps with the 3factor app architecture',
    img: tiru,
    name: 'Tirumarai Selvan',
    designation: 'Product Manager',
    org: 'Hasura',
    time: '01:00PM to 03:00PM',
    level: 'Intermediate',
    levelImg: intermediate,
    workshopDescription:
      '3factor app is an architecture pattern for modern apps. 3factor proposes an architecture pattern which is composed of 3 factors namely 1) realtime GraphQL, 2) reliable eventing and 3) async serverless. You will learn where monolithic architectures fall short and how to build scalable and reliable apps in 3factor style.',
    workshopCover: [
      'Challenges with GraphQL & cloud-native/serverless',
      'What is a cloud-native app',
      'Event-driven and async architectures',
      'Moving from monolithic to event-driven serverless architectures',
      'Closing the loop with realtime GraphQL',
      'Building a complex food-delivery app in the 3factor pattern',
    ],
    workshopTakeaway:
      'You will learn how to build a GraphQL backend using Hasura, use GraphQL subscriptions to build a realtime app and how to wire up complex business logic to extend an application.',
    preRequisites: 'Backend and/or fullstack application development experience',
  },
  'building-scalable-graphal-apps-with-react-and-dgraph': {
    title: 'Building scalable GraphQL apps with ease using Dgraph',
    img: dgraphSpeakers,
    name: 'Dgraph',
    multipleSpeakers: [
      {
        name: 'Apoorv Vardhan',
        designation: 'Technical Writer',
        img: apoorv,
        twitterLink: 'https://twitter.com/vardhanapoorv16',
        githubLink: 'https://github.com/vardhanapoorv',
        org: 'Dgraph',
      },
      {
        name: 'Michael Compton',
        designation: 'GraphQL Lead',
        img: michael,
        githubLink: 'https://github.com/MichaelJCompton',
        org: 'Dgraph',
      },
    ],
    time: '3:30PM to 6:30PM',
    level: 'Intermediate',
    levelImg: intermediate,
    workshopDescriptionList: [
      "If you want to get started with GraphQL in minutes and don't want to worry much about the server-side, this workshop is for you.That said you might still have questions that bother you regarding the scalability and performance of your GraphQL API, as your application grows and becomes more complex. Don't worry we will address all these questions in this fun-filled workshop.",
      'So what exactly is GraphQL and why do we even need to bother about it?The official website defines GraphQL as "A query language for your API". Putting it in perspective we can say that we have a single REST endpoint to get or send data from/to the server which the client asks for. It encourages front-developers to model their application data as a graph, and its intuitive Graph query language makes data fetching for even the most complex UI simple, giving them fine-grained control over their data and typed description for their APIs.',
      'GraphQL is great for front-end developers, but you first need a GraphQL API served by a GraphQL web server and a storage engine backed by a database. So we will be using Dgraph for the server-side, which is an open-source, distributed, native GraphQL database with a native GraphQL API.Dgraph gives you a GraphQL API in just two steps on submitting a text file containing the GraphQL schema. Along with its simplicity and ease of use, it’s a powerful distributed graph storage engine guarantees efficient reads and writes for your GraphQL queries, even as your data is growing in its size and complexity.',
      "Join us as we learn to build a highly scalable, performant GraphQL applications using Dgraph's GraphQL API.",
    ],
    workshopTakeaway:
      'Learn to create GraphQL APIs with ease using Dgraph. Benefits of using Dgraph to build their GraphQL application. Learn to create a NodeJS server with Auth0 integration on top of Dgraph’s GraphQL API.',
    workshopIdeal: [
      'Front-end developers who want to learn about GraphQL.',
      'Developers who want to learn about Dgraph a distributed, native GraphQL database with a native GraphQL API.',
    ],
  },
};
const scheduleStateDayOne = {
  registration: {
    type: 'break',
    img: registration,
    title: 'Registration',
    duration: '1 hr 30 mins',
    scheduleTime: '07:30 AM - 09:00 AM',
  },
  'opening-address': {
    type: 'break',
    img: graphqlasia,
    maxHeight: true,
    title: 'Opening Address',
    duration: '15 mins',
    scheduleTime: '09:00 AM - 09:15 AM',
  },
  'tanmai-gopal': {
    img: tanmai,
    name: 'Tanmai Gopal',
    title: 'Accelerating product & data delivery in 2020',
    duration: '30 mins',
    tag: 'Long Talk',
    scheduleTime: '09:15 AM - 09:45 AM',
    tagImg: talkTag,
  },
  'robert-zhu': {
    img: robertZhu,
    name: 'Robert Zhu',
    title: 'A Peek at the Future of GraphQL',
    duration: '45 mins',
    tag: 'Long Talk',
    scheduleTime: '09:45 AM - 10:30 AM',
    tagImg: talkTag,
  },
  'lachlan-young': {
    img: lachlanYoung,
    name: 'Lachlan Young',
    title: 'How to convince your boss to use GraphQL',
    duration: '30 mins',
    tag: 'Long Talk',
    scheduleTime: '10:30 AM - 11:00 AM',
    tagImg: talkTag,
  },
  'tea-break': {
    type: 'break',
    img: tea,
    title: 'Tea Break',
    duration: '30 mins',
    scheduleTime: '11:00 AM - 11:30 AM',
  },
  'vishakha-singh': {
    img: vishakhaSingh,
    name: 'Vishakha Singh',
    title: 'How we improved PayPal checkout conversions using GraphQL',
    duration: '30 mins',
    tag: 'Long Talk',
    scheduleTime: '11:30 AM - 12:00 PM',
    tagImg: talkTag,
  },
  'radoslav-stankov': {
    img: radoslavStankov,
    name: 'Radoslav Stankov',
    title: '3 Year GraphQL in Production at Product Hunt',
    duration: '30 mins',
    tag: 'Long Talk',
    scheduleTime: '12:00 PM - 12:30 PM',
    tagImg: talkTag,
  },
  'shahidh-muhammed': {
    img: shahidhMuhammed,
    name: 'Shahidh K Muhammed',
    title: 'API management & governance for GraphQL',
    duration: '30 mins',
    tag: 'Long Talk',
    scheduleTime: '12:30 PM - 01:00 PM',
    tagImg: talkTag,
  },
  lunch: {
    type: 'break',
    img: lunch,
    title: 'Lunch',
    duration: '1 hr 15 mins',
    scheduleTime: '01:00 PM - 02:30 PM',
  },
  'ivan-goncharov': {
    img: ivanGoncharov,
    name: 'Ivan Goncharov',
    title: 'Hidden gems of GraphQL query',
    duration: '10 mins',
    tag: 'Lightning talk',
    scheduleTime: '2:30 PM - 2:40 PM',
    tagImg: talkTag,
  },
  'manish-jain': {
    img: manishJain,
    name: 'Manish Jain',
    title: 'Back to GraphQL',
    duration: '20 mins',
    tag: 'Short Talk',
    scheduleTime: '2:40 PM - 3:00 PM',
    tagImg: talkTag,
  },
  'graphql-on-databases': {
    panel: 'panel',
    multiple: 'multipleSpeakers',
    img: graphqlasia,
    maxHeight: true,
    name: 'Robert Zhu, Michael Compton, Tanmai Gopal',
    title: 'GraphQL on Databases',
    duration: '45 mins',
    tag: 'Talk',
    scheduleTime: '03:00 PM - 03:45 PM',
    tagImg: panelTalk,
  },
  'kiran-kumar-abburi': {
    img: kiranKumar,
    name: 'Kiran Kumar Abburi',
    title: 'Potential of GraphQL Directives',
    duration: '20 mins',
    tag: 'Short Talk',
    scheduleTime: '03:45 PM - 04:05 PM',
    tagImg: talkTag,
  },
  'coffee-break': {
    type: 'break',
    img: tea,
    title: 'Tea Break',
    duration: '25 mins',
    scheduleTime: '04:05 PM - 04:30 PM',
  },
  'ankit-muchhala': {
    img: ankitMuchhala,
    name: 'Ankit Muchhala',
    title: 'REST to GraphQL - A structured thinking approach',
    duration: '10 mins',
    tag: 'Short Talk',
    scheduleTime: '04:30 PM - 04:40 PM',
    tagImg: talkTag,
  },
  'amey-banarse': {
    img: ameyBanarse,
    name: 'Amey Banarse',
    title: 'Turbocharging scalability of GraphQL services with a Distributed SQL DB',
    duration: '10 mins',
    tag: 'Short Talk',
    scheduleTime: '04:45 PM - 04:55 PM',
    tagImg: talkTag,
  },
  'sauradyuti-coondu': {
    img: sauradyutiCoondu,
    name: 'Sauradyuti Coondu',
    title: 'Building performant GraphQL servers',
    duration: '30 mins',
    tag: 'Long Talk',
    scheduleTime: '05:00 PM - 05:30 PM',
    tagImg: talkTag,
  },
  'vilva-athiban': {
    img: vilvaAthiban,
    name: 'Vilva Athiban P B',
    title: 'Build a GraphQL Client for React in 25 minutes',
    duration: '30 mins',
    tag: 'Long Talk',
    scheduleTime: '05:30 PM - 06:00 PM',
    tagImg: talkTag,
  },
  'closing-address': {
    type: 'break',
    img: graphqlasia,
    maxHeight: true,
    title: 'Closing Address',
    duration: '15 mins',
    scheduleTime: '06:00 PM - 06:15 PM',
  },
};
const scheduleStateDayTwo = {
  'opening-address': {
    type: 'break',
    img: graphqlasia,
    maxHeight: true,
    title: 'Opening Address',
    duration: '10 mins',
    scheduleTime: '08:50 AM - 09:00 AM',
  },
  'abinash-mohapatra': {
    img: abinashMohapatra,
    name: 'Abinash Mohapatra',
    title: 'Building Flipkart Ads Platform',
    duration: '30 mins',
    tag: 'Long Talk',
    scheduleTime: '09:00 AM - 09:30 AM',
    tagImg: talkTag,
  },
  'gago-frigerio': {
    img: gagoFrigerio,
    name: 'Gago Frigerio',
    title: 'Taming schemas at scale: A modular approach to GraphQL ',
    duration: '30 mins',
    tag: 'Long Talk',
    scheduleTime: '09:30 AM - 10:00 AM',
    tagImg: talkTag,
  },
  'sean-grove': {
    img: seanGrove,
    name: 'Sean Grove',
    title: 'Be lazy and get promoted with great GraphQL documentation',
    duration: '30 mins',
    tag: 'Long Talk',
    scheduleTime: '10:00 AM - 10:30 AM',
    tagImg: talkTag,
  },
  'yogesh-desai': {
    img: yogeshDesai,
    name: 'Yogesh Desai',
    title: 'GraphQL as an API Gateway for E-commerce at Scale with Tooling.',
    duration: '20 mins',
    tag: 'Short Talk',
    scheduleTime: '10:30 AM - 10:50 AM',
    tagImg: talkTag,
  },
  'tea-break': {
    type: 'break',
    img: tea,
    title: 'Tea Break',
    duration: '40 mins',
    scheduleTime: '10:50 AM - 11:30 AM',
  },
  'sam-julien': {
    img: samJulien,
    name: 'Sam Julien',
    title: 'Becoming a “Secret” Agent: Securing Your GraphQL Backend with JWTs',
    duration: '30 mins',
    tag: 'Long Talk',
    scheduleTime: '11:30 AM - 12:00 PM',
    tagImg: talkTag,
  },
  'vijayan-srinivasan-bala-dutt': {
    multiple: 'multipleSpeakers',
    img: vijayanBala,
    name: 'Vijayan Srinivasan, Bala Dutt',
    title: 'Authorization for GraphQL @ Intuit',
    duration: '30 mins',
    tag: 'Long Talk',
    scheduleTime: '12:00 PM - 12:30 PM',
    tagImg: talkTag,
  },
  'anon-ray': {
    img: anonRay,
    name: 'Anon Ray',
    title: 'Building a flexible & performant authorization rule engine for GraphQL',
    duration: '20 mins',
    tag: 'Short Talk',
    scheduleTime: '12:30 PM - 12:50 PM',
    tagImg: talkTag,
  },
  'sean-grove-2': {
    type: 'break',
    bosrderRadius: true,
    img: seanGrove,
    name: 'Sean Grove',
    title: 'Slicing through the demons of Auth effectively, using GraphQL',
    duration: '10 mins',
    tag: 'Short Talk',
    scheduleTime: '12:50 PM - 01:00 PM',
    tagImg: talkTag,
  },
  lunch: {
    type: 'break',
    img: lunch,
    title: 'Lunch',
    duration: '1 hr 10 mins',
    scheduleTime: '01:00 PM - 02:30 PM',
  },
  'rajat-khare-arun-lingala': {
    multiple: 'multipleSpeakers',
    img: rajatArun,
    name: 'Rajat Khare, Arun Lingala',
    title:
      'AutoFIT, a framework to automatically inject failures per request invocation to test fault tolerant/resilient GraphQL APIs',
    duration: '30 mins',
    tag: 'Long Talk',
    scheduleTime: '02:30 PM - 03:00 PM',
    tagImg: talkTag,
  },
  'graphql-adoption': {
    panel: 'panel',
    multiple: 'multipleSpeakers',
    img: ankitaAbineshAshwinTanmai,
    name: 'Ankita Masand, Abinash Mohapatra, Ashwin Goyal, Tanmai Gopal',
    title: 'Panel Discussion: Approaches to GraphQL adoption',
    duration: '45 mins',
    scheduleTime: '03:00 PM - 03:45 PM',
    tagImg: panelTalk,
  },
  'coffee-break': {
    type: 'break',
    img: tea,
    title: 'Tea Break',
    duration: '30 mins',
    scheduleTime: '03:45 PM - 04:15 PM',
  },
  'karthic-rao': {
    img: karthicRao,
    name: 'Karthic Rao',
    title: 'Building GraphQL APIs for a Twitter clone in just 5 minutes',
    duration: '10 mins',
    tag: 'Short Talk',
    scheduleTime: '04:15 PM - 04:25 PM',
    tagImg: talkTag,
  },
  'sarjeel-yusuf': {
    img: sarjeelYusuf,
    name: 'Sarjeel Yusuf',
    title: 'Better IoT with Serverless GraphQL',
    duration: '30 mins',
    tag: 'Long Talk',
    scheduleTime: '04:30 PM - 05:00 PM',
    tagImg: talkTag,
  },
  'shipra-gupta': {
    img: shipraGupta,
    name: 'Shipra Gupta',
    title: 'GraphQL as an API gateway in microservices architecture',
    duration: '30 mins',
    tag: 'Long Talk',
    scheduleTime: '05:00 PM - 05:30 PM',
    tagImg: talkTag,
  },
  'closing-address': {
    type: 'break',
    img: graphqlasia,
    maxHeight: true,
    title: 'Closing Address',
    duration: '15 mins',
    scheduleTime: '05:30 PM - 05:45 PM',
  },
};
const panelState = {
  'graphql-adoption': {
    title: 'Approaches to GraphQL adoption',
    time: '45 mins',
    subTitle: 'A panel discussion by engineers at Flipkart, Swiggy & Treebo',
    panelDescription:
      'Join engineers from some of India’s biggest startups as they discuss the stories behind how GraphQL was adopted at their companies. The panel will cover a range of topics from adoption stories, why graphql, tech buy-in, advantages and challenges.',
    moderatorImg: tanmai,
    moderatorName: 'Tanmai Gopal',
    moderatorDesignation: 'CEO',
    moderatorOrg: 'HASURA',
    moderatorTwitterLink: 'https://twitter.com/tanmaigo',
    moderatorGithubLink: 'https://github.com/coco98',
    day: 2,
    panelMembers: [
      {
        img: ankitaMasand,
        name: 'Ankita Masand',
        designation: 'SENIOR FRONT-END ENGINEER',
        org: 'TREEBO',
        twitterLink: 'https://twitter.com/ankitamasand',
        githubLink: 'https://github.com/ankitamasand',
      },
      {
        img: abinashMohapatra,
        name: 'Abinash Mohapatra',
        designation: 'UI ENGINEER',
        org: 'FLIPKART',
        twitterLink: 'https://twitter.com/twistedfork88',
        githubLink: 'https://github.com/twistedfork88',
      },
      {
        img: ashwinGoyal,
        name: 'Ashwin Goyal',
        designation: 'NEW INITIATIVES',
        org: 'SWIGGY',
        linkedInLink: 'https://www.linkedin.com/in/ashwingo/',
      },
    ],
    /*
    'bios': [
      {
        'name': 'Tanmai Gopal',
        'description': 'Tanmai Gopal is the CEO, co-founder of Hasura. He is a StackOverflow powered fullstack developer whose areas of interest and work span react, GraphQL, nodejs, haskell, docker, postgres & kubernetes. He is passionate about making it easy to build complex things and is the instructor of India\'s largest MOOC imad.tech with over 250,000 students.'
      },
    ],
    */
  },
  'graphql-on-databases': {
    title: 'GraphQL on Databases',
    time: '45 mins',
    panelDescription:
      'GraphQL is a great data API and is emerging as a natural fit for data centric use-cases. How are companies adopting GraphQL with their databases today? Hear from the folks at AWS AppSync, Dgraph and Hasura as they discuss different GraphQL approaches, and compare their experiences with 3 different types of databases NoSQL (Dynamo), Graph (Dgraph) & SQL (Postgres).',
    moderatorImg: tanmai,
    moderatorName: 'Tanmai Gopal',
    moderatorDesignation: 'CEO',
    moderatorOrg: 'HASURA',
    moderatorTwitterLink: 'https://twitter.com/tanmaigo',
    moderatorGithubLink: 'https://github.com/coco98',
    day: 1,
    panelMembers: [
      {
        img: robertZhu,
        name: 'Robert Zhu',
        designation: 'PRINCIPAL TECHNICAL EVANGELIST',
        org: 'AWS',
        twitterLink: 'https://twitter.com/rbzhu/',
        githubLink: 'https://github.com/robzhu',
      },
      {
        img: michaelCompton,
        name: 'Michael Compton',
        designation: 'GraphQL Lead',
        org: 'Dgraph',
        githubLink: 'https://github.com/MichaelJCompton​',
      },
    ],
  },
};
export { speakerState, workshopState, scheduleStateDayOne, scheduleStateDayTwo, panelState };
