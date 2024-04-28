import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
const Destination = ({ destination }) => {
  const { photo, country_name, description } = destination;

  return (
    <Link to={`/DestinationDetails/${country_name}`}>
      <div className="group relative cursor-pointer lg:w-[400px] h-[270px] rounded-2xl overflow-hidden hover:shadow-xl hover:shadow-black/30 transition-shadow">
        <img
          className="w-[400px] h-[270px] rounded-2xl group-hover:scale-125 transition-transform duration-500"
          src={photo}
          alt=""
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
        <div className="flex flex-col items-center justify-center absolute inset-0 p-4 text-white translate-y-[60%] group-hover:translate-y-0 transition-all text-center duration-500">
          <h1 className="text-3xl font-bold mb-5">{country_name}</h1>
          <p className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            {description}
          </p>
        </div>
      </div>
    </Link>
  );
};

Destination.propTypes = {
  destination: PropTypes.shape({
    country_name: PropTypes.any,
    description: PropTypes.any,
    photo: PropTypes.any,
  }),
};

export default Destination;
