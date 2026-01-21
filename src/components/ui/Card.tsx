import { Url } from 'next/dist/shared/lib/router/router'
import Link from 'next/link'
import React from 'react'

type cardProps = {
  title: string,
  description: string,
  image?: string,
  link?: string,
  icons?: React.ReactNode[],
  
}

const Card = ({title, description, image, link, icons}: cardProps) => {
  return (
    <div className='bg-linear-to-br from-slate-900/90 via-blue-900/90 to-slate-900/90 backdrop-blur-md shadow-2xl rounded-lg w-80 h-72 px-6 py-12'>
    <div className='flex flex-col h-full justify-between items-start '>
      <h1 className='text-2xl md:text-3xl lg:text-2xl font-bold leading-tight'>{title}</h1>
      <p className=''>{description}</p>
      {/* <img src={image} alt="" />
      <a href={link}>{link}</a> */}
      <div className=''>
        {icons?.map((icon, index) => (
          <span key={index}>{icon}</span>
        ))}
      </div>

      <Link href={link ?? '/'} className='border border-white rounded-full px-4 py-2'>Preview</Link>
    </div>
    </div>
  )
}

export default Card
