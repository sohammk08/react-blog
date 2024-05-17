import { db } from "../firebase";
import { useState, useEffect } from "react";
import BlogCard from "../components/BlogCard";
import { collection, getDocs } from "firebase/firestore";

function Home() {
  const [blogPostInfo, setBlogPostInfo] = useState([]);

  // Fetch blog post information from Firestore
  useEffect(() => {
    const getBlogInfo = async () => {
      const data = await getDocs(collection(db, "blogs"));
      setBlogPostInfo(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getBlogInfo();
  }, []);

  return (
    <>
      <h1 className="text-2xl font-vround text-center mb-4">Home</h1>
      {/* Grid layout for displaying blog cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* Map through blogPostInfo array and render a BlogCard for each post */}
        {blogPostInfo.map((postInfo) => (
          <BlogCard
            key={postInfo.id}
            imageUrl="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
            author={postInfo.blog_author}
            title={postInfo.blog_title}
            uploadTime={postInfo.blog_upload_time}
            content={postInfo.blog_content}
          />
        ))}
      </div>
    </>
  );
}

export default Home;
