import "./App.css";
import PlayingSongCard from "./components/songCards/PlayingSongCard";
import SideBar from "./components/side Bar/SideBar.tsx";
import Top50 from "./pages/Top50.tsx";
import ListeningHistory from "./pages/ListeningHistory.tsx";
import Head from "./components/side Bar/Head.js";
import SearchState from "./context/SearchState.tsx";


function App() {
  return (
    <>
    
    <SearchState>
      <div className=" w-[100vw] h-screen flex bg-gray-100">
        <div>
          <SideBar />
        </div>
        <div className=" flex flex-col">
          <div className="  ml-8 mt-11">
            <Head />
          </div>
          <div className="  mt-8 ml-8 ">
            <Top50 />
          </div>
          <div>
            <div className=" flex flex-wrap ">
              <div className="hidden md:block ml-8 mt-8 ">
                <ListeningHistory />
              </div>
              {/* <div className=" ml-8 mt-8">
                <PlayingSongCard />
              </div> */}
            </div>
          </div>
        </div>
      </div>
      </SearchState>
    </>
  );
}
export default App;