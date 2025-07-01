
import { useState } from 'react'
import Icon from '../../public/icons/app.png'
import BlackIcon from '../../public/icons/appblack.png'
import blackSearch from '../../public/icons/searchBlack.png'
import WhiteSearch from '../../public/icons/searchWhite.png'
import blackDot from '../../public/icons/dotblack.png'
import whiteDot from '../../public/icons/dotwhite.png'
import whiteEn from '../../public/icons/enwhite.png'
import blacken from '../../public/icons/enblack.png'
import userLogo from '../../public/icons/user.png'


const Navbar = () => {
    const [isHovered, setIsHovered] = useState(false)
    const [searchHover, setSearchHover] = useState(false)
    const [appsHover, setAppsHover] = useState(false)
    const [EnHover, setEnHover] = useState(false)
    return (
        <nav className='w-full bg-black'>
            <div className="text-white flex justify-start items-center pl-5 ">
                <ul className='flex justify-start gap-2 space-x-4 ml-5 px-5 p-4'>
                    <li className='text-[18px] p-1 '>prime video</li>
                    <li className='text-[16px] font-semibold p-1 bg-black hover:text-black hover:bg-white hover:rounded-md transition-200 duration-300 w-20 justify-center flex'>Home</li>
                    <li className='text-[16px] font-semibold p-1 bg-black hover:text-black hover:bg-white hover:rounded-md transition-200 duration-300 w-20 justify-center flex '>Movies</li>
                    <li className='text-[16px] font-semibold p-1 bg-black hover:text-black hover:bg-white hover:rounded-md transition-200 duration-300 w-20 justify-center flex '>TV shows</li>
                    <li className='text-[16px] font-semibold p-1 bg-black hover:text-black hover:bg-white hover:rounded-md transition-200 duration-300 w-20 justify-center flex '>Live TV</li>
                    <li className='text-[16px] font-semibold p-1 '>|</li>
                    <li onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)} className="flex items-center space-x-3 p-2 font-semibold bg-black hover:text-black hover:bg-white hover:rounded-md transition-200 duration-300 justify-center ">
                        {/* <img className="w-4 h-4" src={Icon} alt="" /> */}
                        {isHovered ? <img className="w-6 h-6" src={BlackIcon} alt="" /> : <img className="w-6 h-6" src={Icon} alt="" />}
                        <span className='text-[16px]'>Subscription</span>
                    </li>
                </ul>
                <div className='ml-5 w-2xl h-20 p-3'>
                    <ul className='flex justify-end gap-2 space-x-4 ml-5 px-5 p-4'>
                        <li onMouseEnter={() => setSearchHover(true)} onMouseLeave={() => setSearchHover(false)} className="flex items-center space-x-3 p-4 font-semibold bg-black hover:text-black hover:bg-white hover:rounded-md transition-200 duration-300 justify-center ">{searchHover ? <img className="w-6 h-6" src={blackSearch} alt="" /> : <img className="w-6 h-6" src={WhiteSearch} alt="" />}</li>
                        <li onMouseEnter={() => setEnHover(true)} onMouseLeave={() => setEnHover(false)} className="flex items-center space-x-3 p-4 font-semibold bg-black hover:text-black hover:bg-white hover:rounded-md transition-200 duration-300 justify-center ">{EnHover ? <img className="w-6 h-6" src={blacken} alt="" /> : <img className="w-6 h-6" src={whiteEn} alt="" />}</li>
                        <li onMouseEnter={() => setAppsHover(true)} onMouseLeave={() => setAppsHover(false)} className="flex items-center space-x-3 p-4 font-semibold bg-black hover:text-black hover:bg-white hover:ro unded-md transition-200 duration-300 justify-center ">{appsHover ? <img className="w-6 h-6" src={blackDot} alt="" /> : <img className="w-6 h-6" src={whiteDot} alt="" />}</li>
                        <li  className="flex items-center space-x-3 font-semibold hover:border-4 w-9 h-10 mt-2 rounded-full  justify-center "><img className="w-6 h-6" src={userLogo} alt="" /></li>
                        <li className='text-[16px] font-bold bg-blue-500 rounded-md hover:bg-blue-400 h-10 mt-2 w-24 flex justify-center items-center'>Join Prime</li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
