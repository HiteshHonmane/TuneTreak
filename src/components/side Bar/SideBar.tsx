import React from "react";
import Logo from "../../../public/assets/Logo.svg";
import Home from "../../../public/assets/home-2.svg";
import search from "../../../public/assets/search-normal.svg";
import Likes from "../../../public/assets/Likes.svg";
import Playlists from "../../../public/assets/music-square-add.svg";
import Albums from "../../../public/assets/audio-square.svg";
import Following from "../../../public/assets/profile.svg";

function SideBar() {
  return (
    <div className=" w-[314px] h-[960px] border ">
      <div id="logo" className=" flex flex-row gap-[16px] ">
        <img width={38} height={40} src={Logo} alt="" />
        <div className=" text-[32px] font-sf-pro-display font-bold">
          TuneTreak
        </div>
      </div>
      <div id="menu" className=" flex flex-col ">
        <div className=" text-[18px] font-sf-pro-display text-[#99938F] ">MENU</div>
        <ul className=" list-none flex flex-col items-start text-[14px] font-normal font-sf-pro-display text-[#99938F] gap-[24px]  ">
          <li className=" flex gap-[20px] ">
            <img src={Home} alt="" />
            Home
          </li>
          <li className=" flex gap-[20px] ">
            <img src={search} alt="" />
            Search
          </li>
          <li className=" flex gap-[20px]  ">
            <img src={Likes} alt="" />
            Likes
          </li>
          <li className=" flex gap-[20px]  ">
            <img src={Playlists} alt="" />
            Playlists
          </li>
          <li className=" flex gap-[20px]  ">
            <img src={Albums} alt="" />
            Albums
          </li>
          <li className=" flex gap-[20px] ">
            <img src={Following} alt="" />
            Following
          </li>
        </ul>
      </div>
    </div>
  );
}

export default SideBar;
