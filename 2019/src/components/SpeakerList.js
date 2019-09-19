import React from 'react'
import Speaker from './Speaker'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const speakerData = require('../data/data.json')
const SpeakerList = (props) => {
  var day1 = []
  var day2 = []
  try {
    speakerData.forEach(speaker => {
      // skip if has mergeWith attribute
      if(speaker.mergeWith) return
      var speakerPicture = null
      try {
        speaker.merger = speakerData.find((s)=>s.mergeWith===speaker.speakerId)        
        speakerPicture = props.data[speaker.speakerPicture].childImageSharp.fluid
        if(speaker.merger){
          speaker.merger.speakerPicture = props.data[speaker.merger.speakerPicture].childImageSharp.fluid
        }
      } catch (error) {

      }
      if(speaker.day===1){
        day1.push(
          <Speaker
          key={speaker.speakerId}
          speaker={{
            ...speaker,
            isAgenda: props.isAgenda,
            speakerPicture,
          }} />
        )
      }else{
        day2.push(
          <Speaker
          key={speaker.speakerId}
          speaker={{
            ...speaker,
            isAgenda: props.isAgenda,
            speakerPicture,
          }} />
        )
      }

    });
  } catch (error) {
    console.error(error)
  }

  return(
    <div>
    <section id="dayone" className={'spotlights agenda'}>
        <div className="addPaddTopLarge" id="day2">
          <h4>
            <AnchorLink href="#dayone" className="active">Day 1</AnchorLink> / <AnchorLink href="#daytwo">Day 2</AnchorLink>
          </h4>
        </div>
        {day1}
      </section>
      <section id="daytwo"
      className={'spotlights agenda'}>
        <div className="addPaddTopLarge" id="day2">
          <h4>
            <AnchorLink href="#dayone">Day 1</AnchorLink> / <AnchorLink className="active" href="#daytwo">Day 2</AnchorLink>
          </h4>
        </div>
        {day2}
      </section>
      </div>
)
      }
export default SpeakerList
