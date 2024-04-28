import { FaRegClock } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
import { FaArrowUpRightFromSquare } from 'react-icons/fa6';
import { SlTag } from 'react-icons/sl';
import { FaCheck } from 'react-icons/fa6';

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
    <div className="mx-auto border rounded-2xl">
      <div className="flex gap-6 m-5">
        <img className="w-[30%] rounded-2xl" src={photo} alt="" />
        <div className="flex flex-1">
          <div className="w-[60%] flex flex-col">
            <div className="space-y-6">
              <div className="flex justify-between">
                <h1 className="text-2xl font-bold">{spot_name}</h1>
                <p className="font-semibold">
                  Visitors: <span className="text-[#FF5956]">{visitors}</span>{' '}
                  /year
                </p>
              </div>
              <p className=" text-xl font-medium">
                Best time for visit: {seasonality}
              </p>
              <p className="">{description}</p>
            </div>
            <div className="mt-auto flex justify-center gap-6">
              <p className="flex items-center gap-3 text-[#FF5956]">
                <span>
                  <SlTag />
                </span>{' '}
                Best Price Guarantee
              </p>
              <p className="flex items-center gap-3 text-[#FF5956]">
                <span>
                  <FaCheck />
                </span>{' '}
                Free Cancellation
              </p>
            </div>
          </div>
          <div className="inline-block mx-5 min-h-[1em] w-0.5 self-stretch bg-neutral-500  opacity-100 dark:opacity-100"></div>
          <div className="w-[40%] flex flex-col justify-between py-10">
            <p className="flex justify-center items-center gap-6 text-center">
              <FaRegClock /> <span>{travel_time}</span>
            </p>
            <div>
              <p className="flex justify-center items-center text-2xl font-bold gap-4">
                <span className="text-xl font-medium">Cost:</span> ${cost}
              </p>
              <div className="flex justify-center">
                <Link
                  to={`/viewDetails/${_id}`}
                  className="rounded-2xl btn mt-5 hover:bg-[#FF5956] text-[#FF5956] hover:text-white font-semibold px-9 py-6 h-auto w-auto min-h-0 bg-transparent border border-[#FF5956] duration-300"
                >
                  View Details{' '}
                  <span>
                    <FaArrowUpRightFromSquare />
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllTouristsSpotCard;
