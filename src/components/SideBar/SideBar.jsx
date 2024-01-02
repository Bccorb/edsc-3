import CollectionCard from "../CollectionCard/CollectionCard";
import "./SideBar.css";

function SideBar(props) {
  const collections = props.collections || [];

  return (
    <div className="sidebar">
      <small>Close filter</small>
      <h1>Search Earth Data</h1>
      <form>
        <input type="text" />

        <button type="button">Search</button>
      </form>

      <div className="collection-list">
        {collections.map((collectionData, i) => <CollectionCard collection={collectionData} key={i} />)}
      </div>
    </div>
  );
}

export default SideBar;
