import { Autoplay, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import { Typewriter } from 'react-simple-typewriter';

const Banner = () => {
  return (
    <div
      className="bg-[#2D2330] text-[#FFFFFF] "
      style={{
        backgroundImage: `url('https://i.imgur.com/KcT0t7W.png')`,
      }}
    >
      <div className="p-6 container mx-auto lg:h-[90vh] flex flex-col-reverse md:flex-row justify-between items-center gap-14">
        <div className="space-y-7 lg:w-1/2">
          <h3
            data-aos="fade-down"
            className="font-cursive text-[#FF5956] text-2xl"
          >
            Plan to Travel Everywhere
          </h3>
          <h1 data-aos="fade-left" className="text-5xl font-extrabold">
            Let’s plan your trip with
            <br />
            Tour
            <span className="text-[#FF5956]">
              <Typewriter words={['Trekker']} loop={5}></Typewriter>
            </span>
          </h1>
          <p data-aos="fade-up">
            Discover amzaing places at exclusive deals. Eat, Shop, Visit
            interesting places around the world.
          </p>
        </div>
        <div
          data-aos="zoom-in"
          data-aos-duration="500"
          className="lg:w-1/2 relative"
        >
          <Swiper
            loop={true}
            navigation={true}
            modules={[Navigation, Autoplay]}
            autoplay={true}
            className="mySwiper w-[90vw] lg:w-full rounded-2xl object-cover"
          >
            <SwiperSlide className="">
              <div className="">
                <img
                  className="h-[260px] lg:h-[560px]"
                  src="https://i.ibb.co/60qBR5Z/mario-la-pergola-WTGV6q-BOzro-unsplash.jpg"
                  alt="..."
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="h-[260px] lg:h-[560px]"
                src="https://i.ibb.co/nrhjFQS/lewis-j-goetz-p3zbb3-Efczw-unsplash-1.jpg"
                alt="..."
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="h-[260px] lg:h-[560px] w-full"
                src="https://i.ibb.co/VvwKq1h/humphrey-muleba-Tej-Fa7-VW5e4-unsplash-1.jpg"
                alt="..."
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Banner;
