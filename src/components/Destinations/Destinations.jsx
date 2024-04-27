import { useEffect, useState } from 'react';
import Destination from '../cards/Destination';

const Destinations = () => {
  const [destinations, setDestinations] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/category')
      .then(res => res.json())
      .then(data => setDestinations(data));
  }, []);

  return (
    <div
      className="py-20 bg-[#F9F4EE]"
      style={{
        backgroundImage: "url('https://i.imgur.com/mO7iYqL.png')",
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'bottom',
      }}
    >
      <div className="max-w-screen-xl mx-auto">
        <div className="text-center space-y-7 mb-12">
          <h1 className="text-4xl font-bold">Top Destinations</h1>
          <p>
            Explore our top destinations. our curated collection of top
            destinations invites you to immerse yourself in the essence of
            travel.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-6">
          {destinations.map((destination, idx) => (
            <Destination key={idx} destination={destination}></Destination>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Destinations;
