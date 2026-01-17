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
    <div className='bg-linear-to-br from-slate-900/90 via-blue-900/90 to-slate-900/90 backdrop-blur-md shadow-2xl rounded-lg w-fit px-6 py-12'>
    <div className='flex flex-col justify-start items-start gap-4'>
      <h1 className='text-4xl md:text-5xl lg:text-6xl font-bold'>{title}</h1>
      <p className=''>{description}</p>
      {/* <img src={image} alt="" />
      <a href={link}>{link}</a> */}
      <div className=''>
        {icons?.map((icon, index) => (
          <span key={index}>{icon}</span>
        ))}
      </div>
      
    </div>
    </div>
  )
}

export default Card
