import "./styles.css";

const SearchBar = () => {
  return (
    <div className="container rounded">
      <form className="nosubmit">
        <input className="nosubmit" type="search" placeholder="Search orders or packs" />
      </form>
    </div>
  );
};

export default SearchBar;
