import './App.css'
import Globe from 'react-globe.gl';

function App() {
  // TODO pull this map down locally and have it use that we may have to branch react-globe.gl
  // TODO fix the window h and w to fit into the page exactly without extra room
  return (
    <>
    <div>
    <Globe
       globeImageUrl="//unpkg.com/three-globe/example/img/earth-blue-marble.jpg"
       />
    </div>
    </>
  )
}

export default App
