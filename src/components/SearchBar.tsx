import React, { useState } from 'react'
import blackSearch from '/icons/searchBlack.png'
import WhiteSearch from '/icons/searchWhite.png'

const SearchBar = () => {
    const [searchHover, setSearchHover] = useState(false)

    return (
        <div>
            <div className='flex justify-center items-center p-5'>

                <input type="text" className='w-2xl h-8 border-2 focus:border-red-700 outline-none p-5  border-white text-white font-serif italic text-2xl' placeholder='Enter Movie Names ....' />
                <li onMouseEnter={() => setSearchHover(true)} onMouseLeave={() => setSearchHover(false)} className="flex items-center space-x-3 p-2 ml-5 font-semibold bg-black hover:text-black hover:bg-white  hover:rounded-full transition-200 duration-200 justify-center ">{searchHover ? <img className="w-6 h-6" src={blackSearch} alt="" /> : <img className="w-6 h-6" src={WhiteSearch} alt="" />}</li>

            </div>
        </div>
    )
}

export default SearchBar
