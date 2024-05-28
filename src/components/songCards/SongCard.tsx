import React from 'react';

interface SongCardProps {
  song: {
    title: string;
    artist: {
      name: string;
    };
    album: {
      cover_medium: string;
    };
  };
}

const SongCard: React.FC<SongCardProps> = ({ song }) => {
  return (
    <div className="w-40 h-[205px] flex-shrink-0 bg-[#fdfdfd] border-[#FFD7C2] border-[1px] rounded-[16px] flex flex-col justify-center items-center ">
      <div className=" m-[16px] w-32 h-[121px] justify-center items-center inline-flex">
    <div className="grow shrink basis-0 self-stretch rounded-xl justify-center items-center inline-flex">
        <img className="h-[121px]  rounded-lg " width={121} src={song.album.cover} />
    </div>
</div>
      
      <div className="w-[120px] h-11 text-start">
        <div className="w-full h-[19px] text-[16px] text-[#0A0502] font-sf-pro-display overflow-clip">
          {song.title}
        </div>
        <div className="text-[#99938F] text-sm font-sf-pro-display font-light">
          Top 50
        </div>
      </div>
    </div>
  );
}

export default SongCard;
