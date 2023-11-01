import React from "react";

function BlogCard() {
  return (
    <div className="bg-white rounded-lg shadow-lg w-64 mx-auto">
      <img
        className="w-full h-auto"
        src="https://images.unsplash.com/photo-1695068276999-45f7079df317?auto=format&fit=crop&q=60&w=600&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4fHx8ZW58MHx8fHx8"
        alt=""
      />
      <div className="p-4">
        <span className="text-teal-400 uppercase font-semibold text-center block">Author</span>
        <h2 className="text-black text-center font-semibold text-2xl mt-2">Blog Title</h2>
        <p className="text-gray-700 text-sm text-center mt-4">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus
          alias ipsa incidunt minus possimus vitae eveniet harum, fugit, iste
          accusantium, officiis sit dicta? Minus, qui ipsam exercitationem
          nesciunt molestiae veritatis!
        </p>
      </div>
    </div>
  );
}

export default BlogCard;
