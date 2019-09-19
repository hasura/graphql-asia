import React from 'react'
import Helmet from 'react-helmet'
import '../assets/scss/main.scss'
import Header from './Header'
import Contact from './Contact'
import Footer from './Footer'

class Layout extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isMenuVisible: false,
            loading: ''
        }
        this.handleToggleMenu = this.handleToggleMenu.bind(this)
    }

    handleToggleMenu() {
        alert('menu')
        this.setState({
            isMenuVisible: !this.state.isMenuVisible
        })
    }

    render() {
        const { children } = this.props

        return (
            <div className={`body ${this.state.isMenuVisible ? 'is-menu-visible' : ''}`}>
                <Helmet
                    title="GraphQL Asia - Conference"
                    meta={[
                        { name: 'description', content: 'GraphQL Asia is going to be the first Asian GraphQL conference, with 2 full days of everything GraphQL. Location: Bangalore, India Date: April 12-13, 2019' },
                        { name: 'keywords', content: 'GraphQL, Asia, Conference, Tech, Event, India, Bangalore' },
                        { name: 'google-site-verification', content: '0swMWogAzErcNEr2q0dVwCn9zI16r0fMi37eb7S-jz8' },
                        { name: 'image', content: 'https://graphql-asia.org/GraphQL_Asia_page_card.png' },
                        { name: 'og:url', content: 'https://graphql-asia.org' },
                        { name: 'og:title', content: 'GraphQL Asia in Bengaluru, India' },
                        { name: 'og:image', content: 'https://graphql-asia.org/GraphQL_Asia_page_card.png' },
                        { name: 'twitter:image', content: 'https://graphql-asia.org/GraphQL_Asia_page_card.png' },
                        { name: 'twitter:card', content: 'summary_large_image' },
                        { name: 'twitter:creator', content: 'graphqlasia' },
                    ]}
                ></Helmet>
                <div id="wrapper">
                    <Header onToggleMenu={this.handleToggleMenu} />
                    {children}
                    <Contact />
                    <Footer />
                </div>
                {/* <Menu onToggleMenu={this.handleToggleMenu} /> */}
            </div>
        )
    }
}

export default Layout
