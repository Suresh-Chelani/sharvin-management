import React from "react";
import bannerImg from "..//../public/images/image.png";
const Hero = () => {
  return (
    <div className="relative min-h-[80vh] bg-black overflow-hidden">
      <div className="container mx-auto px-4 py-7">
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* Left column with video/image */}
          <div className="w-full md:w-1/2 mb-8 md:mb-0 relative">
            <div className="relative z-10">
              <img
                src={bannerImg}
                alt="banner image"
                className="w-[90vw] h-[80vh] rounded-lg"
              />

              {/* Decorative elements */}
              <div className="absolute -top-20 -left-20 w-64 h-64 bg-[#0352ca] rounded-full blur-3xl opacity-40"></div>
              <div className="absolute top-1/4 right-1/4 w-16 h-16 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full"></div>
              <div className="absolute bottom-1/3 -left-4 w-24 h-24 bg-gradient-to-r from-green-400 to-cyan-500 rounded-full blur-xl opacity-60"></div>
              <div className="absolute top-2/3 right-0 w-32 h-32 bg-[#cad91c] rounded-full blur-2xl opacity-50"></div>
            </div>
          </div>

          {/* Right column with content */}
          <div className="w-full md:w-1/2 md:pl-12">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-8">
              Turning Vision into Virtual Moments
            </h1>
            <p className="text-lg text-gray-200 mb-10">
              Welcome to Sharvin Management Pvt Ltd, a leading content creation
              agency based in Jaipur, Rajasthan. With over 5 years of industry
              expertise, we specialize in delivering top-notch solutions in SMO,
              SEO, graphic designing, video editing, app development, and
              website development.
            </p>
            <a
              href="#get-started"
              className="inline-block px-8 py-3 rounded-full bg-gradient-to-r from-[#0352ca] to-[#cad91c] text-white font-medium hover:shadow-lg transition-all duration-300"
            >
              Get Started
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
