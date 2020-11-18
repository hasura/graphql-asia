import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'

const CodeOfConduct = (props) => (
  <Layout>
    <Helmet>
      <title>Event Code of Conduct - GraphQL Asia</title>
      <meta name="description" content="Event Code of Conduct - GraphQL Asia" />
    </Helmet>

    <div id="main" className="alt">
      <section id="one">
        <div className="inner">
          <header className="major">
            <h1>Event Code of Conduct</h1>
          </header>
          <p>
            All attendees at this event are required to agree with the following
            code of conduct. Organizers will enforce this code throughout the
            event. We are expecting cooperation from all participants to help
            ensure a safe environment for everybody.
          </p>

          <p>
            This event is dedicated to providing a harassment-free experience
            for everyone, regardless of gender, gender identity and expression,
            age, sexual orientation, disability, physical appearance, body size,
            race, ethnicity, religion (or lack thereof), or technology choices.
            We do not tolerate harassment of event participants in any form.
            Sexual language and imagery are not appropriate for any event venue,
            including talks, workshops, parties, Twitter and other online media.
            Event participants violating these rules may be sanctioned or
            expelled from the event without a refund at the discretion of the
            event organizers.
          </p>

          <p>
            Harassment includes offensive verbal comments related to gender,
            gender identity and expression, age, sexual orientation, disability,
            physical appearance, body size, race, ethnicity, religion,
            technology choices, sexual images in public spaces, deliberate
            intimidation, stalking, following, harassing photography or
            recording, sustained disruption of talks or other events,
            inappropriate physical contact, and unwelcome sexual attention.
          </p>

          <p>
            Attendees asked to stop any harassing behavior are expected to
            comply immediately.
          </p>

          <p>
            If an attendee engages in harassing behavior, the event organizers
            may take any action they deem appropriate, including warning the
            offender or expulsion from the event.
          </p>

          <p>
            If you are being harassed, notice that someone else is being
            harassed, or have any other concerns, please contact a member of
            event staff immediately.{' '}
          </p>

          <p>
            Event staff will be happy to help attendees contact local law
            enforcement, provide escorts, or otherwise assist those experiencing
            harassment to feel safe for the duration of the event. We value your
            attendance.
          </p>

          <p>
            We expect participants to follow these rules at the event venue and
            related social events.
          </p>

          <p>
            <strong>Need Help?</strong>
          </p>
          <p>
            Please reach out to one of the following people:
            <br />
            Tobias Meixner, Organiser, GraphQL Asia at +66-909842509,
            tobias@brikl.io
            <br />
            Rajoshi Ghosh, Organiser, GraphQL Asia at +91-9962512098,
            rajoshi@hasura.io
          </p>
        </div>
      </section>
    </div>
  </Layout>
)

export default CodeOfConduct
