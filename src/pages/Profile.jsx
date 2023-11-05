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
                className="postImage"
                src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                alt=""
              />
              <div className="postInfo">
                <div className="postCats">
                  <span className="postCat">Music</span>
                  <span className="postCat">Life</span>
                </div>
                <span className="postTitle">
                  {myBlogInformation.blog_title}
                </span>
                <span className="postAuthor">
                  {myBlogInformation.blog_author}
                </span>
                <span className="postDate">1 hour ago</span>
              </div>
              <p className="postDesc">{myBlogInformation.blog_content}</p>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Profile;
