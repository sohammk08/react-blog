import { db } from "../firebase";
import { useState, useEffect } from "react";
import BlogCard from "../components/BlogCard";
import { collection, getDocs } from "firebase/firestore";

function Home() {
  const [blogPostInfo, setBlogPostInfo] = useState([]);

  useEffect(() => {
    const getBlogInfo = async () => {
      const data = await getDocs(collection(db, "blogs"));
      setBlogPostInfo(data.docs.map((doc => ({...doc.data(), id: doc.id}))))
    }
    getBlogInfo();
  })

  return (
    <div className="blogPosts">
      {blogPostInfo.map((postInfo) => {
        return (
            <>
              <h1 className="text-2xl font-vround text-center mb-4">Home</h1>
              <BlogCard
                imageUrl="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                author={postInfo.blog_author}
                title={postInfo.blog_title}
                uploadTime="1 hour ago"
                content={postInfo.blog_content}
              />
            </>
        )
      })}
    </div>
  )
}

export default Home;
