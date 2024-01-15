import React from "react";
import { useFormik } from "formik";
import { API } from "./global.js";
import "./Signin.css";
import { useNavigate } from "react-router-dom";
import Navbar from "../Components/Navbar.jsx";
import googleIcon from "../assets/google.png";
import { GoogleClientId } from "./global.js";
import { GoogleLogin } from 'react-google-login';

export function Signin() {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    onSubmit: async (values) => {
      console.log(values);
      const data = await fetch(`${API}/users/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });
      if (data.status === 401) {
        console.log("error");
        alert("Email or Password Incorrect ❌❌");
      } else {
        console.log("success");
        const result = await data.json();
        console.log(result);
        localStorage.setItem("token", result.token);
        alert("Login Successfull ✅✅");
        navigate("/admin/dashboard");
      }
    },
  });

  function signup_page() {
    navigate("/admin/dashboard/signup");
  }

  function rest_page() {
    navigate("/admin/dashboard/forgot-password");
  }

  return (
    <div className="login_container">
      <Navbar />
      <h1>Need Login to open Admin Page</h1>
      <form className="form" onSubmit={formik.handleSubmit}>
        <input
          placeholder="Email"
          name="username"
          value={formik.values.username}
          onChange={formik.handleChange}
          className="h-10"
        />
        <input
          placeholder="Password"
          name="password"
          value={formik.values.password}
          onChange={formik.handleChange}
          className="h-10"

        />
        <button type="submit" className="hover:outline-1">Sign In</button>
        <label>
          Not a member? <a onClick={() => signup_page()}>Sign Up</a>
        </label>
        <a onClick={() => rest_page()}>Forgot Password</a>
      </form>
    </div>
  );
}
