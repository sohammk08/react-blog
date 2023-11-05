import { useState } from "react";
import { db, auth } from "../firebase";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";

function Write() {
  // Check if user is authenticated and get their email; otherwise, set to null
  const author = auth.currentUser ? auth.currentUser.email : null;

  const [title, setTitle] = useState();
  const [content, setContent] = useState();

  // Handling submission when "publish" button is clicked
  const SubmitHandler = async (e) => {
    e.preventDefault();
    if (author) {
      // If user is authenticated, add a new document to "blogs"
      await addDoc(collection(db, "blogs"), {
        blog_author: author,
        blog_title: title,
        blog_content: content,
        blog_upload_time: serverTimestamp(),
      });
      setTitle("");
      setContent("");
      alert("Your blog has been uploaded!");
    } else {
      // If user is not authenticated or some other error arises, show error
      alert(
        "There was some error while uploading. Please try again or contact the administrator."
      );
    }
  };

  return (
    <div className="pt-12">
      <h1 className="text-2xl font-vround text-center mb-4">Write</h1>
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
            onChange={(e) => {
              setTitle(e.target.value);
            }}
            value={title}
          />
          <button
            className="text-white bg-teal-700 p-2 cursor-pointer text-base mr-5 border-none rounded-md"
            onClick={SubmitHandler}
          >
            Publish
          </button>
        </div>
        <div className="ml-40 flex items-center">
          <textarea
            placeholder="Tell your story..."
            type="text"
            className="p-5 border-none w-70vw text-xl h-screen font-mono"
            onChange={(e) => {
              setContent(e.target.value);
            }}
            value={content}
          ></textarea>
        </div>
      </form>
    </div>
  );
}

export default Write;
