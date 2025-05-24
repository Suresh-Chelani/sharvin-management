import React from 'react';
import { Instagram, Facebook, Twitter, Linkedin, Youtube } from 'lucide-react';
const Footer: React.FC = () => {
    return (
        <footer className="bg-gray-900 text-white">
            <div className="container mx-auto px-4 md:px-6 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
                    <div>
                        <span className="text-white text-2xl font-bold mb-3">
                            Sharvin<span className="bg-gradient-to-r from-[#0352ca] to-[#cad91c] bg-clip-text text-transparent">Management</span>
                        </span>
                        <p className="text-gray-400 mb-6">
                            Innovative digital marketing solutions that drive results and transform brands in the digital landscape.
                        </p>
                        <div className="flex space-x-4">
                            <a href="#" className="text-gray-400 hover:text-white transition-colors">
                                <Instagram className="h-5 w-5" />
                            </a>
                            <a href="#" className="text-gray-400 hover:text-white transition-colors">
                                <Facebook className="h-5 w-5" />
                            </a>
                            <a href="#" className="text-gray-400 hover:text-white transition-colors">
                                <Twitter className="h-5 w-5" />
                            </a>
                            <a href="#" className="text-gray-400 hover:text-white transition-colors">
                                <Linkedin className="h-5 w-5" />
                            </a>
                            <a href="#" className="text-gray-400 hover:text-white transition-colors">
                                <Youtube className="h-5 w-5" />
                            </a>
                        </div>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold mb-6">Services</h3>
                        <ul className="space-y-3">
                            <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Social Media Marketing</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Web Development</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white transition-colors">SEO Optimization</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white transition-colors">PPC Advertising</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Content Creation</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Brand Strategy</a></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold mb-6">Company</h3>
                        <ul className="space-y-3">
                            <li><a href="#" className="text-gray-400 hover:text-white transition-colors">About Us</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Our Work</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Careers</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Team</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Blog</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold mb-6">Newsletter</h3>
                        <p className="text-gray-400 mb-4">
                            Subscribe to our newsletter for the latest updates and insights.
                        </p>
                        <form className="flex">
                            <input
                                type="email"
                                placeholder="Your email"
                                className="bg-gray-800 border border-gray-700 rounded-l-lg px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-[#cad91c]"
                            />
                            <button className="bg-gradient-to-r from-[#0352ca] to-[#cad91c] text-white rounded-r-lg px-4 hover:from-[#0352ca] hover:to-[#cad91c] transition-all">
                                Subscribe
                            </button>
                        </form>
                    </div>
                </div>

                <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
                    <p className="text-gray-400 text-sm mb-4 md:mb-0">
                        &copy; {new Date().getFullYear()} SharvinManagement. All rights reserved.
                    </p>
                    <div className="flex space-x-6 text-sm">
                        <a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a>
                        <a href="#" className="text-gray-400 hover:text-white transition-colors">Terms of Service</a>
                        <a href="#" className="text-gray-400 hover:text-white transition-colors">Cookie Policy</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;