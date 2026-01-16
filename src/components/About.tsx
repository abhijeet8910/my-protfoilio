
import { FaReact } from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiMongodb } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";


const About = () => {
  return (
    <div className='h-screen bg-sky-500 relative'>
        <h1 className='text-center text-6xl font-mono font-bold'>About Me</h1>
        <div className='absolute top-1/5 left-1/7'>
      
      <div className='text-2xl'>
        My Name is Abhijeet, <br />
        I'm a Full Stack MERN Developer <br />
        Who loves to code and learn new things.
      </div>
      <div>
        <h1 className="">Skills:</h1>
        <FaReact size={100} className='inline  m-4 hover:text-pink-500'/>
        <SiNextdotjs size={100} className='inline m-4 hover:text-pink-500'/>
        <RiTailwindCssFill size={100} className='inline m-4 hover:text-pink-500'/>
        <SiMongodb size={100} className='inline m-4 hover:text-pink-500'/>
        <FaNodeJs size={100} className='inline m-4 hover:text-pink-500'/>

      </div>
</div>
    </div>
  )
}

export default About
