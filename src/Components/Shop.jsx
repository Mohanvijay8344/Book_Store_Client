import React, { useEffect, useState } from 'react'
import {Backend_Url} from '../Components/global.js'
import { Card } from 'flowbite-react';
import { useNavigate } from 'react-router-dom';

export default function Shop() {

  const [books, setBooks] = useState([])

  const navigate = useNavigate()

  useEffect(() => {
    fetch(`${Backend_Url}/all-books`)
      .then(res => res.json())
      .then(data => setBooks(data))
  },[])

  const isTokenAvailable = () => {
    const token = localStorage.getItem("token");
    return token !== null; 
  };

  return (
    <div className='mt-28 px-4 lg:px-24'>
      <h2 className='text-5xl font-bold text-center'>All Books are Here</h2>
      <div className='grid gap-8 my-12 lg:grid-cols-4 sm:grid-cols-2 md:grid-cols-3 grid-cols-1'>
      {
        books.map(books => <Card
          className="max-w-sm"
          imgAlt="Meaningful alt text for an image that is not purely decorative"
          imgSrc={books.imageURL}
        >
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {books.title}
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            {books.description}
          </p>
          <button className='bg-blue-700 font-semibold text-white py-2 rounded' onClick={(e) => {
                    if (!isTokenAvailable()) {
                      e.preventDefault(); 
                      navigate("/admin/dashboard/signin")
                    } }}>Buy Now</button>
        </Card>)
      }
      </div>
    </div>
  )
}
