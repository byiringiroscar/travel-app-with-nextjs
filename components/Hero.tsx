import Image from 'next/image'
import React from 'react'

const Hero = () => {
  return (
    <section className='max-container padding-container flex flex-col gap-20 py-10 pb-32 lg:py-20 xl:flex-row  border-2 border-red-500'>
        <div className='hero-map' />
    {/* LEFT */}
        <div className='relative z-20 flex flex-1 flex-col xl: w-1/2'>
            <Image alt='camp' src='/camp.svg' width={50} height={50}
                className='absolute left-[-5px] top-[-30px] w-10 lg:w-[50px]'
            />
            <h1 className='bold-52 lg:bold-88 lg:w-1/2'>Putuk Truno Camp Area</h1>
            <p className='regular-16 mt-6 text-gray-30 xl:max-w-[520px]'>We want to be on each of your journeys seeking the satisfaction of seeing the incorruptible beauty of nature. We can help you on an adventure around the world in just one app</p>

        </div>
        
    </section>
  )
}

export default Hero