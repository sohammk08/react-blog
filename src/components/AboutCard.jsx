import React from "react";

function AboutCard() {
  return (
    <div className="bg-white shadow-lg w-64 mx-auto">
      <img
        className="w-full h-auto rounded-t-lg"
        src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?auto=format&fit=crop&q=60&w=600&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHBlcnNvbiUyMGZhY2V8ZW58MHx8MHx8fDA%3D"
        alt=""
      />
      <div className="p-2">
        <h2 className="text-black text-center font-semibold text-2xl mt-2">
          Author Name
        </h2>
        <p className="text-gray-700 text-sm text-center mt-2 mb-2">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          Necessitatibus alias ipsa incidunt minus possimus vitae eveniet harum,
          fugit, iste
        </p>
      </div>
    </div>
  );
}

export default AboutCard;
