import React from "react";

function AboutCard({ abCardImgLink, author, AbContent, email }) {
  return (
    <div className="bg-white shadow-lg w-64 mx-auto">
      <img
        className="w-full h-auto rounded-t-lg"
        src={abCardImgLink}
        alt=""
      />
      <h2 className="text-black text-center font-semibold text-2xl mt-2">
        {author}
      </h2>
      <p className="text-gray-700 text-sm text-center mt-2">
        {AbContent}
      </p>
      <div className="flex justify-center items-center mt-3">
        <span className="text-green-500 text-sm font-vround">
          {email}
        </span>
      </div>
    </div>
  );
}

export default AboutCard;
