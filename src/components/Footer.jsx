import React from 'react'
import { resourcesLinks,platformLinks,communityLinks } from '../constants'

const Footer = () => {
  return (
    <footer className='p-10'>
      <div className='grid grid-cols-2 lg:grid-cols-3 gap-4'>
        <div>
            <h3 className='text-md font-semibold mb-4'>Resources</h3>
            <ul className='space-y-2'>
                {resourcesLinks.map((link,index)=>(
                    <li key={index}>
                        <a 
                        href={link.href}
                        className='text-black hover:text-white'
                        >
                            {link.text}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
        <div>
            <h3 className='text-md font-semibold mb-4'>Platforms</h3>
            <ul className='space-y-2'>
            {platformLinks.map((item,index)=>(
              <li key={index}>
                <a 
                href={item.href}
                className='text-black hover:text-white'
                >
                    {item.text}
                </a>
              </li>               
            ))}
            </ul>
        </div>
        <div>
            <h3 className='text-md mb-4 font-semibold'>Community</h3>
            <ul className='space-y-2'>
                {communityLinks.map((item,index)=>(
                    <li key={index}>
                        <a 
                        href={item.href}
                        className='text-black hover:text-white'
                        >
                            {item.text}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer