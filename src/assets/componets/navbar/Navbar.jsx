import React from "react";
import { Link } from "react-scroll";
import { navLinksdata } from "../../constants";

const Navbar = () => {
  return (
    <div
      className="w-full h-24 sticky top-0 z-50 bg-bodyColor mx-auto flex justify-between items-center font-titleFont border-b-[1px]
     border-b-gray-600"
    >
      <div>Portfolio</div>
      <div>
        <ul className="flex items-center gap-10 font-titleFont">
          {navLinksdata.map(({ _id, title, link }) => (
            <li
              className="text-base font-normal text-gray-400 tracking-wide cursor-pointer hover:text-designColor duration"
              key={_id}
            >
              <Link
                activeClass="active"
                to={link}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                {title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
