import { useState } from "react";

function Settings() {
  const [username, setUsername] = useState("");
  const [aboutMe, setAboutMe] = useState("");
  const [instagramLink, setInstagramLink] = useState("");
  const [showConfirmation, setShowConfirmation] = useState(false);

  const handleChangeUsername = () => {
    // Username change logic here
  };

  const handleAddAboutMe = () => {
    // Update "about me" logic here
  };

  const handleAddInstagramLink = () => {
    // "Add Instagram link" logic here
  };

  const handleDeleteAccount = () => {
    setShowConfirmation(true);
  };

  const confirmDeleteAccount = () => {
    // Account deletion logic here
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-vround text-center mb-4">Settings</h1>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Change Username
        </label>
        <div className="flex">
          <input
            type="text"
            className="w-full border p-2 rounded-md"
            placeholder="New username here"
            onChange={(e) => setUsername(e.target.value)}
            value={username}
          />
          <button
            className="ml-2 bg-blue-500 text-white px-4 py-2 rounded-md"
            onClick={handleChangeUsername}
          >
            Change
          </button>
        </div>
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Add About Me
        </label>
        <div className="flex">
          <input
            type="text"
            className="w-full border p-2 rounded-md"
            placeholder="Add 'about me' here"
            onChange={(e) => setAboutMe(e.target.value)}
            value={aboutMe}
          />
          <button
            className="ml-2 bg-blue-500 text-white px-4 py-2 rounded-md"
            onClick={handleAddAboutMe}
          >
            Add
          </button>
        </div>
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Add Instagram Profile Link
        </label>
        <div className="flex">
          <input
            type="text"
            className="w-full border p-2 rounded-md"
            placeholder="Instagram profile link here. e.g. www.instagram.com/YOUR-USERNAME"
            onChange={(e) => setInstagramLink(e.target.value)}
            value={instagramLink}
          />
          <button
            className="ml-2 bg-blue-500 text-white px-4 py-2 rounded-md"
            onClick={handleAddInstagramLink}
          >
            Add
          </button>
        </div>
      </div>

      <button
        className="bg-white text-red-500 px-4 py-2 rounded-md hover:bg-red-500 hover:text-white"
        onClick={handleDeleteAccount}
      >
        Delete Account
      </button>

      {showConfirmation && (
        <div className="mt-4">
          <p className="text-red-500 text-sm font-medium">
            Are you sure you want to delete your account?
          </p>
          <div className="flex mt-2">
            <button
              className="bg-red-500 text-white px-4 py-2 rounded-md mr-2"
              onClick={confirmDeleteAccount}
            >
              Yes
            </button>
            <button
              className="bg-gray-300 text-gray-700 px-4 py-2 rounded-md"
              onClick={() => setShowConfirmation(false)}
            >
              No
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Settings;
