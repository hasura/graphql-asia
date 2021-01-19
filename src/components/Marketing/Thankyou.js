import React from 'react';
import { Link } from 'gatsby';
import Workshop from '../Homepage/Workshop'
import Talks from '../Homepage/Talks'
import Layout from '../Layout';
import { Footer } from './Footer';
import redBox from '../Common/images/red-box.svg';
import add from '../Common/images/add.svg';
import ThankyouTopBanner from './ThankyouTopBanner';
import gqlaImg from '../Common/images/logo-dark-mode.svg';

export const Thankyou = ({location}) => {
  return (
    <Layout location={location}>
      <ThankyouTopBanner />
      <Workshop wdClass = 'wd60'/>
      <Talks  wdClass = 'wd60'/>
    </Layout>
  );
}
