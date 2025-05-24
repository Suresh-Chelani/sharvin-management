import React, { useState, useEffect } from 'react';

interface Testimonial {
    id: number;
    name: string;
    role: string;
    company: string;
    image: string;
    quote: string;
}

const Testimonial: React.FC = () => {
    const testimonials: Testimonial[] = [
        {
            id: 1,
            name: 'Sarah Johnson',
            role: 'Marketing Director',
            company: 'TechGlobe Inc.',
            image: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
            quote: 'PULSE MEDIA transformed our digital presence. Their strategic approach to social media advertising increased our engagement by 200% in just three months.'
        },
        {
            id: 2,
            name: 'Michael Chen',
            role: 'CEO',
            company: 'Innovate Solutions',
            image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
            quote: 'Working with this team was a game-changer for our brand. Their design work is impeccable, and the results from their campaigns exceeded our expectations.'
        },
        {
            id: 3,
            name: 'Olivia Rodriguez',
            role: 'E-commerce Manager',
            company: 'StyleHouse',
            image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
            quote: 'After struggling with our online presence for years, we finally found a partner who understands our vision. Our conversion rates have improved dramatically.'
        }
    ];

    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
        }, 5000);
        return () => clearInterval(interval);
    }, [testimonials.length]);

    return (
        <section className="py-20 bg-gradient-to-b from-black to-gray-900" id="testimonials">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#0352ca] to-[#cad91c]">
                            Client Success Stories
                        </span>
                    </h2>
                    <p className="text-gray-300 max-w-3xl mx-auto">
                        Don't just take our word for it — hear what our clients have to say about working with us
                    </p>
                </div>

                <div className="max-w-4xl mx-auto relative">
                    {/* Decorative elements */}
                    <div className="absolute -top-12 -left-12 w-24 h-24 bg-[#0352ca]/30 rounded-full blur-xl"></div>
                    <div className="absolute -bottom-12 -right-12 w-24 h-24 bg-[#cad91c]/30 rounded-full blur-xl"></div>

                    <div className="relative bg-gray-900/50 backdrop-blur-lg p-8 md:p-12 rounded-2xl border border-gray-800">
                        <div className="absolute -top-5 -right-5 text-7xl text-[#cad91c] opacity-50">"</div>
                        <div className="absolute -bottom-5 -left-5 text-7xl text-[#0352ca] opacity-50">"</div>

                        <div className="flex flex-col md:flex-row items-center gap-8">
                            <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden border-4 border-[#cad91c] flex-shrink-0">
                                <img
                                    src={testimonials[activeIndex].image}
                                    alt={testimonials[activeIndex].name}
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            <div className="flex-1">
                                <p className="text-gray-300 text-lg mb-6 italic">
                                    "{testimonials[activeIndex].quote}"
                                </p>
                                <div>
                                    <h4 className="text-white font-bold text-xl">
                                        {testimonials[activeIndex].name}
                                    </h4>
                                    <p className="text-gray-400">
                                        {testimonials[activeIndex].role}, {testimonials[activeIndex].company}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Testimonial indicators */}
                    <div className="flex justify-center mt-8 space-x-2">
                        {testimonials.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setActiveIndex(index)}
                                className={`w-3 h-3 rounded-full transition-all ${activeIndex === index
                                    ? 'bg-gradient-to-r from-[#0352ca] to-[#cad91c] w-10'
                                    : 'bg-gray-600'
                                    }`}
                                aria-label={`Go to testimonial ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonial;