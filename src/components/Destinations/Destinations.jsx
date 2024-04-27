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
    <div className="max-w-screen-xl mx-auto">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-6">
        {destinations.map((destination, idx) => (
          <Destination key={idx} destination={destination}></Destination>
        ))}
      </div>
    </div>
  );
};

export default Destinations;
