'use client'
import Link from 'next/link'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'

const navItems = [
    {name:'Home', path: '/'},
    {name:'About', path: '/about'},
    {name:'Projects', path: '/projects'},
    {name:'Contact', path: '/contacts'},
]

const Navbar = () => {
    
    const [isOpen, setIsOpen] = useState<boolean>(false);
  return (


    <header className=' w-full fixed top-0 z-50'>
        <nav className=' flex justify-around items-center h-16'>
            <div>
                <h1 className=' md:font-serif md:text-3xl font-bold sm:text-xl hover:text-pink-300'>Abhijeet Kumar</h1>
            </div>

            <ul className='hidden md:flex justify-between items-center space-x-8 text-xl'>
               {navItems.map((item) => (
                <li key={item.name}>
                    <Link href={item.path} className='hover:text-pink-300 hover:underline'>{item.name}</Link>
                </li>
               ))} 
            </ul>

            {/* mobile drawer */}
            <div className='md:hidden pl-8'>
               <button onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? <X/> : <Menu/>}
               </button>
            </div>

            
                {isOpen && (
                    <ul className='absolute top-16 w-full flex flex-col justify-center items-center space-y-4 text-sm bg-linear-to-br from-slate-700/90 to-blue-600/40 '>
                        {navItems.map((item) => (
                            <li key={item.name}>
                                <Link href={item.path} className='hover:text-green-300 hover:underline' onClick={() => setIsOpen(false)}>{item.name}</Link>
                            </li>
                        ))}
                    </ul>
                )}
            

        </nav>
    </header>
  )
}

export default Navbar
