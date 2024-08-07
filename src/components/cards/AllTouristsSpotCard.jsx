import PropTypes from 'prop-types';
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
    <div className="mx-auto border rounded-2xl " data-aos="fade-up">
      <div className="flex flex-col lg:flex-row gap-6 m-5">
        <div className="lg:w-[30%] overflow-hidden  rounded-2xl">
          <img
            className=" object-cover transition duration-300 ease-in-out hover:scale-110"
            src={photo}
            alt=""
          />
        </div>
        <div className="flex flex-col lg:flex-row flex-1">
          <div className="lg:w-[60%] flex flex-col">
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
          <div className=" mx-5 hidden lg:inline-block min-h-[1em] w-0.5 self-stretch bg-neutral-500  opacity-100 dark:opacity-100"></div>
          <div className="lg:w-[40%] flex flex-col justify-between py-10">
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

AllTouristsSpotCard.propTypes = {
  allSpotData: PropTypes.shape({
    _id: PropTypes.any,
    cost: PropTypes.any,
    country_name: PropTypes.any,
    description: PropTypes.any,
    email: PropTypes.any,
    location: PropTypes.any,
    name: PropTypes.any,
    photo: PropTypes.any,
    seasonality: PropTypes.any,
    spot_name: PropTypes.any,
    travel_time: PropTypes.any,
    visitors: PropTypes.any,
  }),
};

export default AllTouristsSpotCard;
