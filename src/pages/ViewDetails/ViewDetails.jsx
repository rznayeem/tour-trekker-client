import { useLoaderData } from 'react-router-dom';
import { FaRegClock } from 'react-icons/fa';
import { CgProfile } from 'react-icons/cg';
import { GiCommercialAirplane } from 'react-icons/gi';
import { CiLocationOn } from 'react-icons/ci';

const ViewDetails = () => {
  const spotData = useLoaderData();

  const {
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
  } = spotData;

  return (
    <div className="container  mx-auto">
      <img
        className="rounded-3xl max-h-[60vh] w-full object-cover"
        src={photo}
        alt=""
      />
      <div className="flex justify-between p-10 rounded-3xl bg-[#FAF5EE] mt-10">
        <div>
          <h1 className="text-2xl font-semibold">Spot Name: {spot_name}</h1>
          <p>Cost: {cost}</p>
        </div>
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-5">
            <FaRegClock className="text-[#FF5956] text-4xl" />
            <div>
              <p>Duration</p>
              <h3>{travel_time}</h3>
            </div>
          </div>
          <div className="flex items-center gap-5">
            <CgProfile className="text-[#FF5956] text-4xl" />
            <div>
              <p>Total Visitors</p>
              <h3>{visitors}</h3>
            </div>
          </div>
          <div className="flex items-center gap-5">
            <GiCommercialAirplane className="text-[#FF5956] text-4xl" />
            <div>
              <p>Tour Type</p>
              <h3>Adventure, Fun</h3>
            </div>
          </div>
          <div className="flex items-center gap-5">
            <CiLocationOn className="text-[#FF5956] text-4xl" />
            <div>
              <p>Location</p>
              <h3>{location}</h3>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="flex justify-around mt-10">
          <div className="w-[60%]">
            <h1 className="text-2xl font-semibold">Tour Description</h1>
            <div className="flex gap-12">
              <h3>Country: {country_name}</h3>
              <p>Best for: {seasonality}</p>
            </div>
            <p>{description}</p>
          </div>
          <div className="card shrink-0 w-[30%] shadow-2xl p-6 bg-base-100">
            <form className="">
              <legend className="text-center">Book Now</legend>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="Your email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Book</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewDetails;
