import volcanos from '../assets/geoJson/volcanosProject.json';

const createVolcanoObjects = () => {
    console.log('creating volcano...')
    const data = volcanos.features.points.map((point) => {
        return {
            title: point.name,
            description: "Volcano Type: " + point.type,
            collection: {
                meta: {
                    groupType: "volcano"
                },
                "globeType": "points",
                "center": {
                    "lat": point.lat,
                    "lng": point.lng
                },
                "features": {
                    "points": [point]
                },
            }
        }
    })

    return data;
}


export default createVolcanoObjects
