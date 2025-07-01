
import React from 'react'
import Navbar from '../components/Navbar'
import poster1 from '/login/poster1.jpg'
import poster2 from '/login/poster2.jpg'
import poster3 from '/login/poster3.jpg'
import poster4 from '/login/poster4.jpg'
import centerPoster from '/login/centerposter.jpg'
import {motion} from 'framer-motion'

const Login = () => {
    return (
        <div>
            <Navbar />
            {/* hero section */}
            <div className='flex justify-center items-center'>
                <div className='w-screen h-[80vh] flex justify-center items-center'>
                    <h1 className='text-white text-6xl font-semibold font-serif mb-10 ml-5 pl-5'>Discover, Search, Repeat.</h1>
                </div>
                <div className='absolute w-[10vw] h-[85vh] bg-black blur-2xl  ml-20  z-9'></div>
                <div className='w-screen h-[80vh]'>
                    <motion.div initial={{opacity:0,rotate:180, x:520}} animate={{rotate:0 ,opacity:1,x:0}} transition={{duration:2,delay:0.5}} className="gap-1 p-6 w-full h-[80vh] grid grid-cols-2 grid-rows-2 relative">
                        <div  className=" z-1  w-full h-full bg-black bg-opacity-50"> <img className='rounded-full w-full h-full object-cover' src={poster1} alt="" /></div>
                        <div className="w-full h-full"><img className='rounded-full w-full h-full object-cover' src={poster2} alt="" /></div>
                        <div className="w-full h-full"><img className='rounded-full w-full h-full object-cover' src={poster3} alt="" /></div>
                        <div className="w-full h-full"><img className='rounded-full w-full h-full object-cover mb-10' src={poster4} alt="" /></div>
                        <motion.div initial={{scale:0,opacity:0}} animate={{opacity:1,scale:1.2}} transition={{duration:5 , delay:3}} className="absolute w-80 h-80 z-50 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex justify-center "><img className='rounded-md' src={centerPoster} alt="" /></motion.div>

                    </motion.div>

                </div>
            </div>
        </div>
    )
}

export default Login
