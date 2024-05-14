import React from "react";
import Logo from "../../../public/assets/Logo.svg";
import Home from "../../../public/assets/home-2.svg";
import search from "../../../public/assets/search-normal.svg";
import Likes from "../../../public/assets/Likes.svg";
import Playlists from "../../../public/assets/music-square-add.svg";
import Albums from "../../../public/assets/audio-square.svg";
import Following from "../../../public/assets/profile.svg";
import SettingsSvg from '../../../public/assets/setting-2.svg'
import SubSvg from '../../../public/assets/crown.svg'
import LogoutSvg from '../../../public/assets/login.svg'

function SideBar() {
  return (
    <div className=" w-[314px] h-[100vh] border ">
      <div id="logo" className=" flex flex-row gap-[16px] mt-11 ml-8 ">
        <img width={38} height={40} src={Logo} alt="" />
        <div className=" text-[32px] font-sf-pro-display font-bold">
          TuneTreak
        </div>
      </div>
      <div id="menu" className=" flex flex-col ml-8 mt-14 ">
        <div className=" text-[18px] font-sf-pro-display text-[#99938F] mb-6 ">MENU</div>
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
      <div id="General" className=" flex flex-col gap-6 ml-8 mt-11 font-normal font-sf-pro-display text-[#99938F] ">
        <div className="text-[18px] font-sf-pro-display text-[#99938F]  ">GENERAL</div>
        <div className="flex flex-row gap-4  ">
          <img src={LogoutSvg} alt="" />
          <div>Settings</div>
        </div>
        <div className="flex flex-row  gap-4 items-center  ">
          <img src={SubSvg} alt="" />
          <div>Subscription</div>
          <div className=" w-[30px] h-[15px] bg-stone-400 rounded items-center justify-center">
          <div className="text-white text-[8px] font-medium font-['SF Pro Display'] tracking-wide py-[2px] px-[4px]  ">NEW</div>
          </div>
        </div>
        <div className="flex flex-row  gap-4 ">
          <img src={LogoutSvg} alt="" />
          <div>Logout</div>
        </div>
      </div>
    </div>
  );
}

export default SideBar;