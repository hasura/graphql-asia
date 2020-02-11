import React from 'react'

const BannerSpeakers = (props) => (
    <section id="banner" className="style2">
        <div className="inner">
            <header className="major">
                <h1>Our speakers</h1>
            </header>
            <div className="content">
                <p>
                Our speakers include the co-creator of GraphQL - 
                <br/>
                Lee Byron and some of the earliest adopters of GraphQL, who are using it at massive scale in their respective organisations. 
                <br/><br/>
                More speakers to be announced soon.
                </p>
            </div>
            {/* <div className="content">
                <p>
                Learn from experts responsible for GraphQL’s incredible tooling, speak to architects who have implemented GraphQL at their own organisations, and forge connections with the forward-looking engineers who have made GraphQL the tech to watch in 2019.
                </p>
            </div> */}
        </div>
    </section>
)

export default BannerSpeakers
