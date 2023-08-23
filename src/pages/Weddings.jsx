// import Topbar from "../components/Topbar/Topbar";
import Hero from "../components/Hero/Hero";
import WeddingsAbout from "../components/About/WeddingsAbout";
import Videos from "../components/Videos/Videos";
import Contact from "../components/Contact/Contact";
import Footer from "../components/Footer/Footer";
import WhatsApp from "../components/WhatsApp/WhatsApp";

import videoList from "../components/Videos/weddingVideos";
const Weddings = () => {
  return (
    <>
      <WhatsApp />

      <Hero />
      <WeddingsAbout />
      <Videos videos={videoList} />
      <Contact />
      <Footer />
    </>
  );
};
export default Weddings;
