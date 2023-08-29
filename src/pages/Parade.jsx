// import Topbar from "../components/Topbar/Topbar";
import Topbar from "../components/Topbar/Topbar";
import Hero from "../components/Hero/Hero";
import ParadeAbout from "../components/About/ParadeAbout";
import Videos from "../components/Videos/Videos";
import Contact from "../components/Contact/Contact";
import Footer from "../components/Footer/Footer";
import WhatsApp from "../components/WhatsApp/WhatsApp";

import videoList from "../components/Videos/paradeVideos";
const Parade = () => {
  return (
    <>
      <WhatsApp />
      <Topbar />
      <Hero />
      <ParadeAbout />
      <Videos videos={videoList} />
      <Contact />
      <Footer />
    </>
  );
};
export default Parade;
