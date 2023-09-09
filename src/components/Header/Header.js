import { Gift, MenuIcon, Minus, X } from 'lucide-react';
import { useState } from 'react';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const renderMenu = () => {
    return (
      <div className="relative group">
        {/* <div className="relative w-6 h-6" onClick={toggleMenu}>
          <div
            className={`absolute w-full h-px bg-white transition-transform duration-300 ease-in-out transform ${
              menuOpen ? 'translate-y-1.5 rotate-45' : 'rotate-0'
            } top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2`}
          ></div>
          <div
            className={`absolute w-full h-px bg-white transition-opacity duration-300 ease-in-out ${
              menuOpen ? 'opacity-0' : 'opacity-100'
            } top-1/2 left-1/2 -translate-x-1/2`}
          ></div>
          <div
            className={`absolute w-full h-px bg-white transition-transform duration-300 ease-in-out transform ${
              menuOpen ? 'translate-y-1.5 -rotate-45' : 'rotate-0'
            } top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2`}
          ></div>
        </div> */}
        <button
          className="group flex items-center space-x-1 focus:outline-none"
          onClick={toggleMenu}
        >
          {menuOpen ? (
            <X size={24} className="text-white transition-transform duration-300 ease-in-out transform" />
          ) : (
            <MenuIcon size={24} className="text-white transition-transform duration-300 ease-in-out transform" />
          )}
        </button>
        {/* Dropdown Content */}
        <div
          className={`absolute left-0 mt-2 ${menuOpen ? 'block' : 'hidden'}`}
        >
          <ul className="bg-white text-gray-900 p-2 space-y-2 rounded shadow">
            <li>
              <a href="#" className="block px-4 py-2 hover:bg-gray-200">
                Item 1
              </a>
            </li>
            <li>
              <a href="#" className="block px-4 py-2 hover:bg-gray-200">
                Item 2
              </a>
            </li>
            <li>
              <a href="#" className="block px-4 py-2 hover:bg-gray-200">
                Item 3
              </a>
            </li>
          </ul>
        </div>
      </div>
    );
  };

  const renderLogo = () => {
    return (
      <a
        href="https://yourgiftfinder.be/"
        className="flex items-center mb-4 sm:mb-0"
      >
        <Gift className="text-purple-500" />
        {/* <img
          src="https://flowbite.com/docs/images/logo.svg"
          className="h-8 mx-auto sm:mx-0"
          alt="YourGiftFinder Logo"
        /> */}
      </a>
    );
  };

  const renderLogin = () => {
    return <button className="py-2 px-4 text-sm">Log in</button>;
  };

  return (
    // bg-gray-900
    <nav className="bg-white text-white p-4 flex items-center justify-between rounded-lg shadow dark:bg-gray-900 m-4">
      {renderMenu()}
      {renderLogo()}
      {renderLogin()}
    </nav>
  );
};

export default Header;
