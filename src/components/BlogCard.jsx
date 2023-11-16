import React from "react";

function BlogCard({ imageUrl, author, title, uploadTime, content }) {
  return (
    <div className="bg-white w-64 mx-auto">
      <img
        className="w-full h-280 object-cover rounded-md"
        src={imageUrl}
        alt=""
      />
      <div className="text-center">
        <div className="postCats">
          <span className="text-11 text-yellow-600 leading-5 font-vround mt-4 mr-2 cursor-pointer">
            Music
          </span>
          <span className="text-11 text-yellow-600 leading-5 font-vround mt-4 mr-2 cursor-pointer">
            Life
          </span>
        </div>
      </div>
      <div className="p-2 text-center">
        {title && (
          <>
            <span className="text-2xl font-jsans font-bold cursor-pointer">
              {title}
            </span>
            <br />
          </>
        )}
        {author && (
          <>
            <span className="text-base font-jsans font-normal mt-2 cursor-pointer">
              {author}
            </span>
            <br />
          </>
        )}
        {uploadTime && (
          <span className="text-gray-600 italic text-xs mt-2 font-lora">
            {uploadTime}
          </span>
        )}
        {content && (
          <p className="text-slate-900 text-sm leading-6 font-vround mt-2">
            {content}
          </p>
        )}
      </div>
    </div>
  );
}

export default BlogCard;
