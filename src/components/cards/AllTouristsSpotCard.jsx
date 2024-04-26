import { FaRegClock } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

const AllTouristsSpotCard = ({ allSpotData }) => {
  const {
    _id,
    photo,
    email,
    name,
    spot_name,
    country_name,
    location,
    description,
    cost,
    seasonality,
    travel_time,
    visitors,
  } = allSpotData;

  return (
    <div className="container mx-auto border rounded-2xl">
      <div className="flex gap-6 m-5">
        <img className="w-[30%] rounded-2xl" src={photo} alt="" />
        <div className="flex flex-1">
          <div className="w-[60%]">
            <h1>{spot_name}</h1>
            <p>{description}</p>
          </div>
          <div className="inline-block h-[250px] min-h-[1em] w-0.5 self-stretch bg-neutral-500  opacity-100 dark:opacity-100"></div>
          <div className=" w-[40%]">
            <p className="flex justify-center items-center gap-6 text-center">
              <FaRegClock /> <span>{travel_time}</span>
            </p>
            <p className="flex justify-center">Cost: {cost}</p>
            <div className="flex justify-center">
              <Link to={`/viewDetails/${_id}`} className="btn">
                View Details
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllTouristsSpotCard;
