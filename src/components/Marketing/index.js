import React from 'react';

import { Header } from './Header';
import { TopBanner } from './TopBanner';
import { Workshops } from './Workshops';
import { Talks } from './Talks';
import { Footer } from './Footer';
import '../Common/Styles.scss';
import '../styles/marketing.scss';

export const MarketingPage = () => {
  const [width, setWidth] = React.useState(window.innerWidth);

  const handleWindowResize = () => {
    setWidth(window.innerWidth);
  };

  React.useEffect(() => {
    window.addEventListener('resize', handleWindowResize);
    return () => window.removeEventListener('resize', handleWindowResize);
  }, []);

  const isMobile = width < 600;

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
