import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { IoLogoNpm } from "react-icons/io";
import FactCard from "@/components/factCard";
const Home = () => {
  const router = useRouter();
  const [facts, setFacts] = useState([]);

  boxSizing: "border-box";

  useEffect(() => {
    const isUserLoggedIn = () => {
      const isUser = localStorage.getItem("user");
      console.log(isUser);
      if (isUser === null || isUser === false) {
        router.replace("/login");
      }
    };

    isUserLoggedIn();

    const fetchdata = async () => {
      const response = await axios.get("https://shpreche.onrender.com/fact");
      console.log(response);
      setFacts(response.data);
    };

    fetchdata();
  }, []);

  console.log(facts);

  return (
    <div className="box">
      <div style={{ fontSize: "70px", color: "white" }}>
        <IoLogoNpm />
      </div>

      <button
        style={{
          fontFamily: "revert-layer",
          marginTop: "18px",
          border: "none",
          width: "80px",
          height: "35px",
          backgroundColor: "whitesmoke",
          borderRadius: "20px",
          color: "black",
          fontSize: "17px",
        }}
      >
        Facts
      </button>
      <button
        onClick={() => router.push("/my-Facts")}
        style={{
          fontFamily: "revert-layer",
          marginTop: "18px",
          border: "none",
          width: "80px",
          height: "35px",
          backgroundColor: "whitesmoke",
          borderRadius: "20px",
          color: "black",
          fontSize: "17px",
        }}
      >
        My facts
      </button>

      <button
        style={{
          marginTop: "14px",
          border: "none",
          width: "52px",
          height: "45px",
          borderRadius: "50px",
          backgroundColor: "whitesmoke",
          color: "black",
        }}
      >
        <img
          style={{
            width: "40px",
            height: "40px",
            borderRadius: "50px",
            backgroundColor: "whitesmoke",
          }}
          src="https://static.vecteezy.com/system/resources/thumbnails/005/545/335/small_2x/user-sign-icon-person-symbol-human-avatar-isolated-on-white-backogrund-vector.jpg"
        ></img>
      </button>

      {facts.map((fact) => (
        <FactCard fact={fact} setFacts={setFacts} facts={facts} id={fact._id} />
      ))}
    </div>
  );
};
export default Home;
