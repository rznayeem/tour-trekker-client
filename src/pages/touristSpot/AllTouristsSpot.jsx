import AllTouristsSpotCard from '../../components/cards/AllTouristsSpotCard';
import { useEffect, useState } from 'react';
import { Fade } from 'react-awesome-reveal';
import { Helmet } from 'react-helmet';

const AllTouristsSpot = () => {
  const [loader, setLoader] = useState(true);
  // const allSpotsData = useLoaderData();

  const [spotData, setSpotData] = useState([]);

  const [displayData, setDisplayData] = useState([]);

  useEffect(() => {
    fetch(
      'https://assignment-10-tour-trekker-server-side.vercel.app/allTouristsSpot'
    )
      .then(res => res.json())
      .then(data => {
        setSpotData(data);
        setDisplayData(data);
        setLoader(false);
      });
  }, []);

  const handleSort = sort => {
    if (sort == 'asc') {
      fetch(
        'https://assignment-10-tour-trekker-server-side.vercel.app/allTouristsSpot/asc'
      )
        .then(res => res.json())
        .then(data => {
          setDisplayData(data);
          setLoader(false);
        });
    } else if (sort == 'dsc') {
      fetch(
        'https://assignment-10-tour-trekker-server-side.vercel.app/allTouristsSpot/dsc'
      )
        .then(res => res.json())
        .then(data => {
          setDisplayData(data);
          setLoader(false);
        });
    } else {
      setDisplayData(spotData);
      setLoader(false);
    }
  };

  return (
    <div className="lg:py-20 m-5 lg:m-0">
      <Helmet>
        <title>Tour Trekker | All tourists spots</title>
      </Helmet>
      <div className="container mx-auto ">
        <Fade direction="left">
          <h1 className="text-3xl font-bold">Explore all our famous spot</h1>
        </Fade>
        <div className="flex justify-between items-center">
          <p>{displayData.length} results</p>
          <div className="mb-10 flex gap-6 items-center max-w-[250px]">
            <h1>Sort By:</h1>
            <form className="max-w-sm mx-auto">
              <select
                onChange={e => handleSort(e.target.value)}
                name="sort"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <option>Select an option</option>
                <option value="asc">Ascending Cost</option>
                <option value="dsc">Descending Cost</option>
              </select>
            </form>
          </div>
        </div>
        {loader && (
          <div className="space-y-6">
            <div className="flex flex-col lg:flex-row gap-4 w-full">
              <div className="skeleton h-[250px] w-full"></div>
              <div className="flex flex-col gap-7 w-full">
                <div className="skeleton h-4 w-full"></div>
                <div className="skeleton h-4 w-full"></div>
                <div className="skeleton h-4 w-full"></div>
                <div className="skeleton h-4 w-full"></div>
                <div className="skeleton h-4 w-full"></div>
              </div>
              <div className="flex flex-col gap-7 w-full">
                <div className="skeleton h-4 w-full"></div>
                <div className="skeleton h-4 w-full"></div>
                <div className="skeleton h-4 w-full"></div>
                <div className="skeleton h-4 w-full"></div>
                <div className="skeleton h-4 w-full"></div>
              </div>
            </div>
            <div className="flex flex-col lg:flex-row gap-4 w-full">
              <div className="skeleton h-[250px] w-full"></div>
              <div className="flex flex-col gap-7 w-full">
                <div className="skeleton h-4 w-full"></div>
                <div className="skeleton h-4 w-full"></div>
                <div className="skeleton h-4 w-full"></div>
                <div className="skeleton h-4 w-full"></div>
                <div className="skeleton h-4 w-full"></div>
              </div>
              <div className="flex flex-col gap-7 w-full">
                <div className="skeleton h-4 w-full"></div>
                <div className="skeleton h-4 w-full"></div>
                <div className="skeleton h-4 w-full"></div>
                <div className="skeleton h-4 w-full"></div>
                <div className="skeleton h-4 w-full"></div>
              </div>
            </div>
            <div className="flex flex-col lg:flex-row gap-4 w-full">
              <div className="skeleton h-[250px] w-full"></div>
              <div className="flex flex-col gap-7 w-full">
                <div className="skeleton h-4 w-full"></div>
                <div className="skeleton h-4 w-full"></div>
                <div className="skeleton h-4 w-full"></div>
                <div className="skeleton h-4 w-full"></div>
                <div className="skeleton h-4 w-full"></div>
              </div>
              <div className="flex flex-col gap-7 w-full">
                <div className="skeleton h-4 w-full"></div>
                <div className="skeleton h-4 w-full"></div>
                <div className="skeleton h-4 w-full"></div>
                <div className="skeleton h-4 w-full"></div>
                <div className="skeleton h-4 w-full"></div>
              </div>
            </div>
          </div>
        )}
        <div className="space-y-6 ">
          {displayData.map((allSpotData, idx) => (
            <AllTouristsSpotCard
              key={idx}
              allSpotData={allSpotData}
            ></AllTouristsSpotCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllTouristsSpot;
