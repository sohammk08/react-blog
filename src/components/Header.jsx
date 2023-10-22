import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="w-full h-12 bg-white sticky top-0 flex justify-center font-jsans">
      <div className="items-center justify-center">
        <h2 className="text-black text-1.8em font-vround ml-4 mt-2">
          React Blog
        </h2>
      </div>

      <div className="flex items-center justify-right ml-auto">
        <ul className="flex justify-center list-none m-0 p-0">
          <li className="mr-5 text-lg font-light cursor-pointer">
            <Link className="link" to="/">HOME</Link>
          </li>

          <li className="mr-5 text-lg font-light cursor-pointer">
            <Link className="link" to="/about">ABOUT</Link>
          </li>

          <li className="mr-5 text-lg font-light cursor-pointer">
            <Link className="link" to="/write">WRITE</Link>
          </li>
        </ul>
      </div>

      <div className="flex items-center justify-right ml-auto">
        <ul className="flex justify-center list-none m-0 p-0">
          <li className="mr-5 text-lg font-light cursor-pointer">
            <Link className="link" to="/login">LOGIN</Link>
          </li>
          <li className="mr-5 text-lg font-light cursor-pointer">
            <Link className="link" to="/register">REGISTER </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
