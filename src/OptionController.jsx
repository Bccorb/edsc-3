function OptionController({
    globe
}) {
  return (
    <>
    <div>
        <button
        onClick={() => { 
            console.log(globe)    
            console.log(globe.getCoords())}}>
            Zoom In
        </button>

        <button>
            Zoom out
        </button>
    </div>
    </>
  )
}

export default OptionController
