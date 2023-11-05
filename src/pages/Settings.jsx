import { useState, useEffect } from "react";
import { db, auth } from "../firebase";
import { deleteUser, sendPasswordResetEmail } from "firebase/auth";
import {
  collection,
  query,
  where,
  doc,
  getDocs,
  updateDoc,
} from "firebase/firestore";

function Settings() {
  const user = auth.currentUser.email;
  const [docID, setDocID] = useState();
  const [username, setUsername] = useState("");
  const [aboutMe, setAboutMe] = useState("");
  const [igLink, setIgLink] = useState("");
  const [ADConfirmation, setADConfirmation] = useState(false);
  const [PRConfirmation, setPRConfirmation] = useState(false);

  // useEffect hook to fetch the user document ID when the component is mounted
  useEffect(() => {
    // Create a firestore query to find the user document based on the username of the logged in user
    const ref = query(collection(db, "users"), where("email", "==", user));
    const rData = async () => {
      (await getDocs(ref)).forEach((doc) => {
        setDocID(doc.id);
      });
    };
    rData();
  }, [user]);

  // Function to change user's username
  const changeUsername = async () => {
    const op = doc(db, "users", docID);
    await updateDoc(op, {
      username: username,
    });
    alert("Username has been updated!");
    setUsername("");
  };

  // Function to add 'about me'
  const addAboutMe = async () => {
    const dp = doc(db, "users", docID);
    await updateDoc(dp, {
      aboutme: aboutMe,
    });
    alert("About me has been added!");
    setAboutMe("");
  };

  // Function to add an Instagram profile link to the user's profile
  const addIgLink = async () => {
    const il = doc(db, "users", docID);
    await updateDoc(il, {
      iglink: igLink,
    });
    alert("Instagram link has been added!");
    setIgLink("");
  };

  // Function to handle the initiation of account deletion
  const handleDeleteAccount = () => {
    setADConfirmation(true);
  };

  // Function to handle initiation of sending password reset email
  const handlePasswordReset = () => {
    setPRConfirmation(true);
  };

  // Function to delete user account
  const deleteAccount = () => {
    const ur = auth.currentUser;
    deleteUser(ur)
      .then(() => {
        alert("Account has been deleted!");
        window.location.reload(false);
      })
      .catch((error) => {
        alert("An errror has occcured!", error);
      });
  };

  // Send password reset email
  const passwordReset = () => {
    sendPasswordResetEmail(auth, user)
      .then(() => {
        alert("Password reseet email has been sent!");
      })
      .catch((error) => {
        alert("There was an error!", error);
      });
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
            onClick={changeUsername}
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
            onClick={addAboutMe}
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
            onChange={(e) => setIgLink(e.target.value)}
            value={igLink}
          />
          <button
            className="ml-2 bg-blue-500 text-white px-4 py-2 rounded-md"
            onClick={addIgLink}
          >
            Add
          </button>
        </div>
      </div>

      <button
        className="bg-white text-blue-500 px-4 py-2 rounded-md hover:bg-blue-500 hover:text-white"
        onClick={handlePasswordReset}
      >
        Reset Password
      </button>

      {PRConfirmation && (
        <div className="mt-4">
          <p className="text-red-500 text-sm font-medium">
            Do you want to reset your password?
          </p>
          <div className="flex mt-2">
            <button
              className="bg-red-500 text-white px-4 py-2 rounded-md mr-2"
              onClick={passwordReset}
            >
              Yes
            </button>
            <button
              className="bg-gray-300 text-gray-700 px-4 py-2 rounded-md"
              onClick={() => setPRConfirmation(false)}
            >
              No
            </button>
          </div>
        </div>
      )}

      <button
        className="bg-white text-red-500 px-4 py-2 rounded-md hover:bg-red-500 hover:text-white"
        onClick={handleDeleteAccount}
      >
        Delete Account
      </button>

      {ADConfirmation && (
        <div className="mt-4">
          <p className="text-red-500 text-sm font-medium">
            Are you sure you want to delete your account?
          </p>
          <div className="flex mt-2">
            <button
              className="bg-red-500 text-white px-4 py-2 rounded-md mr-2"
              onClick={deleteAccount}
            >
              Yes
            </button>
            <button
              className="bg-gray-300 text-gray-700 px-4 py-2 rounded-md"
              onClick={() => setADConfirmation(false)}
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
