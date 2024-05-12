import { useState } from "react";
import "./App.css";
import SongCard from "./components/songCards/SongCard";
import LongSongCard from "./components/songCards/LongSongCard";
import PlayingSongCard from "./components/songCards/PlayingSongCard";
import SideBar from "./components/side Bar/SideBar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className=" w-full h-screen flex items-center justify-center">
        {/* <SongCard /> */}
        <SideBar/>
        
      </div>
    </>
  );
}
export default App;
