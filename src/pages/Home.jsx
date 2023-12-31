import Topbar from "../components/Topbar/Topbar";
import Hero from "../components/Hero/Hero";
import About from "../components/About/About";
import Videos from "../components/Videos/Videos";
import Contact from "../components/Contact/Contact";
import Footer from "../components/Footer/Footer";

import WhatsApp from "../components/WhatsApp/WhatsApp";

import videoList from "../components/Videos/mainVideos";
const Home = () => {
  return (
    <>
      <WhatsApp />
      <Topbar />
      <Hero />
      <About />
      <Videos videos={videoList} />
      <Contact />
      <Footer />
    </>
  );
};
export default Home;
