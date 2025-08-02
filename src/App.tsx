import "./App.css";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Friend from "./components/Friend";
import ContentTile from "./components/ContentTile";

function App() {
  return (
    <>
      <div className="flex flex-col bg-red-200 w-full h-dvh ">
        <Header />
        <div className="flex flex-row justify-center">
          <Navbar />
        </div>
        <div className="flex flex-row justify-center">
          <ContentTile />
        </div>
        <div className="flex flex-row-reverse">
          <Friend />
          <Friend />
        </div>
      </div>
    </>
  );
}

export default App;
