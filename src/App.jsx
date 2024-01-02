import './App.css'
import Globe from 'react-globe.gl';
import afganistan from './assets/geoJson/afghanistan.json'
import OptionController from './optionController';

function App() {
  const globe = <Globe
  globeImageUrl="//unpkg.com/three-globe/example/img/earth-blue-marble.jpg"
  polygonsData={afganistan.features}
  polygonCapColor={() => '#FFA500'}
  polygonLabel='Afghanistan'
  />
  const controls = globe.getGlobeRadius()
  console.log(controls);
  // TODO pull this map down locally and have it use that we may have to branch react-globe.gl
  // TODO fix the window h and w to fit into the page exactly without extra room
  // TODO the `polygonGeoJsonGeometry` arg was not working but, is probably preferred
  // polygonCapColor only seems to accept arrow functions as args despite the documentation
  return (
    <>
    <div>
    </div>
    <div>
    {globe}
    </div>
    </>
  )
}

export default App
