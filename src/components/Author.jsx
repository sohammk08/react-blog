import { db, auth } from "../firebase";
import { useState, useEffect } from "react";
import { collection, getDocs, query, where } from "firebase/firestore";

function Author() {
  const [userInfo, setUserInfo] = useState([]);

  useEffect(() => {
    const user = auth.currentUser;
    const q = query(collection(db, "users"), where("email", "==", user.email));
    const rData = async () => {
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        setUserInfo(doc.data());
      });
    };
    rData();
  }, []);

  return (
    <div className="author">
        <div className="twoLiFlex">
          <div className="flex mt-2rem mr-0 mb-2rem ml-2rem">
            <img 
              src="https://images.unsplash.com/photo-1485893086445-ed75865251e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80"
              className="w-56 float-left rounded-full"
              alt="" />
            <h2 className="text-black text-4em font-jsans mt-auto mr-0 mb-auto ml-2rem">{userInfo.username}</h2>
            <a className="text-black text-4em mt-16 mr-0 mb-0 ml-2rem" href={userInfo.iglink}><i className="fa-brands fa-instagram"></i></a>
          </div>
          <div className="flex ml-24">
            <ul className="text-center mt-auto mb-auto list-none">
              <li className="cursor-pointer">Travel</li>
              <li className="cursor-pointer">Food</li>
              <li className="cursor-pointer">Fashion</li>
            </ul>
            <p className="text-black text-1em text-left font-vround ml-32 max-w-screen-xl">{userInfo.aboutme}</p>
          </div>
        </div>
    </div>
  );
};

export default Author;
