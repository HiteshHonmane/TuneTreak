import React, { useEffect, useState } from 'react';
import leftarrowsvg from '../../public/assets/arrow-left.svg';
import rightarrowsvg from '../../public/assets/arrow-right.svg';
import SongCard from '../components/songCards/SongCard';

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
  const [songs, setSongs] = useState<Song[]>([]);

  useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "2f8ec1fc40msh87d5856848d2f52p1b7503jsne20b9ce85403",
        "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
      },
    };

    fetch("https://deezerdevs-deezer.p.rapidapi.com/search?q=eminem", options)
      .then((res) => res.json())
      .then((data) => {
        setSongs(data.data); 
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

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
