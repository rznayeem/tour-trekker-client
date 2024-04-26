import { Swiper, SwiperSlide } from 'swiper/react';
import reactLight from '../../assets/Rect-Light.svg';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { Autoplay, FreeMode, Pagination } from 'swiper/modules';
import { useEffect, useState } from 'react';

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
    <div className="container mx-auto">
      <Swiper
        slidesPerView={4}
        spaceBetween={90}
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
        <div>
          {touristsSpots.map((touristsSpot, idx) => (
            <SwiperSlide key={idx}>
              <div className="card w-96 bg-base-100 shadow-xl">
                <figure>
                  <img
                    className="max-h-[255px] w-full object-cover transition duration-300 ease-in-out hover:scale-110"
                    src={touristsSpot.photo}
                    alt=""
                  />
                </figure>
                <div
                  className="card-body"
                  style={{
                    background: `url("${reactLight}")`,
                    backgroundPosition: 'contain',
                  }}
                >
                  <h2 className="card-title">Shoes!</h2>
                  <p>If a dog chews shoes whose shoes does he choose?</p>
                  <div className="card-actions justify-end">
                    <button className="btn btn-primary">Buy Now</button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </div>
      </Swiper>
    </div>
  );
};

export default TouristsSpots;
