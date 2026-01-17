
import { FaReact } from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiMongodb } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { ServerCrashIcon } from "lucide-react";


const About = () => {
  return (
//     <div className='h-screen bg-sky-500 relative'>
//         <h1 className='text-center text-6xl font-mono font-bold'>About Me</h1>
//         <div className='absolute top-1/5 left-1/7'>
      
//       <div className='text-2xl'>
//         My Name is Abhijeet, <br />
//         I'm a Full Stack MERN Developer <br />
//         Who loves to code and learn new things.
//       </div>
//       <div>
//         <h1 className="">Skills:</h1>
//         <FaReact size={50} className='  m-4 hover:text-pink-500'/>
//         <SiNextdotjs size={50} className=' m-4 hover:text-pink-500'/>
//         <RiTailwindCssFill size={50} className=' m-4 hover:text-pink-500'/>
//         <SiMongodb size={50} className=' m-4 hover:text-pink-500'/>
//         <FaNodeJs size={50} className=' m-4 hover:text-pink-500'/>

//       </div>
// </div>
//     </div>
        <section className=" bg-linear-to-br from-slate-900/90 via-blue-900/90 to-slate-900/90 ">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-mono font-bold text-center ">About</h1>
          <div className="min-h-screen flex items-center">

         
          <main className="max-w-6xl mx-auto px-12 w-full">
            <div className="grid lg:grid-cols-2  gap-12 space-y-12">
              <div className="flex max-w-3xl">
                <h1 className="text-4xl md:text-5xl lg:text-6xl leading-tight">A passsionate <span className="text-pink-500">WEB</span> Developer who loves to code and learn new things</h1>
              </div>


              <div className="flex flex-col items-center gap-10">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-center">Skills:</h1>
              <div className="flex">
         <FaReact size={50} className=' m-4 hover:text-pink-500'/>
         <SiNextdotjs size={50} className=' m-4 hover:text-pink-500'/>
         <RiTailwindCssFill size={50} className=' m-4 hover:text-pink-500'/>
        <SiMongodb size={50} className=' m-4 hover:text-pink-500'/>
        <FaNodeJs size={50} className=' m-4 hover:text-pink-500'/>
        </div>
              </div>

            </div>
          </main>
          </div>
        </section>
  )
}

export default About
