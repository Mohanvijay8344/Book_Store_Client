import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { BrowserRouter, Routes, Route, useParams, useLocation } from "react-router-dom";
import Books from "./Components/books";
import Home from "./Components/Home";
import Shop from "./Components/Shop";
import About from "./Components/About";
import Blog from "./Components/Blog";
import Navbar from "./Components/Navbar";
import SingleBook from "./Components/SingleBook";
import MyFooter from "./Components/MyFooter";
import DashboardLayout from "./Dashboard/DashboardLayout";
import Dashboard from "./Dashboard/Dashboard";
import UploadBook from "./Dashboard/UploadBook";
import ManageBooks from "./Dashboard/ManageBooks";
import EditBooks from "./Dashboard/EditBooks";
import SideBar from "./Dashboard/SideBar";
import { Signin } from './LoginPages/Signin';
import { Signup } from './LoginPages/Signup';
import { Forgot } from './LoginPages/Forgot';


function App() {
  const [count, setCount] = useState(0);
  const location = useLocation();

  return (
    <div>
      {!location.pathname.startsWith("/admin") ? <Navbar /> : null}
      <div className="min-h-screen flex flex-col">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/book/:id" element={<SingleBook />} />
          <Route path="/admin/dashboard" element={<DashboardLayout />} />
          <Route path="/admin/dashboard" element={<Dashboard />} />
          <Route path="/admin/dashboard/upload" element={<UploadBook />} />
          <Route path="/admin/dashboard/manage" element={<ManageBooks />} />
          <Route
            path="/admin/dashboard/edit-book/:id"
            element={<EditBooks />}
          />
          <Route path="/admin/dashboard/signin" element={<Signin />} />
          <Route path="/admin/dashboard/signup" element={<Signup />} />
          <Route path="/admin/dashboard/forgot-password" element={<Forgot />} />

        </Routes>
      </div>
      {!location.pathname.startsWith("/admin") ? <MyFooter /> : null}
    </div>
  );
}

export default App;

