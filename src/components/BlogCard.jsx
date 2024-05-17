import React from "react";
import { formatDistanceToNow } from "date-fns";

function BlogCard({ imageUrl, author, title, uploadTime, content }) {
  return (
    <div className="bg-white w-72 mx-auto rounded-lg shadow-md overflow-hidden">
      <img className="w-full h-48 object-cover" src={imageUrl} alt={title} />
      <div className="p-4">
        <div className="text-center -mt-2">
          {title && (
            <h2 className="text-xl font-semibold text-gray-800 cursor-pointer hover:text-gray-600">
              {title}
            </h2>
          )}
          {author && (
            <div className="bg-gray-600 text-white mt-2 w-full">
              <p className="text-xs text-center py-1 cursor-pointer hover:text-gray-300">
                {author}
              </p>
            </div>
          )}
          {uploadTime && (
            <p className="text-xs text-gray-400 italic mt-1">
              {formatDistanceToNow(uploadTime.toDate(), {
                addSuffix: true,
              })}
            </p>
          )}
        </div>
        {content && (
          <p className="text-sm text-center text-gray-700 mt-4 leading-6">
            {content.substring(0, 100)}...
          </p>
        )}
      </div>
    </div>
  );
}

export default BlogCard;
