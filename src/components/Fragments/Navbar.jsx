import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const listNavbar = [
    { to: "/home", element: "Home" },
    { to: "/menu", element: "Menu" },
    { to: "/login", element: "Login" },
  ];

  return (
    <div className="bg-gray-900 py-4">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <div className="text-white font-semibold">MSR</div>
          </div>
          <div className="hidden sm:block">
            <ul className="flex space-x-6 text-white">
              {listNavbar.map((item, index) => (
                <li key={index}>
                  <Link to={item.to} className="hover:text-gray-300">
                    {item.element}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="sm:hidden">
            <button onClick={() => setIsOpen(!isOpen)} type="button" className="block text-white hover:text-gray-300 focus:outline-none">
              {isOpen ? <div className="px-3 py-2">X</div> : <div className="px-3 py-2">| | |</div>}
            </button>
          </div>
        </div>
      </div>

      {!!isOpen && (
        <div className="sm:hidden mt-4">
          <ul className="flex flex-col space-y-2 text-white">
            {listNavbar.map((item, index) => (
              <li key={index}>
                <Link to={item.to} className="block px-4 py-2 hover:text-gray-300">
                  {item.element}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
