import { useEffect, useState } from "react";
import logo from "../assets/img/logo/logo.png";

const Header = () => {
  let Links = [
    { name: "Home", link: "/" },
    { name: "About", link: "/" },
    { name: "Service", link: "/" },
    { name: "Portfolio", link: "/" },
    { name: "New", link: "/" },
    { name: "Contact", link: "/" },
  ];

  const [open, setOpen] = useState(false);
  return (
    <div>
      <div className="fixed top-0 left-0 right-0 z-10 border-b border-opacity-10 transition duration-300 ease-in-out">
        <div className="max-w-[1700px] md:max-w-[1250px] mx-auto px-4 relative clear-both">
          <div className="w-full h-auto clear-both flex items-center justify-between">
            <div className="max-w-[200px] max-h-[100px]">
              <a href="">
                <img src={logo} alt="" />
              </a>
            </div>
            <div className="relative">
              <ul className="m-0 list-none flex">
                {Links.map((item, id) => (
                  <li
                    key={id}
                    className=" bottom-0 left-0 w-full h-3 transition duration-1000 ease-in-out"
                  >
                    {item.name}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
