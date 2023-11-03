import "rsuite/dist/rsuite.min.css";
import Dropdown from "rsuite/Dropdown";
import GearIcon from "@rsuite/icons/Gear";
import { db, auth } from "../firebase";
import { useState, useEffect } from "react";
import UserBadgeIcon from "@rsuite/icons/UserBadge";
import UserInfoIcon from "@rsuite/icons/UserInfo";
import { collection, query, where, getDocs } from "firebase/firestore";

function DropDown() {
  const [username, setUsername] = useState();

  useEffect(() => {
    const user = auth.currentUser.email;
    const q = query(collection(db, "users"), where("email", "==", user));
    const rData = async () => {
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        setUsername(doc.data().username);
      });
    };
    rData();
  }, []);

  return (
    <div>
      <Dropdown title={username} icon={<UserBadgeIcon />}>
        <Dropdown.Item icon={<UserInfoIcon />} as="a" href="/profile">
          Profile
        </Dropdown.Item>
        <Dropdown.Item icon={<GearIcon />} as="a" href="/settings">
          Settings
        </Dropdown.Item>
      </Dropdown>
    </div>
  );
}

export default DropDown;
