import React from 'react';

import { Header } from './Header';
import { TopBanner } from './TopBanner';
import { Workshops } from './Workshops';
import { Talks } from './Talks';
import { Footer } from './Footer';
import '../Common/Styles.scss';
import '../styles/marketing.scss';

export const MarketingPage = () => (
  <div id="viewport" className="darkModeLayout advertisement-site-wrapper">
    <Header />
    <TopBanner />
    <Workshops />
    <Talks />
    <Footer />
  </div>
);
