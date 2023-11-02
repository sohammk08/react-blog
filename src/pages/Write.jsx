import React from 'react';

function Write() {
  return (
    <div className="pt-12">
      <img
        className="ml-40 h-64 object-cover rounded-md w-70vw"
        src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
        alt=""
      />
      <form className="relative flex-grow">
        <div className="ml-40 flex items-center">
          <label htmlFor="fileInput">
            <i className="w-6 h-6 flex items-center justify-center text-xl text-gray-600 cursor-pointer rounded-xl border border-solid fas fa-plus"></i>
          </label>
          <input
            type="text"
            placeholder="Title"
            className="text-3xl p-5 border-none w-70vw focus:outline-none flex-grow"
            autoFocus={true}
          />
          <button className="text-white bg-teal-700 p-2 cursor-pointer text-base mr-5 border-none rounded-md">
            Publish
          </button>
        </div>
        <div className="ml-40 flex items-center">
          <textarea
            placeholder="Tell your story..."
            type="text"
            className="p-5 border-none w-70vw text-xl h-screen font-mono"
          ></textarea>
        </div>
      </form>
    </div>
  );
}

export default Write;
