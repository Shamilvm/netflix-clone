import "./App.css";
import Banner from "./components/Banner";
import Navbar from "./components/Navbar";
import RowPost from "./components/RowPost";
import { action, originals } from "./const";

function App() {
  return (
    <div>
      <Navbar />
      <Banner />
      <RowPost url={originals} title="Netflix Originals" />
      <RowPost url={action} title="Action" isSmall />
    </div>
  );
}

export default App;
