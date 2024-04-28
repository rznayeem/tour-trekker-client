import { FaMapLocationDot } from 'react-icons/fa6';
import { GiCommercialAirplane } from 'react-icons/gi';

const WhyChooseUs = () => {
  return (
    <div className="flex">
      <div className="w-1/2">
        <img
          src="https://i.ibb.co/nrhjFQS/lewis-j-goetz-p3zbb3-Efczw-unsplash-1.jpg"
          alt=""
        />
      </div>
      <div
        className="w-1/2 bg-[#313041] relative"
        // style={{
        //   backgroundImage: `url('https://tevily-html.vercel.app/assets/images/shapes/why-choose-right-map.png')`,
        //   backgroundRepeat: 'no-repeat',
        //   backgroundPosition: 'bottom right',
        // }}
      >
        <div className="absolute right-0 bottom-0 opacity-10">
          <img
            src="https://tevily-html.vercel.app/assets/images/shapes/why-choose-right-map.png"
            alt=""
          />
        </div>
        <div className="text-white flex h-full lg:ml-24 items-center">
          <div className="space-y-8">
            <h1 className="text-5xl font-bold">Why Choose TourTrekker</h1>
            <p className="text-[#9594A2]">
              There are many variations of passages of Lorem Ipsum is simply
              free text available <br /> in the market for you, but the majority
              have suffered alteration in some form.
            </p>
            <div className="flex items-center gap-3">
              <GiCommercialAirplane className="text-6xl text-[#FF5956]" />
              <div>
                <h3 className="font-bold text-xl">
                  Professional and Certified
                </h3>
                <p className="text-[#9594A2]">
                  Opt for our Professional and Certified guides for expertly
                  curated experiences, <br /> ensuring safety, quality, and
                  unforgettable adventures.
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <FaMapLocationDot className="text-6xl text-[#FF5956]" />
              <div>
                <h3 className="font-bold text-xl">Get Instant Tour Bookings</h3>
                <p className="text-[#9594A2]">
                  Experience the convenience of instant tour bookings, securing
                  your adventure <br /> with just a few clicks for seamless
                  travel planning.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;