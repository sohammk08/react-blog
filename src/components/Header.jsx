import React from "react";

function Header() {
  return (
    <div className="w-full h-12 bg-white sticky top-0 flex justify-center font-jsans">
      <div className="items-center justify-center">
        <h2 className="text-black text-1.8em font-vround ml-4 mt-2">
          One Page
        </h2>
      </div>

      <div className="flex items-center justify-right ml-auto">
        <ul className="flex justify-center list-none m-0 p-0">
          <li className="mr-5 text-lg font-light cursor-pointer">HOME</li>

          <li className="mr-5 text-lg font-light cursor-pointer">ABOUT</li>

          <li className="mr-5 text-lg font-light cursor-pointer">CONTACT</li>

          <li className="mr-5 text-lg font-light cursor-pointer">WRITE</li>
        </ul>
      </div>

      <div className="flex items-center justify-right ml-auto">
        <ul className="flex justify-center list-none m-0 p-0">
          <li className="mr-5 text-lg font-light cursor-pointer">LOGIN</li>
          <li className="mr-5 text-lg font-light cursor-pointer">REGISTER</li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
