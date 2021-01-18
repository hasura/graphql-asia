import React, { useEffect, useState } from 'react';
import { navigate } from 'gatsby';

import { Header } from './Header';
import { TopBanner } from './TopBanner';
import { Workshops } from './Workshops';
import { Talks } from './Talks';
import { Footer } from './Footer';
// import { Thankyou } from './Thankyou';
import '../Common/Styles.scss';
import '../styles/marketing.scss';

export const MarketingPage = ({ location }) => {
  const [width, setWidth] = useState(undefined);

  const [isAliId, setIsAliId] = useState(false);

  const searchParams = new URLSearchParams(location.search);

  const searchAliId = searchParams.get('aliId');

  useEffect(() => {
    if (searchAliId || searchAliId === '') {
      setIsAliId(true);
    }
  }, [location.search]);

  const handleWindowResize = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    setWidth(window.innerWidth);

    window.addEventListener('resize', handleWindowResize);
    return () => window.removeEventListener('resize', handleWindowResize);
  }, []);

  const isMobile = width < 600;

  if (isAliId) {
    return navigate(`/register/?aliId=${searchAliId}`);
    // return null;
  }

  return (
    <div id="viewport" className="darkModeLayout advertisement-site-wrapper">
      <Header isMobile={isMobile} />
      <TopBanner isMobile={isMobile} />
      <Workshops />
      <Talks />
      <Footer />
    </div>
  );
};
