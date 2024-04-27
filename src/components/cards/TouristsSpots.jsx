import { Swiper, SwiperSlide } from 'swiper/react';
import reactLight from '../../assets/Rect-Light.svg';
import cloudy from '../../assets/Cloudy.svg';
import colorLine from '../../assets/Contour-Line.svg';
// import shineLight from '../../assets/Shiny-Overlay.svg';
// import curveLight from '../../assets/Curve-Line.svg';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { Autoplay, FreeMode, Pagination } from 'swiper/modules';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const TouristsSpots = () => {
  const [touristsSpots, setTouristsSpots] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/touristsSpot')
      .then(res => res.json())
      .then(data => {
        setTouristsSpots(data);
      });
  }, []);

  return (
    <div
      className="h-[80vh] -mt-2 flex items-center"
      style={{
        backgroundImage: `url("${colorLine}")`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'bottom',
        backgroundSize: 'cover',
      }}
    >
      <div className="container mx-auto">
        <Swiper
          slidesPerView={4}
          spaceBetween={30}
          freeMode={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Autoplay, FreeMode, Pagination]}
          className="mySwiper"
        >
          <div>
            {touristsSpots.map((touristsSpot, idx) => (
              <SwiperSlide key={idx}>
                <div className="card bg-[#E9E9E9] shadow-xl  overflow-hidden">
                  <figure className="m-6 rounded-2xl">
                    <img
                      className=" w-full md:h-[214px] lg:h-[290px] object-cover transition duration-300 ease-in-out hover:scale-110"
                      src={touristsSpot.photo}
                      alt=""
                    />
                  </figure>
                  <div
                    className="card-body"
                    style={{
                      background: `url("${reactLight}")`,
                      backgroundRepeat: 'no-repeat',
                      backgroundPosition: 'bottom',
                    }}
                  >
                    <h2 className="card-title">{touristsSpot.spot_name}</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <Link
                      to={`/viewDetails/${touristsSpot._id}`}
                      className="card-actions justify-end"
                    >
                      <button className="btn btn-primary">View Details</button>
                    </Link>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </div>
        </Swiper>
      </div>
    </div>
  );
};

export default TouristsSpots;