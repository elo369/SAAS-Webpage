import { BriefcaseBusiness, ChartColumnBig, ChartScatter, GitGraphIcon, Grape, GrapeIcon, Settings } from 'lucide-react'
import React from 'react'

const Service = () => {
    return (
        <div className='min-h-200 flex flex-col w-full bg-white mt-2'>
            <div className='w-full text-center font-bold text-4xl bg-gradient-to-t from-green-500 to-green-800 text-transparent bg-clip-text'>
                <h1>Our Services</h1>
            </div>
            <div className='flex w-full justify-center p-2 mt-1 px-2 flex-wrap'>
                <div className='lg:w-1/3 w-full p-2 sm:w-1/2'>
                    <div className='text-green-400'><Settings /></div>
                    <h1 className='mt-1 font-bold uppercase'>web development</h1>
                    <p className='mt-1 font-medium'>Boost your online presence with our expert web development services. We craft responsive, user-friendly websites tailored to your business needs, ensuring seamless performance and a captivating digital experience.</p>
                </div>
                <div className='lg:w-1/3 w-full p-2 sm:w-1/2'>
                    <div className='text-green-400'><ChartColumnBig /></div>
                    <h1 className='mt-1 font-bold uppercase'>graphic design</h1>         
                    <p className='mt-1 font-medium'>"Transform your ideas into stunning visuals and functional websites! Offering creative graphic design and seamless web development services to elevate your brand and captivate your audience online."</p>
                </div>
                <div className='lg:w-1/3 w-full p-2 sm:relative sm:mr-20 sm:w-full lg:mr-0'>
                    <div className='text-green-400'><BriefcaseBusiness /></div>
                    <h1 className='mt-1 font-bold uppercase'>business branding</h1>
                    <p className='mt-1 font-medium'>"Elevate your business with our comprehensive web development services. From custom designs to seamless functionality, we build brands online, driving engagement, visibility, and growth for lasting success."</p>
                </div>
            </div>
        </div>
    )
}

export default Service
