import Author from "../components/Author";
import { db, auth } from "../firebase";
import { useState, useEffect } from "react";
import { collection, getDocs, where, query } from "firebase/firestore";

function Profile() {
  const [myBlogInfo, setMyBlogInfo] = useState([]);

  useEffect(() => {
    const getBlogInfo = async () => {
      const user = auth.currentUser;
      if (user) {
        const querySnapshot = await getDocs(
          query(collection(db, "blogs"), where("blog_author", "==", user.email))
        );
        setMyBlogInfo(
          querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
        );
      }
    };
    getBlogInfo();
  }, []);

  return (
    <>
      <h1 className="text-2xl font-vround text-center mb-4">About</h1>
      <div className="profile">
        <Author />
      </div>
      <div className="flex flex-wrap justify-between">
        {myBlogInfo.map((myBlogInformation) => {
          return (
            <div className="m-6 w-1/3 sm:w-1/3 md:w-1/4 lg:w-1/4 xl:w-1/4 p-2">
              <img
                className="w-full h-280 objec-cover rounded-md"
                src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                alt=""
              />
              <div className="flex flex-col items-center">
                <div className="postCats">
                  <span className="text-11 text-yellow-600 leading-5 font-vround mt-4 mr-2 cursor-pointer">Music</span>
                  <span className="text-11 text-yellow-600 leading-5 font-vround mt-4 mr-2 cursor-pointer">Life</span>
                </div>
                <span className="text-2xl text-center font-jsans font-bold cursor-pointer">
                  {myBlogInformation.blog_title}
                </span>
                <span className="text-base font-jsans font-normal mt-15 cursor-pointer">
                  {myBlogInformation.blog_author}
                </span>
                <span className="text-gray-600 italic text-xs p-0 font-lora">1 hour ago</span>
              </div>
              <p className="text-slate-900 text-sm leading-6 font-vround">{myBlogInformation.blog_content}</p>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Profile;
