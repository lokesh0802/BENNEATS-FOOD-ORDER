import React from 'react'
import Banner from '../../components/Banner'
import Catagories from './Catagories'
import SpecialDishes from './SpecialDishes'
import Testimonials from './Testimonials'
import OurServices from './OurServices'

const Home = () => {
  return (
    <div>
       <Banner/>
       <Catagories/>
       <SpecialDishes/>
       <Testimonials/>
       
    </div>
  )
}
{/* <OurServices/> */}
export default Home