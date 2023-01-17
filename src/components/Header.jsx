import { FaBars, FaGamepad, FaSistrix, } from 'react-icons/fa';

const Header = () => {
  return (
    <header className="bg-slate-100 flex items-center justify-around p-5 shadow-lg sticky top-0">
      {/* logo */}
      <div className="box-equal space-x-1">
        <div>
          <div className=" absolute w-5 h-5 bg-gray-400 top-0 left-0"><div className='w-3 h-3 bg-slate-100' /></div>
          <div className=" absolute w-5 h-5 bg-gray-400 top-0 right-0"><div className='w-3 h-3 bg-slate-100 absolute right-0' /></div>
          <div className=" absolute w-5 h-5 bg-gray-400 bottom-0 right-0"><div className='w-3 h-3 bg-slate-100 absolute bottom-0 right-0' /></div>
          <div className=" absolute w-5 h-5 bg-gray-400 bottom-0 left-0"><div className='w-3 h-3 bg-slate-100 absolute bottom-0 left-0' /></div>
        </div>
        <div className="bg-gray-400 p-1">
          <FaGamepad size="20px" color="white" />
        </div>
        <h1 className='font-bold text-gray-400'>Pixels Games</h1>
      </div>

      {/* navlink */}
      <div className="box-equal space-x-10 hidden sm:inline-flex font-semibold text-gray-400">
        <h2>About</h2>
        <h2>Games</h2>
        <h2>Contact</h2>
      </div>

      {/* icon */}
      <div className="box-equal space-x-2 text-gray-400">
        <div className="bg-gray-400 p-1 box-equal rounded-full">
          <input type="text" className='px-2 focus:outline-none bg-slate-100 rounded-full hidden sm:inline' />
          <FaSistrix size='20px' color='white' className='cursor-pointer mx-[1px]' />
        </div>
        <div className='inline sm:hidden'><FaBars size='20px' /></div>
      </div>
    </header>
  );
};

export default Header;
