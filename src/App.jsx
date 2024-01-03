import GlobeGL from "./components/Globe/GlobeGL";
import SideBar from "./components/SideBar/SideBar";

import ecuador from './assets/geoJson/ecuador.json';
import usa from'./assets/geoJson/usa.json';
import newZealand from './assets/geoJson/newZealandSouthIsland.json';
import birdRoutes from './assets/geoJson/birdRoutes.json';
import volcanos from './assets/geoJson/volcanos.json';

import "./App.css";
import { useState } from "react";

function App() {
  const [currentCollection, setCurrentCollection] = useState({});

  const mockCollections = [
    {
      title: "Ecuador",
      description: "The country geodata",
      collection: ecuador
    },
    {
      title: "Northern bird migratory routes",
      description: "Data on bird routes for environmental studies",
      collection: birdRoutes
    },
    {
      title: "United States of America",
      description: "The country geodata",
      collection: usa
    },
    {
      title: "New Zealand",
      description: "The country geodata",
      collection: newZealand
    },
    {
      title:"Volcano Research study",
      description: "A study involving volcanos",
      collection: volcanos
    }
  ]

  return (
    <>
      <SideBar collections={mockCollections} setCollection={setCurrentCollection} />
      <GlobeGL focusedCollection={currentCollection} />
    </>
  );
}

export default App;
