import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'

const ThankYou = (props) => (
    <Layout>
        <Helmet>
            <title>Thank you - GraphQL Asia</title>            
        </Helmet>

        <div id="main" className="alt">
            <section id="one">
                <div className="inner">
                    <header className="major">
                        <h1>Thank You!</h1>
                        <p>We will get back to you as soon as possible.</p>
                    </header>
                </div>
            </section>
        </div>

    </Layout>
)

export default ThankYou