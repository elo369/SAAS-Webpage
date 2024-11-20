import { AlignJustify, Sun, X } from 'lucide-react'
import React, { useState } from 'react'
import { navItems } from '../constants'

const Header = () => {
    const [click,setClick] = useState(false)

    const change = ()=>{
        setClick(!click)
    }
    return (
        <div className='flex justify-center relative right-20 items-center pt-4'>
            <div className='text-green-400 font-bold flex '>
                <Sun /> {' '}
                <span>SHINE</span>
            </div>
            <div className='ml-20 hidden lg:block'>
                <ul className='flex space-x-8'>
                    {navItems.map((item, index) => (
                      <li key={index} className='uppercase font-bold text-sm text-neutral-500 hover:text-green-700 transition duration-100'>
                           <a href={item.href}>{item.label}</a>
                      </li>
             ))}
                </ul>
            </div>
            <div className='relative left-10'>
                <button className='bg-green-300 px-5 rounded-full border border-green-700'>FAQ</button>
            </div>
            <div onClick={change} className='absolute right-0 lg:hidden'>
               {click ?<X/>:<AlignJustify />}
            </div>
            {click && (
                <div className='bg-green-200 w-1/4 mt-48 py-2 absolute right-0'>
                     <ul className='flex flex-col items-center space-y-1  '>
                        {navItems.map((item,index)=>(
                            <li key={index} className='uppercase font-bold text-sm text-neutral-500 hover:text-green-700 transition duration-100'>
                                <a href={item.href}>{item.label}</a>
                            </li>
                        ))}
                     </ul>
                </div>
            )}
        </div>
    )
}

export default Header
