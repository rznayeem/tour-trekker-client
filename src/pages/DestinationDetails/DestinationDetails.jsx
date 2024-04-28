import { useLoaderData } from 'react-router-dom';
import DestinationDetailsCards from '../../components/cards/DestinationDetailsCards';

const DestinationDetails = () => {
  const countrySpots = useLoaderData();

  return (
    <div className="py-20">
      <div className="space-y-6">
        {countrySpots.map(countrySpot => (
          <DestinationDetailsCards
            key={countrySpot._id}
            countrySpot={countrySpot}
          ></DestinationDetailsCards>
        ))}
      </div>
    </div>
  );
};

export default DestinationDetails;
