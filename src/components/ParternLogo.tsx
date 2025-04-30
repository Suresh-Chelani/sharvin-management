import React, { useState } from 'react';
import { motion } from 'framer-motion';

const logos = [
    {
        name: 'Online Loans',
        url: 'https://images.pexels.com/photos/6694543/pexels-photo-6694543.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        color: '#FF6B6B'
    },
    {
        name: 'Mailigen',
        url: 'https://images.pexels.com/photos/5833891/pexels-photo-5833891.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        color: '#4ECDC4'
    },
    {
        name: 'Digital Finance',
        url: 'https://images.pexels.com/photos/6693656/pexels-photo-6693656.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        color: '#45B7D1'
    },
    {
        name: 'Kreddy',
        url: 'https://images.pexels.com/photos/5833895/pexels-photo-5833895.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        color: '#96CEB4'
    },
    {
        name: 'Viventor',
        url: 'https://images.pexels.com/photos/3756345/pexels-photo-3756345.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        color: '#FFEEAD'
    },
    {
        name: 'Viasms Group',
        url: 'https://images.pexels.com/photos/5833896/pexels-photo-5833896.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        color: '#D4A5A5'
    },
    {
        name: 'The Talent Point',
        url: 'https://images.pexels.com/photos/3785927/pexels-photo-3785927.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        color: '#9B59B6'
    }
];

const PartnerLogos = () => {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    return (
        <motion.div
            className="w-full py-6 px-4 overflow-hidden logo-container"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
        >
            <div className="logo-slider flex items-center space-x-12 md:space-x-16 overflow-hidden">
                <motion.div
                    className="flex items-center space-x-12 md:space-x-16"
                    animate={{
                        x: [0, -1000],
                    }}
                    transition={{
                        x: {
                            repeat: Infinity,
                            repeatType: "loop",
                            duration: 20,
                            ease: "linear",
                        },
                    }}
                >
                    {[...logos, ...logos].map((logo, index) => (
                        <motion.div
                            key={index}
                            className="partner-logo relative flex items-center justify-center h-12 w-24 md:h-16 md:w-32 cursor-pointer"
                            onHoverStart={() => setHoveredIndex(index)}
                            onHoverEnd={() => setHoveredIndex(null)}
                            whileHover={{
                                scale: 1.05,
                                transition: { duration: 0.2 }
                            }}
                        >
                            <motion.div
                                className="absolute inset-0 rounded-lg"
                                style={{
                                    background: hoveredIndex === index
                                        ? `linear-gradient(45deg, ${logo.color}, ${logos[(index + 1) % logos.length].color})`
                                        : 'rgba(31, 41, 55, 0.5)'
                                }}
                                transition={{ duration: 0.3 }}
                            />
                            <motion.div
                                className="relative z-10 text-white font-semibold text-xs md:text-sm text-center"
                                animate={{
                                    color: hoveredIndex === index ? '#ffffff' : '#ffffff',
                                    scale: hoveredIndex === index ? 1.1 : 1
                                }}
                                transition={{ duration: 0.2 }}
                            >
                                {logo.name}
                            </motion.div>
                            {hoveredIndex === index && (
                                <motion.div
                                    className="absolute inset-0 rounded-lg"
                                    style={{
                                        background: `linear-gradient(45deg, ${logo.color}, ${logos[(index + 1) % logos.length].color})`,
                                        opacity: 0.3
                                    }}
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 0.3 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: 0.3 }}
                                />
                            )}
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </motion.div>
    );
};

export default PartnerLogos;