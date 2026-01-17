// import React from 'react'

// const Hero = () => {
//   return (
//     // <main className='flex items-center min-h-screen'>
//     //   <div className='absolute top-1/4 left-1/7'>
//     //   <span className='font-extrlight font-serif text-6xl '><span className='font-bold text-8xl font-sans'>Hi,</span> I'm Abhijeet</span><br />
//     //   <span className='text-5xl '>A Full Stack Developer</span><br />
//     //   <button className=''>contact</button>
//     //   </div>
      
//     // </main>
//     <section>
//       {/* main is for whole hero section */}
//       <main className='min-h-screen flex items-center '>
//         {/* it is for the text */}
//         <div className='max-w-7xl mx-auto w-full p-6'>
//           <div className='max-w-3xl'>
//         <span className='font-extrlight font-serif text-6xl '><span className='font-bold text-8xl font-sans'>Hi,</span> I'm Abhijeet</span><br />
//        <span className='text-5xl '>A Full Stack Developer</span><br />
//        </div>
//         </div>
//       </main>
//     </section>
//   )
// }

// export default Hero
const Hero = () => {
  return (
    <main className="min-h-screen flex items-center">
      <div className="max-w-6xl mx-auto px-12 w-full">
        <div className="grid lg:grid-cols-2 md:grid-cols-1 gap-12 space-y-12">
        <div className="max-w-3xl  ">
          <span className="block font-serif text-4xl md:text-5xl lg:text-6xl">
            <span className="font-bold font-sans text-5xl md:text-7xl lg:text-8xl">
              Hi,
            </span>{" "}
            I'm Abhijeet
          </span>

          <p className="mt-4 text-2xl md:text-3xl lg:text-4xl">
            A Full Stack Developer
          </p>

          <button className="mt-8 px-8 py-3 rounded-full bg-white text-black font-semibold">
            Contact
          </button>
        </div>
      
        <div className="flex lg:justify-center lg:items-center sm:items-start  text-orange-600/55">
            <div className="bg-linear-to-br from-slate-900/90 via-blue-900/90 to-slate-900/90 border-2 border-white rounded-full w-80 h-80">
              </div> 
        </div>
        </div>

      </div>
    </main>
  )
}

export default Hero

