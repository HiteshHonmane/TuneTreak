import React, { useRef, useEffect, useState } from 'react';
import leftarrowsvg from '/assets/arrow-left.svg';
import rightarrowsvg from '/assets/arrow-right.svg';
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

const Top50: React.FC = () => {  
  const { songs, loading, error } = useFetchSongs('eminem');
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [songWidth, setSongWidth] = useState(0);

  useEffect(() => {
    if (scrollContainerRef.current) {
      const firstSongCard = scrollContainerRef.current.querySelector('.song-card');
      if (firstSongCard) {
        setSongWidth(firstSongCard.clientWidth + 32); 
      }
    }
  }, [songs]);

  const OnclickScrollHandler = (direction: string) => {
    if (scrollContainerRef.current) {
      if (direction === 'left') {
        scrollContainerRef.current.scrollBy({ left: -3 * songWidth, behavior: 'smooth' });
      } else {
        scrollContainerRef.current.scrollBy({ left: 3 * songWidth, behavior: 'smooth' });
      }
    }
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className='w-[1062px] h-[317px] bg-white p-6 rounded-[24px] 2xl:w-[80vw] '>
      <div className='flex justify-between items-center text-xl font-medium font-sf-pro-display'>
        <span>Chart: Top 50</span>
        <div className='flex gap-5'>
          <button onClick={() => OnclickScrollHandler('left')}>
            <img src={leftarrowsvg} alt="Left Arrow" />
          </button>
          <button onClick={() => OnclickScrollHandler('right')}>
            <img src={rightarrowsvg} alt="Right Arrow" />
          </button>
        </div>
      </div>
      <div ref={scrollContainerRef} className='mt-5 flex gap-8 overflow-x-scroll webscrollbarhidden '>
        {songs.map((song: Song) => (
          <SongCard key={song.id} song={song} className='song-card' />
        ))}
      </div>
    </div>
  );
}

export default Top50;
