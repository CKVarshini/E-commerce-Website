import React, { useContext, useState } from 'react'
import {ShopContext} from '../context/ShopContext'

const Collection = () => {

  const { products } = useContext(ShopContext);
  const [showFilter, setShowFilter] = useState(false);

  return (
    <div className='flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t'>
       
       {/* Filter Options */}
       <div className='min-w-60'>
        <p className='my-2 text-xl flex items-center cursor-pointer gap-2'>FILTERS</p>
        {/*  Category Filter*/}
        <div className={`border border-gray-300 pl-5 py-3 mt-6 ${showFilter ? '' :'hidden'} sm:block`}>
          <p className='mb-3 text-sm font-medium'>CATEGORIES</p>
          <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
           <p className='flex gap-2'>
            <input className='w-3' type="checkbox" value={'Kids'}></input>Kids
           </p>
           <p className='flex gap-2'>
            <input className='w-3' type="checkbox" value={'Men'}></input>Men
           </p>
           <p className='flex gap-2'>
            <input className='w-3' type="checkbox" value={'Women'}></input>Women
           </p>
          </div>
        </div>

        {/* SubCategory filter */}
        <div className={`border border-gray-300 pl-5 py-3 my-5 ${showFilter ? '' :'hidden'} sm:block`}>
          <p className='mb-3 text-sm font-medium'>TYPE</p>
          <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
           <p className='flex gap-2'>
            <input className='w-3' type="checkbox" value={'Topwear'}></input>Topwear
           </p>
           <p className='flex gap-2'>
            <input className='w-3' type="checkbox" value={'Bottomwear'}></input>Bottomwear
           </p>
           <p className='flex gap-2'>
            <input className='w-3' type="checkbox" value={'Winterwear'}></input>Winterwear
           </p>
          </div>
        </div>     
       </div>   
           
    </div>
  )
}

export default Collection