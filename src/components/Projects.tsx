
import Card from './ui/Card'
import { FaReact } from 'react-icons/fa';
import { RiTailwindCssFill } from 'react-icons/ri';

const cardDetails = [
  {
    title: 'Project 1',
    description: 'Description of project 1',
    // image: 'https://via.placeholder.com/150',
    // link: 'https://example.com/project1',
    icons: [<FaReact size={10} className='inline  m-4 hover:text-pink-500'/>]
},
 {  
    title: 'Project 2',
    description: 'Description of project 2',
    // image: 'https://via.placeholder.com/150',
    // link: 'https://example.com/project2',
    icons: [<div>
    <FaReact size={10} className='inline   hover:text-pink-500'/>
  <RiTailwindCssFill size={10} className='inline  hover:text-pink-500'/>
  </div>]

 }]

const Projects = () => {
  return (
    <div className='h-screen bg-sky-600'>
      <h1 className='text-6xl text-center  font-mono font-bold mb-10'>Projects</h1>
      <div className='flex justify-evenly items-center flex-wrap'>
        {cardDetails.map((card, index) => (
          <Card
            key={index}
            title={card.title}
            description={card.description}
            // image={card.image}
            // link={card.link}
            icons={card.icons}
          />
        ))}
      </div>
      
    </div>
  )
}

export default Projects
