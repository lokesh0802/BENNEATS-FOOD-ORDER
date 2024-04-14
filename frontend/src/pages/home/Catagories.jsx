import React from 'react'
import { useTheme } from '../../hooks/ThemeContext';

const categoryItems = [
    {id: 1, title: "KATHI", despriction: "(86 dishes)", image: "/images/home/category/kathi.jpeg"},
    {id: 2, title: "QUENCH", despriction: "(12 break fast)", image: "/images/home/category/quench.jpg"},
    {id: 3, title: "MAGGIE HOTSPOT", despriction: "(48 dessert)", image: "/images/home/category/hotspot.jpeg"},
    {id: 4, title: "SOUTHERN STORIES", despriction: "(255 Items)", image: "/images/home/category/southern.jpg"}
]

const Catagories = () => {
    const { isDarkMode } = useTheme();
  return (
    <div className={`max-w-screen-2xl container mx-auto xl:px-24 px-4 py-16 ${isDarkMode ? 'green' : ''}`}>
        <div className='text-center'>

            <h2 className='title'>Popular Catagories</h2>
        </div>

        {/* category cards */}
        <div className='flex flex-col sm:flex-row flex-wrap gap-8 justify-around items-center mt-12 '>
            {
                categoryItems.map((item, i) => (
                    <div key={i} className='shadow-lg rounded-md bg-white py-6 px-5 w-72 mx-auto text-center cursor-pointer hover:-translate-y-4 transition-all duration-300 z-10'>
                        <div className='w-full mx-auto flex items-center justify-center'><img src={item.image} alt="" className='bg-[#C1F1C6] p-5 rounded-full w-28 h-28' /></div>
                        <div className='mt-5 space-y-1'>
                            <h5 className='text-[#1E1E1E] font-semibold'>{item.title}</h5>
                            <p className='text-secondary text-sm'>{item.despriction}</p>
                        </div>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default Catagories