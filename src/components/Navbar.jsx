import React, {useState} from 'react';
import{menu, close, logo, lock} from '../assets';

const Navbar = () => {
    const [toggle,setToggle]=useState(false);
    const handleClick = ()=>setToggle(!toggle)

  return (
    <div className='w-full h-[80px] z-10 bg-white border-b '>
        <div className='md:max-w-[1240px]  m-auto  w-full h-full max-w-[600px] flex justify-between items-center '>
                <div className='flex items-center'>
                    <img src={logo} alt="logo" className='w-full h-[25px]' />
                </div>
                <div className='flex items-center'>
                    <ul className='hidden gap-4 md:flex'>
                        <li>Home</li>
                        <li>About</li>
                        <li>Support</li>
                        <li>Platform</li>
                        <li>Pricing</li>
                    </ul>
                </div>
                <div className='hidden md:flex '>
                    <button className='flex justify-between items-center bg-transparent text-black px-6 gap-2'>
                        <img src={lock} alt="menu" className='w-[28px] h-[28px] object-contain ' />
                        <span>Login</span>
                    </button>

                    <button className='px-8 py-3 bg-[#20B486] rounded-md font-bold text-white font-public-sans'>
                        Sign Up for Free
                    </button>
                </div>
                <div className='md:hidden' onClick={handleClick}>
                    <img src={!toggle?menu:close} alt="menu" className='w-[28px] h-[28px] object-contain s' />
                </div>
        </div>
        
        <ul className={toggle?'absolute z-10 p-4 bg-white w-full px-8 md:hidden':'hidden'}>
                        <li className='p-4 hover:bg-gray-100'>Home</li>
                        <li className='p-4 hover:bg-gray-100'>About</li>
                        <li className='p-4 hover:bg-gray-100'>Support</li>
                        <li className='p-4 hover:bg-gray-100'>Platform</li>
                        <li className='p-4 hover:bg-gray-100'>Pricing</li>
                        <div className='flex flex-col my-4 gap-4'>
                            <button className='border border-[#20B486] flex justify-center items-center bg-transparent text-black px-8 py-4 gap-2'>
                                <img src={lock} alt="menu" className='w-[28px] h-[28px] object-contain ' />
                                <span>Login</span>
                            </button>                            
                            <button className='px-8 py-5 bg-[#20B486] rounded-md font-bold text-white'>Sign Up for Free</button>                        
                        </div>
        </ul>

    </div>
  )
}

export default Navbar