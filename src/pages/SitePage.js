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
import Transition1 from './site_component/Transition1';
import Transition2 from './site_component/Transition2';
import Transition3 from './site_component/Transition3';

const SitePage = () => {

  return (
    <div>
        <SiteHeader />
        <Service1 />
        <Transition1 title="Transition1" />
        <Service2 />
        <Transition2 title="Transition2" />
        <Service3 />
        <Transition3 title="Transition3" />
        <Service4 />
        <SiteFooter />
        <MessageForm />
        <MessageBtn />
    </div>
  );
};

export default SitePage;
