import { Autoplay, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

const Banner = () => {
  return (
    <div
      className="bg-[#2D2330] text-[#FFFFFF]"
      style={{
        backgroundImage: `url('https://i.imgur.com/KcT0t7W.png')`,
      }}
    >
      <div className="container mx-auto lg:h-[90vh] flex flex-col-reverse md:flex-row justify-between items-center gap-14">
        <div className="space-y-7">
          <h1 className="text-5xl font-extrabold">
            Let’s plan your trip with
            <br />
            TourTrekker
          </h1>
          <p>
            Discover amzaing places at exclusive deals. Eat, Shop, Visit
            interesting places around the world.
          </p>
        </div>
        <Swiper
          loop={true}
          navigation={true}
          modules={[Navigation, Autoplay]}
          autoplay={true}
          className="mySwiper w-[90vw] lg:w-[50vw] lg:h-[80vh] rounded-2xl object-cover"
        >
          <SwiperSlide className="h-full">
            <div className="h-full object-cover">
              <img
                className="h-[260px] lg:h-[100%]"
                src="https://i.ibb.co/60qBR5Z/mario-la-pergola-WTGV6q-BOzro-unsplash.jpg"
                alt="..."
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="h-[260px] lg:h-[100%]"
              src="https://i.ibb.co/nrhjFQS/lewis-j-goetz-p3zbb3-Efczw-unsplash-1.jpg"
              alt="..."
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="h-[260px] lg:h-[100%]"
              src="https://i.ibb.co/VvwKq1h/humphrey-muleba-Tej-Fa7-VW5e4-unsplash-1.jpg"
              alt="..."
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Banner;
