import React from 'react'
import Nav from './Nav'
import CategoryCards from './CategoryCards'
import FoodCards from './FoodCards'
import CartCard from './CartCard'

const Home = () => {
  return (
    <div className='w-full min-h-screen bg-gradient-to-r from-blue-400 to-blue-600'>
     <Nav/>
     <CategoryCards/>
     <FoodCards />
     <CartCard />
    </div>
  )
}

export default Home