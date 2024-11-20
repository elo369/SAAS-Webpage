import React from 'react'
import Boy from '../assets/boy.avif'

const HeroSection = () => {
    return (
        <div className='flex flex-col'>
            <div className='text-2xl font-normal flex flex-col w-full items-center pt-20'>
                <div className='font-bold'>
                    <span className='bg-gradient-to-t from-green-500 to-green-800 text-transparent bg-clip-text'>Startup and Saas</span> {" "}
                    <span>Landing Page</span>
                </div>
                <div>Built With TaiwindCSS</div>
            </div>
            <div className='mt-4 flex justify-center'>
                <button className='bg-green-400 h-8 border border-green-700 rounded-full w-40 font-medium'>Download Now</button>
            </div>
            <div className='w-full flex justify-center mt-4 mix-blend-multiply'>
                <img src={Boy} alt="Sticker"  />
            </div>
        </div>
    )
}

export default HeroSection
