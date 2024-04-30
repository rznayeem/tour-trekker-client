import PropTypes from 'prop-types';
import React from 'react';
import { CiLocationOn } from 'react-icons/ci';
import { FaCheck, FaRegClock } from 'react-icons/fa';
import { FaArrowUpRightFromSquare } from 'react-icons/fa6';
import { SlTag } from 'react-icons/sl';
import { Link } from 'react-router-dom';

const DestinationDetailsCards = ({ countrySpot }) => {
  const {
    _id,
    photo,
    spot_name,
    country_name,
    seasonality,
    description,
    cost,
    location,
    travel_time,
  } = countrySpot;

  return (
    <div>
      <div className="mx-auto container border rounded-2xl">
        <div className="flex flex-col lg:flex-row gap-6 m-5">
          <img className="lg:w-[30%] rounded-2xl" src={photo} alt="" />
          <div className="flex flex-col lg:flex-row flex-1">
            <div className="lg:w-[60%] flex flex-col">
              <div className="space-y-6">
                <div className="flex justify-between">
                  <h1 className="text-2xl font-bold">{spot_name}</h1>
                  <p className="font-semibold">
                    Country:{' '}
                    <span className="text-[#FF5956]">{country_name}</span>{' '}
                  </p>
                </div>
                <p className=" text-xl font-medium">
                  Best time for visit: {seasonality}
                </p>
                <p className="">{description}</p>
                <p className="flex items-center gap-3">
                  <CiLocationOn className="text-[#FF5956] text-xl font-semibold" />{' '}
                  {location}
                </p>
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
            <div className=" hidden lg:inline-block mx-5 min-h-[1em] w-0.5 self-stretch bg-neutral-500  opacity-100 dark:opacity-100"></div>
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
    </div>
  );
};

DestinationDetailsCards.propTypes = {
  countrySpot: PropTypes.shape({
    _id: PropTypes.any,
    cost: PropTypes.any,
    country_name: PropTypes.any,
    description: PropTypes.any,
    location: PropTypes.any,
    photo: PropTypes.any,
    seasonality: PropTypes.any,
    spot_name: PropTypes.any,
    travel_time: PropTypes.any,
  }),
};

export default DestinationDetailsCards;
