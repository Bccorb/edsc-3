import { useRef } from "react";
import newZealand from '../../assets/geoJson/newZealandSouthIsland.json';

import Globe from "react-globe.gl";

import "./GlobeGL.css";

function GlobeGL() {
  const globalEl = useRef(null);

  // Leaving commented out for now, because the rotations causes alot of rerenders.
  // useEffect(() => {
  //   // Make the globe automatically rotate.
  //   if (globalEl !== null) {
  //     globalEl.current.controls().autoRotate = true;
  //     globalEl.current.controls().autoRotateSpeed = 0.1;
  //   }
  // }, []);

  // TODO pull this map down locally and have it use that we may have to branch react-globe.gl
  return (
    <div className="globe">
      <Globe
        ref={globalEl}
        globeImageUrl="//unpkg.com/three-globe/example/img/earth-blue-marble.jpg"
        bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
        backgroundImageUrl="//unpkg.com/three-globe/example/img/night-sky.png"
        polygonsData={newZealand.features}
        polygonCapColor={() => '#FFA500'}
      />
    </div>
  );
}

export default GlobeGL;
