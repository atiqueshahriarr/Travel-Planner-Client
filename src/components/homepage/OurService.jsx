const OurService = () => {
  return (
    <div className="w-11/12 lg:w-3/4 mx-auto mt-10 space-y-8 mb-28">
      <div className="text-center space-y-4 flex flex-col items-center">
        <h3 className="text-3xl font-bold">Explore Our Services</h3>
        <p className="font-medium text-[#4e4e4e] max-w-screen-lg">
          Embark on a personalized journey with our comprehensive range of
          travel services, curated to fulfill your wanderlust dreams.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="flex flex-col items-center bg-gradient-to-b from-[#bbe8f298] shadow-md rounded-md p-8 space-y-2">
          <img
            className="w-32"
            src="https://png.pngtree.com/png-vector/20230303/ourmid/pngtree-global-map-and-location-icon-vector-png-image_6628845.png"
            alt=""
          />
          <h3 className="text-2xl font-bold mb-2">Lot of Choices</h3>
          <p className="text-center pt-2">
            Explore an array of options tailored to your preferences and needs.
            With a multitude of choices available, finding the perfect fit for
            your next adventure has never been easier.
          </p>
        </div>
        <div className="flex flex-col items-center bg-gradient-to-b from-[#bbe8f298] shadow-md rounded-md p-8 space-y-2 md:relative md:top-12">
          <img
            className="w-32"
            src="https://cdn-icons-png.flaticon.com/512/8910/8910356.png"
            alt=""
          />
          <h3 className="text-2xl font-bold mb-2">Best Tour Guide</h3>
          <p className="text-center pt-2">
            Discover the finest tour guidance, led by experts dedicated to
            enriching your travel experience. With the best tour guide by your
            side, unlock hidden gems and create unforgettable memories.
          </p>
        </div>
        <div className="flex flex-col items-center bg-gradient-to-b from-[#bbe8f298] shadow-md rounded-md p-8 space-y-2">
          <img
            className="w-32"
            src="https://i.pinimg.com/originals/85/8b/48/858b488b952342cf4b6e6fb86ee71175.png"
            alt=""
          />
          <h3 className="text-2xl font-bold mb-2">Expert Guidance</h3>
          <p className="text-center pt-2">
            Tap into expert insights, ensuring your journey is guided with care
            and precision. With our expert guidance, embark on tailored travel
            experiences crafted just for you.
          </p>
        </div>
      </div>
    </div>
  );
};

export default OurService;
