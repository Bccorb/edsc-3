import GlobeGL from "./components/Globe/GlobeGL";
import SideBar from "./components/SideBar/SideBar";

import usa from'./assets/geoJson/usa.json';
import newZealand from './assets/geoJson/newZealandSouthIsland.json';
import birdRoutes from './assets/geoJson/birdRoutes.json';
import tsunamiEarthquakes from './assets/geoJson/tsunamiEarthquakes.json';
import volcanosProject from './assets/geoJson/volcanosProject.json'

import "./App.css";
import { useState, useEffect } from "react";
import createVolcanoObjects from "./util/createVolcanoObjects";


function App() {
  const volcanos = createVolcanoObjects();
  const [currentCollection, setCurrentCollection] = useState({});

  const mockCollections = [
    {
      title: "Tsunami and Earthquakes global history and intensity",
      description: "Data on historical earthquake events",
      collection: tsunamiEarthquakes
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
      collection: volcanosProject
    },
    ...volcanos
  ]

  useEffect(() => {
    console.log(mockCollections)
  }, [])

  return (
    <>
      <SideBar collections={mockCollections} setCollection={setCurrentCollection} />
      <GlobeGL focusedCollection={currentCollection} />
    </>
  );
}

export default App;
