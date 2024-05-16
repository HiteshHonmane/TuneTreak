import { useState } from "react";
import "./App.css";
import SongCard from "./components/songCards/SongCard";
import LongSongCard from "./components/songCards/LongSongCard";
import PlayingSongCard from "./components/songCards/PlayingSongCard";
import SideBar from "./components/side Bar/SideBar";
import Navbar from "./components/Home/NavBar.jsx";
import Top50 from "./pages/Top50.js";
import Test from "./pages/test.js";
import ListeningHistory from "./pages/ListeningHistory.js";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className=" w-[100vw] h-screen flex bg-gray-100">
        <div>
          <SideBar />
        </div>

        <div className=" flex flex-col">
          <div className=" ml-8 mt-11">
            <Navbar />
          </div>
          <div className="  mt-8 ml-8 ">
            <Top50 />
          </div>
          <div>
            <div className=" flex flex-wrap ">
              <div className=" ml-8 mt-8 ">
                <ListeningHistory />
              </div>
              <div className=" ml-8 mt-8">
                <PlayingSongCard/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default App;
