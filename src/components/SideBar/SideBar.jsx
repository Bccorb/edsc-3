import { Form, Button } from "react-bootstrap";
import CollectionCard from "../CollectionCard/CollectionCard";
import "./SideBar.css";

function SideBar(props) {
  const collections = props.collections || [];

  return (
    <div className="sidebar">
      <small>Close filter</small>
      <h1>Search Earth Data</h1>
      <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Search</Form.Label>
        <Form.Control size="lg" type="input" placeholder="What are you looking for?" />
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>

      <div className="collection-list">
        {collections.map((collectionData, i) => 
        <CollectionCard collection={collectionData} setCollectionFn={props.setCollection} key={i} />)}
      </div>
    </div>
  );
}

export default SideBar;
