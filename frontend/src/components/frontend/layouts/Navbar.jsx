import { Link, NavLink } from "react-router-dom";
import { assets } from "../../../assets/assets.js";
import { useState } from "react";

const Navbar = () => {
  const [visible, setVisible] = useState(false);
  return (
    <div className="flex items-center justify-between py-5 font-medium">
      <Link to={'/'}><img className="w-36" src={assets.logo} alt="logo" /></Link>

      <ul className="hidden sm:flex gap-5 text-sm text-gray-700">
        <NavLink className="flex flex-col gap-1 items-center" to="/">
          <p>HOME</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>
        <NavLink className="flex flex-col gap-1 items-center" to="/collection">
          <p>COLLECTION</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>
        <NavLink className="flex flex-col gap-1 items-center" to="/about">
          <p>ABOUT</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>
        <NavLink className="flex flex-col gap-1 items-center" to="/contact">
          <p>CONTACT</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>
      </ul>

      <div className="icons flex items-center gap-6">
        <img
          className="cursor-pointer w-5"
          src={assets.search_icon}
          alt="search"
        />

        <div className="group relative">
          <img
            className=" w-5 cursor-pointer"
            src={assets.profile_icon}
            alt="profile"
          />
          <div className="group-hover:block hidden absolute dropdown-menu right-0 pt-4">
            <div className="flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded">
              <p className="cursor-pointer hover:text-black">My Profile</p>
              <p className="cursor-pointer hover:text-black">Orders</p>
              <p className="cursor-pointer hover:text-black">Logout</p>
            </div>
          </div>
        </div>

        <Link to="/cart" className="relative">
          <img src={assets.cart_icon} alt="cart" className="w-5 min-w-5" />
          <p className="absolute right-[-5px] bottom-[-5px] bg-black text-white aspect-square rounded-full text-[8px] leading-4 w-4 text-center">
            0
          </p>
        </Link>

        <img
          onClick={() => {
            setVisible(true);
          }}
          src={assets.menu_icon}
          alt=""
          className="w-5 cursor-pointer sm:hidden"
        />
      </div>

      {/* side menu for small screen*/}
      <div
        className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all ${
          visible ? "w-full" : "w-0"
        }`}
      >
      <div className="flex flex-col text-gray-600">
        <div
          onClick={() => {
            setVisible(false);
          }}
          className="flex items-center gap-2 text-gray-600 p-3 cursor-pointer"
        >
          <img
            className="h-4 rotate-180"
            src={assets.dropdown_icon}
            alt=""
          />
          <p>Back</p>
        </div>
        <NavLink onClick={() => setVisible(false)} className="pl-5 py-1 border" to="/">HOME</NavLink>
        <NavLink onClick={() => setVisible(false)} className="pl-5 py-1 border" to="/collection">COLLECTION</NavLink>
        <NavLink onClick={() => setVisible(false)} className="pl-5 py-1 border" to="/about">ABOUT</NavLink>
        <NavLink onClick={() => setVisible(false)} className="pl-5 py-1 border" to="/contact">CONTACT</NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
