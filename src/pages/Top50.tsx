import React from 'react';
import leftarrowsvg from '../../public/assets/arrow-left.svg';
import rightarrowsvg from '../../public/assets/arrow-right.svg';
import SongCard from '../components/songCards/SongCard';
import useFetchSongs from "../hooks/useFetchSongs";

interface Song {
  id: number;
  title: string;
  artist: {
    name: string;
  };
  album: {
    cover_medium: string;
  };
}

const Top50: React.FC<Song> = () => {
  const { songs, loading, error } = useFetchSongs('eminem');

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  
  return (
    <div className='w-[1062px] h-[317px] bg-white p-6 rounded-[24px] 2xl:w-[80vw]  '>
      <div className='flex justify-between items-center text-xl font-medium font-sf-pro-display'>
        <span>Chart: Top 50</span>
        <div className='flex gap-5'>
          <button><img src={leftarrowsvg} alt="Left Arrow" /></button>
          <button><img src={rightarrowsvg} alt="Right Arrow" /></button>
        </div>
      </div>
      <div className='mt-5 flex gap-8 overflow-x-scroll'>

        {songs.map((song) => (
          <SongCard key={song.id} song={song} />
        ))}
        
      </div>
    </div>
  );
}

export default Top50;
