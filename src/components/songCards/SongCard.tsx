import React from "react";
import albumSvg from "/assets/Album Image.svg";


function SongCard() {
  return (
    <>
      <div className=" w-40 h-[205px] bg-[#fdfdfd] border-[#FFD7C2] border-[1px] rounded-[16px] flex flex-col justify-center items-center ">
        <img className="w-32 h-[121px]  " src={albumSvg} alt="" />
        <div className="w-[120px] h-11 text-start ">
          <div className=" w-full h-[19px] text-[16px] text-[#0A0502] font-sf-pro-display ">
            AI Music Genre
          </div>
          <div className=" text-[#99938F] text-sm font-sf-pro-display font-light ">
            Top 50
          </div>
        </div>
      </div>
    </>
  );
}

export default SongCard;
