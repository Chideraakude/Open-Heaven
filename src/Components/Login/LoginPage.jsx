import React from "react";
import "./loginPage.css";
import { MdOutlineContactMail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { useState } from "react";
import { FaEyeSlash } from "react-icons/fa";
import { FaRegEye } from "react-icons/fa6";
import { Navigate, useNavigate } from "react-router-dom";

const users = [
  {
    firstName: "Ekene",
    lastName: "Prince",
    email: "pastor@gmail.com",
    password: "pastor",
    role: "Pastor",
  },
];
const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState({ isError: false, type: "", message: "" });
  const userData = JSON.parse(localStorage.getItem("userData"));
  console.log(userData);

  if (!userData) {
    localStorage.setItem("userData", JSON.stringify(users));
  }

  const authorizeUsers = userData.find(
    (admin) => admin.email === email && admin.password === password
  );
  console.log(authorizeUsers);

  localStorage.setItem("email", email);
  localStorage.setItem("password", password);

  const handleShowpassword = () => {
    setShowPassword(!showPassword);
  };

  const Nav = useNavigate();

  const handleForm = () => {
    if (!authorizeUsers && !password && !email) {
      alert("You are not a resgistered member!");
    } else {
      Nav("/");
    }
  };

  return (
    <div className="loginHold">
      <div className="loginWrap">
        <div className="high">
          <div className="inf">
            {error.isError && error.type === "email" ? (
              <p style={{ color: "red" }}>{error.message}</p>
            ) : null}
          </div>
          <div className="top">
            <MdOutlineContactMail style={{ fontSize: "12px" }} />
            <input
              type="email"
              value={email}
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        </div>
        <div className="high">
          <div className="inf">
            {error.isError && error.type === "password" ? (
              <p style={{ color: "red", fontSize: "10px" }}>{error.message}</p>
            ) : null}
          </div>
          <div className="midz">
            <RiLockPasswordFill style={{ fontSize: "12px" }} />

            <input
              type={showPassword ? "text" : "password"}
              value={password}
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
            {showPassword ? (
              <FaRegEye
                onClick={handleShowpassword}
                style={{ fontSize: "12px" }}
              />
            ) : (
              <FaEyeSlash
                onClick={handleShowpassword}
                style={{ fontSize: "12px" }}
              />
            )}
          </div>
        </div>

        <div className="login">
          <button onClick={handleForm}>Login</button>
          <button onClick={() => Nav("/signup")}>SignUp</button>
        </div>
      </div>
    </div>
  );
};

export default Login;
