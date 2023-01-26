import React from 'react';

const Banner = () => {
  return (
    <>
      <div className="relative flex justify-center space-y-14 sm:space-y-20 md:space-y-44 lg:space-y-56">
        <video className="w-full" autoPlay loop muted>
          <source src="/public/playing-dino.mp4" type="video/mp4" />
        </video>

        <div className="absolute">
          <button className="border-4 border-gray-400 px-3 py-2 sm:px-10 sm:py-4 lg:px-20 lg:py-6 bg-transparent text-lg text-gray-400 font-bold">
            <a href="https://chromedino.com/" target="_blank">
              Lets Play
            </a>
          </button>
        </div>
      </div>
    </>
  );
};

export default Banner;
