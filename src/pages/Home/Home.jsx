import Banner from '../../components/Banner/Banner';
import Destinations from '../../components/Destinations/Destinations';
import WhyChooseUs from '../../components/WhyChooseUs/WhyChooseUs';
import TouristsSpots from '../../components/cards/TouristsSpots';

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <TouristsSpots></TouristsSpots>
      <Destinations></Destinations>
      <WhyChooseUs></WhyChooseUs>
    </div>
  );
};

export default Home;
