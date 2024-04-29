import { Swiper, SwiperSlide } from 'swiper/react';
import reactLight from '../../assets/Rect-Light.svg';
import colorLine from '../../assets/Contour-Line.svg';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { Autoplay, FreeMode, Pagination } from 'swiper/modules';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaArrowUpRightFromSquare, FaLocationDot } from 'react-icons/fa6';

const TouristsSpots = () => {
  const [touristsSpots, setTouristsSpots] = useState([]);
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    fetch(
      'https://assignment-10-tour-trekker-server-side.vercel.app/touristsSpot'
    )
      .then(res => res.json())
      .then(data => {
        setTouristsSpots(data);
        setLoader(false);
      });
  }, [setLoader]);

  return (
    <div
      className="py-20"
      style={{
        backgroundImage: `url("${colorLine}")`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'bottom',
        backgroundSize: 'cover',
      }}
    >
      <div className="text-center space-y-7 mb-6">
        <h1 className="text-4xl font-bold">Tourists Spots</h1>
        <p>
          Lose yourself in the tranquil beauty of Bali&apos;s pristine beaches,
          where azure waters meet golden sands. Dive into vibrant coral <br />
          reefs, trek through lush rice terraces, and discover the island&apos;s
          rich cultural heritage.
        </p>
      </div>
      {loader && (
        <div className="container mx-auto flex flex-col lg:flex-row justify-around gap-6">
          <div className="flex flex-col gap-4 h-[634px] w-full">
            <div className="skeleton h-[290px] w-full"></div>
            <div className="skeleton h-4 w-28"></div>
            <div className="skeleton h-4 w-full"></div>
            <div className="skeleton h-4 w-full"></div>
            <div className="skeleton h-4 w-full"></div>
            <div className="skeleton h-4 w-full"></div>
          </div>
          <div className="flex flex-col gap-4 h-[634px] w-full">
            <div className="skeleton h-[290px] w-full"></div>
            <div className="skeleton h-4 w-28"></div>
            <div className="skeleton h-4 w-full"></div>
            <div className="skeleton h-4 w-full"></div>
            <div className="skeleton h-4 w-full"></div>
            <div className="skeleton h-4 w-full"></div>
          </div>
          <div className="flex flex-col gap-4 h-[634px] w-full">
            <div className="skeleton h-[290px] w-full"></div>
            <div className="skeleton h-4 w-28"></div>
            <div className="skeleton h-4 w-full"></div>
            <div className="skeleton h-4 w-full"></div>
            <div className="skeleton h-4 w-full"></div>
            <div className="skeleton h-4 w-full"></div>
          </div>
          <div className="flex flex-col gap-4 h-[634px] w-full">
            <div className="skeleton h-[290px] w-full"></div>
            <div className="skeleton h-4 w-28"></div>
            <div className="skeleton h-4 w-full"></div>
            <div className="skeleton h-4 w-full"></div>
            <div className="skeleton h-4 w-full"></div>
            <div className="skeleton h-4 w-full"></div>
          </div>
        </div>
      )}
      <div className=" flex items-center" data-aos="fade-up">
        <div className="container mx-auto">
          <Swiper
            breakpoints={{
              640: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 40,
              },
              1024: {
                slidesPerView: 4,
                spaceBetween: 50,
              },
            }}
            spaceBetween={30}
            freeMode={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: true,
            }}
            pagination={{
              clickable: true,
            }}
            modules={[Autoplay, FreeMode, Pagination]}
            className="mySwiper"
          >
            <div data-aos="fade-up">
              {touristsSpots.map((touristsSpot, idx) => (
                <SwiperSlide key={idx}>
                  <div className="card bg-[#E9E9E9] shadow-xl  overflow-hidden">
                    <figure className="relative m-6 rounded-2xl">
                      <img
                        className=" w-full md:h-[214px] lg:h-[290px] object-cover transition duration-300 ease-in-out hover:scale-110"
                        src={touristsSpot.photo}
                        alt=""
                      />
                      <h3 className="absolute text-xs py-3 px-5 rounded-full text-white bg-black top-3 left-3 border">
                        ${touristsSpot.cost} /{touristsSpot.travel_time}
                      </h3>
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
                      <p className="flex items-center gap-4 text-[#FF5956]">
                        <FaLocationDot /> {touristsSpot.location}
                      </p>
                      <p>Best time for visit: {touristsSpot.seasonality}</p>
                      <Link
                        to={`/viewDetails/${touristsSpot._id}`}
                        className="rounded-2xl btn mt-5 hover:bg-[#FF5956] text-[#FF5956] hover:text-white font-semibold px-9 py-6 h-auto w-auto min-h-0 bg-transparent border border-[#FF5956] duration-300"
                      >
                        View Details{' '}
                        <span>
                          <FaArrowUpRightFromSquare />
                        </span>
                      </Link>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </div>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default TouristsSpots;
