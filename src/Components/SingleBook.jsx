import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Backend_Url } from './global.js'

export default function SingleBook(){
  const { id } = useParams();
  const [book, setBook] = useState([]);

  useEffect(() => {
    const fetchBook = async () => {
      try {
        const response = await fetch(`${Backend_Url}/book/${id}`);
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }

        const bookData = await response.json();
        setBook(bookData);
      } catch (error) {
        console.error('Error fetching data:', error);
        setError('Failed to fetch book data');
      }
    };

    fetchBook();
  }, [id]);

  return (
    <div className='mt-28 px-4 lg:px-24'>
      <img src={book.imageURL}/>
      <h2>{book.title}</h2>
    </div>
  );
};

