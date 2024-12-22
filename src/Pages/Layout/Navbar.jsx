import React from 'react';
import Homeimg from '../../assets/Home.svg'
import Menu from '../../assets/Menu.svg'

const Navbar = () => {
  return (
    <div>
      <div className='fixed z-50 text-white top-5 left-5 backdrop-blur-md shadow-sm'>
        <button>
            <img src={Menu} alt="" className="h-7" />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
