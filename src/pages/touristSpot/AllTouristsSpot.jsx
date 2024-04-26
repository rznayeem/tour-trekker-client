import { useLoaderData } from 'react-router-dom';
import AllTouristsSpotCard from '../../components/cards/AllTouristsSpotCard';

const AllTouristsSpot = () => {
  const allSpotsData = useLoaderData();

  return (
    <div>
      <div className="space-y-6">
        {allSpotsData.map((allSpotData, idx) => (
          <AllTouristsSpotCard
            key={idx}
            allSpotData={allSpotData}
          ></AllTouristsSpotCard>
        ))}
      </div>
    </div>
  );
};

export default AllTouristsSpot;
