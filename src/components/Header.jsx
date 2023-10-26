import { useState } from "react";
import DropDown from "./DropDown";
import { auth } from "../firebase";
import { Link } from "react-router-dom";
import { onAuthStateChanged, signOut } from "firebase/auth";

function Header() {
  const [userState, setUserState] = useState(false);

  // Check the authentication state. If user is signed in, update the user state.
  onAuthStateChanged(auth, (user) => {
    if (user) {
      setUserState(true); // User is signed in
    } else {
      console.log("No user is signed in"); // No user is signed in
    }
  });

  // Signout function
  const signUserOut = () => {
    signOut(auth);
    window.location.reload(false);
  };

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
            <Link className="link" to="/">
              HOME
            </Link>
          </li>

          <li className="mr-5 text-lg font-light cursor-pointer">
            <Link className="link" to="/about">
              ABOUT
            </Link>
          </li>

          <li className="mr-5 text-lg font-light cursor-pointer">
            <Link className="link" to="/write">
              WRITE
            </Link>
          </li>

          <li
            className="mr-5 text-lg font-light cursor-pointer"
            onClick={signUserOut}
          >
            {userState && "LOGOUT"}
          </li>
        </ul>
      </div>

      <div className="flex items-center justify-right ml-auto">
        {userState ? (
          <DropDown />
        ) : (
          <ul className="flex justify-center list-none m-0 p-0">
            <li className="mr-5 text-lg font-light cursor-pointer">
              <Link className="link" to="/login">
                LOGIN
              </Link>
            </li>
            <li className="mr-5 text-lg font-light cursor-pointer">
              <Link className="link" to="/register">
                REGISTER
              </Link>
            </li>
          </ul>
        )}
        ;
      </div>
    </div>
  );
}

export default Header;
