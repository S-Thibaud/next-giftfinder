import { MenuIcon } from 'lucide-react';
import React from 'react';

type Props = {};

const Navbar = (props: Props) => {
  const renderLogo = () => {
    return (
      <div className="hidden md:flex basis-1/3 justify-center items-center ">
        <img src="/logo/logoipsum-298.svg" alt="logo" className="w-6 h-6" />
      </div>
    );
  };

  const renderMenu = () => {
    return (
      <div className="hidden md:flex basis-1/3 items-center justify-start pl-4">
        <MenuIcon size={24} strokeWidth={2} className="text-white" />
      </div>
    );
  };

  const renderLogin = () => {
    return (
      <div className="flex basis-1/3 items-center justify-end pr-4">Login</div>
    );
  };

  const render = () => {
    return (
      <div className="w-full h-fit px-10 pt-5">
        <nav className="flex flex-row w-full h-20 bg-gray-800 rounded-lg text-white">
          {renderMenu()}
          {renderLogo()}
          {renderLogin()}
        </nav>
      </div>
    );
  };

  return render();
};

export default Navbar;
