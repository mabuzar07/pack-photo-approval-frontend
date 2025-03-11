import "./styles.css";

const SearchBar = ({ loading,handleSearching }) => {
  return (
    <div className="container rounded">
      <form className="nosubmit" disabled={loading}>
        <input
          className="nosubmit"
          type="search"
          placeholder="Search orders or packs"
          disabled={loading}
          onChange={handleSearching}
        />
      </form>
    </div>
  );
};

export default SearchBar;
