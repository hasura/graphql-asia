import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import LucasMunhoz from '../assets/images/LucasMunhoz.jpg'
import Kiran from '../assets/images/KiranKumarAbburi.jpg'
import GerardSans from '../assets/images/GerardSans.jpg'
import Hasura from '../assets/images/Hasura.png'
const Venue = (props) => (
    <Layout>
        <Helmet>
            <title>GraphQL Workshop @ GraphQL Asia</title>
            <meta name="description" content="We will offer workshops at GraphQL Asia from beginner to advanced workshops." />
        </Helmet>

        <div id="main" className="alt">
            <section id="one">
                <div className="inner">
                    <header className="major">
                        <h1>
                            GraphQL Workshops
                        </h1>
                    </header>
                    <p>We will be offering several workshops alongside the conference from beginner to advanced workshops free to attend with your conference ticket.</p>
                    <h3>
                        1. Intro to GraphQL and Advanced GraphQL concepts
                    </h3>
                    <div className="grid-wrapper">
                        <div className="col-2">
                            <span className="image smallImg"><img src={Kiran} alt="Kiran" /></span>
                        </div>
                        <div className="col-10">
                            <strong>Day 1 - 8:30 - 10:00</strong>
                            <p>
                                Kiran Kumar Abburi, Co-Organiser of React Bangalore, will be giving you an introduction to GraphQL and advanced concepts of GraphQL.
                            </p>
                            <p>
                                This workshop targets beginners of GraphQL getting their introduction and getting their first hands-on experience with GraphQL.
                            </p>
                        </div>
                    </div>
                    <h3>
                        2. Using Apollo to connect your React Apps with GraphQL
                    </h3>
                    <div className="grid-wrapper">
                        <div className="col-2">
                            <span className="image smallImg"><img src={LucasMunhoz} alt="Lucas Munhoz" /></span>
                        </div>
                        <div className="col-10">
                            <strong>Day 1 - 1:30 - 3:00</strong>
                            <p>
                                Lucas Munhoz, full-stack developer and organiser of GraphQL Bangkok meetup, will be teaching you on getting started with React and GraphQL using Apollo Client.
                            </p>
                            <p>
                                Lucas will be introducing how you can easily integrate your apps with GraphQL endpoints. You will learn step
                                by step how to setup the Apollo Client with React, run queries,
                                mutations, optimistic updates and much more!
                            </p>
                        </div>
                    </div>
                    <br />
                    <h3>3. Building your first Fullstack Serverless App with AWS Amplify</h3>
                    <div className="grid-wrapper">
                        <div className="col-2">
                            <span className="image smallImg"><img src={GerardSans} alt="Gerard Sans" /></span>
                        </div>
                        <div className="col-10">
                            <strong>Day 2 - 8:30 - 10:00</strong>
                            <p>
                                Gerard Sans will be introducing AWS Amplify, a modern toolchain, libraries and UI components to build modern Fullstack Serverless Apps. You will be building a fully featured application from development to production.
                            </p>
                        </div>
                    </div>
                    <h3>
                        4. Building realtime application with GraphQL subscriptions using Hasura
                    </h3>
                    <div className="grid-wrapper">
                        <div className="col-2">
                            <span className="image smallImg"><img src={Hasura} alt="Hasura" /></span>
                        </div>
                        <div className="col-10">
                            <strong>Day 2 - 1:30 - 3:00</strong>
                            <p>
                                In this workshop you will be building realtime applications with GraphQL subscriptions using Hasura.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>

    </Layout>
)

export default Venue
