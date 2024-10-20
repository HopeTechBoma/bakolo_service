import React from 'react';
// import ItemCarousel from '../components/Carousel';
import Navbar from '../components/website/Navbar';
import SitePageContent from './SitePageContent';
import SiteHeader from './site_component/SiteHeader';
import SiteFooter from './site_component/SiteFooter';
import Service1 from './site_component/Service1';
import Service3 from './site_component/Service3';
import Service2 from './site_component/Service2';
import Service4 from './site_component/Service4';
import MessageForm from './site_component/MessageForm';
import MessageBtn from './site_component/MessageBtn';

const SitePage = () => {

  return (
    <div>
        <SiteHeader />
        <Service1 />
        <Service2 />
        <Service3 />
        <Service4 />
        <SiteFooter />
        <MessageForm />
        <MessageBtn />
    </div>
  );
};

export default SitePage;
