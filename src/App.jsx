import GlobeGL from "./components/Globe/GlobeGL";
import SideBar from "./components/SideBar/SideBar";

import newZealand from './assets/geoJson/newZealandSouthIsland.json';
import afghanistan from './assets/geoJson/afghanistan.json';
import spain from './assets/geoJson/spain.json';

import "./App.css";
import { useState } from "react";

function App() {
  const [currentCollection, setCurrentCollection] = useState({});

  const mockCollections = [
    {
      title: "Afghanistan",
      description: "The country geodata",
      collection: afghanistan
    },
    {
      title: "Spain",
      description: "The country geodata",
      collection: spain
    }
  ]

  return (
    <>
      <SideBar collections={mockCollections} setCollection={setCurrentCollection} />
      <GlobeGL focusedCollection={currentCollection.features} center={currentCollection.center} globeType={currentCollection.globeType} />
    </>
  );
}

export default App;
