import { useState } from "react";
import "./App.css";
import SongCard from "./components/songCards/SongCard";
import LongSongCard from "./components/songCards/LongSongCard";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className=" w-full h-screen flex items-center justify-center">
        {/* <SongCard /> */}
        <LongSongCard/>
      </div>
    </>
  );
}
export default App;
