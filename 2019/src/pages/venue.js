import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import pic03 from '../assets/images/BLR_Chancery_Pavilion_facade1_dbr92l.jpg'

const Venue = (props) => (
  <Layout>
    <Helmet>
      <title>Venue - GraphQL Asia</title>
      <meta
        name="description"
        content="Join us in Bengaluru at GraphQL Asia at Chancery Pavillion, Residency Road!"
      />
    </Helmet>

    <div id="main" className="alt">
      <section id="one">
        <div className="inner">
          <header className="major">
            <h1>Join us in Bengaluru!</h1>
            <h3>
              The conference will take place in Chancery Pavillion, Residency
              Road.
            </h3>
          </header>

          <span className="image medium">
            <img src={pic03} alt="Chancery Pavillion" />
          </span>
          <p>
            Named the most dynamic city by the World Economic Forum in 2017,
            Bengaluru is home to the 3rd highest number of tech startups
            globally, including unicorns such as Flipkart, Ola & Swiggy as well
            as several large MNCs and enterprises.
          </p>
          <p>
            The conference will be held in Chancery Pavillion, one of
            Bangalore's 5-star hotels, located in the heart of Bangalore.
          </p>
          <p>
            If you would like to stay at the hotel, please do reach out to the
            bookings team with your conference ticket for a{' '}
            <strong>special conference discount!</strong>
          </p>
          <p>
            There are also several hotels in the area where you can get a room.
            Do check out{' '}
            <a href="https://www.oyorooms.com/search?adults=1&checkin=11%2F04%2F2019&checkout=14%2F04%2F2019&children=0&city=Bangalore&country=india&employee_id=null&guests=1&latitude=12.9723384&location=Residency%20Road%2C%20Bangalore%20Urban%2C%20Karnataka&longitude=77.60859970000001&page=1&rooms=1&searchType=locality&src=null">
              Oyo Rooms
            </a>{' '}
            for a variety of options.
          </p>
        </div>
      </section>
    </div>
  </Layout>
)

export default Venue
