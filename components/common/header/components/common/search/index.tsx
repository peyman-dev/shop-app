import { SearchIcon } from 'lucide-react'
import React from 'react'

const Search = () => {
  return (
        <div className='w-[600px] flex-ic bg-[#F0F0F1] relative rounded-md h-11 **:placeholder:text-[#A1A3A8]'>
            <button className='absolute cursor-pointer right-4'>
                <SearchIcon className='size-4 text-[#A1A3A8]'/>
            </button>
            
        </div>
  )
}

export default Search