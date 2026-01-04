import React from 'react'
import { IoLogoWhatsapp } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";
import Link from 'next/link';

const Contact = () => {
  return (
    <footer>
        <h1 className='text-6xl text-center font-mono font-bold mb-10'>Contact</h1>
        {/* social media icons */}
        <div className='flex justify-center gap-16 mb-24'>
          <Link href={'https://wa.me/918851816632'}className=''><IoLogoWhatsapp size={52} className='hover:text-pink-500'/></Link>

          <Link href={'https://github.com/abhijeet8910/'}className=''><FaGithub size={50} className='hover:text-pink-500'/></Link>
          
        </div>
    </footer>
  )
}

export default Contact
