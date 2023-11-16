import Author from "../components/Author";
import BlogCard from "../components/BlogCard";
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
            <BlogCard
              imageUrl="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              author={myBlogInformation.blog_author}
              title={myBlogInformation.blog_title}
              uploadTime="1 hour ago"
              content={myBlogInformation.blog_content}
            />
          );
        })}
      </div>
    </>
  );
}

export default Profile;
