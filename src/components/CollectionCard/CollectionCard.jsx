import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';

import "./CollectionCard.css";

function CollectionCard(props) {
  const collection = props.collection;

  return (
    <Card className="collection-card">
      <Card.Body>
        <Card.Title>{collection.title} <Badge bg="secondary">{collection.collection.meta.groupType}</Badge></Card.Title>
        <Card.Text>
          {collection.description}
        </Card.Text>
        <br />
        <Button variant="primary" onClick={() => {
          props.setCollectionFn(props.collection.collection)}}>View</Button>
      </Card.Body>
    </Card>
  );
}

export default CollectionCard;