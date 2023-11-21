import { db } from "../firebase";
import { useState, useEffect } from "react";
import AboutCard from "../components/AboutCard";
import { collection, getDocs } from "firebase/firestore";

function About() {
  const [authorInfo, setAuthorInfo] = useState([]);

  useEffect(() => {
    const getAuthorInfo = async () => {
      const data = await getDocs(collection(db, "users"));
      setAuthorInfo(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getAuthorInfo();
  }, []);

  return (
    <>
      <h1 className="text-2xl font-vround text-center mb-4">About</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {authorInfo.map((aInfo) => (
          <AboutCard
            key={aInfo.id}
            abCardImgLink="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?auto=format&fit=crop&q=60&w=600&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHBlcnNvbiUyMGZhY2V8ZW58MHx8MHx8fDA%3D"
            author={aInfo.username}
            AbContent={aInfo.aboutme}
            email={aInfo.email}
          />
        ))}
      </div>
    </>
  );
}

export default About;
