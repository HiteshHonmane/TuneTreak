import React, { useEffect, useRef } from "react";
import musicNotesvg from "../../../public/assets/musicnote.svg";
import people from "../../../public/assets/people.svg";
import heart from "../../../public/assets/heart.svg";

interface Song {
  id: number;
  title: string;
  artist: {
    name: string;
  };
  album: {
    cover_medium: string;
  };
  preview: string;
}

interface LongSongCardProps {
  song: Song;
  isPlaying: boolean;
  setCurrentPlayingId: (id: number | null) => void;
}

const LongSongCard: React.FC<LongSongCardProps> = ({ song, isPlaying, setCurrentPlayingId }) => {
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.play();
      } else {
        audioRef.current.pause();
      }
    }
  }, [isPlaying]);

  const handlePlayPause = () => {
    if (isPlaying) {
      setCurrentPlayingId(null);
    } else {
      setCurrentPlayingId(song.id);
    }
  };

  return (
    <div className="w-[686px] h-[116px] bg-[#fbfbfb] flex justify-end items-end relative">
      <div id="plane-white-box" className="w-[644px] h-[100px] bg-white flex rounded-[16px]"></div>
      <div className="absolute flex items-center left-0">
        <div className="w-[234px] h-[84px] flex gap-[24px] justify-center items-center">
          <img width={84} src={song.album.cover_medium} alt={song.title} />
          <span className="w-[126px] h-[44px] font-sf-pro-display flex flex-col gap-1">
            <div className="text-[16px] text-[#0A0502] font-medium">
              {song.title}
            </div>
            <div className="text-sm text-[#99938F]">{song.artist.name}</div>
          </span>
        </div>
      </div>
      <div className="w-full h-full absolute flex flex-row justify-end gap-[24px] mr-16">
        <div className="w-[78px] h-[32px] flex flex-row justify-center items-center border border-[#FFD7C2] rounded-md">
          <span>
            <img src={musicNotesvg} alt="musicNote" />
          </span>
          <span className="font-sf-pro-display text-sm text-[#99938F]">
            120k
          </span>
        </div>
        <div className="w-[32px] h-[32px] flex items-center justify-center border border-[#FFD7C2] rounded-md">
          <img src={people} alt="" />
        </div>
        <div className="w-[32px] h-[32px] flex items-center justify-center border border-[#FFD7C2] rounded-md">
          <img className=" " src={heart} alt="" />
        </div>
        <div
          className="w-[32px] h-[32px] flex items-center justify-center border border-[#FFD7C2] rounded-md cursor-pointer"
          onClick={handlePlayPause}
        >
          {isPlaying ? 'Pause' : 'Play'}
        </div>
      </div>
      <audio ref={audioRef} src={song.preview}></audio>
    </div>
  );
};

export default LongSongCard;
