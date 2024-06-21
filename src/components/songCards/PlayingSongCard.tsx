import React from 'react';
import previous from '/assets/previous.svg';
import forward from '/assets/forward.svg';
import next from '/assets/next.svg';
import backward from '/assets/backward.svg';
import Play from '/assets/video-circle.svg';
import songImg from '/assets/song.png'

const PlayingSongCard: React.FC = () => {

  return (
    <div className='w-[280px] h-[441px] flex flex-col rounded-[16px] items-center justify-center bg-white'>
      <div className='rounded-[16px] mb-[20px]'>
        <img className='rounded-[16px]' width={248} height={213} src={ songImg } alt={''} />
      </div>
      <div className='w-[248px] h-[99px] flex flex-col items-center'>
        <div id="songName" className='font-sf-pro-display font-bold text-[18px]'>
          {'Song Name'}
        </div>
        <div id="artistName" className='font-sf-pro-display font-medium text-[#99938F] text-sm mb-[15px]'>
          {'Artist Name'}
        </div>
        <div id="seekBar" className='flex flex-row flex-wrap'>
          <div id="seekline" className='mx-3 w-[248px] h-[4px] bg-[#FFD7C2]'></div>
          <div className='w-full flex justify-between text-[#99938F] font-sf-pro-display text-[14px] mx-3 my-1'>
            <div id="songOnGoingTime">
              1:21
            </div>
            <div id="songLength">
              2:36
            </div>
          </div>
        </div>
      </div>
      <div id="menuButtons" className='flex items-center gap-[16px]'>
        <button><img width={24} height={24} src={previous} alt="" /></button>
        <button><img width={24} height={24} src={backward} alt="" /></button>
        <button><img width={56} height={56} src={Play} alt="" /></button>
        <button><img width={24} height={24} src={forward} alt="" /></button>
        <button><img width={24} height={24} src={next} alt="" /></button>
      </div>
    </div>
  );
};

export default PlayingSongCard;
