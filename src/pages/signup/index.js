import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import { poweredByHeader } from "../../../next.config";

const Signup = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userNameError, setUserNameError] = useState("");

  const handleSignUp = async () => {
    if (userNameError === "") {
      setUserNameError("Please enter your username ");
    } else if (email.lenght <= 5) {
      setUserNameError("Username must be more than 4 characters ");
    } else {
      setUserNameError("nhiuh");
    }

    const res = await axios.post("https://shpreche.onrender.com/signup ", {
      email: email,
      password: password,
    });
    console.log(res)
  };

  const handleChangeEmail = (event) => {
    setEmail(event.target.value);
  };

  const handleChangePassword = (event) => {
    setPassword(event.target.value);
  };

  const handleChangeConfirmPassword = (event) => {
    setConfirmPassword(event.target.value);
  };

  // const handleChangeAge = (event) => {
  //   setAge(event.target.value);
  // };

  return (
    <div className="back">
      <div style={{ color: "red" }}> {password}</div>
      <input placeholder="Email" value={email} onChange={handleChangeEmail} />
      <div style={{ color: "red" }}>{password}</div>
      <input placeholder="Password" />

      <button onClick={handleSignUp}>Sign-Up</button>
    </div>
  );
};
export default Signup;

{
  /* <div>
<h1>Sign up</h1> 
<input placeholder= "email" value = {email} onChange={(e)=> setEmail(e.target.value)}/>
<input placeholder= "password" value = {password} onChange={(e)=> setPassword(e.target.value)} type="password"/>
<button onClick={() =>createUser(email, password)} className='button1'>Sign up /</button>
</div>  */
}
// <div>
//   <h1 style={{ fontFamily: "sans-serif" }}>sign up</h1>

//   <div
//     style={{
//       display: "flex",
//       flexWrap: "wrap",
//       justifyContent: "center",
//       height: "300px",
//       width: "400px",
//       borderRadius: "20px",
//       backgroundColor: "grey",

//     }}
//   >
//     <h1
//       style={{
//         color: "white",
//         fontFamily: "sans-serif",
//         fontSize: "20px",
//         marginLeft: "10px",
//       }}
//     >
//       Log into Dailyclaude
//     </h1>
//     <input
//       style={{
//         width: "200px",
//         height: "40px",
//         borderRadius: "20px",
//         marginTop: "-10px",
//         border: "none",
//       }}
//       placeholder="username"
//       value={username}
//       onChange={(e) => setUsername(e.target.value)}
//     />
//     <input
//       style={{
//         width: "200px",
//         height: "40px",
//         borderRadius: "20px",
//         marginTop: "-20px",
//         border: "none",
//       }}
//       placeholder="password"
//       value={password}
//       onChange={(e) => setPassword(e.target.value)}
//       type="password"
//     />
//     <div
//       style={{
//         display: "flex",
//         justifyContent: "center",
//         marginLeft: "0px",
//         gap: "10px",
//       }}
//     >
//       <button
//         style={{
//           width: "100px",
//           height: "30px",
//           borderRadius: "20px",
//           backgroundColor: "white",
//           marginBottom: "-13px",
//           border: "1px solid black",
//           border: "none",
//         }}
//         onClick={() => createUser(username, password)}
//       >
//         Login
//       </button>
//       <button
//         style={{
//           width: "100px",
//           height: "30px",
//           borderRadius: "20px",
//           backgroundColor: "white",
//           marginBottom: "-11px",
//           border: "1px solid black",
//           border: "none",
//         }}
//         onClick={() => changeRoute()}
//       >
//         Sign in
//       </button>
//     </div>
//   </div>
// </div>

// const createUser = async (email, password) => {';'

//   router.push("/");
