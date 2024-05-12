import React from "react";
import albumSvg from "/assets/Album Image.svg";
import musicNotesvg from "../../../public/assets/musicnote.svg";
import people from "../../../public/assets/people.svg";
import heart from "../../../public/assets/heart.svg";

function LongSongCard() {
  return (
    <div className=" w-[686px] h-[116px] bg-[#fbfbfb]  flex justify-end items-end  relative   
    ">
      <div
        id="plane-white-box"
        className=" w-[644px] h-[100px] bg-white flex rounded-[16px]  "
      ></div>

      <div className=" absolute flex items-center left-0 ">
        <div className=" w-[234px] h-[84px]  flex gap-[24px] justify-center items-center  ">
          <img width={84} src={albumSvg} alt="" />
          <span className=" w-[126px] h-[44px] font-sf-pro-display  flex flex-col gap-1  ">
            <div className=" text-[16px] text-[#0A0502] font-medium  ">
              She Will Be Loved
            </div>
            <div className=" text-sm text-[#99938F] ">Maroon 5</div>
          </span>
        </div>
      </div>

      <div className=" w-full h-full absolute flex flex-row justify-end gap-[24px] mr-16  ">
        <div className=" w-[78px] h-[32px] flex flex-row  justify-center items-center  border border-[#FFD7C2] rounded-md  ">
          <span>
            <img src={musicNotesvg} alt="musicNote" />
          </span>
          <span className=" font-sf-pro-display text-sm text-[#99938F] ">
            120k
          </span>
        </div>
        <div className=" w-[32px] h-[32px] flex items-center justify-center border border-[#FFD7C2] rounded-md   ">
          <img src={people} alt="" />
        </div>
        <div className=" w-[32px] h-[32px] flex items-center justify-center border border-[#FFD7C2] rounded-md ">
          <img className=" " src={heart} alt="" />
        </div>
      </div>
    </div>
  );
}

export default LongSongCard;
