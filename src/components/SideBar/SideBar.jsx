import "./SideBar.css";

function SideBar() {
  return (
    <div className="sidebar">
      <small>Close filter</small>
      <h1>Search Earth Data</h1>
      <form>
        <input type="text" />

        <button type="button">Search</button>
      </form>
    </div>
  );
}

export default SideBar;
