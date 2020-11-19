import React from 'react'
import { Link, StaticQuery, graphql } from 'gatsby'

const speakerData = require('../data/data.json')

const Speaker = (props) => {
  return (
    <div className="speakerList">
      <div className="profile">
        <div className="speakerImage">
          <img src={props.speakerImage} alt="profile" />
        </div>
        <div className="speakerProfile">
          <div className="profileWrapper">
            <div className="profileName">
              {props.speakerId ? (
                <Link to={`/speaker/${props.speakerId}`}>
                  {props.speakerName}
                </Link>
              ) : (
                props.speakerName
              )}
            </div>
          </div>
          <div className="profielBio">{props.speakerBio}</div>
        </div>
      </div>
    </div>
  )
}
const LandingSpeaker = ({ data }) => {
  var landingSpeakerList = []
  const sortedSpeakers = [...speakerData]
    .filter((v) => v.featured === true)
    .sort((a, b) => a.sortOrder - b.sortOrder)
  sortedSpeakers.forEach((speaker) => {
    const speakerData = speaker
    try {
      if (data[speakerData.speakerPicture + '1']) {
        landingSpeakerList.push(
          <Speaker
            key={'s' + speakerData.speakerId}
            speakerId={speakerData.speakerId}
            speakerName={speakerData.speakerName}
            speakerImage={
              data[speakerData.speakerPicture + '1'].childImageSharp.fluid.src
            }
            speakerBio={speakerData.speakerPosition}
          />
        )
      }
    } catch (error) {
      console.error(error)
    }
  })
  return (
    <section id="landingSpeaker" className="major">
      <div className="inner">
        <header className="major">
          <h2>Speakers 2019</h2>
        </header>
        <div className="speakerListWrppar">{landingSpeakerList}</div>
      </div>
    </section>
  )
}

const query = graphql`
  query {
    LeeByron1: file(relativePath: { eq: "LeeByron.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    JonathanJalouzot1: file(relativePath: { eq: "JonathanJalouzot.png" }) {
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    LucasMunhoz1: file(relativePath: { eq: "LucasMunhoz.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    AmitRana1: file(relativePath: { eq: "AmitRana.jpeg" }) {
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    SashaSolomon1: file(relativePath: { eq: "SashaSolomon.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    ManojAwasthi1: file(relativePath: { eq: "ManojAwasthi.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    AdamMiskiewicz1: file(relativePath: { eq: "AdamMiskiewicz.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    ShrutiKapoor1: file(relativePath: { eq: "ShrutiKapoor.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    UriGoldshtein1: file(relativePath: { eq: "UriGoldshtein.png" }) {
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    AkankshaChoudhary1: file(relativePath: { eq: "AkankshaChoudhary.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    AndreasMarek1: file(relativePath: { eq: "AndreasMarek.jpeg" }) {
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    CarlosRufo1: file(relativePath: { eq: "CarlosRufo.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    EeshTyagi1: file(relativePath: { eq: "EeshTyagi.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    IvanGoncharov1: file(relativePath: { eq: "IvanGoncharov.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    KamleshChandnani1: file(relativePath: { eq: "KamleshChandnani.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    KenjuWagatsuma1: file(relativePath: { eq: "KenjuWagatsuma.jpeg" }) {
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    KiranKumarAbburi1: file(relativePath: { eq: "KiranKumarAbburi.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    MadhuJahagirdar1: file(relativePath: { eq: "MadhuJahagirdar.jpeg" }) {
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    NavyaAgarwal1: file(relativePath: { eq: "NavyaAgarwal.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    TimGriesser1: file(relativePath: { eq: "TimGriesser.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    RajatKhare1: file(relativePath: { eq: "RajatKhare.jpeg" }) {
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    RichardThelkard1: file(relativePath: { eq: "RichardThelkard.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    RobertZhu1: file(relativePath: { eq: "RobertZhu.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    SidharthaChatterjee1: file(
      relativePath: { eq: "SidharthaChatterjee.jpg" }
    ) {
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    TanayPratap1: file(relativePath: { eq: "TanayPratap.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    TanmaiGopal1: file(relativePath: { eq: "TanmaiGopal.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    RichardThrelkeld1: file(relativePath: { eq: "RichardThrelkeld.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    TobiasMeixner1: file(relativePath: { eq: "tobias-meixner.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    PeterThomas1: file(relativePath: { eq: "PeterThomas.png" }) {
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    ShawnSwyxWang1: file(relativePath: { eq: "ShawnSwyxWang.jpeg" }) {
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    GerardSans1: file(relativePath: { eq: "GerardSans.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    PeriNikhil1: file(relativePath: { eq: "PeriNikhil.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default (props) => (
  <StaticQuery
    query={query}
    render={(data) => <LandingSpeaker data={data} {...props} />}
  />
)

// export default LandingSpeaker
