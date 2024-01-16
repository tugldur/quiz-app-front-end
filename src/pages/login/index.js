import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";

const Login = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [UserName, setUserNameError] = useState("");
  const loginUser = async (email, password) => {
    console.log(email, password);




    const res = await axios.post("https://shpreche.onrender.com/login", {
      email: email,
      password: password,
    });
    console.log(res);




    
    if (res.status === 200) {
      alert(res.data.message);
      console.log(res);
      localStorage.setItem("user", true);
      localStorage.setItem("userId", res.data._id)
      router.push("/");
    }
  };
  const changeRoute = () => {
    router.push("/signup");
  };

  return (
    <div>
      <h1>login up</h1>
      <input
        placeholder="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        placeholder="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        type="password"
      />
      <button onClick={() => loginUser(email, password)} className="button1">
        Login
      </button>
      <button onClick={() => changeRoute()}>Sign up</button>
    </div>
  );
};
export default Login;
