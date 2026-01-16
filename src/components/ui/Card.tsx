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
    <div className='bg-gray-400 border border-red-300 rounded-xl w-1/5 '>
    <div className='flex flex-col justify-start items-start'>
      <h1>{title}</h1>
      <p>{description}</p>
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
