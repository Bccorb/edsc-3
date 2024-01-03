const setRandomCoordinates = (collFeatures) => {
    const {
      latMin,
      latMax,
      LongMin,
      longMax
    } = collFeatures.bounds

    // Gen random data
    const numPoints = 300;
    const globeData = [...Array(numPoints).keys()].map(() => ({
      // lat, long, toFixed converts to numerical and is decimal points
      lat: (Math.random() * ( latMin - latMax) + latMax).toFixed(3) * 1,
      lng: (Math.random() * (-LongMin - longMax) + longMax).toFixed(3) * 1,
      height: .1
    }))

    return globeData
}

export default setRandomCoordinates
