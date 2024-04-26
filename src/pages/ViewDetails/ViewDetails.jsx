import { useLoaderData } from 'react-router-dom';

const ViewDetails = () => {
  const spotData = useLoaderData();

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
  } = spotData;

  return (
    <div className="container mx-auto">
      <img
        className="rounded-3xl max-h-[60vh] w-full object-cover"
        src={photo}
        alt=""
      />
      <div className="flex gap-12">
        <div className="w-[65%]">
          <h1>Details</h1>
          <p>{description}</p>
        </div>
        <div>
          <p>Price:{cost}</p>
        </div>
      </div>
    </div>
  );
};

export default ViewDetails;
