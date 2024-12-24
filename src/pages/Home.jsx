import React from 'react'
import Hero from '../components/banner/Hero'
import Categoryoption from '../components/category/Categoryoption'
import Middlebanner from '../components/banner/Middlebanner'
import Fitnessbanner from '../components/banner/Fitnessbanner'
import Todaydeals from '../components/category/Todaydeals'
import Newarrivals from '../components/category/Newarrivals'
import Mencloths from '../components/category/Mencloths'
import Womenclothes from '../components/category/Womenclothes'
import Winterdeals from '../components/category/Winterdeals'
import Workoutclothes from '../components/category/Workoutclothes'
import Kidscloths from '../components/category/Kidscloths'
const Home = () => {
  return (
    <div>
      <Hero />
      <Categoryoption />
      <Todaydeals />
      <Newarrivals />
      <Mencloths category="men" />
      <Womenclothes category="women" />
      <Middlebanner />
      <Winterdeals />
      <Kidscloths category="kid" />
      <Fitnessbanner />
      <Workoutclothes />
    </div>
  )
}

export default Home
