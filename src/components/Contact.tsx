import React from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact: React.FC = () => {
    return (
        <section className="py-20 bg-black relative overflow-hidden" id="contact">
            {/* Background Elements */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#0352ca]/20 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#cad91c]/20 rounded-full blur-3xl"></div>

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#0352ca] to-[#cad91c]">
                            Get In Touch
                        </span>
                    </h2>
                    <p className="text-gray-300 max-w-3xl mx-auto">
                        Ready to elevate your brand? Reach out to discuss how our expert team can help achieve your marketing goals
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    <div className="bg-gray-900/50 backdrop-blur-md rounded-2xl p-8 border border-gray-800">
                        <h3 className="text-white text-2xl font-bold mb-6">Send Us a Message</h3>

                        <form>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                <div>
                                    <label htmlFor="name" className="block text-gray-400 mb-2">Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        className="w-full bg-gray-800/50 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-[#cad91c]"
                                        placeholder="Your name"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-gray-400 mb-2">Email</label>
                                    <input
                                        type="email"
                                        id="email"
                                        className="w-full bg-gray-800/50 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-[#cad91c]"
                                        placeholder="Your email"
                                    />
                                </div>
                            </div>

                            <div className="mb-6">
                                <label htmlFor="subject" className="block text-gray-400 mb-2">Subject</label>
                                <input
                                    type="text"
                                    id="subject"
                                    className="w-full bg-gray-800/50 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-[#cad91c]"
                                    placeholder="Subject"
                                />
                            </div>

                            <div className="mb-6">
                                <label htmlFor="message" className="block text-gray-400 mb-2">Message</label>
                                <textarea
                                    id="message"
                                    rows={5}
                                    className="w-full bg-gray-800/50 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-[#cad91c]"
                                    placeholder="Your message"
                                ></textarea>
                            </div>

                            <button className="w-full bg-gradient-to-r from-[#0352ca] to-[#cad91c] text-white py-4 rounded-lg font-medium hover:shadow-lg hover:from-[#0352ca] hover:to-[#cad91c] transition-all flex items-center justify-center gap-2">
                                <Send className="h-5 w-5" />
                                Send Message
                            </button>
                        </form>
                    </div>

                    <div>
                        <div className="bg-gray-900/50 backdrop-blur-md rounded-2xl p-8 border border-gray-800 mb-8">
                            <h3 className="text-white text-2xl font-bold mb-6">Contact Information</h3>

                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <div className="bg-gradient-to-br from-[#0352ca] to-[#cad91c] p-3 rounded-lg text-white">
                                        <Mail className="h-6 w-6" />
                                    </div>
                                    <div>
                                        <h4 className="text-white font-medium">Email Us</h4>
                                        <p className="text-gray-400">info@sharvinmanagement.com</p>
                                        <p className="text-gray-400">support@sharvinmanagement.com</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="bg-gradient-to-br from-[#0352ca] to-[#cad91c] p-3 rounded-lg text-white">
                                        <Phone className="h-6 w-6" />
                                    </div>
                                    <div>
                                        <h4 className="text-white font-medium">Call Us</h4>
                                        <p className="text-gray-400">+971 4 123 4567</p>
                                        <p className="text-gray-400">+971 50 987 6543</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="bg-gradient-to-br from-[#0352ca] to-[#cad91c] p-3 rounded-lg text-white">
                                        <MapPin className="h-6 w-6" />
                                    </div>
                                    <div>
                                        <h4 className="text-white font-medium">Visit Us</h4>
                                        <p className="text-gray-400">Business Bay, Dubai</p>
                                        <p className="text-gray-400">United Arab Emirates</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gray-900/50 backdrop-blur-md rounded-2xl p-8 border border-gray-800">
                            <h3 className="text-white text-2xl font-bold mb-6">Business Hours</h3>

                            <div className="space-y-4">
                                <div className="flex justify-between items-center">
                                    <span className="text-gray-400">Monday - Friday:</span>
                                    <span className="text-white">9:00 AM - 6:00 PM</span>
                                </div>
                                <div className="flex justify-between items-center">
                                    <span className="text-gray-400">Saturday:</span>
                                    <span className="text-white">10:00 AM - 4:00 PM</span>
                                </div>
                                <div className="flex justify-between items-center">
                                    <span className="text-gray-400">Sunday:</span>
                                    <span className="text-white">Closed</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;