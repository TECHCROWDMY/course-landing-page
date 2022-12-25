import React from 'react';
import {heroImg} from '../assets';
import { AiOutlineSearch } from 'react-icons/ai';

 
const Hero = () => {
  return (
    <div className='w-full py-24 flex flex-col justify-between'>
        <div className='grid md:grid-cols-2 max-w-[1240px] m-auto '>
            <div className='flex flex-col justify-center md:items-start w-full px-2 '>
                <p className='text-2xl'>Unique Sequencing & Production</p>
                <h1 className='py-3 text-5xl md:text-5xl font-semibold'>Access To 5000+ Courses
                                                                    from 300 Instructors 
                                                                    & Institutions</h1>
                <p className='text-lg text-[#6D737A]'>Various versions have evolved over the years, sometimes by accident,</p>
                <form className='flex justify-between items-center max-w-[700px] mx-auto w-full border p-4 m-4 rounded-md text-black bg-white input-box-shadow'>
                    <input
                          className='bg-transparent w-[300px] sm:w-[400px] font-[Poppins] focus:outline-none'
                          type="text"
                          placeholder="Search Destinations"
                    />
                    <button>
                      <AiOutlineSearch 
                        size={20}
                        className='icon'
                        style={{color:'#000'}}
                      />
                    </button>
            </form>
 
            </div>

            <div>
                <img className='w-full' src={heroImg} alt="/" />
            </div>
            
        </div>
    </div>
  )
}

export default Hero