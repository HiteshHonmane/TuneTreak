import React from 'react'
import leftarrowsvg from '../../public/assets/arrow-left.svg'
import rightarrowsvg from '../../public/assets/arrow-right.svg'
import SongCard from '../components/songCards/SongCard'

function Top50() {
  return (
   <div className='  w-[1062px] h-[317px] bg-white p-6 rounded-[24px] 2xl:w-[80vw] '> 
    <div className='  flex  justify-between items-center text-xl font-medium font-sf-pro-display '>
        <span>Chart: Top 50</span>
        <div className=' flex gap-5'>
           <button> <img src={leftarrowsvg} alt="" /></button>
           <button> <img src={rightarrowsvg} alt="" /></button>
        </div>
    </div>
    <div className='mt-5 flex gap-8 overflow-x'>
    <SongCard/>
    <SongCard/>
    <SongCard/>
    <SongCard/>
   
    
    </div>
   </div>
  )
}

export default Top50