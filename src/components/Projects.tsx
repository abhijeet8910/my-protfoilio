
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

 },
 {  
  title: 'Project 3',
  description: 'Description of project 3',
  // image: 'https://via.placeholder.com/150',
  // link: 'https://example.com/project2',
  icons: [<div>
  <FaReact size={10} className='inline   hover:text-pink-500'/>
<RiTailwindCssFill size={10} className='inline  hover:text-pink-500'/>
</div>]

}]

const Projects = () => {
  return (
    <section className=' bg-sky-600'>
      <h1 className='text-6xl text-center  font-mono font-bold '>Projects</h1>
   
    <div className='min-h-screen flex items-center'>
      
      <main className='max-w-6xl mx-auto px-12 w-full'>
        <div className='flex justify-evenly flex-wrap gap-10'>
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

      </main>
      
    </div>
    </section>
  )
}

export default Projects
