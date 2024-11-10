import React from 'react'
import Image from 'next/image'

const hero = () => {
  return (
    <div className='h-ful w-full overflow-hidden  flex md:flex-row	'>

    <div className=' flex-1  flex flex-col justify-center text-left  w-full md:w-6/12 pl-[20px] md:pl-[150px]'>
      <h1 className='font-rye leading-[39px] pt-[50px] text-4xl'>IMPECCABLE <br /> CRAFTSMANSHIP AND <br />FINESSE </h1>
      <div className='para h-[120px] w-[400px] pt-[17px] text-[#A29875]' >
      <p>An example of intricate workmanship and detail, elegant necklaces and long and short chains form a part of our desirable collection.</p>
    </div>

    <div className='button w-[190px] h-[40px] rounded-lg pl-[10px] pt-[2px] bg-[#A29875]'>
      <button className='w-[177px] h-[38px] font-serif text-xl text-white '>Explore Now</button>
    </div>
    
    </div>

    <div className='flex-1 w-full flex items-center justify-center mt-7  md:w-6/12'>
      <Image src="figmaa.svg"alt='figmaa Image'width= {300}height={100}
   />
    </div>
    </div>
  )
}

export default hero
