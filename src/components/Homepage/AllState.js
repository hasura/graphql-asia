import React from "react";
const leeByron = require('../Common/images/lee-byron.png');
const sashaSolomon = require('../Common/images/sasha-solomon.png');
const uriGoldshtein = require('../Common/images/uri-goldshtein.png');
const adamMiskiewicz = require('../Common/images/adam-miskiewicz.png');
const shrutiKapoor = require('../Common/images/shruti-kapoor.png');
const tanmaiGopal = require('../Common/images/tanmai-gopal.png');
const speakersDetails = [
  {
    speakersName: "Lee Byron",
    speakersImg: leeByron,
    speakersDesignation: (
      <span>
        Co-creator of GraphQL, Senior Software Engineer,
        <br />Robinhood
      </span>
    ),
  },
  {
    speakersName: "Sasha Solomon",
    speakersImg: sashaSolomon,
    speakersDesignation: (
      <span>
        Senior Software Engineer,
        <br />Twitter
      </span>
    ),
  },
  {
    speakersName: "Uri Goldshtein",
    speakersImg: uriGoldshtein,
    speakersDesignation: (
      <span>
        Founder,
        <br />The Guild
      </span>
    ),
  },
  {
    speakersName: "Adam Miskiewicz",
    speakersImg: adamMiskiewicz,
    speakersDesignation: (
      <span>
        Staff Software Engineer,
        <br />Airbnb<br/>( Spoke at EGC 2020 )
      </span>
    ),
  },
  {
    speakersName: "Shruti Kapoor",
    speakersImg: shrutiKapoor,
    speakersDesignation: (
      <span>
        Software Engineer,
        <br />Paypal
      </span>
    ),
  },
  {
    speakersName: "Tanmai Gopal",
    speakersImg: tanmaiGopal,
    speakersDesignation: (
      <span>
        Co-founder,
        <br />Hasura
      </span>
    ),
  },
]
export { speakersDetails };
