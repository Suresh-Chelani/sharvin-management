import logo from "..//../public/images/logo.png"
const Logo = () => {
  return (
    <div className="flex items-center">
      <div className="flex items-center">
        <img src={logo} alt="logo" className='h-10 w-10 rounded-full mr-3' />
        <span className="text-white text-2xl font-bold">
          Sharvin<span className="bg-gradient-to-r from-[#0352ca] to-[#cad91c] bg-clip-text text-transparent">Management</span>
        </span>
      </div>
    </div>
  );
};

export default Logo;