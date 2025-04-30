import React from 'react';
import { motion } from 'framer-motion';
import GlobeVisualization from './GlobeVisualization';

const Hero = () => {
    return (
        <div className="relative w-full h-screen overflow-hidden flex items-center">
            {/* 3D Globe */}
            <div className="absolute inset-0 w-full h-full">
                <GlobeVisualization />
            </div>

            {/* Content */}
            <div className="relative w-full h-full flex flex-col md:flex-row items-center justify-between px-6 lg:px-12 z-10">
                {/* Left side - just spacing */}
                <div className="w-full md:w-1/2" />

                {/* Right side - content */}
                <motion.div
                    className="w-full md:w-1/2 space-y-6 flex flex-col justify-center"
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <motion.h1
                        className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                    >
                        <span className="block bg-gradient-to-r from-[#0352ca] to-[#cad91c] bg-clip-text text-transparent">
                            DISCOVER THE
                        </span>
                        <span className="block bg-gradient-to-r from-[#cad91c] via-[#0352ca] to-[#cad91c] bg-clip-text text-transparent">
                            FUTURE OF
                        </span>
                        <span className="block bg-gradient-to-r from-[#0352ca] to-[#cad91c] bg-clip-text text-transparent">
                            THE DIGITAL
                        </span>
                        <span className="block bg-gradient-to-r from-[#cad91c] to-[#0352ca] bg-clip-text text-transparent">
                            MARKETING
                        </span>
                    </motion.h1>

                    <motion.p
                        className="text-base md:text-lg text-gray-300 max-w-md"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                    >
                        <span className="bg-gradient-to-r from-[#0352ca] to-[#cad91c] bg-clip-text text-transparent font-semibold">
                        SharvinManagement
                        </span> brings your business to life
                        with creative solutions that make you stand
                        out from the competition. Trust us to be your
                        wild card in a sea of average players.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.8 }}
                    >
                        <button className="bg-gradient-to-r from-[#0352ca] to-[#cad91c] text-white font-medium py-3 px-8 rounded-full hover:shadow-lg hover:shadow-[#0352ca]/50 transition-all duration-300">
                            Contact Us
                        </button>
                    </motion.div>
                </motion.div>
            </div>

            {/* Decorative gradient orbs */}
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-[#0352ca] rounded-full blur-3xl opacity-20"></div>
            <div className="absolute bottom-20 -left-20 w-64 h-64 bg-[#cad91c] rounded-full blur-3xl opacity-20"></div>
        </div>
    );
};

export default Hero;