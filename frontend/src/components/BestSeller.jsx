import React, { useContext, useEffect, useState  } from 'react'
import { ShopContext } from '../context/ShopContext'
import { useSearchParams } from 'react-router-dom';
import Title from './Title';
import ProductItem from './ProductItem';

const BestSeller = () => {

  const {products} = useContext(ShopContext);
  const [bestseller,setBestSeller] = useState([]);

  useEffect(()=>{
    const bestProduct =  products.filter((item)=>(item.bestseller));
    setBestSeller(bestProduct.slice(0,5));
  },[])


  return (
    <div className='my-10'>
      <div className='text-center text-3xl py-8'>
       <Title text1={'BEST'} text2={'SELLER'}></Title>
       <p className='w-3/4 m-auto text-xs sm:text-sm md:etxt-base text-gray-600'>
       Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic consequuntur, provident facere quidem repudiandae iusto ut autem! Fugit modi ex natus dicta fugiat. Ratione quaerat quis quia ut minus sunt.</p>
      </div>

      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 gap-y-6'>
       {
        bestseller.map((item,index)=>(
          <ProductItem key={index} id={item._id} image={item.image} name={item.name} price={item.price}></ProductItem>
        ))
       }
       </div>
     
    </div>
  )
}

export default BestSeller