import FreeProposal from '~organisms/FreeProposal/FreeProposal';
import Hero from '~organisms/Hero/Hero';
import Marquee from '~organisms/Marquee/Marquee';
import Services from '~organisms/Services/Services';

const Home = () => {
  return (
    <>
      <Hero />
      <Marquee />
      <Services />
      <FreeProposal />
    </>
  );
};

export default Home;
