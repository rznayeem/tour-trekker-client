import { Helmet } from 'react-helmet';
import Banner from '../../components/Banner/Banner';
import Destinations from '../../components/Destinations/Destinations';
import Testimonial from '../../components/Testimonial/Testimonial';
import WhyChooseUs from '../../components/WhyChooseUs/WhyChooseUs';
import TouristsSpots from '../../components/cards/TouristsSpots';

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Tour Trekker | Home</title>
      </Helmet>
      <Banner></Banner>
      <TouristsSpots></TouristsSpots>
      <Destinations></Destinations>
      <WhyChooseUs></WhyChooseUs>
      <Testimonial></Testimonial>
    </div>
  );
};

export default Home;
