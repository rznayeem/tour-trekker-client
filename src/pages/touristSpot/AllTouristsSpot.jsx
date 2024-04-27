import { useLoaderData } from 'react-router-dom';
import AllTouristsSpotCard from '../../components/cards/AllTouristsSpotCard';
import { useState } from 'react';

const AllTouristsSpot = () => {
  const allSpotsData = useLoaderData();

  const [ascData, setAscData] = useState(allSpotsData);

  const handleSort = sort => {
    if (sort == 'asc') {
      fetch('http://localhost:5000/allTouristsSpot/asc')
        .then(res => res.json())
        .then(data => setAscData(data));
    } else if (sort == 'dsc') {
      fetch('http://localhost:5000/allTouristsSpot/dsc')
        .then(res => res.json())
        .then(data => setAscData(data));
    } else {
      setAscData(allSpotsData);
    }
  };

  return (
    <div>
      <div className="mx-auto flex items-center max-w-[250px]">
        <h1>Sort By:</h1>
        <form className="max-w-sm mx-auto">
          <select
            onChange={e => handleSort(e.target.value)}
            name="sort"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option>Select an option</option>
            <option value="asc">Ascending Cost</option>
            <option value="dsc">Descending Cost</option>
          </select>
        </form>
      </div>
      <div className="space-y-6">
        {ascData.map((allSpotData, idx) => (
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
