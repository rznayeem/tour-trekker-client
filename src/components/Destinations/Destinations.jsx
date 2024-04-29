import { useEffect, useState } from 'react';
import Destination from '../cards/Destination';
import {
  Fade,
  Flip,
  Hinge,
  JackInTheBox,
  Roll,
  Slide,
  Zoom,
} from 'react-awesome-reveal';

const Destinations = () => {
  const [destinations, setDestinations] = useState([]);
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    fetch('https://assignment-10-tour-trekker-server-side.vercel.app/category')
      .then(res => res.json())
      .then(data => {
        setDestinations(data);
        setLoader(false);
      });
  }, []);

  return (
    <div
      className="py-20 bg-[#F9F4EE] overflow-x-hidden"
      style={{
        backgroundImage: "url('https://i.imgur.com/mO7iYqL.png')",
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'bottom',
      }}
    >
      <div className="max-w-screen-xl mx-auto">
        <div className="text-center space-y-7 mb-12">
          <Fade cascade className="text-4xl font-bold" damping={0.1}>
            Top Destinations
          </Fade>
          <Fade direction="left">
            <p>
              Explore our top destinations. our curated collection of top
              destinations invites you to immerse yourself in the essence of
              travel.
            </p>
          </Fade>
        </div>
        {loader && (
          <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto gap-6">
            <div className="skeleton w-auto rounded-2xl h-[270px]"></div>
            <div className="skeleton w-auto rounded-2xl h-[270px]"></div>
            <div className="skeleton w-auto rounded-2xl h-[270px]"></div>
            <div className="skeleton w-auto rounded-2xl h-[270px]"></div>
            <div className="skeleton w-auto rounded-2xl h-[270px]"></div>
            <div className="skeleton w-auto rounded-2xl h-[270px]"></div>
          </div>
        )}
        <Fade damping={0.1}>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-6">
            {destinations.map((destination, idx) => (
              <Destination key={idx} destination={destination}></Destination>
            ))}
          </div>
        </Fade>
      </div>
    </div>
  );
};

export default Destinations;
