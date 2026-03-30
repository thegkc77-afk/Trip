import React from 'react'
import { Link } from 'react-router-dom'
import Hero1 from '../Images/Hero1.png'
import Navbar from './Navbar'

function HeroSection() {
  return (
    <>
    <section
      className='relative min-h-screen w-full items-center bg-cover bg-center pt-20 overflow-hidden flex'
      style={{
        backgroundImage: `url(${Hero1})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className='flex gap-3'>

        <div className='w-full min-h-11/12 pl-35  pb-30'>
          <h1 className='md:text-6xl lg:text-[4.5rem] font-bold text-5xl leading-20'>Save Monthly <br/>for Your Dream <br></br>Trip</h1>
          
          <p className="mt-6 text-lg md:text-xl text-gray-700 max-w-lg font-medium leading-relaxed">
            Plan your trip, set your goal, and save step by step — <br className="hidden md:block" />
            stress-free travel without loans.
          </p>
  
           <button className="inline-block mt-8 bg-[#ff8c00] hover:bg-[#e67e00] text-white px-8 py-4 rounded-full text-lg font-semibold shadow-xl transition transform hover:-translate-y-1">
            Start Saving Now</button>
           
  
        </div>

        {/* Glassmorphism Card (Right Side) */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-end relative mt-10 md:mt-0"> 

          <div className="w-full max-w-md  backdrop-blur-xl border-4 border-white/60 rounded-[2.5rem] p-8 pb-10 shadow-2xl relative">
            <h2 className="text-3xl font-extrabold text-slate-800">
              Goa Trip
            </h2>

            <p className="text-lg text-slate-700 font-medium mt-1">
              Total Goal <span className="font-bold">₹20,000</span>
            </p>

            {/* Progress Bar */}

            <div className="mt-5 relative">
                <div className="w-full h-4 bg-gray-300/80 rounded-full overflow-hidden">
                    <div className="h-full bg-[#ff8c00] rounded-full" style={{ width: '40%' }}></div>
                </div>
            </div>


            <p className="text-slate-700 font-medium mt-3">
                Saved <span className="font-bold">₹8,000</span>(40%)
            </p>

            {/* Action Button */}
            <Link to="/start-saving" className="mt-6 w-full bg-[#ff8c00] hover:bg-[#e67e00] text-white text-xl py-3.5 rounded-2xl font-bold shadow-lg flex items-center justify-center gap-2 transition transform hover:-translate-y-1">
                Start Saving
                <span className="text-2xl leading-none"></span>
            </Link>

          </div>

        </div>

  

      </div>

    </section>

    </>
  )
}

export default HeroSection