
const Navigation = () => {
  const navItems = [
    { name: 'Home', path: '#', active: true },
    { name: 'About Us', path: '#', active: false },
    { name: 'Services', path: '#', active: false },
    { name: 'Portfolio', path: '#', active: false },
    { name: 'Insights', path: '#', active: false },
  ];

  return (
    <nav className="mt-4 md:mt-0 mr-10">
      <ul className="flex flex-wrap justify-center items-center space-x-2 md:space-x-12">
        {navItems.map((item) => (
          <li key={item.name}>
            <a
              href={item.path}
              className={`text-md hover:text-pink-500 transition-colors duration-300 font-bold ${
                item.active ? 'text-pink-500' : 'text-white'
              }`}
            >
              {item.name}
            </a>
          </li>
        ))}
        <li className="mt-4 md:mt-0 md:ml-4">
          <a
            href="#contact"
            className="px-6 py-2 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white font-medium hover:shadow-lg transition-all duration-300"
          >
            Contact us!
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;