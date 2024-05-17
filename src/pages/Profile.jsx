import Author from "../components/Author";
import BlogCard from "../components/BlogCard";
import { db, auth } from "../firebase";
import { useState, useEffect } from "react";
import { collection, getDocs, where, query } from "firebase/firestore";

function Profile() {
  const [myBlogInfo, setMyBlogInfo] = useState([]);

  // Fetch blog information for the current user from Firestore
  useEffect(() => {
    const getBlogInfo = async () => {
      const user = auth.currentUser;
      // Check if user is authenticated
      if (user) {
        // Query Firestore for blogs authored by the current user
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
      {/* Profile section with Author component */}
      <div className="profile">
        <Author />
      </div>
      {/* Blog post cards for the current user */}
      <div className="flex flex-wrap justify-between">
        {/* Map through myBlogInfo array and render a BlogCard for each post */}
        {myBlogInfo.map((myBlogInformation) => {
          return (
            <BlogCard
              imageUrl="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              author={myBlogInformation.blog_author}
              title={myBlogInformation.blog_title}
              uploadTime={myBlogInformation.blog_upload_time}
              content={myBlogInformation.blog_content}
            />
          );
        })}
      </div>
    </>
  );
}

export default Profile;
