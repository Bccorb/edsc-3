import GlobeGL from "./components/Globe/GlobeGL";
import SideBar from "./components/SideBar/SideBar";

import "./App.css";

function App() {
  const mockCollections = [
    {
      title: "Afghanistan",
      description: "The country geodata"
    }
  ]
  return (
    <>
      <SideBar collections={mockCollections} />
      <GlobeGL />
    </>
  );
}

export default App;
