import logo from "..//../public/images/logo.png"
const Logo = () => {
  return (
    <div className="flex items-center">
      <div className="flex items-center">
        <img src={logo} alt="logo" className='h-10 w-10 rounded-full mr-3' />
        <span className="text-white text-2xl font-bold">
          sharvin<span className="text-green-500">management</span>
        </span>
      </div>
    </div>
  );
};

export default Logo;