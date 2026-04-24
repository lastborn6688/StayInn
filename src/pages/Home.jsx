import React from 'react'
import Hero from '../components/Hero'
import FeaturedDestination from '../components/FeaturedDestination'
import ExclusiveOffers from '../components/ExclusiveOffers'
import Testimonial from '../components/Testimonial'
import NewsLater from '../components/NewsLater'

const Home = () => {


  return (
    <div className='bg-[rgb(206,176,135)]/30 mb-20'>
      <Hero/>
      <FeaturedDestination/>
      <ExclusiveOffers/>
      <Testimonial id='newslater'/>
      <NewsLater />
    </div>
  )
}

export default Home
