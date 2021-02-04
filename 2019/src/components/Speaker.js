import React from 'react'
import Img from 'gatsby-image'
import { Link } from 'gatsby'
import information from '../assets/images/open_in_new.svg'
class Speaker extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      showTalkDetail: false,
      showSpeakerDetail: false,
    }
  }
  render() {
    const speakerProps = this.props.speaker
    return (
      <section
        ref={speakerProps.speakerId}
        id={speakerProps.speakerId}
        className={'agendaItem'}
      >
        <span className="speakerSlot">
          <div className="pinkCircleSmall"></div>
          {speakerProps.time}
        </span>
        <div className={'content'}>
          <div className="inner">
            <h2 className="talkTitle">
              {speakerProps.talkTitle}
              {speakerProps.speakerDescription ? (
                <Link
                  className="infoIcon icon"
                  style={{
                    marginLeft: '1em',
                    display: 'inline-block',
                  }}
                  to={`/speaker/${speakerProps.speakerId}`}
                >
                  <img src={information} alt="icon" />
                </Link>
              ) : null}
            </h2>
            <div
              className="newImage"
              style={{
                position: 'relative',
              }}
            >
              {speakerProps.speakerPicture ? (
                <Img
                  fluid={speakerProps.speakerPicture}
                  alt={speakerProps.speakerName}
                />
              ) : (
                <span className="placeholder" />
              )}
              {speakerProps.merger ? (
                <Img
                  style={{
                    top: '0',
                    left: '65px',
                    position: 'absolute',
                  }}
                  fluid={speakerProps.merger.speakerPicture}
                  alt={speakerProps.merger.speakerName}
                />
              ) : null}
            </div>

            <header className="major">
              <h5>
                {speakerProps.speakerName}
                {speakerProps.merger
                  ? ` & ${speakerProps.merger.speakerName}`
                  : null}
              </h5>
            </header>
            <div>
              <p className="talkAbstract">{speakerProps.talkAbstract}</p>
            </div>
            <br />
          </div>
        </div>
      </section>
    )
  }
}
export default Speaker
