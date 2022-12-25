import React from 'react'

const Card = ({item}) => {
  return (
    <div className='bg-white rounded-xl overflow-hidden drop-shadow-md '>
                  <img  
                        className='h-56 w-full object-cover'
                        src={item.linkImg}
                        alt={item.title}
                   />
                <div className='p-8'>
                  <h1>{item.title}</h1>
                  <h3 className='font-bold text-2xl my-1'>{item.price}</h3>
                  <span  className='text-gray-600 text-xl'>{item.category}</span>
                </div>
    </div>
  )
}

export default Card