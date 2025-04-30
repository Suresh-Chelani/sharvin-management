import { Mail, Phone } from 'lucide-react';
import Logo from './Logo';
import Navigation from './Navigation';

const Header = () => {
  return (
    <header className="w-full">
      {/* Top bar with contact info */}
      <div className="w-full py-1 bg-gradient-to-r from-[#cad91c] via-[#0352ca] to-[#cad91c]">
        <div className="container mx-auto px-4 flex justify-end items-center space-x-6">
          <a
            href="mailto:info@sharvinmanagement.com"
            className="flex font-semibold items-center text-sm text-black hover:text-white transition-colors duration-300"
          >
            <Mail size={16} className="mr-1 font-bold" />
            info@sharvinmanagement.com
          </a>
          <a
            href="tel:+7424898564"
            className="flex items-center font-semibold text-sm text-black hover:text-white transition-colors duration-300"
          >
            <Phone size={16} className="mr-1" />
            +74248 98564
          </a>
        </div>
      </div>

      {/* Main header with logo and navigation */}
      <div className="bg-black py-4">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
          <Logo />
          <Navigation />
        </div>
      </div>
    </header>
  );
};

export default Header;