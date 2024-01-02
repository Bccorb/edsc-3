import GlobeGL from "./components/Globe/GlobeGL";
import SideBar from "./components/SideBar/SideBar";

import newZealand from './assets/geoJson/newZealandSouthIsland.json';

import "./App.css";
import { useState } from "react";

function App() {
  const [currentCollection, setCurrentCollection] = useState(newZealand);

  const mockCollections = [
    {
      title: "Afghanistan",
      description: "The country geodata"
    }
  ]

  return (
    <>
      <SideBar collections={mockCollections} />
      <GlobeGL focusedCollection={currentCollection.features} center={currentCollection.center} globeType={currentCollection.globeType} />
    </>
  );
}

export default App;
