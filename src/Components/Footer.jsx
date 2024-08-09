import React from 'react'

const Footer = () => {
  return (
    <div className='h-16 w-full flex flex-row items-center overflow-x-hidden border-black'>
        <div className='flex-1'><h1> </h1></div>
        <div className='flex flex-row p-5 items-center'>
        <div><h1 className='text-sm md:text-lg mt-3 text-gray-500'> @made with love ❤️ by</h1></div>
        <div className='bg-slate-500 rounded-xl mt-2 ml-2'> <h1 className='text-slate-500'> |</h1></div>
        <div className='flex flex-row border-white ml-2 mr-2'>
        <h1 className='text-xl sm:text-2xl md:text-3xl text-blue-800 font-semibold mt-2 ml-2'>Akshat Awasthi</h1>
        </div>
       
        
        </div>
       
    </div>
  )
}

export default Footer
 