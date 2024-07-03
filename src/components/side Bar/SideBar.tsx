import React, { useState, useContext } from "react";
import Logo from "/assets/Logo.svg";
import Home from "/assets/home-2.svg";
import searchIcon from "/assets/search-normal.svg";
import Likes from "/assets/Likes.svg";
import Playlists from "/assets/music-square-add.svg";
import Albums from "/assets/audio-square.svg";
import Following from "/assets/profile.svg";
import SubSvg from "/assets/crown.svg";
import LogoutSvg from "/assets/login.svg";
import { SearchContext } from "../../context/SearchContext";
import appleimg from "/assets/App Store.png";
import playstoreimg from "/assets/Google Play.png";

const SideBar: React.FC = () => {
  const { search, handleSearch } = useContext(SearchContext);
  const [isSearchVisible, setIsSearchVisible] = useState(false);

  const toggleSearch = () => {
    setIsSearchVisible(!isSearchVisible);
  };

 if (window.innerWidth > 768){
  return (
    <div className="w-[314px] h-screen border ">
      <div id="logo" className="flex flex-row gap-[16px] mt-11 ml-8">
        <img width={38} height={40} src={Logo} alt="Logo" />
        <div className="text-[32px] font-sf-pro-display font-bold">
          TuneTreak
        </div>
      </div>
      <div id="menu" className="flex flex-col ml-8 mt-14">
        <div className="text-[18px] font-sf-pro-display text-[#99938F] mb-6">
          MENU
        </div>
        <ul className="list-none flex flex-col items-start text-[14px] font-normal font-sf-pro-display text-[#99938F] gap-[24px]">
          <li className="flex gap-[20px]">
            <img src={Home} alt="Home" />
            Home
          </li>
          <li className="flex gap-[20px] items-center">
            <img
              src={searchIcon}
              alt="Search"
              onClick={toggleSearch}
              className="cursor-pointer"
            />
            <span onClick={toggleSearch} className="cursor-pointer">
              Search
            </span>
            {isSearchVisible && (
              <input
                type="text"
                placeholder="Artist, Song"
                className="ml-2 p-0 rounded border border-gray-300"
                value={search || ""}
                onChange={handleSearch}
              />
            )}
          </li>
          <li className="flex gap-[20px]">
            <img src={Likes} alt="Likes" />
            Likes
          </li>
          <li className="flex gap-[20px]">
            <img src={Playlists} alt="Playlists" />
            Playlists
          </li>
          <li className="flex gap-[20px]">
            <img src={Albums} alt="Albums" />
            Albums
          </li>
          <li className="flex gap-[20px]">
            <img src={Following} alt="Following" />
            Following
          </li>
        </ul>
      </div>
      <div
        id="General"
        className="flex flex-col gap-6 ml-8 mt-11 font-normal font-sf-pro-display text-[#99938F]"
      >
        <div className="text-[18px] font-sf-pro-display text-[#99938F]">
          GENERAL
        </div>
        <div className="flex flex-row gap-4">
          <img src={LogoutSvg} alt="Settings" />
          <div>Settings</div>
        </div>
        <div className="flex flex-row gap-4 items-center">
          <img src={SubSvg} alt="Subscription" />
          <div>Subscription</div>
          <div className="w-[30px] h-[15px] bg-stone-400 rounded items-center justify-center">
            <div className="text-white text-[8px] font-medium font-['SF Pro Display'] tracking-wide py-[2px] px-[4px]">
              NEW
            </div>
          </div>
        </div>
        <div className="flex flex-row gap-4">
          <img src={LogoutSvg} alt="Logout" />
          <div>Logout</div>
        </div>
        <div className="w-[250px] h-[161px] flex-col justify-start items-start gap-6 inline-flex mt-8">
          <div className="flex-col justify-start items-start gap-4 flex">
            <div className="text-stone-400 text-base font-medium font-['SF Pro Display'] uppercase leading-tight tracking-wide">
              Go Mobile
            </div>
            <div className="justify-center items-center gap-5 inline-flex">
              <img
                className="w-[115px] h-[39px] rounded-md"
                src={appleimg}
              />
              <img
                className="w-[115px] h-[39px] rounded-md"
                src={playstoreimg}
              />
            </div>
          </div>
          <div className="w-[250px]">
            <span className="text-stone-400 text-sm font-normal font-['SF Pro Display'] leading-[21px] tracking-tight">
              Legal - Privacy - Cookie Policy - Cookie Blog Manage - Imprint
              Resource Chart
              <br />
            </span>
            <span className="text-blue-600/opacity-75 text-sm font-normal font-['SF Pro Display'] leading-[21px] tracking-tight">
              Language
            </span>
            <span className="text-stone-400 text-sm font-normal font-['SF Pro Display'] leading-[21px] tracking-tight">
              :
            </span>
            <span className="text-stone-950/opacity-75 text-sm font-normal font-['SF Pro Display'] leading-[21px] tracking-tight">
              English (US)
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
else{
  return(
    <></>
  )
}
 
}
export default SideBar;
