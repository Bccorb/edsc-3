import volcanos from '../assets/geoJson/volcanos.json';

const createVolcanoObjects = () => {
    const data = volcanos.features.points.map((point) => {
        return {
            title: point.name,
            description: "Volcano Type: " + point.type,
            meta: {
                groupType: "volcano"
            },
            collection: {
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
