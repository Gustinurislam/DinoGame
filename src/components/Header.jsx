import { FaBars, FaGamepad, FaTimes } from 'react-icons/fa';
import { useState } from 'react';
import Decors from './Decors';

const Header = () => {
  const [open, setOpen] = useState(false)

  return (
    <header className="bg-slate-100 p-5 shadow-lg sticky top-0 z-10">
      <div className="flex items-center justify-center">
        <Decors />
        <div className="bg-gray-400 p-1 mr-1">
          <FaGamepad size="20px" color="white" />
        </div>
        <h1 className='font-bold text-gray-400 mr-5 text-lg md:text-xl'>Dino Game</h1>
        <div onClick={() => setOpen(!open)} className="flex items-center space-x-2 text-gray-400">
          <div className='inline md:hidden'>{open ? <FaTimes size='20' /> : <FaBars size='20px' />}</div>
        </div>
      </div>

      <nav className={`font-semibold text-lg text-gray-400 flex md:flex items-center space-x-5 justify-center mt-5 ${open ? '' : 'hidden'}`}>
        <h2>Home</h2>
        <h2>Game</h2>
        <h2>About</h2>
      </nav>

    </header>
  );
};

export default Header;
