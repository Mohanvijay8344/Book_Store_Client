import React, { useEffect, useState } from 'react'
import BookCards from './BookCards'
import {Backend_Url} from "./global.js"
import { useParams } from 'react-router-dom'

export default function FavoriteBooks() {

  const { id } = useParams()

    const [books, setBooks] = useState([])
    
    useEffect(() => {
        fetch(`${Backend_Url}/all-books`)
        .then(res => res.json())    
        .then(data  => setBooks(data.slice(1,7)))
    },[])

  return (
    <div>
        <BookCards books={books} headline="Best Seller Books"/>
    </div>
  )
}
