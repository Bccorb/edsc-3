import { useState } from "react"
import {Form, Button} from "react-bootstrap"
import CollectionCard from "../CollectionCard/CollectionCard"
import "./SideBar.css"

function SideBar(props) {
  const collections = props.collections || []
  const [currentCollections, setCurrentCollections] = useState(collections)
 
  const handleSubmit = (e) => {
    e.preventDefault()
    const query = e.target[0].value
    if (!query) {
      setCurrentCollections(collections)
      return
    }
    const filteredCollections = collections.filter((collectionObj) => collectionObj.collection.meta.groupType === query)
    setCurrentCollections(filteredCollections)
  }

  return (
    <div className="sidebar">
      <h1>EarthData Search</h1>
      <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Search</Form.Label>
        <Form.Control size="lg" type="input" placeholder="What are you looking for?" />
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>

      <div className="collection-list">
        {currentCollections.map((collectionData, i) => 
        <CollectionCard collection={collectionData} setCollectionFn={props.setCollection} key={i} />)}
      </div>
    </div>
  );
}

export default SideBar;
