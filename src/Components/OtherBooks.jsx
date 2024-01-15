import React, { useEffect, useState } from 'react'
import BookCards from './BookCards'
import { Backend_Url } from './global.js'

export default function OtherBooks() {

    const [books, setBooks] = useState([])
    
    useEffect(() => {
        fetch(`${Backend_Url}/all-books`)
        .then(res => res.json())    
        .then(data  => setBooks(data.reverse().slice(0, 7)))
    },[])

  return (
    <div>
        <BookCards books={books} headline="Other Books"/>
    </div>
  )
}
