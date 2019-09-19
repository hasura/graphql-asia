import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import Img from "gatsby-image"
import{Link} from 'gatsby'

const SpeakerPage = (props) => {
    var speakerName = ''
    var speakerPicture = null
    try {
    speakerPicture = props.data[props.pageContext.speakerPicture].childImageSharp.fluid
    } catch (error) {

    }
    try {
        speakerName = props.pageContext.speakerName
    } catch (error) {

    }
    console.log(speakerPicture)
    return(
  <Layout>
    <Helmet>
      <title>{speakerName} - GraphQL Asia</title>
      <meta name="description" content="GraphQL Asia Speakers" />
    </Helmet>
    <div id="main" className="alt">
        <section id="one">
            <div className="inner">
                <header style={{
                    width: '100%',
                    minHeight: '300px',
                }} className="major workshopDetails">
                    <div className="image workleft" style={{
                        width:'225px',
                        height:'225px',
                        minWidth: '225px',
                        objectFit: 'cover',
                        maxWidth: '300px',
                    }}>
                    {
                        speakerPicture ?
                        <Img style={{

                        }} fluid={speakerPicture} alt={speakerName} />
                        :null
                    }
                    </div>
                    <div>
                      <h1
                      style={{
                          margin: '0',
                          paddingTop: '50px',
                      }}
                      >{speakerName}

                      </h1>
                      <h3 style={{
                          fontSize: '18px',
                          color: "#777",
                          textTransform: 'uppercase',
                      }}>{props.pageContext.speakerPosition}</h3>
                      {
                          props.pageContext.twitter ?
                          <a style={{
                              textIndent: '-1000px',
                              fontSize: '26px',
                          }} rel="noopener noreferrer" target="_blank" href={`https://twitter.com/${props.pageContext.twitter}`} className="fa-twitter icon">&nbsp;</a>
                          :null
                      }
                      <h2 style={{
                          fontSize: '18px',
                          color: '#e535ab',
                          textTransform: 'uppercase',
                      }}>About</h2>
                      <p>
                      {props.pageContext.speakerDescription}
                      </p>
                      {/* <p>Day {props.pageContext.day} at {props.pageContext.time}</p> */}
                      <h2 style={{
                          fontSize: '18px',
                          color: '#e535ab',
                          position: 'relative',
                          textTransform: 'uppercase',
                      }}>
                      {
                        props.pageContext.type==='workshop'?
                        'Workshop':'Talk'
                      }
                      <div style={{
                          left: '-40px',
                          top: '5px',
                          position: 'absolute',
                      }}
                      className="pinkCircleSmall pinkCircleSmall1"></div>
                      </h2>
                      <h3 style={{
                          fontSize: '18px',
                      }}>{props.pageContext.talkTitle}</h3>
                      <p>{props.pageContext.talkAbstract}</p>
                      <h5>Timings: {props.pageContext.time} (Day {props.pageContext.day})</h5>
                      <p>&lt; <Link to="/agenda">Back to Agenda page</Link></p>
                    </div>                    
                    </header>

                    <div style={{
                        clear:'both'
                        }} />

            </div>
        </section>

    </div>
  </Layout >
)
}

export default SpeakerPage

export const query1 = graphql`
  query {
    JonathanJalouzot: file(relativePath: { eq: "JonathanJalouzot.png" }) {
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    AppSync: file(relativePath: { eq: "AppSync.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    Hasura: file(relativePath: { eq: "Hasura.png" }) {
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    Rajoshi: file(relativePath: { eq: "Rajoshi.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    GraphQLAsiaRajoshiTobias: file(relativePath: { eq: "GraphQL-Asia-Rajoshi-Tobias.png" }) {
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    # https://unsplash.com/photos/jLjfAWwHdB8
    Register: file(relativePath: { eq: "register.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    # https://unsplash.com/photos/nBJHO6wmRWw
    Coffee: file(relativePath: { eq: "coffee.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    # https://unsplash.com/photos/Ww8eQWjMJWk
    Lunch: file(relativePath: { eq: "lunch.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    LucasMunhoz: file(relativePath: { eq: "LucasMunhoz.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    DigitalOcean: file(relativePath: { eq: "DO.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    AmitRana: file(relativePath: { eq: "AmitRana.jpeg" }) {
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    LeeByron: file(relativePath: { eq: "LeeByron.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    SashaSolomon: file(relativePath: { eq: "SashaSolomon.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    ManojAwasthi: file(relativePath: { eq: "ManojAwasthi.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    MarcAndreGiroux: file(relativePath: { eq: "MarcAndreGiroux.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    AdamMiskiewicz: file(relativePath: { eq: "AdamMiskiewicz.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    ShrutiKapoor: file(relativePath: { eq: "ShrutiKapoor.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    UriGoldshtein: file(relativePath: { eq: "UriGoldshtein.png" }) {
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    AkankshaChoudhary: file(relativePath: { eq: "AkankshaChoudhary.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    AndreasMarek: file(relativePath: { eq: "AndreasMarek.jpeg" }) {
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    CarlosRufo: file(relativePath: { eq: "CarlosRufo.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    EeshTyagi: file(relativePath: { eq: "EeshTyagi.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    IvanGoncharov: file(relativePath: { eq: "IvanGoncharov.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    KamleshChandnani: file(relativePath: { eq: "KamleshChandnani.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    KenjuWagatsuma: file(relativePath: { eq: "KenjuWagatsuma.jpeg" }) {
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    KiranKumarAbburi: file(relativePath: { eq: "KiranKumarAbburi.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    MadhuJahagirdar: file(relativePath: { eq: "MadhuJahagirdar.jpeg" }) {
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    ManaswiniDas: file(relativePath: { eq: "ManaswiniDas.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    NavyaAgarwal: file(relativePath: { eq: "NavyaAgarwal.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    TimGriesser: file(relativePath: { eq: "TimGriesser.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    RajatKhare: file(relativePath: { eq: "RajatKhare.jpeg" }) {
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    RichardThrelkeld: file(relativePath: { eq: "RichardThrelkeld.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    RobertZhu: file(relativePath: { eq: "RobertZhu.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    SidharthaChatterjee: file(relativePath: { eq: "SidharthaChatterjee.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    TanayPratap: file(relativePath: { eq: "TanayPratap.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    TanmaiGopal: file(relativePath: { eq: "TanmaiGopal.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    TobiasMeixner: file(relativePath: { eq: "tobias-meixner.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    AkashManohar: file(relativePath: { eq: "Akash-Manohar.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    PeterThomas: file(relativePath: { eq: "PeterThomas.png" }) {
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    ShawnSwyxWang: file(relativePath: { eq: "ShawnSwyxWang.jpeg" }) {
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    GerardSans: file(relativePath: { eq: "GerardSans.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 200) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    
    PeriNikhil: file(relativePath: { eq: "PeriNikhil.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid
        }
      }
    }  
  }
`
