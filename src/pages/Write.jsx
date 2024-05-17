import { useState } from "react";
import { db, auth } from "../firebase";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";

function Write() {
  // Check if user is authenticated and get their email; otherwise, set to null
  const author = auth.currentUser ? auth.currentUser.email : null;

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

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
    <div className="pt-12 flex flex-col items-center">
      <h1 className="text-2xl font-vround text-center mb-4">Write</h1>
      <img
        className="h-64 object-cover rounded-md w-4/5 mb-4"
        src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
        alt=""
      />
      <form className="w-full max-w-5xl">
        <div className="flex items-center mb-4">
          <label htmlFor="fileInput" className="mr-2">
            <i className="w-6 h-6 flex items-center justify-center text-xl text-gray-600 cursor-pointer rounded-xl border border-solid fas fa-plus"></i>
          </label>
          <input
            type="text"
            placeholder="Title"
            className="text-3xl p-5 border-none w-full focus:outline-none"
            autoFocus={true}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
            value={title}
          />
          <button
            className="text-white bg-teal-700 p-2 ml-2 cursor-pointer text-base border-none rounded-md"
            onClick={SubmitHandler}
          >
            Publish
          </button>
        </div>
        <div className="flex justify-center">
          <textarea
            placeholder="Tell your story..."
            className="px-2 py-2 mb-5 border-none w-full text-lg h-32 font-mono"
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
