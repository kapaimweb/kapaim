import Hero_english from "../components/Hero/Hero_english";
import AmericaSection from "../components/AmericaSection/AmericaSection";
import Videos_English from "../components/Videos/Videos_English";
import videoList from "../components/Videos/EnglishVideo";

import WhatsApp from "../components/WhatsApp/WhatsApp";

const Home = () => {
  return (
    <>
      <WhatsApp />
      <Hero_english />
      <AmericaSection />
      <Videos_English videos={videoList} />
    </>
  );
};
export default Home;
