import React from 'react';
import { PenTool, Zap, DollarSign, Search, Users, Megaphone, LineChart, Globe } from 'lucide-react';

interface ServiceCardProps {
    title: string;
    description: string;
    icon: React.ReactNode;
    color: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon, color }) => {
    return (
        <div className="group relative overflow-hidden rounded-2xl transition-all duration-300 hover:shadow-2xl">
            <div className={`absolute inset-0 ${color} opacity-90 transition-all duration-300 group-hover:opacity-100`}></div>
            <div className="relative z-10 p-8 h-full flex flex-col">
                <div className="bg-white/20 backdrop-blur-md p-4 rounded-2xl w-16 h-16 flex items-center justify-center mb-6 text-white">
                    {icon}
                </div>
                <h3 className="text-white text-xl font-bold mb-3">{title}</h3>
                <p className="text-white/80 mb-6 flex-grow">{description}</p>
                <div className="mt-auto">
                    <button className="bg-white/10 backdrop-blur-sm text-white py-2 px-4 rounded-full font-medium hover:bg-white/20 transition-all">
                        Learn More
                    </button>
                </div>
            </div>
        </div>
    );
};

const Services: React.FC = () => {
  const services = [
    {
      title: 'Social Media Ads',
      description: 'Strategic campaigns that drive engagement and conversions across all major platforms.',
      icon: <Megaphone className="w-8 h-8" />,
      color: 'bg-gradient-to-br from-blue-500 to-blue-700'
    },
    {
      title: 'Design & Development',
      description: 'Stunning visuals and powerful functionality that elevate your brand identity.',
      icon: <PenTool className="w-8 h-8" />,
      color: 'bg-gradient-to-br from-yellow-500 to-yellow-700'
    },
    {
      title: 'Paid Ads',
      description: 'Performance-driven PPC campaigns that maximize ROI and target your ideal audience.',
      icon: <DollarSign className="w-8 h-8" />,
      color: 'bg-gradient-to-br from-purple-500 to-purple-700'
    },
    {
      title: 'SEO',
      description: 'Data-driven optimization strategies that boost your organic rankings and visibility.',
      icon: <Search className="w-8 h-8" />,
      color: 'bg-gradient-to-br from-pink-500 to-pink-700'
    },
    {
      title: 'Brand Strategy',
      description: 'Comprehensive identity development that positions your brand for long-term success.',
      icon: <Zap className="w-8 h-8" />,
      color: 'bg-gradient-to-br from-green-500 to-green-700'
    },
    {
      title: 'Content Marketing',
      description: 'Engaging storytelling that resonates with your audience and drives meaningful actions.',
      icon: <Users className="w-8 h-8" />,
      color: 'bg-gradient-to-br from-red-500 to-red-700'
    },
    {
      title: 'Analytics & Reporting',
      description: 'Transparent insights that track performance and guide strategic decisions.',
      icon: <LineChart className="w-8 h-8" />,
      color: 'bg-gradient-to-br from-indigo-500 to-indigo-700'
    },
    {
      title: 'Web Development',
      description: 'Custom websites and applications that combine form and function seamlessly.',
      icon: <Globe className="w-8 h-8" />,
      color: 'bg-gradient-to-br from-cyan-500 to-cyan-700'
    }
  ];

    return (
        <section className="py-20 bg-black" id="services">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#0352ca] to-[#cad91c]">
                            Our Services
                        </span>
                    </h2>
                    <p className="text-gray-300 max-w-3xl mx-auto">
                        Comprehensive digital marketing solutions tailored to elevate your brand and drive measurable results
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {services.map((service, index) => (
                        <ServiceCard key={index} {...service} />
                    ))}
                </div>

                <div className="mt-12 text-center">
                    <button className="bg-gradient-to-r from-[#0352ca] to-[#cad91c] text-white px-8 py-4 rounded-full font-medium hover:shadow-lg hover:from-[#0352ca] hover:to-[#cad91c] transition-all transform hover:scale-105">
                        View All Services
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Services;