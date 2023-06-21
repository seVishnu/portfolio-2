import { BsFillMoonStarsFill } from "react-icons/bs";
import { MdLightMode } from "react-icons/md";

const Navbar = ({ darkMode, setDarkMode }) => {
  return (
    <nav className="py-10 mb-12 flex justify-between">
      <h1 className="text-xl  dark:text-white">Hello!</h1>
      <ul className="flex items-center">
        <li>
          {!darkMode ? (
            <BsFillMoonStarsFill
              onClick={() => setDarkMode(!darkMode)}
              className="cursor-pointer text-2xl"
            />
          ) : (
            <MdLightMode
              onClick={() => setDarkMode(!darkMode)}
              className="cursor-pointer text-2xl text-gray-50"
            />
          )}
        </li>
        <li>
          <a
            className="bg-gradient-to-r from-blue-700 to-teal-500 text-white px-4 py-2 rounded-md ml-8"
            href="#"
          >
            Resume
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
