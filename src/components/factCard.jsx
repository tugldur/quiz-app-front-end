import { AiFillLike } from "react-icons/ai";
import { AiFillDislike } from "react-icons/ai";
import { useEffect, useState } from "react";
import axios from "axios";

const FactCard = ({ fact, id, setFacts, facts }) => {
  const [userId, setUserId] = useState();
  const [factId, setFactId] = useState();
  const [likes, setLiked] = useState([fact.likes]);
  const [disLike, setDisLiked] = useState([fact.dislike]);
  // const [data,setData] = use

  useEffect(() => {
    const getUserId = () => {
      const userId = localStorage.getItem("userId");
      setUserId(userId);
    };
  //   const getFactId = ()=>{
  //     const factId = localStorage.getItem("factId")
  //     setFactId(factId)
  //   }
  }, []);
   
  const addLike = async () => {
    console.log(id);
    console.log(userId);
    axios
      .post(`https://shpreche.onrender.com/addLikes/${id}/${userId}`)
      .then((response) => {
        console.log(response);
        setLiked(response.data.likes);
        setDisLiked(response.data.dislikes);
        const likedData = facts.filter(
          (fact) => fact._id !== response.data._id
        );
        setFacts([...facts, likedData]);
      });
  };

  const disLikes = async () => {
    console.log(id);
    console.log(userId);
    axios
    .post(`https://shpreche.onrender.com/disLikes/${id}/${userId}`)
    .then((response) => {
      console.log(response);
      setLiked(response.data.likes);
      setDisLiked(response.data.dislikes);
      const disLikedData = facts.filter(
        (fact) => fact._id !== response.data._id
      );
      setFacts([...facts,disLikedData]);
    });
    // const res = await axios.post(
    //   `https://shpreche.onrender.com/disLike/${id}/${userId}`
    // );
    // setDisLiked(userId);
    // console.log(res);
  };
  return (
    <div
      style={{
        boxSizing: "border-box",
        border: "2px solid black",
        height: "200px",
        width: "360px",
        flexWrap: "wrap",
        padding: "30px",
        backgroundColor: "whitesmoke",
        borderRadius: "10px",
        fontFamily: "sans-serif  ",
      }}
    >
      <div>
        <div style={{ gap: "40px", fontSize: "20px" }}> {fact.title} </div>
        <div style={{ gap: "40px", paddingTop: "20px" }}> {fact.Date} </div>
        <div style={{ gap: "40px", paddingTop: "20px" }}>{fact.fact} </div>
      </div>
      <div>
        {" "}
        {Array.isArray(likes) ? likes.length : likes}
        <button
          onClick={addLike}
          style={{ border: "none", fontSize: "20px", paddingTop: "15px" }}
        >
          {" "}
          <AiFillLike />
        </button>
      </div>
      <div>
        {" "}
        {Array.isArray(disLike) ? disLike.length : disLike}
        <button onClick={disLikes} style={{ border: "none", fontSize: "20px" }}>
          {" "}
          <AiFillDislike />{" "}
        </button>
      </div>
      {fact.userId}
      {fact.factId}
      {fact.id}
      {/* {fact.likes}
      {fact.dislike} */}
    </div>
  );
};

export default FactCard;
