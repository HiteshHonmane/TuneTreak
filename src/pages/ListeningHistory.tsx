import React from 'react'
import LongSongCard from '../components/songCards/LongSongCard'

function ListeningHistory() {
  return (
    <div className=' w-[750px] h-[441px] relative bg-white/opacity-70 rounded-3xl p-6 bg-white  '>
        <div className=' flex flex-row justify-between items-center'>
        <span className=' text-stone-950 text-xl font-sf-pro-display font-medium leading-normal tracking-wide '>Listening History</span>
        <span className=' w-[42px] h-4 text-right text-stone-400 text-sm font-medium font-SF Pro Display leading-[16.80px] tracking-tight '> See All</span>
        </div>

        <div className=' mt-5 '>
            <LongSongCard/>
            <LongSongCard/>
            <LongSongCard/>
        </div>
    </div>
  )
}

export default ListeningHistory