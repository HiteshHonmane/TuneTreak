import { useState } from "react";
import "./App.css";
import SongCard from "./components/songCards/SongCard";
import LongSongCard from "./components/songCards/LongSongCard";
import PlayingSongCard from "./components/songCards/PlayingSongCard";
import SideBar from "./components/side Bar/SideBar";
import Navbar from './components/Home/NavBar.jsx'
import Top50 from "./pages/Top50.js";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className=" w-full h-screen  ">
        {/* <SideBar/>
        <SongCard /> */}
        <Top50/>
        {/* <Navbar/> */}
        
      </div>
    </>
  );
}
export default App;
