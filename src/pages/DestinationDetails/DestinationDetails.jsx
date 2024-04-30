import { useLoaderData } from 'react-router-dom';
import DestinationDetailsCards from '../../components/cards/DestinationDetailsCards';
import { Helmet } from 'react-helmet';

const DestinationDetails = () => {
  const countrySpots = useLoaderData();

  return (
    <div className="py-20">
      <Helmet>
        <title>Tour Trekker | Details of {countrySpots.spot_name}</title>
      </Helmet>
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
