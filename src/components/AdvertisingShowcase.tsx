import React from 'react';

const AdvertisingShowcase: React.FC = () => {
    return (
        <section className="relative pt-24 pb-20 overflow-hidden bg-black" id="home">
            {/* Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
                <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#0352ca]/30 rounded-full blur-3xl"></div>
                <div className="absolute top-1/2 -left-24 w-96 h-96 bg-[#cad91c]/30 rounded-full blur-3xl"></div>
                <div className="absolute -bottom-24 left-1/2 w-96 h-96 bg-[#cad91c]/20 rounded-full blur-3xl transform -translate-x-1/2"></div>
            </div>

            {/* Gradient Banner */}
            <div className="container mx-auto px-4 md:px-6 relative">
                <div className="w-full mb-16 overflow-hidden rounded-2xl bg-gradient-to-r from-[#0352ca] to-[#cad91c]">
                    <div className="flex flex-col md:flex-row items-center justify-between p-6 md:p-8">
                        <div className="text-white md:max-w-xl mb-6 md:mb-0">
                            <h2 className="text-xl md:text-2xl font-bold mb-2">
                                Get Free Consultancy for 30 mins with our Experts
                            </h2>
                            <p className="text-white/80 text-sm md:text-base">
                                Boost your digital presence with our award-winning strategies
                            </p>
                        </div>
                        <button className="bg-white text-black font-semibold px-6 py-3 rounded-full hover:bg-opacity-90 transition-all transform hover:scale-105">
                            Get a Touch Now
                        </button>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="order-2 md:order-1">
                        <h1 className="text-5xl md:text-7xl font-bold mb-6">
                            <span className="text-white">WHAT</span>
                            <br />
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#0352ca] to-[#cad91c]">
                                WE DO?
                            </span>
                        </h1>
                        <p className="text-gray-300 text-lg mb-8 max-w-xl">
                            As a top digital consulting agency in Dubai, SocialMediaAds delivers authentic,
                            data-driven strategies that boost your brand's presence through social media
                            marketing, search engine optimization, and cutting-edge production services. Our
                            impact extends far beyond basic plan you. Trust in our team and feel the impact.
                        </p>
                        <button className="bg-gradient-to-r from-[#0352ca] to-[#cad91c] text-white px-8 py-4 rounded-full font-medium hover:shadow-lg hover:from-[#0352ca] hover:to-[#cad91c] transition-all transform hover:scale-105">
                            Explore Our Services
                        </button>
                    </div>
                    <div className="order-1 md:order-2 relative">
                        <div className="relative z-10 bg-gradient-to-br from-[#0352ca] to-[#cad91c] rounded-full p-1 max-w-sm mx-auto">
                            <img
                                src="https://images.pexels.com/photos/1595385/pexels-photo-1595385.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                                alt="Creative Professional"
                                className="rounded-full w-full h-full object-cover"
                            />
                        </div>
                        {/* Decorative elements */}
                        <div className="absolute top-0 right-0 w-24 h-24 bg-[#cad91c] rounded-full opacity-70 blur-sm"></div>
                        <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-[#0352ca] rounded-full opacity-70 blur-sm"></div>
                        <div className="absolute top-1/2 right-1/4 transform -translate-y-1/2 w-8 h-8 bg-[#cad91c] rounded-full opacity-70 blur-sm"></div>

                        {/* Zigzag decoration */}
                        <svg className="absolute -top-8 -left-8 w-24 h-24 text-[#cad91c]" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10 30L30 10L50 30L70 10L90 30" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M10 70L30 50L50 70L70 50L90 70" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AdvertisingShowcase;