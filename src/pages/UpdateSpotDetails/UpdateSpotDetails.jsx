import { Helmet } from 'react-helmet';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

const UpdateSpotDetails = () => {
  const data = useLoaderData();

  const {
    _id,
    photo,
    spot_name,
    country_name,
    location,
    description,
    cost,
    seasonality,
    travel_time,
    visitors,
  } = data;

  const handleUpdateSpot = e => {
    e.preventDefault();
    const form = e.target;
    const photo = form.photo.value;
    const spot_name = form.spot_name.value;
    const country_name = form.country_name.value;
    const location = form.location.value;
    const description = form.description.value;
    const cost = parseFloat(form.cost.value);
    const seasonality = form.seasonality.value;
    const travel_time = form.travel_time.value;
    const visitors = form.visitors.value;

    const updatedData = {
      photo,
      spot_name,
      country_name,
      location,
      description,
      cost,
      seasonality,
      travel_time,
      visitors,
    };
    console.log(updatedData);
    fetch(
      `https://assignment-10-tour-trekker-server-side.vercel.app/allTouristsSpot/${_id}`,
      {
        method: 'PATCH',
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify(updatedData),
      }
    )
      .then(res => res.json())
      .then(data => {
        if (data.modifiedCount > 0) {
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Your work has been saved',
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };

  return (
    <div>
      <Helmet>
        <title>Tour Trekker | Update your spot</title>
      </Helmet>
      <form onSubmit={handleUpdateSpot} className="card-body md:w-1/2 mx-auto">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Photo Url</span>
          </label>
          <input
            type="url"
            name="photo"
            defaultValue={photo}
            placeholder="Put Photo url of the spot"
            className="input input-bordered"
            required
          />
        </div>

        <div className="grid grid-cols-2 gap-6">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Tourists Spot Name</span>
            </label>
            <input
              type="text"
              name="spot_name"
              defaultValue={spot_name}
              placeholder="Tourists Spot Name"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text">Country Name</span>
              </div>
              <select className="select select-bordered" name="country_name">
                <option defaultValue={'Pick one'}>{country_name}</option>
                <option>Bangladesh</option>
                <option>Thailand</option>
                <option>Indonesia</option>
                <option>Vietnam</option>
                <option>Cambodia</option>
                <option>Malaysia</option>
              </select>
            </label>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-6">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Location</span>
            </label>
            <input
              type="text"
              name="location"
              defaultValue={location}
              placeholder="Location"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Short Description</span>
            </label>
            <input
              type="text"
              name="description"
              defaultValue={description}
              placeholder="Short Description"
              className="input input-bordered"
              required
            />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-6">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Average Cost</span>
            </label>
            <input
              type="number"
              name="cost"
              defaultValue={cost}
              placeholder="Average Cost"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Seasonality</span>
            </label>
            <input
              type="text"
              name="seasonality"
              defaultValue={seasonality}
              placeholder="Seasonality"
              className="input input-bordered"
              required
            />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-6">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Travel Time</span>
            </label>
            <input
              type="text"
              placeholder="Travel Time"
              defaultValue={travel_time}
              name="travel_time"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Total Visitors Per year</span>
            </label>
            <input
              type="text"
              placeholder="Total Visitors"
              defaultValue={visitors}
              name="visitors"
              className="input input-bordered"
              required
            />
          </div>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Update</button>
        </div>
      </form>
    </div>
  );
};

export default UpdateSpotDetails;
