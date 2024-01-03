import { useRef, useState, useEffect } from "react";
import Globe from "react-globe.gl";
import setRandomCoordinates from "../../util/setRandomCoordinates";
import "./GlobeGL.css";

function GlobeGL(props) {
  const globalEl = useRef(null);
  const collection = props.focusedCollection;
  const globeType = collection.globeType;
  const center = collection.center;

  const [points, setPoints] = useState([])
  const [polygon, setPolygon] = useState([])
  const [paths, setPaths] = useState([])
  const [heatmap, setHeatmap] = useState([])


  const centerOnLocation = (lat, lng) => {
    globalEl.current.pointOfView({ lat: lat, lng: lng, altitude: 0.8 }, 4000)
  }

  // Leaving commented out for now, because the rotations causes alot of rerenders.
  useEffect(() => {
    // Make the globe automatically rotate.
    // if (globalEl !== null) {
    //   globalEl.current.controls().autoRotate = true;
    //   globalEl.current.controls().autoRotateSpeed = 0.1;
    // }
    setPoints([])
    setPolygon([])
    setPaths([])

    if (globeType === "points") {
      console.log('Setting points data', collection)
      setPoints(collection.features.points)
    }

    if (globeType === "polygon") {
      console.log('Setting polygon data', collection.features)
      setPolygon(collection.features)
    }

    if (globeType === 'paths') {
      console.log('Setting paths data')
      setPaths(setRandomCoordinates(collection.features))
    }

    if (globeType === 'heatmap') {
      console.log('Setting heatmap data')
      setHeatmap(setRandomCoordinates(collection.features))
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
        // Points
        hexBinPointsData={points}
        hexAltitude={.01}
        hexMargin={0}
        hexTopCurvatureResolution={2}
        hexBinResolution={3}
        hexSideColor={() => 'pink'}
        hexTopColor={() => 'red'}
        hexBinMege={false}
        enablePointerInteraction={true}
        onHexClick={(d) => {
          centerOnLocation(d.points[0].lat, d.points[0].lng)
        }}
        // Polygons
        polygonsData={polygon}
        polygonCapColor={() => '#FFA500'}
        // Paths
        pathsData={[paths]}
        pathPointLat="lat"
        pathPointLng="lng"
        pathPointAlt="height"
        pathColor={() => ['rgba(0,0,255,0.6)', 'rgba(255,0,0,0.6)']}
        pathDashLength={0.01}
        pathDashGap={0.004}
        // Heatmaps
        heatmapsData={[heatmap]}
        heatmapPointLat="lat"
        heatmapPointLng="lng"
        // todo should update func for both keys for now leave the func using height
        heatmapPointWeight="height"
      />
    </div>
  )
}

export default GlobeGL;
