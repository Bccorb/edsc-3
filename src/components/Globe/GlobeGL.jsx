import { useRef, useState, useEffect } from "react";
import Globe from "react-globe.gl";

import "./GlobeGL.css";

function GlobeGL(props) {
  const globalEl = useRef(null);
  const collection = props.focusedCollection;
  const globeType = collection.globeType;
  const center = collection.center;

  const [points, setPoints] = useState([]);
  const [polygon, setPolygon] = useState([])


  const centerOnLocation = (lat, lng) => {
    console.log("moving the globe", lat, lng)
    globalEl.current.pointOfView({ lat: lat, lng: lng, altitude: 0.8 }, 4000)
  }

  // Leaving commented out for now, because the rotations causes alot of rerenders.
  useEffect(() => {
    // Make the globe automatically rotate.
    // if (globalEl !== null) {
    //   globalEl.current.controls().autoRotate = true;
    //   globalEl.current.controls().autoRotateSpeed = 0.1;
    // }
    setPoints([]);
    setPolygon([])

    if (globeType === "points") {
      console.log('Setting points data', collection)
      setPoints(collection.features.points)
    }

    if (globeType === "polygon") {
      console.log('Setting polygon data', collection.features)
      setPolygon(collection.features)
    }
  }, [globeType, collection]);

  useEffect(() => {
    if (center) {
      centerOnLocation(center.lat, center.lng)
    }
  }, [center])

  // TODO pull this map down locally and have it use that we may have to branch react-globe.gl
  return (
    <div className="globe">
      <Globe
        ref={globalEl}
        globeImageUrl="//unpkg.com/three-globe/example/img/earth-blue-marble.jpg"
        bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
        backgroundImageUrl="//unpkg.com/three-globe/example/img/night-sky.png"
        hexBinPointsData={points}
        hexAltitude={.01}
        hexMargin={0}
        hexTopCurvatureResolution={2}
        hexBinResolution={3}
        hexSideColor={() => 'pink'}
        hexTopColor={() => 'red'}
        hexBinMerge={false}
        enablePointerInteraction={true}
        onHexClick={(d) => {
          centerOnLocation(d.points[0].lat, d.points[0].lng)
        }}
        polygonsData={polygon}
        polygonCapColor={() => '#FFA500'}
        onPolygonClick={() => { centerOnLocation(76.2, 100.1) }}
      />
    </div>
  )
}

export default GlobeGL;
