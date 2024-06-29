import React, { useState } from 'react';
import LongSongCard from '../components/songCards/LongSongCard';
import useFetchSongs from '../hooks/useFetchSongs';
import Loading from '../components/Loading';

const ListeningHistory: React.FC = () => {
  const { songs, loading, error } = useFetchSongs('eminem');
  const [currentPlayingId, setCurrentPlayingId] = useState<number | null>(null);

  if (loading) return <div>
  <Loading/>
  </div>;
  if (error) return <p>{error}</p>;

  return (
    <div className="w-[750px] h-[441px] relative bg-white/opacity-70 rounded-3xl p-6 bg-white overflow-y-scroll">
      <div className="flex flex-row justify-between items-center">
        <span className="text-stone-950 text-xl font-sf-pro-display font-medium leading-normal tracking-wide">
          Listening History
        </span>
        <span className="w-[42px] h-4 text-right text-stone-400 text-sm font-medium font-SF Pro Display leading-[16.80px] tracking-tight">
          See All
        </span>
      </div>
      <div className="mt-5">
        {songs.map(song => (
          <LongSongCard
            key={song.id}
            song={song}
            isPlaying ={currentPlayingId === song.id}
            setCurrentPlayingId={setCurrentPlayingId}
          />
        ))}
      </div>
    </div>
  );
};

export default ListeningHistory;
