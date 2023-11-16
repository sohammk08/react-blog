import React from "react";
import BlogCard from "../components/BlogCard";

function Home() {
  return (
    <>
      <h1 className="text-2xl font-vround text-center mb-4">Home</h1>
      <BlogCard
        imageUrl="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
        author="Ashley Vance"
        title="Hello World"
        uploadTime="1 hour ago"
        content="Hello World with Ashley Vance is a bloomberg originals series where the host Ashlee Vance goes around the world exploring various sorts technologies and sciences."
      />
    </>
  );
}

export default Home;
