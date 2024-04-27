import { Carousel } from 'flowbite-react';

const Banner = () => {
  return (
    <div
      className="bg-[#2D2330] text-[#FFFFFF]"
      style={{
        backgroundImage: `url('https://i.imgur.com/KcT0t7W.png')`,
      }}
    >
      <div className="container mx-auto h-[90vh] flex justify-between items-center gap-14">
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

        <Carousel className="w-[50vw] h-[80vh]" slideInterval={3000}>
          <img
            className="h-full"
            src="https://i.ibb.co/60qBR5Z/mario-la-pergola-WTGV6q-BOzro-unsplash.jpg"
            alt="..."
          />
          <img
            className="h-full"
            src="https://i.ibb.co/nrhjFQS/lewis-j-goetz-p3zbb3-Efczw-unsplash-1.jpg"
            alt="..."
          />
          <img
            className=" h-full"
            src="https://i.ibb.co/VvwKq1h/humphrey-muleba-Tej-Fa7-VW5e4-unsplash-1.jpg"
            alt="..."
          />
        </Carousel>
      </div>
    </div>
  );
};

export default Banner;
