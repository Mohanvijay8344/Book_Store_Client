import React from 'react'
import Banner from './Banner'
import FavoriteBooks from './FavoriteBooks'
import SingleBook from './SingleBook'
import FavBook from './FavBook'
import PromoBanner from './PromoBanner'
import OtherBooks from './OtherBooks'
import Review from './Review'

export default function Home() {
  return (
    <div className=''>
        <Banner />
        <FavoriteBooks />
        <FavBook />
        <PromoBanner />
        <OtherBooks />
        <Review />
    </div>
  )
}
