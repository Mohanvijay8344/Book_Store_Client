import React from "react";
import { useFormik } from "formik";
import { API } from "./global";
import { useNavigate } from "react-router-dom";
import "./Forgot.css"; // Import the CSS file
import Navbar from "../Components/Navbar";

export function Forgot() {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      username: "",
    },
    onSubmit: async (values) => {
      console.log(values);
      const data = await fetch(`${API}/users/forgot-password`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });
      if (data.status === 401) {
        console.log("error");
      } else {
        console.log("success");
        const result = await data.json();
        console.log(result);
        navigate("/projects/reset-password")
      }
    },
  });

  function singin_page(){
    navigate("/admin/dashboard/signin")
  }
  return (
    <div className="login_container">
      <Navbar />
      <h1>Forgot Password</h1>
      <form className="form" onSubmit={formik.handleSubmit}>
        <input
          placeholder="Username"
          name="username"
          value={formik.values.username}
          onChange={formik.handleChange}
          className="h-10"

        />
        <button type="submit">Submit</button>
        <label>
          I Know Password...!!! <a onClick={() => singin_page()}>Sign In</a>
        </label>
      </form>
    </div>
  );
}
