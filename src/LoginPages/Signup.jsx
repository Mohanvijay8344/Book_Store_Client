import React from "react";
import { useFormik } from "formik";
import { API } from "./global";
import { useNavigate } from "react-router-dom";
import "./Signup.css";
import Navbar from "../Components/Navbar";

export function Signup() {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      name: "",
      username: "",
      password: "",
    },
    onSubmit: async (values) => {
      console.log(values);
      const data = await fetch(`${API}/users/signup`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });
      if (data.status === 401) {
        console.log("error");
        alert("Invalid Cretentials ❌❌")
      } else {
        console.log("success");
        const result = await data.json();
        console.log(result);
        alert("Registration Successfull ✅✅");
        localStorage.setItem("token", result.token);
        navigate("/admin/dashboard/signin");
      }
    },
  });

  function login_page() {
    navigate("/admin/dashboard/signin");
  }

  return (
    <div className="login_container">
      <Navbar />
      <h1>Signup</h1>

      <form className="form" onSubmit={formik.handleSubmit}>
      <input
          placeholder="Name"
          name="name"
          value={formik.values.name}
          onChange={formik.handleChange}
          className="h-10"

        />
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
          type="password"
          value={formik.values.password}
          onChange={formik.handleChange}
          className="h-10"

        />
        <button type="submit">Sign Up</button>
        <label>
          Already have an Account? <a onClick={() => login_page()}>Sign In</a>
        </label>
      </form>
    </div>
  );
}
