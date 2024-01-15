
'use client';

import { Sidebar } from 'flowbite-react';
import { BiBuoy } from 'react-icons/bi';
import { HiArrowSmRight, HiChartPie, HiInbox, HiOutlineCloudUpload, HiShoppingBag, HiTable, HiUser, HiViewBoards } from 'react-icons/hi';
import Profile from '../assets/Profile.jpg'
import { useNavigate } from 'react-router-dom';

export default function SideBar() {

const navigate = useNavigate()

  const isTokenAvailable = () => {
    const token = localStorage.getItem("token");
    return token !== null; 
  };

  const LogOut = () => {
    localStorage.removeItem("token");
    navigate("/")
  }

  return (
    <Sidebar aria-label="Sidebar with content separator example" className='flex gap-4 flex-col md:flex-row '>
      <Sidebar.Logo href="/" img={Profile} imgAlt="logo" className=''>
        Book Store
      </Sidebar.Logo>
      <Sidebar.Items className='border-black'>
        <Sidebar.ItemGroup >
          <Sidebar.Item href="/admin/dashboard" icon={HiChartPie} className='hover:bg-black hover:text-white'>
            Dashboard
          </Sidebar.Item>
          <Sidebar.Item href="/admin/dashboard/upload" onClick={(e) => {
                    if (!isTokenAvailable()) {
                      e.preventDefault(); 
                      navigate("./signin")
                    } }} icon={HiOutlineCloudUpload} className='hover:bg-black hover:text-white'>
            Upload Book
          </Sidebar.Item>
          <Sidebar.Item href="/admin/dashboard/manage" onClick={(e) => {
                    if (!isTokenAvailable()) {
                      e.preventDefault(); 
                      navigate("./signin")
                    } }} icon={HiInbox} className='hover:bg-black hover:text-white'>
            Manage Books
          </Sidebar.Item>
         
          <Sidebar.Item href="/admin/dashboard/signin" icon={HiArrowSmRight} className='hover:bg-black hover:text-white'>
            Sign In
          </Sidebar.Item>
          <Sidebar.Item href="#" onClick={() => LogOut()} icon={HiTable} className='hover:bg-black hover:text-white'>
            Log Out
          </Sidebar.Item>
        </Sidebar.ItemGroup>
        <Sidebar.ItemGroup>
          <Sidebar.Item href="#" icon={HiChartPie} className='hover:bg-black hover:text-white'>
            Upgrade to Pro
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={HiViewBoards} className='hover:bg-black hover:text-white'>
            Documentation
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={BiBuoy} className='hover:bg-black hover:text-white'>
            Help
          </Sidebar.Item>
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
  );
}
